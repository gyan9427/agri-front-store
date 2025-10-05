import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Panama Crops
              <span className="block text-green-600 dark:text-green-400">
                Growing Sustainably
              </span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Premium fertilizers and agricultural solutions for modern farming.
              Nurture your crops with science-backed nutrition.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105 shadow-lg"
            >
              <span>Explore Fertilizers</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Agricultural field"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                15+ Years
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Industry Experience
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-green-200 dark:bg-green-900 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-green-300 dark:bg-green-800 rounded-full opacity-20 blur-3xl"></div>
    </div>
  );
}
