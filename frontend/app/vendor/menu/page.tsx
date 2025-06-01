
"use client"
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2 } from "lucide-react";

const MenuManagement = () => {
  const [menuItems] = useState([
    {
      id: 1,
      name: "Espresso",
      category: "Coffee",
      price: 2.50,
      description: "Rich and bold espresso shot",
      available: true
    },
    {
      id: 2,
      name: "Cappuccino",
      category: "Coffee",
      price: 3.75,
      description: "Espresso with steamed milk and foam",
      available: true
    },
    {
      id: 3,
      name: "Turkey Club",
      category: "Sandwiches",
      price: 8.50,
      description: "Turkey, bacon, lettuce, tomato on toasted bread",
      available: false
    },
    {
      id: 4,
      name: "Croissant",
      category: "Pastries",
      price: 3.50,
      description: "Fresh buttery croissant",
      available: true
    }
  ]);

  const categories = ["Coffee", "Pastries", "Sandwiches", "Beverages"];

  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Menu Management</h1>
            <p className="text-gray-600">Manage your menu items and categories</p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Menu Item
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Menu Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {menuItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-medium">{item.name}</h3>
                          <Badge variant="outline" className="text-xs">
                            {item.category}
                          </Badge>
                          <Badge variant={item.available ? "default" : "secondary"}>
                            {item.available ? "Available" : "Unavailable"}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{item.description}</p>
                        <p className="text-lg font-bold text-green-600">${item.price}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Add/Edit Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Add New Item</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Item Name</Label>
                  <Input id="name" placeholder="Enter item name" />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="">Select category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="price">Price ($)</Label>
                  <Input id="price" type="number" step="0.01" placeholder="0.00" />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <textarea
                    id="description"
                    className="w-full p-2 border rounded-md"
                    rows={3}
                    placeholder="Enter item description"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="available" className="rounded" />
                  <Label htmlFor="available">Available</Label>
                </div>
                <Button className="w-full">Add Item</Button>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center justify-between p-2 border rounded">
                      <span>{category}</span>
                      <Button variant="outline" size="sm">
                        <Edit className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Category
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuManagement;
