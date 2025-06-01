"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Search, Star, MapPin, Clock } from "lucide-react";

const VendorList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const vendors = [
    {
      id: 1,
      name: "Campus Café",
      cuisine: "Coffee & Pastries",
      rating: 4.8,
      location: "Library Building",
      openUntil: "10:00 PM",
      priceRange: "$$",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&h=200&fit=crop",
      specialties: ["Coffee", "Sandwiches", "Pastries"]
    },
    {
      id: 2,
      name: "Student Grill",
      cuisine: "Burgers & Fries",
      rating: 4.6,
      location: "Student Center",
      openUntil: "9:00 PM",
      priceRange: "$",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
      specialties: ["Burgers", "Fries", "Milkshakes"]
    },
    {
      id: 3,
      name: "Fresh Bowls",
      cuisine: "Healthy Bowls",
      rating: 4.9,
      location: "Recreation Center",
      openUntil: "8:00 PM",
      priceRange: "$$",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop",
      specialties: ["Salad Bowls", "Smoothies", "Wraps"]
    }
  ];

  const locations = ["Library Building", "Student Center", "Recreation Center"];

  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === "all" || vendor.location === selectedLocation;
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Campus Vendors</h1>
          <p className="text-gray-600">Find your next favorite meal</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search vendors or cuisine..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="w-full lg:w-48">
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Vendor Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredVendors.map((vendor) => (
            <Link key={vendor.id} href={`/client/vendor/${vendor.id}`}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-white/90">
                      {vendor.priceRange}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{vendor.name}</h3>
                  <p className="text-gray-600 mb-3">{vendor.cuisine}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {vendor.specialties.slice(0, 2).map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                    {vendor.specialties.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{vendor.specialties.length - 2} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      {vendor.rating}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {vendor.location}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-green-600">
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
  );
};

export default VendorList;