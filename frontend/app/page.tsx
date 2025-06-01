
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Users, Store, ArrowRight } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Campus Food Connect
          </h1>
          <p className="text-xl text-gray-600">
            Connecting students with the best food vendors on campus
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Student Portal */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">Student Portal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Browse food vendors, check menus, and find the best deals on campus
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Browse all campus food vendors</li>
                <li>• View menus and prices</li>
                <li>• Check vendor ratings and reviews</li>
                <li>• Find vendors by location</li>
              </ul>
              <Link href="/client" className="block">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Enter as Student
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Vendor Portal */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Vendor Portal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Manage your store, update menus, and connect with students
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Manage your store profile</li>
                <li>• Update menu items and prices</li>
                <li>• Track orders and sales</li>
                <li>• View customer feedback</li>
              </ul>
              <Link href="/vendor" className="block">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Enter as Vendor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;