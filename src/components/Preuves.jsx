import React from 'react';
import { motion } from 'framer-motion';
import { Star, Image as ImageIcon } from 'lucide-react';
import affiche1 from '../../Affiches deja concus/assets/Affiche1.jpeg';
import affiche2 from '../../Affiches deja concus/assets/Affiche2.jpeg';
import affiche3 from '../../Affiches deja concus/assets/Affiche3.jpeg';

const Preuves = () => {
  return (
    <section className="py-24 bg-dark relative border-b border-white/5" id="preuves">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-4 uppercase text-white">Des Visuels Qui Marquent</h2>
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
            Découvre ce que tu seras capable de réaliser en appliquant la méthode enseignée.
          </p>
        </motion.div>
        
        {/* Gallery / Avant-Apres Placeholder */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[affiche1, affiche2, affiche3].map((imgSrc, item) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: item * 0.1 }}
              className="group aspect-[3/4] bg-neutral-900 rounded-2xl overflow-hidden relative border border-white/10 flex items-center justify-center cursor-pointer hover:border-primary transition-colors"
            >
              <img src={imgSrc} alt={`Affiche Pro ${item + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent z-10" />
              <div className="absolute bottom-6 left-6 z-20">
                <p className="font-heading font-bold uppercase text-primary">Affiche Pro {item + 1}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-secondary/10 border border-secondary/30 rounded-3xl p-10 md:p-14">
          <h3 className="text-2xl font-bold font-heading uppercase text-center mb-10 text-white">Ce qu'ils en pensent</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-dark border border-white/10 p-8 rounded-2xl relative">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 text-primary fill-primary" />)}
              </div>
              <p className="text-white/80 font-light italic mb-6">
                "Grâce aux conseils de Bodri, la communication de notre église a totalement changé. Nos événements affichent désormais complets, les visuels donnent tellement plus envie !"
              </p>
              <div>
                <p className="font-bold text-white">Jean-Marc B.</p>
                <p className="text-sm text-secondary">Responsable Communication</p>
              </div>
            </div>
            <div className="bg-dark border border-white/10 p-8 rounded-2xl relative">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 text-primary fill-primary" />)}
              </div>
              <p className="text-white/80 font-light italic mb-6">
                "Je n'avais aucune base solide en design. En appliquant la méthode de composition et de hiérarchie, j'arrive à sortir des affiches percutantes en moins d'une heure."
              </p>
              <div>
                <p className="font-bold text-white">Sarah T.</p>
                <p className="text-sm text-secondary">Designer Débutante</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Preuves;
