import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      q: "Est-ce pour les débutants ?",
      a: "Absolument. La méthode est structurée étape par étape pour permettre même à ceux qui n'ont aucune notion de s'en sortir et de créer des visuels impactants dès le premier jour."
    },
    {
      q: "Dois-je avoir un logiciel spécifique ?",
      a: "Nous te fournirons les liens et les logiciels à jour nécessaires si tu ne les as pas. Un simple ordinateur portable suffit pour suivre et pratiquer lors de la Masterclass."
    },
    {
      q: "L'événement est-il en présentiel ou en ligne ?",
      a: "L'événement est 100% en présentiel ! Cela se tiendra à l'Église Temple de la Grâce des Assemblées de Dieu de Kalikak (derrière la cité de la SEEG), pour une expérience ultra-pratique."
    },
    {
      q: "Combien de temps dure la formation ?",
      a: "C'est une immersion d'une journée intensive le Samedi 18 Avril 2026. Tu en ressortiras transformé, avec des compétences concrètes et immédiatement applicables."
    }
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 bg-neutral-950 relative border-b border-white/5">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-4 uppercase text-white">Questions Fréquentes</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-dark border border-white/10 rounded-2xl overflow-hidden hover:border-secondary/50 transition-colors">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-lg text-white">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-white/70 font-light border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
