import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, Clock, UsersRound } from 'lucide-react';

const Problemes = () => {
  const problemes = [
    { icon: XCircle, title: "L'indifférence visuelle", desc: "Tes affiches ne captent pas l'attention et se perdent dans le flot des réseaux sociaux." },
    { icon: UsersRound, title: "Salles peu remplies", desc: "Les gens ne viennent pas à tes rendez-vous malgré tes annonces répétées." },
    { icon: Clock, title: "Création laborieuse", desc: "Tu passes trop de temps devant ton écran à chercher l'inspiration sans résultat satisfaisant." },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-dark to-[#0a0a0a] relative border-b border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 uppercase text-white leading-tight">
              Le problème <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                n'est pas ton événement.
              </span>
            </h2>
            <p className="text-xl text-white/70 mb-8 font-light leading-relaxed">
              Vos rassemblements sont puissants, mais si le visuel ne le reflète pas, l'impact spirituel et communautaire est limité. Une affiche ratée, c'est une salle vide.
            </p>
          </motion.div>

          <div className="space-y-4">
            {problemes.map((p, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-5 items-start bg-neutral-900/50 border border-white/10 p-6 rounded-2xl hover:bg-neutral-900 transition-colors"
              >
                <div className="bg-red-500/10 p-3 rounded-xl shrink-0">
                  <p.icon className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold font-heading uppercase text-lg mb-1 text-white">{p.title}</h3>
                  <p className="text-white/60 font-light text-base">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Problemes;
