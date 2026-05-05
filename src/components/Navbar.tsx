import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
          scrolled ? 'bg-bone/80 backdrop-blur-md py-4' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="hidden lg:flex items-center space-x-12">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className="text-[11px] uppercase tracking-[0.2em] font-sans hover:text-charcoal-muted transition-colors custom-underline"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link to="/" className="absolute left-1/2 -translate-x-1/2 group">
            <h1 className="text-2xl md:text-3xl font-serif tracking-[0.15em] transition-all duration-500 group-hover:tracking-[0.25em]">
              ARCHITECT
            </h1>
          </Link>

          <div className="flex items-center space-x-6 md:space-x-8">
            <button className="hover:text-charcoal-muted transition-colors">
              <Search size={20} strokeWidth={1} />
            </button>
            <button className="flex items-center space-x-2 hover:text-charcoal-muted transition-colors relative">
              <ShoppingBag size={20} strokeWidth={1} />
              <span className="text-[10px] absolute -top-1 -right-1 bg-charcoal text-bone rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </button>
            <button 
              className="lg:hidden hover:text-charcoal-muted transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={20} strokeWidth={1} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-bone flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-24">
              <h1 className="text-2xl font-serif tracking-widest">ARCHITECT</h1>
              <button onClick={() => setIsOpen(false)}>
                <X size={24} strokeWidth={1} />
              </button>
            </div>
            
            <div className="flex flex-col space-y-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={item.path}
                    className="text-4xl font-serif hover:italic transition-all inline-block"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.1 }}
                className="pt-12 border-t border-greige/30"
              >
                <div className="text-[11px] uppercase tracking-widest text-charcoal-muted">Follow us</div>
                <div className="flex space-x-6 mt-4">
                  <a href="#" className="custom-underline text-xs">Instagram</a>
                  <a href="#" className="custom-underline text-xs">Journal</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
