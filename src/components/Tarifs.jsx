import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';

const Tarifs = () => {
  const bonus = [
    "Pack de +50 polices Premium",
    "Installation des logiciels à jour",
    "Liste des meilleurs sites d'inspiration",
    "Ressources et effets professionnels"
  ];

  return (
    <section className="py-24 bg-dark relative border-b border-white/5" id="tarifs">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-4 uppercase text-white">Investis dans ton impact</h2>
          <p className="text-xl text-white/70 font-light">
            Une offre claire pour transformer ta communication visuelle à vie.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Offre Standard */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-neutral-900 border border-white/10 rounded-3xl p-8 hover:border-primary/50 transition-colors relative flex flex-col"
          >
            <h3 className="text-2xl font-bold font-heading uppercase text-white mb-2">Pass Standard</h3>
            <p className="text-white/60 mb-6">Accès complet à la Masterclass présentielle</p>
            <div className="mb-8">
              <span className="text-5xl font-black text-primary">15.000</span>
              <span className="text-xl text-white/70 ml-2">XAF</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-white">Les 5 modules de formation</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-white">Accès à la communauté privée</span>
              </li>
              <li className="my-4 border-t border-white/10 pt-4 text-white/50 text-sm font-bold uppercase tracking-wider">
                Bonus Inclus
              </li>
              {bonus.map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary" />
                  <span className="text-white font-medium">{b}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="https://wa.me/24174111777?text=Bonjour%20%21%20Je%20souhaite%20r%C3%A9server%20un%20PASS%20STANDARD%20pour%20la%20Masterclass%20Design%20Church" 
              target="_blank" rel="noreferrer"
              className="w-full block text-center bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-xl transition-all"
            >
              Réserver ce Pass
            </a>
          </motion.div>

          {/* Offre Groupe */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-b from-dark to-secondary/30 border border-primary rounded-3xl p-8 hover:-translate-y-2 transition-transform relative flex flex-col shadow-[0_0_40px_rgba(43,25,112,0.6)]"
          >
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-dark font-black px-4 py-1 rounded-full text-sm uppercase tracking-wider">
              Recommandé
            </div>
            <h3 className="text-2xl font-bold font-heading uppercase text-white mb-2">Pass Groupe</h3>
            <p className="text-white/60 mb-6">Venez avec l'équipe com de votre église</p>
            <div className="mb-8">
              <span className="text-5xl font-black text-white">-20%</span>
              <span className="text-xl text-white/70 ml-2">de réduction</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-white">Tout ce qui est inclus dans le Pass Standard</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-white font-bold">Valable à partir de 2 personnes</span>
              </li>
              <li className="flex items-start gap-3 bg-primary/10 rounded-lg p-3 mt-4">
                <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">Idéal pour uniformiser les compétences de toute l'équipe multimédia de votre département.</span>
              </li>
            </ul>
            
            <a 
              href="https://wa.me/24174111777?text=Bonjour%20%21%20Je%20souhaite%20r%C3%A9server%20un%20PASS%20GROUPE%20pour%20la%20Masterclass%20Design%20Church" 
              target="_blank" rel="noreferrer"
              className="w-full block text-center bg-primary hover:bg-orange-500 text-dark font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(255,137,0,0.3)] hover:scale-105"
            >
              Réserver pour un groupe
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Tarifs;
