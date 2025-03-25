import { Link } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PizzaTorinoNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a className="text-gray-700 hover:text-primary">Forside</a>
            </Link>
            <Link href="/pizzatorino/menu">
              <a className="text-gray-700 hover:text-primary">Se Menu</a>
            </Link>
          </div>

          {/* Logo in center */}
          <div className="flex items-center">
            <Link href="/pizzatorino">
              <a className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-primary">Pizza Torino</span>
              </a>
            </Link>
          </div>

          {/* Right side navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/pizzatorino/selskaber">
              <a className="text-gray-700 hover:text-primary">Book os til selskaber</a>
            </Link>
            <Link href="/pizzatorino/gavekort">
              <a className="text-gray-700 hover:text-primary">Gavekort</a>
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/">
                <a className="block px-3 py-2 text-gray-700 hover:text-primary">
                  Forside
                </a>
              </Link>
              <Link href="/pizzatorino/menu">
                <a className="block px-3 py-2 text-gray-700 hover:text-primary">
                  Se Menu
                </a>
              </Link>
              <Link href="/pizzatorino/selskaber">
                <a className="block px-3 py-2 text-gray-700 hover:text-primary">
                  Book os til selskaber
                </a>
              </Link>
              <Link href="/pizzatorino/gavekort">
                <a className="block px-3 py-2 text-gray-700 hover:text-primary">
                  Gavekort
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
