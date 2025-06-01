"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle, XCircle } from "lucide-react";

const OrderManagement = () => {
  const orders = [
    {
      id: "ORD-001",
      customer: "Alice Johnson",
      items: [
        { name: "Cappuccino", quantity: 2, price: 3.75 },
        { name: "Croissant", quantity: 1, price: 3.50 }
      ],
      total: 11.00,
      status: "pending",
      orderTime: "2:45 PM",
      estimatedTime: "10 min"
    },
    {
      id: "ORD-002",
      customer: "Bob Smith",
      items: [
        { name: "Turkey Club", quantity: 1, price: 8.50 },
        { name: "Latte", quantity: 1, price: 4.25 }
      ],
      total: 12.75,
      status: "preparing",
      orderTime: "2:30 PM",
      estimatedTime: "5 min"
    },
    {
      id: "ORD-003",
      customer: "Carol Davis",
      items: [
        { name: "Veggie Wrap", quantity: 1, price: 7.75 },
        { name: "Americano", quantity: 1, price: 3.00 }
      ],
      total: 10.75,
      status: "ready",
      orderTime: "2:15 PM",
      estimatedTime: "Ready"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'outline';
      case 'preparing': return 'secondary';
      case 'ready': return 'default';
      case 'completed': return 'default';
      default: return 'outline';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'preparing': return <Clock className="h-4 w-4" />;
      case 'ready': return <CheckCircle className="h-4 w-4" />;
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Management</h1>
          <p className="text-gray-600">Track and manage incoming orders</p>
        </div>

        {/* Order Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">3</div>
              <div className="text-sm text-gray-600">Pending</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">2</div>
              <div className="text-sm text-gray-600">Preparing</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">1</div>
              <div className="text-sm text-gray-600">Ready</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-gray-600">15</div>
              <div className="text-sm text-gray-600">Completed Today</div>
            </CardContent>
          </Card>
        </div>

        {/* Active Orders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {orders.map((order) => (
            <Card key={order.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{order.id}</CardTitle>
                  <Badge variant={getStatusColor(order.status)} className="flex items-center space-x-1">
                    {getStatusIcon(order.status)}
                    <span className="capitalize">{order.status}</span>
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">{order.customer}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {/* Order Items */}
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>{item.quantity}x {item.name}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span className="text-green-600">${order.total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Ordered: {order.orderTime}</span>
                    <span>ETA: {order.estimatedTime}</span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-3">
                    {order.status === 'pending' && (
                      <Button className="flex-1" size="sm">
                        Start Preparing
                      </Button>
                    )}
                    {order.status === 'preparing' && (
                      <Button className="flex-1" size="sm">
                        Mark Ready
                      </Button>
                    )}
                    {order.status === 'ready' && (
                      <Button className="flex-1" size="sm">
                        Complete Order
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      <XCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
