import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { Testimonials } from '../components/Testimonials';
import { Newsletter } from '../components/Newsletter';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Sprout, Leaf, TrendingUp, Award } from 'lucide-react';

const features = [
  {
    icon: Sprout,
    title: 'Sustainable Growth',
    description: 'Eco-friendly solutions for responsible farming',
  },
  {
    icon: Leaf,
    title: 'Organic Options',
    description: 'Certified organic fertilizers for natural cultivation',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Science-backed formulas for maximum yields',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'ISO certified products and rigorous testing',
  },
];

export function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="dark:bg-gray-900 transition-colors">
      <Hero />

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Panama Crops?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Leading agricultural innovation with sustainable solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Our most popular fertilizers for modern agriculture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Newsletter />
    </div>
  );
}
