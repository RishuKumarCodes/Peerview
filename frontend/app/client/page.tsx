"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Search, MapPin, Clock, Star, Store } from "lucide-react";
import ClientNavbar from "@/components/ClientNavbar";

const ClientHome = () => {
  const featuredVendors = [
    {
      id: 1,
      name: "Campus Café",
      cuisine: "Coffee & Pastries",
      rating: 4.8,
      location: "Library Building",
      openUntil: "10:00 PM",
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Student Grill",
      cuisine: "Burgers & Fries",
      rating: 4.6,
      location: "Student Center",
      openUntil: "9:00 PM",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Fresh Bowls",
      cuisine: "Healthy Bowls",
      rating: 4.9,
      location: "Recreation Center",
      openUntil: "8:00 PM",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop",
    },
  ];

  return (
    <>
      <ClientNavbar />
      <div className="min-h-screen pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Find Your Perfect Campus Meal
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover the best food vendors on campus, check menus, and find
              great deals
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search for food, vendors, or cuisine type..."
                  className="pl-12 py-6 text-lg"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Link href="/client/vendors">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Store className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-lg font-semibold mb-2">
                    Browse All Vendors
                  </h3>
                  <p className="text-gray-600">
                    Explore all food options on campus
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-lg font-semibold mb-2">Find by Location</h3>
                <p className="text-gray-600">Discover vendors near you</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 mx-auto mb-4 text-yellow-600" />
                <h3 className="text-lg font-semibold mb-2">Top Rated</h3>
                <p className="text-gray-600">Check out student favorites</p>
              </CardContent>
            </Card>
          </div>

          {/* Featured Vendors */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Featured Vendors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredVendors.map((vendor) => (
                <Link key={vendor.id} href={`/client/vendor/${vendor.id}`}>
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="relative">
                      <img
                        src={vendor.image}
                        alt={vendor.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {vendor.name}
                      </h3>
                      <p className="text-gray-600 mb-3">{vendor.cuisine}</p>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          {vendor.rating}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {vendor.location}
                        </div>
                      </div>

                      <div className="flex items-center mt-2 text-sm text-green-600">
                        <Clock className="h-4 w-4 mr-1" />
                        Open until {vendor.openUntil}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientHome;
