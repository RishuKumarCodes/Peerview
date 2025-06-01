'use client'
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Phone } from "lucide-react";

const VendorDetail = () => {
  const { id } = useParams();

  // Mock data - in real app this would come from API
  const vendor = {
    id: 1,
    name: "Campus Café",
    cuisine: "Coffee & Pastries",
    rating: 4.8,
    reviews: 124,
    location: "Library Building, Floor 1",
    phone: "(555) 123-4567",
    openUntil: "10:00 PM",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop",
    description: "Your favorite campus café serving freshly brewed coffee, delicious pastries, and light meals. Perfect for studying or catching up with friends.",
    hours: {
      monday: "7:00 AM - 10:00 PM",
      tuesday: "7:00 AM - 10:00 PM",
      wednesday: "7:00 AM - 10:00 PM",
      thursday: "7:00 AM - 10:00 PM",
      friday: "7:00 AM - 11:00 PM",
      saturday: "8:00 AM - 11:00 PM",
      sunday: "8:00 AM - 9:00 PM"
    },
    menu: [
      { category: "Coffee", items: [
        { name: "Espresso", price: 2.50 },
        { name: "Cappuccino", price: 3.75 },
        { name: "Latte", price: 4.25 },
        { name: "Americano", price: 3.00 }
      ]},
      { category: "Pastries", items: [
        { name: "Croissant", price: 3.50 },
        { name: "Muffin", price: 2.75 },
        { name: "Danish", price: 3.25 },
        { name: "Bagel", price: 2.50 }
      ]},
      { category: "Sandwiches", items: [
        { name: "Turkey Club", price: 8.50 },
        { name: "BLT", price: 7.25 },
        { name: "Grilled Cheese", price: 6.00 },
        { name: "Veggie Wrap", price: 7.75 }
      ]}
    ]
  };

  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vendor Header */}
        <div className="mb-8">
          <div className="relative">
            <img
              src={vendor.image}
              alt={vendor.name}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          
          <div className="mt-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{vendor.name}</h1>
                <p className="text-xl text-gray-600 mb-4">{vendor.cuisine}</p>
                
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                    {vendor.rating} ({vendor.reviews} reviews)
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-1" />
                    {vendor.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-1" />
                    Open until {vendor.openUntil}
                  </div>
                  <Badge variant="secondary">{vendor.priceRange}</Badge>
                </div>
              </div>
              
              <div className="mt-4 lg:mt-0">
                <Button size="lg" className="w-full lg:w-auto">
                  <Phone className="h-4 w-4 mr-2" />
                  Call {vendor.phone}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Menu</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {vendor.menu.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 border-b pb-2">
                        {category.category}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50">
                            <span className="font-medium">{item.name}</span>
                            <span className="text-green-600 font-bold">${item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{vendor.description}</p>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card>
              <CardHeader>
                <CardTitle>Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  {Object.entries(vendor.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span className="capitalize font-medium">{day}</span>
                      <span className="text-gray-600">{hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 mr-2 text-gray-400" />
                  {vendor.phone}
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                  {vendor.location}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDetail;
