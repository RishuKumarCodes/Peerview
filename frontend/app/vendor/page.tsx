import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DollarSign,
  ShoppingBag,
  Users,
  TrendingUp,
  Clock,
} from "lucide-react";
import AdminNavbar from "@/components/VendorNavbar";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Today's Revenue",
      value: "$342.50",
      change: "+12%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Orders Today",
      value: "28",
      change: "+5",
      icon: ShoppingBag,
      color: "text-blue-600",
    },
    {
      title: "Total Customers",
      value: "1,247",
      change: "+8%",
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: "Avg Order Value",
      value: "$12.23",
      change: "+3%",
      icon: TrendingUp,
      color: "text-orange-600",
    },
  ];

  const recentOrders = [
    {
      id: "ORD-001",
      customer: "Alice Johnson",
      items: "2x Cappuccino, 1x Croissant",
      total: "$11.25",
      status: "completed",
      time: "10 min ago",
    },
    {
      id: "ORD-002",
      customer: "Bob Smith",
      items: "1x Turkey Club, 1x Latte",
      total: "$12.75",
      status: "preparing",
      time: "15 min ago",
    },
    {
      id: "ORD-003",
      customer: "Carol Davis",
      items: "1x Veggie Wrap, 1x Americano",
      total: "$10.75",
      status: "pending",
      time: "20 min ago",
    },
    {
      id: "ORD-004",
      customer: "David Wilson",
      items: "3x Espresso, 2x Muffin",
      total: "$13.00",
      status: "completed",
      time: "25 min ago",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "default";
      case "preparing":
        return "secondary";
      case "pending":
        return "outline";
      default:
        return "outline";
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Store Dashboard
            </h1>
            <p className="text-gray-600">
              Welcome back! Here's what's happening with your store today.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                      <p className={`text-sm ${stat.color}`}>
                        {stat.change} from yesterday
                      </p>
                    </div>
                    <div className="p-3 rounded-full bg-gray-100">
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Orders */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">{order.id}</span>
                            <Badge variant={getStatusColor(order.status)}>
                              {order.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">
                            {order.customer}
                          </p>
                          <p className="text-sm text-gray-500">{order.items}</p>
                        </div>
                        <div className="text-right ml-4">
                          <p className="font-bold text-green-600">
                            {order.total}
                          </p>
                          <div className="flex items-center text-xs text-gray-500">
                            <Clock className="h-3 w-3 mr-1" />
                            {order.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions & Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Store Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Status</span>
                      <Badge className="bg-green-100 text-green-800">
                        Open
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Closes at</span>
                      <span className="text-sm text-gray-600">10:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Active menu items
                      </span>
                      <span className="text-sm text-gray-600">24</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>This Week</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Total Orders</span>
                      <span className="text-sm font-bold">156</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Revenue</span>
                      <span className="text-sm font-bold text-green-600">
                        $1,892.50
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Avg Rating</span>
                      <span className="text-sm font-bold">4.8 ⭐</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
