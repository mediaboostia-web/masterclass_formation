import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CTAFinal = () => {
  // Simple countdown logic 
  const [timeLeft, setTimeLeft] = useState({ d: 11, h: 10, m: 30, s: 0 });

  useEffect(() => {
    // Faux countdown for effect
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { d, h, m, s } = prev;
        if (s > 0) s--;
        else {
          s = 59;
          if (m > 0) m--;
          else {
            m = 59;
            if (h > 0) h--;
            else {
              h = 23;
              if (d > 0) d--;
            }
          }
        }
        return { d, h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="pt-24 pb-12 bg-dark relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-b from-transparent to-secondary/30 z-0"></div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase text-white">
            Prêt à tout changer ?
          </h2>
          <p className="text-xl text-white/70 font-light mb-10 max-w-2xl mx-auto">
            Rejoins-nous et transforme ta communication spirituelle. Attention, vu la nature pratique de l'événement, <b className="text-primary">les places sont très limitées</b>.
          </p>

          <div className="flex justify-center gap-4 mb-10 text-white font-heading font-bold text-2xl md:text-4xl">
            <div className="bg-neutral-900 border border-white/10 p-4 rounded-xl min-w-[80px]">
              <div>{timeLeft.d}</div><div className="text-xs text-white/50 uppercase tracking-widest mt-1">Jours</div>
            </div>
            <div className="mt-4">:</div>
            <div className="bg-neutral-900 border border-white/10 p-4 rounded-xl min-w-[80px]">
              <div>{timeLeft.h}</div><div className="text-xs text-white/50 uppercase tracking-widest mt-1">Hres</div>
            </div>
            <div className="mt-4">:</div>
            <div className="bg-neutral-900 border border-white/10 p-4 rounded-xl min-w-[80px]">
              <div>{timeLeft.m}</div><div className="text-xs text-white/50 uppercase tracking-widest mt-1">Min</div>
            </div>
            <div className="mt-4">:</div>
            <div className="bg-neutral-900 border border-white/10 p-4 rounded-xl min-w-[80px]">
              <div className="text-primary animate-pulse">{timeLeft.s}</div><div className="text-xs text-secondary uppercase tracking-widest mt-1">Sec</div>
            </div>
          </div>

          <a 
            href="#tarifs" 
            className="inline-block bg-primary hover:bg-green-500 text-dark font-black text-xl px-12 py-6 rounded-2xl transition-all hover:scale-105 shadow-[0_0_50px_rgba(157,243,4,0.5)] animate-pulse"
          >
            JE RÉSERVE MA PLACE
          </a>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
          <p>© 2026 Masterclass Design Church. Tous droits réservés.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://wa.me/24174111777" className="hover:text-primary transition-colors">WhatsApp</a>
            <a href="https://chat.whatsapp.com/Kj6nPPgj2IX4y63XjC45Cz" className="hover:text-primary transition-colors">Communauté</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default CTAFinal;
