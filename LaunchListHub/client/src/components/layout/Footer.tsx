import { Link } from "wouter";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Hjemme Siden</h3>
            <p className="text-sm">
              Din foretrukne destination for kvalitetsmad og catering i Aarhus
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/om-os">
                  <a className="hover:text-white transition-colors">Om os</a>
                </Link>
              </li>
              <li>
                <Link href="/find-restaurant">
                  <a className="hover:text-white transition-colors">Find restaurant</a>
                </Link>
              </li>
              <li>
                <Link href="/kontakt">
                  <a className="hover:text-white transition-colors">Kontakt os</a>
                </Link>
              </li>
              <li>
                <Link href="/madordning">
                  <a className="hover:text-white transition-colors">Fast madordning</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Restauranter</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/restaurant/da-taste">
                  <a className="hover:text-white transition-colors">DA Taste</a>
                </Link>
              </li>
              <li>
                <Link href="/restaurant/pizza-torino">
                  <a className="hover:text-white transition-colors">Pizza Torino</a>
                </Link>
              </li>
              <li>
                <Link href="/restaurant/goldencatering">
                  <a className="hover:text-white transition-colors">Goldencatering</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+45 XX XX XX XX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>info@hjemmesiden.dk</span>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Hjemme Siden. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
}
