"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Search, Home, Store, ArrowLeft } from "lucide-react"

const ClientNavbar = () => {
  const pathname = usePathname()

  // Adjust paths to match '/client' base path
  const isActive = (path: string) => pathname === `/client${path}`

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </Link>
            <div className="h-6 w-px bg-gray-300"></div>
            <Link href="/client" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FC</span>
              </div>
              <span className="text-xl font-bold text-blue-600">Student Portal</span>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="/client"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('') || isActive('/')
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              <Home size={16} />
              <span>Home</span>
            </Link>

            <Link
              href="/client/vendors"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/vendors')
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              <Store size={16} />
              <span>Browse Vendors</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default ClientNavbar
