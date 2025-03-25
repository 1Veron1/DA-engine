import { Link } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/">
              <a className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold text-primary">Hjemme Siden</h1>
              </a>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/om-os">
              <a className="text-gray-700 hover:text-primary">Om os</a>
            </Link>
            <Link href="/find-restaurant">
              <a className="text-gray-700 hover:text-primary">Find restaurant</a>
            </Link>
            <Link href="/kontakt">
              <a className="text-gray-700 hover:text-primary">Kontakt os</a>
            </Link>
            <Link href="/madordning">
              <Button variant="default">Fast madordning</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/om-os">
              <a className="block px-3 py-2 text-gray-700 hover:text-primary">
                Om os
              </a>
            </Link>
            <Link href="/find-restaurant">
              <a className="block px-3 py-2 text-gray-700 hover:text-primary">
                Find restaurant
              </a>
            </Link>
            <Link href="/kontakt">
              <a className="block px-3 py-2 text-gray-700 hover:text-primary">
                Kontakt os
              </a>
            </Link>
            <Link href="/madordning">
              <a className="block px-3 py-2 text-primary font-medium">
                Fast madordning
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
