import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../constants';
import { Filter, ChevronDown, SlidersHorizontal } from 'lucide-react';

const Shop: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [filter, setFilter] = useState<string>(categoryParam || 'all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['all', 'footwear', 'essentials', 'limited'];

  const filteredProducts = PRODUCTS.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'essentials') return p.isEssential;
    return p.category === filter;
  });

  useEffect(() => {
    if (categoryParam) setFilter(categoryParam);
  }, [categoryParam]);

  return (
    <div className="pt-40 pb-32 px-6 md:px-12 max-w-[1800px] mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] uppercase tracking-[0.4em] mb-4 text-charcoal-muted"
          >
            The Collection
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif"
          >
            Shop All
          </motion.h1>
        </div>

        <div className="relative">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-3 text-xs uppercase tracking-widest border border-greige/30 px-6 py-3 hover:bg-cream transition-colors"
          >
            <SlidersHorizontal size={14} />
            <span>Filter: {filter}</span>
            <ChevronDown size={14} className={`transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isFilterOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 top-full mt-2 w-48 bg-bone border border-greige/30 z-20 shadow-xl"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setFilter(cat);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full text-left px-6 py-3 text-xs uppercase tracking-widest hover:bg-cream transition-colors border-b border-greige/10 last:border-0 ${
                      filter === cat ? 'bg-cream font-medium' : ''
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link to={`/product/${product.id}`} className="group">
              <div className="editorial-frame mb-6 bg-cream">
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-charcoal text-bone text-[10px] uppercase tracking-[0.2em] px-8 py-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  Quick Add
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-serif mb-1 group-hover:italic transition-all">{product.name}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-charcoal-muted">{product.material}</p>
                </div>
                <span className="text-sm font-sans tracking-tight">${product.price}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-40 text-center">
          <p className="text-charcoal-muted italic">No objects found in this category.</p>
          <button 
            onClick={() => setFilter('all')}
            className="mt-8 text-xs uppercase tracking-widest custom-underline"
          >
            View All
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;
