import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Filter, X } from 'lucide-react';

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'npk', label: 'NPK Fertilizers' },
    { id: 'organic', label: 'Organic' },
    { id: 'foliar', label: 'Foliar Sprays' },
    { id: 'specialty', label: 'Specialty' },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategory === 'all' || product.category === selectedCategory;
      const stockMatch = !showInStockOnly || product.inStock;
      return categoryMatch && stockMatch;
    });
  }, [selectedCategory, showInStockOnly]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-800 dark:to-green-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-white mb-4">
              Our Products
            </h1>
            <p className="text-xl text-green-100">
              Premium fertilizers for every agricultural need
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow"
            >
              {showFilters ? (
                <>
                  <X className="h-5 w-5" />
                  <span>Hide Filters</span>
                </>
              ) : (
                <>
                  <Filter className="h-5 w-5" />
                  <span>Show Filters</span>
                </>
              )}
            </button>
          </div>

          <aside
            className={`lg:block ${
              showFilters ? 'block' : 'hidden'
            } w-full lg:w-64 flex-shrink-0`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-20">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Filters
              </h3>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Category
                </h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition ${
                        selectedCategory === category.id
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showInStockOnly}
                    onChange={(e) => setShowInStockOnly(e.target.checked)}
                    className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    In Stock Only
                  </span>
                </label>
              </div>

              <div className="mt-6 pt-6 border-t dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  No products found matching your criteria
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
