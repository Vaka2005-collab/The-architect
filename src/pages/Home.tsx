import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';

const Home: React.FC = () => {
  const essentials = PRODUCTS.filter(p => p.isEssential).slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=2400" 
            alt="Hero Footwear" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/10" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-[11px] uppercase tracking-[0.4em] mb-6 text-white"
          >
            Spring Summer 2024
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-5xl md:text-8xl lg:text-[10rem] font-serif text-white tracking-wider leading-none mb-12"
          >
            The New <br /> <span className="italic">Monolith</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <Link 
              to="/shop" 
              className="group flex items-center space-x-4 mx-auto w-fit text-white"
            >
              <span className="text-xs uppercase tracking-[0.3em] font-sans custom-underline after:bg-white">Examine the Collection</span>
              <ArrowRight size={18} strokeWidth={1} className="group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute top-[-48px] left-0 w-full h-full bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Quote */}
      <section className="py-40 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-4xl font-serif leading-tight italic text-charcoal-muted"
        >
          "We do not build shoes; we curate architecture for movement. Every line is a structural decision, every material a tectonic shift."
        </motion.p>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="w-16 h-[1px] bg-greige mx-auto mt-12 origin-center"
        />
      </section>

      {/* Essentials Gallery */}
      <section className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="flex justify-between items-end mb-20">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-charcoal-muted mb-4 font-sans">Core Identity</p>
            <h2 className="text-4xl md:text-6xl font-serif">The Essentials</h2>
          </div>
          <Link to="/shop?category=essentials" className="text-xs uppercase tracking-widest custom-underline hidden md:block">
            View All Essentials
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {essentials.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={index === 1 ? "md:mt-24" : ""}
            >
              <Link to={`/product/${product.id}`} className="group">
                <div className="editorial-frame mb-8">
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="text-[10px] uppercase tracking-widest bg-bone text-charcoal px-3 py-1">Limited</span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-serif mb-1 group-hover:italic transition-all">{product.name}</h3>
                    <p className="text-[11px] uppercase tracking-widest text-charcoal-muted font-sans">{product.material}</p>
                  </div>
                  <span className="text-sm font-sans tracking-tight">${product.price}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story Teaser */}
      <section className="py-40 bg-cream mt-24">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=1800" 
              alt="Artisanal Process" 
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-10 -right-10 hidden xl:block w-72 h-96 bg-bone p-4 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=1000" 
                alt="Process Detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <div className="max-w-xl">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[11px] uppercase tracking-[0.3em] text-charcoal-muted mb-6"
            >
              Our Philosophy
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-serif mb-10 leading-tight"
            >
              Precision in every <span className="italic">micrometer</span>.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg font-sans text-charcoal-muted leading-relaxed mb-12"
            >
              Founded in 2022, ARCHITECT was born from a desire to merge the disciplines of structural engineering and fine cordwaining. Each pair is balanced to distribute weight across the architectural "void" of the foot.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="/story" className="group flex items-center space-x-4 w-fit">
                <span className="text-xs uppercase tracking-[0.3em] font-sans custom-underline">The Archive Story</span>
                <ArrowRight size={18} strokeWidth={1} className="group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid Pattern Layout */}
      <section className="py-40 px-6 md:px-12 max-w-[1800px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 lg:divide-x divide-greige/30 border-y lg:border divide-y lg:divide-y-0 border-greige/30">
          <div className="lg:col-span-4 p-12 flex flex-col justify-between hover:bg-cream transition-colors duration-500 min-h-[400px] group">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase mb-4 text-charcoal-muted">Materiality</p>
              <h3 className="text-2xl font-serif mb-6 italic">Sustainable Sourcing</h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">We exclusively partner with Tuscan tanneries that utilize closed-loop water systems and natural vegetable tannins.</p>
            </div>
            <Link to="/sustainability" className="text-[10px] tracking-[0.3em] uppercase custom-underline w-fit mt-8">Read More</Link>
          </div>
          <div className="lg:col-span-4 p-12 flex flex-col justify-between hover:bg-cream transition-colors duration-500 min-h-[400px] group">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase mb-4 text-charcoal-muted">Innovation</p>
              <h3 className="text-2xl font-serif mb-6 italic">Structural Lasting</h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">Our proprietary internal core allows for unprecedented flexibility while maintaining a rigid profile.</p>
            </div>
            <Link to="/innovation" className="text-[10px] tracking-[0.3em] uppercase custom-underline w-fit mt-8">Explore Technology</Link>
          </div>
          <div className="lg:col-span-4 p-12 flex flex-col justify-between hover:bg-cream transition-colors duration-500 min-h-[400px] group">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase mb-4 text-charcoal-muted">Craft</p>
              <h3 className="text-2xl font-serif mb-6 italic">Limited Editions</h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">Small batch production ensures each piece receives the attention of our master artisans in the Marche region.</p>
            </div>
            <Link to="/shop?category=limited" className="text-[10px] tracking-[0.3em] uppercase custom-underline w-fit mt-8">View Limited</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
