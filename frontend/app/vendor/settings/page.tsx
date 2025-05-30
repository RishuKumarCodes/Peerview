
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const StoreSettings = () => {
  const operatingHours = [
    { day: "Monday", open: "07:00", close: "22:00", isOpen: true },
    { day: "Tuesday", open: "07:00", close: "22:00", isOpen: true },
    { day: "Wednesday", open: "07:00", close: "22:00", isOpen: true },
    { day: "Thursday", open: "07:00", close: "22:00", isOpen: true },
    { day: "Friday", open: "07:00", close: "23:00", isOpen: true },
    { day: "Saturday", open: "08:00", close: "23:00", isOpen: true },
    { day: "Sunday", open: "08:00", close: "21:00", isOpen: true }
  ];

  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Store Settings</h1>
          <p className="text-gray-600">Manage your store information and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Store Information */}
          <Card>
            <CardHeader>
              <CardTitle>Store Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="storeName">Store Name</Label>
                <Input id="storeName" defaultValue="Campus Café" />
              </div>
              <div>
                <Label htmlFor="cuisine">Cuisine Type</Label>
                <Input id="cuisine" defaultValue="Coffee & Pastries" />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" defaultValue="Library Building, Floor 1" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="(555) 123-4567" />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  defaultValue="Your favorite campus café serving freshly brewed coffee, delicious pastries, and light meals."
                  rows={4}
                />
              </div>
              <Button className="w-full">Save Changes</Button>
            </CardContent>
          </Card>

          {/* Operating Hours */}
          <Card>
            <CardHeader>
              <CardTitle>Operating Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {operatingHours.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="font-medium w-20">{schedule.day}</span>
                      <Badge variant={schedule.isOpen ? "default" : "secondary"}>
                        {schedule.isOpen ? "Open" : "Closed"}
                      </Badge>
                    </div>
                    {schedule.isOpen && (
                      <div className="flex items-center space-x-2">
                        <Input
                          type="time"
                          defaultValue={schedule.open}
                          className="w-24"
                        />
                        <span>to</span>
                        <Input
                          type="time"
                          defaultValue={schedule.close}
                          className="w-24"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4">Update Hours</Button>
            </CardContent>
          </Card>

          {/* Store Status */}
          <Card>
            <CardHeader>
              <CardTitle>Store Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">Store Status</h3>
                  <p className="text-sm text-gray-600">Currently accepting orders</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Open</Badge>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">Temporary Closure</h3>
                  <p className="text-sm text-gray-600">Temporarily close your store</p>
                </div>
                <Button variant="outline" size="sm">
                  Close Store
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">Vacation Mode</h3>
                  <p className="text-sm text-gray-600">Set extended closure period</p>
                </div>
                <Button variant="outline" size="sm">
                  Set Vacation
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">New Orders</h4>
                  <p className="text-sm text-gray-600">Get notified of new orders</p>
                </div>
                <input type="checkbox" className="rounded" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">Low Stock Alerts</h4>
                  <p className="text-sm text-gray-600">Alerts for low inventory</p>
                </div>
                <input type="checkbox" className="rounded" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">Customer Reviews</h4>
                  <p className="text-sm text-gray-600">Notify about new reviews</p>
                </div>
                <input type="checkbox" className="rounded" />
              </div>
              
              <Button className="w-full">Save Preferences</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StoreSettings;
