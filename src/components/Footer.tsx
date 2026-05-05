import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cream pt-32 pb-16 px-6 md:px-12 border-t border-greige/20">
      <div className="max-w-[1800px] mx-auto text-charcoal">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-32">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-serif tracking-widest mb-8">ARCHITECT</h2>
            <p className="text-sm font-sans leading-relaxed text-charcoal-muted max-w-xs">
              Refining the architectural landscape of footwear through intentional minimalism and artisanal precision.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] mb-8 text-charcoal-muted">Collection</h3>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-sm custom-underline">Shop All</Link></li>
              <li><Link to="/shop?category=essentials" className="text-sm custom-underline">Essentials</Link></li>
              <li><Link to="/shop?category=limited" className="text-sm custom-underline">Limited Objects</Link></li>
              <li><Link to="/archives" className="text-sm custom-underline">Archives</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] mb-8 text-charcoal-muted">Client Services</h3>
            <ul className="space-y-4">
              <li><Link to="/shipping" className="text-sm custom-underline">Shipping & Returns</Link></li>
              <li><Link to="/sizing" className="text-sm custom-underline">Sizing Guide</Link></li>
              <li><Link to="/care" className="text-sm custom-underline">Product Care</Link></li>
              <li><Link to="/contact" className="text-sm custom-underline">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] mb-8 text-charcoal-muted">Newsletter</h3>
            <p className="text-sm mb-6 text-charcoal-muted">Receive curated updates and early access to new works.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-greige py-2 text-xs tracking-widest focus:outline-none focus:border-charcoal transition-colors uppercase"
              />
              <button className="absolute right-0 bottom-2 text-xs tracking-[0.2em] uppercase hover:text-charcoal-muted transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-greige/10 text-[10px] tracking-[0.2em] uppercase text-charcoal-muted">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#" className="hover:text-charcoal transition-colors">Instagram</a>
            <a href="#" className="hover:text-charcoal transition-colors">Pinterest</a>
            <a href="#" className="hover:text-charcoal transition-colors">Vimeo</a>
          </div>
          <div className="text-center md:text-right">
            © {new Date().getFullYear()} ARCHITECT. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};
