import { motion } from 'framer-motion';
import { Target, Users, Award, Leaf } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Committed to eco-friendly practices and environmental stewardship',
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'ISO certified products meeting international standards',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'Building long-term relationships with farming communities',
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Continuous research and development for better solutions',
  },
];

export function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-800 dark:to-green-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Leading the agricultural revolution with sustainable fertilizer solutions
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Panama Crops is dedicated to empowering farmers with premium, sustainable fertilizer
              solutions that enhance crop productivity while preserving environmental health.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              With over 15 years of experience in agricultural innovation, we combine scientific
              research with practical farming knowledge to deliver products that truly make a
              difference.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our commitment extends beyond products to comprehensive agricultural support,
              ensuring every farmer has the tools and knowledge needed for success.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Agricultural field"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow"
            >
              <value.icon className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-green-600 dark:bg-green-800 rounded-2xl p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Growing Community
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Become part of a network of successful farmers who trust Panama Crops for their
              agricultural needs.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-5xl font-bold text-white mb-2">5000+</p>
                <p className="text-green-100">Happy Farmers</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-white mb-2">15+</p>
                <p className="text-green-100">Years Experience</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-white mb-2">50+</p>
                <p className="text-green-100">Products</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
