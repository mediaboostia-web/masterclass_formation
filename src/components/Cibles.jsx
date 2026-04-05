import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, PencilRuler, Crown, Heart } from 'lucide-react';

const targets = [
  { icon: Megaphone, title: 'Responsable Com.', desc: "Gère l'image de ton église avec assurance et professionnalisme." },
  { icon: PencilRuler, title: 'Designer Débutant', desc: "Gagne en autonomie et crée des affiches pro en quelques clics." },
  { icon: Crown, title: 'Leader d\'église', desc: "Comprends le rôle clé du visuel dans la stratégie de ton ministère." },
  { icon: Heart, title: 'Passionné de design', desc: "Participe activement à la vie de ton église grâce au pouvoir du design." },
];

const Cibles = () => {
  return (
    <section className="py-24 bg-dark relative border-b border-white/5" id="cibles">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-4 uppercase text-white">Cette Masterclass est pour toi si...</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:-translate-y-2 hover:bg-secondary/20 hover:border-secondary/50 hover:shadow-[0_10px_30px_rgba(43,25,112,0.3)] transition-all duration-300"
            >
              <t.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3 font-heading uppercase text-white">{t.title}</h3>
              <p className="text-white/70 font-light">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Cibles;
