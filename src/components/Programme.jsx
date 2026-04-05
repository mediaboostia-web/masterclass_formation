import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Type, Palette, Zap, Target } from 'lucide-react';

const Programme = () => {
  const modules = [
    { num: "01", icon: Layout, title: "Structure d'une affiche", desc: "Apprends à disposer les éléments clés pour guider l'œil et rendre la lecture fluide." },
    { num: "02", icon: Type, title: "Typographie & Hiérarchie", desc: "Choisis les bonnes polices (Montserrat, Bebas Neue...) et donne du poids à ton message." },
    { num: "03", icon: Palette, title: "Couleurs & Harmonie", desc: "Comprends la psychologie des couleurs et l'application des contrastes." },
    { num: "04", icon: Zap, title: "Rapidité & Productivité", desc: "Optimise ton flux de travail avec des raccourcis et des techniques de pro." },
    { num: "05", icon: Target, title: "Stratégie d'impact", desc: "Incorpore des appels à l'action pour maximiser la présence et l'engagement." },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-dark to-neutral-950 relative border-b border-white/5" id="programme">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-4 uppercase text-white">Le Programme de la Masterclass</h2>
          <p className="text-xl font-light text-white/70">5 modules intenses, pratiques et directs à l'essentiel.</p>
        </motion.div>
        
        <div className="space-y-6">
          {modules.map((m, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col sm:flex-row items-start sm:items-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-dark border border-white/10 text-primary font-heading font-bold text-2xl shrink-0 group-hover:scale-110 group-hover:border-primary/50 transition-all mb-4 sm:mb-0 mr-6">
                {m.num}
              </div>
              <div className="mr-6 shrink-0 hidden md:block">
                <m.icon className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading uppercase text-white mb-2">{m.title}</h3>
                <p className="text-white/70 font-light text-lg">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Programme;
