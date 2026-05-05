import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, Plus, Minus, ArrowLeft } from 'lucide-react';
import { PRODUCTS } from '../constants';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="pt-40 text-center">Product not found.</div>;

  const sizes = ['38', '39', '40', '41', '42', '43', '44'];
  const related = PRODUCTS.filter(p => p.id !== id).slice(0, 3);

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <Link to="/shop" className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] mb-12 hover:text-charcoal-muted transition-colors">
          <ArrowLeft size={14} />
          <span>Back to Collection</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Images Column */}
          <div className="lg:col-span-7 space-y-8">
            {product.images.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="bg-cream aspect-[4/5] overflow-hidden"
              >
                <img src={img} alt={`${product.name} detail ${i + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5">
            <div className="sticky top-40">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-[11px] uppercase tracking-[0.4em] mb-4 text-charcoal-muted">{product.category}</p>
                <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">{product.name}</h1>
                <p className="text-xl font-sans tracking-tight mb-8">${product.price}</p>
                <div className="w-full h-[1px] bg-greige/30 mb-10" />
                
                <p className="text-sm font-sans text-charcoal-muted leading-relaxed mb-12 max-w-md">
                  {product.description}
                </p>

                <div className="mb-12">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] uppercase tracking-widest">Select Size (EU)</span>
                    <button className="text-[10px] uppercase tracking-widest custom-underline">Size Guide</button>
                  </div>
                  <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                    {sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-3 text-xs border transition-all ${
                          selectedSize === size 
                            ? 'bg-charcoal text-bone border-charcoal' 
                            : 'border-greige/30 hover:border-charcoal text-charcoal-muted'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 mb-12">
                  <div className="flex items-center border border-greige/30 h-14 px-4 bg-cream">
                    <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-2 hover:text-charcoal-muted"><Minus size={16}/></button>
                    <span className="w-12 text-center text-sm font-sans">{quantity}</span>
                    <button onClick={() => setQuantity(q => q + 1)} className="p-2 hover:text-charcoal-muted"><Plus size={16}/></button>
                  </div>
                  <button className="flex-grow bg-charcoal text-bone h-14 text-[11px] uppercase tracking-[0.3em] font-sans hover:bg-charcoal/90 transition-colors">
                    Add to Bag
                  </button>
                </div>

                <div className="space-y-6 border-t border-greige/30 pt-10">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none py-2">
                      <span className="text-[10px] uppercase tracking-widest">Material & Care</span>
                      <Plus size={16} className="group-open:hidden" strokeWidth={1} />
                      <Minus size={16} className="hidden group-open:block" strokeWidth={1} />
                    </summary>
                    <p className="text-[13px] text-charcoal-muted leading-relaxed pt-4">
                      Hand-selected {product.material} from certified Tuscan tanneries. Clean with a soft, dry cloth. Store in the provided linen dust bags when not in use.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none py-2">
                      <span className="text-[10px] uppercase tracking-widest">Shipping & Returns</span>
                      <Plus size={16} className="group-open:hidden" strokeWidth={1} />
                      <Minus size={16} className="hidden group-open:block" strokeWidth={1} />
                    </summary>
                    <p className="text-[13px] text-charcoal-muted leading-relaxed pt-4">
                      Complimentary express shipping on all orders. Returns are accepted within 14 days of delivery in original condition.
                    </p>
                  </details>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-40 border-t border-greige/20 pt-32 px-6 md:px-12 max-w-[1800px] mx-auto">
        <h2 className="text-3xl font-serif mb-16 text-center italic">You may also appreciate</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {related.map(p => (
            <Link key={p.id} to={`/product/${p.id}`} className="group">
              <div className="editorial-frame mb-6 bg-cream">
                <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover grayscale brightness-110 contrast-100 group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-serif mb-1 group-hover:italic transition-all">{p.name}</h3>
                <p className="text-[10px] uppercase tracking-widest text-charcoal-muted">${p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
