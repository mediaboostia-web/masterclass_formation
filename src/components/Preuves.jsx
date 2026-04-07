import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import affiche1 from '../../Affiches deja concus/assets/Affiche1.jpeg';
import affiche2 from '../../Affiches deja concus/assets/Affiche2.jpeg';
import affiche3 from '../../Affiches deja concus/assets/Affiche3.jpeg';
import affiche4 from '../../Affiches deja concus/assets/Affiche4.jpeg';

const affiches = [affiche1, affiche2, affiche3, affiche4, affiche1, affiche2, affiche3, affiche4];

const Preuves = () => {
  return (
    <section className="py-24 bg-dark relative border-b border-white/5 overflow-hidden" id="preuves">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-4 uppercase text-white">Des Visuels Qui Marquent</h2>
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
            Découvre ce que tu seras capable de réaliser en appliquant la méthode enseignée.
          </p>
        </motion.div>
      </div>
      
      {/* Animated Carousel - Full width */}
      <div className="relative w-full max-w-[100vw] mb-24 overflow-hidden py-10 flex">
        <motion.div 
          className="flex gap-6 md:gap-8 w-max pr-6 md:pr-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 35
          }}
        >
          {affiches.map((imgSrc, index) => (
            <div 
              key={index}
              className="w-64 md:w-80 lg:w-96 flex-shrink-0 aspect-[3/4] bg-neutral-900 rounded-2xl overflow-hidden relative border border-white/10 group hover:border-primary transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/30"
            >
              <img src={imgSrc} alt={`Affiche ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300 z-10" />
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
           {affiches.map((imgSrc, index) => (
            <div 
              key={`dup-${index}`}
              className="w-64 md:w-80 lg:w-96 flex-shrink-0 aspect-[3/4] bg-neutral-900 rounded-2xl overflow-hidden relative border border-white/10 group hover:border-primary transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/30"
            >
              <img src={imgSrc} alt={`Affiche duplicate ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300 z-10" />
            </div>
          ))}
        </motion.div>
        
        {/* Edge gradients to blend with background */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-dark to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-dark to-transparent z-20 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Testimonials */}
        <div className="bg-secondary/10 border border-secondary/30 rounded-3xl p-10 md:p-14">
          <h3 className="text-2xl font-bold font-heading uppercase text-center mb-10 text-white">Ce qu'ils en pensent</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-dark border border-white/10 p-8 rounded-2xl relative transition-transform hover:-translate-y-2 duration-300">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 text-primary fill-primary" />)}
              </div>
              <p className="text-white/80 font-light italic mb-6">
                "Grâce aux conseils de Bodri, la communication de notre église a totalement changé. Nos événements affichent désormais complets, les visuels donnent tellement plus envie !"
              </p>
              <div>
                <p className="font-bold text-white uppercase font-heading">Glady's ANATO</p>
                <p className="text-sm text-secondary">Débutant designer</p>
              </div>
            </div>
            <div className="bg-dark border border-white/10 p-8 rounded-2xl relative transition-transform hover:-translate-y-2 duration-300">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 text-primary fill-primary" />)}
              </div>
              <p className="text-white/80 font-light italic mb-6">
                "Je n'avais aucune base solide en design. En appliquant la méthode de composition et de hiérarchie, j'arrive à sortir des affiches percutantes en moins d'une heure."
              </p>
              <div>
                <p className="font-bold text-white uppercase font-heading">Loreine MBA</p>
                <p className="text-sm text-secondary">Communiquante</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Preuves;
