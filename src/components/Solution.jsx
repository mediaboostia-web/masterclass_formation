import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Solution = () => {
  const solutions = [
    "Structurer un design professionnel en quelques minutes",
    "Clarifier et mettre en valeur ton message principal",
    "Appliquer les règles d'or (couleurs, espaces, typographie)",
    "Créer un visuel qui déclenche la décision de participer"
  ];

  return (
    <section className="py-24 bg-dark relative border-b border-white/5 overflow-hidden" id="solution">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
        <div className="w-full max-w-[800px] h-[300px] bg-secondary/20 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          className="bg-white/5 border border-secondary/30 rounded-3xl p-10 md:p-16 shadow-[0_0_50px_rgba(43,25,112,0.2)] backdrop-blur-xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/30 border border-secondary/50 text-white font-medium text-sm mb-6">
            La Solution
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-8 uppercase text-white leading-tight">
            Deviens le moteur de <br className="hidden md:block" />
            <span className="text-primary">l'impact de ton église</span>
          </h2>
          <p className="text-xl md:text-2xl font-light mb-12 text-white/90 max-w-3xl mx-auto italic">
            "Transforme tes affiches d'église en outils redoutables de mobilisation, sans y passer des heures."
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            {solutions.map((s, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                <CheckCircle2 className="w-7 h-7 text-primary shrink-0" />
                <span className="font-medium text-white/90 text-lg leading-snug">{s}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-14">
            <a href="#tarifs" className="inline-block bg-primary hover:bg-orange-500 text-dark font-bold px-10 py-5 rounded-xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,137,0,0.4)] text-lg">
              Découvrir le programme
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Solution;
