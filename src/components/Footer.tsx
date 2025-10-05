import { Link } from 'react-router-dom';
import { Leaf, Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold text-white">Panama Crops</span>
            </div>
            <p className="text-sm text-gray-400">
              Leading provider of sustainable agricultural solutions for modern farming.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-green-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-green-400 transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>NPK Fertilizers</li>
              <li>Organic Solutions</li>
              <li>Foliar Sprays</li>
              <li>Specialty Nutrients</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-green-400 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-green-400 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-green-400 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-green-400 transition">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm">info@panamacrops.com</p>
            <p className="text-sm">+507 123-4567</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Panama Crops. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
