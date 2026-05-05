import React from 'react';
import { motion } from 'motion/react';

const OurStory: React.FC = () => {
  return (
    <div className="pt-40 pb-32">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <header className="max-w-4xl mb-32">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] uppercase tracking-[0.4em] mb-6 text-charcoal-muted"
          >
            The Architect's Journal
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif mb-12 leading-[0.9]"
          >
            A Study in <br /> <span className="italic">Proportion</span> & <br /> Structural Integrity.
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-32 h-[1px] bg-charcoal origin-left"
          />
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-40 items-start">
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-cream p-12 aspect-[4/5] overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1200" 
                alt="Architectural inspiration" 
                className="w-full h-full object-cover grayscale"
              />
            </motion.div>
          </div>
          <div className="lg:col-span-7 lg:pt-40">
            <h2 className="text-3xl font-serif mb-8 italic">The Philosophy of the Void</h2>
            <div className="space-y-6 text-lg font-sans text-charcoal-muted leading-relaxed max-w-2xl">
              <p>
                In architecture, the void is as significant as the structure. It defines the path of light and the movement of air. At ARCHITECT, we translate this spatial awareness to the human form.
              </p>
              <p>
                Our designs emerge from the rejection of excess. We ask not what can be added, but what is essential for the structure to exist. This iterative reduction results in a silhouette that feels both ancient and futuristic.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-charcoal text-bone -mx-6 md:-mx-12 px-6 md:px-12 py-32 md:py-60 mb-40">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif italic mb-12"
            >
              "We treat the foot as a monument—a complex series of arches and spans that deserve to be encased in precision."
            </motion.h3>
            <p className="text-[10px] uppercase tracking-[0.4em]">Marche, Italy — Studio 01</p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
          <div className="md:mt-24 space-y-8">
            <h4 className="text-[11px] uppercase tracking-widest font-sans text-charcoal-muted">01 — Tectonics</h4>
            <div className="editorial-frame">
              <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=1000" alt="Process" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-8">
            <h4 className="text-[11px] uppercase tracking-widest font-sans text-charcoal-muted">02 — Materiality</h4>
            <div className="editorial-frame">
              <img src="https://images.unsplash.com/photo-1512374382149-4332c66719a3?auto=format&fit=crop&q=80&w=1000" alt="Material" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:mt-12 space-y-8">
            <h4 className="text-[11px] uppercase tracking-widest font-sans text-charcoal-muted">03 — Endurance</h4>
            <div className="editorial-frame">
              <img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=1000" alt="Detail" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <footer className="text-center py-24 border-t border-greige/20">
          <p className="text-4xl md:text-6xl font-serif mb-12 italic">Join the Journal.</p>
          <a href="#" className="text-xs uppercase tracking-[0.4em] custom-underline pb-2">Newsletter Registration</a>
        </footer>
      </div>
    </div>
  );
};

export default OurStory;
