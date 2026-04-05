import React from 'react';
import { motion } from 'framer-motion';
import { Download, BookOpen } from 'lucide-react';
import pdfFile from '../../Ebook gratuit/5 SECRET POUR CREER DES AFFICHES EGLISE_EBOOK GRATUIT.pdf?url';
import ebookCover from '../../Ebook gratuit/Livre-gratuit.jpg';

const Ebook = () => {
  return (
    <section className="py-24 bg-dark relative border-b border-white/5 overflow-hidden" id="guide">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="bg-gradient-to-r from-secondary/40 to-dark border border-secondary/50 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12"
        >
          {/* Ebook Graphic */}
          <div className="w-full md:w-1/3 flex justify-center shrink-0">
             <div className="relative group hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-primary/40 blur-3xl rounded-full group-hover:bg-primary/60 transition-all duration-500"></div>
                <img src={ebookCover} alt="Couverture Ebook 5 Secrets" className="w-64 border-2 border-primary/50 shadow-2xl rounded-lg overflow-hidden relative z-10" />
             </div>
          </div>

          {/* Texts & CTA */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase mb-4">
              Commence ton apprentissage gratuitement
            </h2>
            <p className="text-lg text-white/80 font-light mb-8 leading-relaxed">
              Télécharge dès maintenant notre guide gratuit "5 Secrets pour Créer des Affiches d'Église" et améliore l'apparence de tes visuels instantanément, avant même la masterclass.
            </p>
            <a 
              href={pdfFile} 
              download="5_Secrets_Affiches_Eglise.pdf"
              className="inline-flex items-center space-x-3 bg-white hover:bg-neutral-200 text-dark font-bold px-8 py-4 rounded-xl transition-transform hover:scale-105 shadow-xl"
            >
              <Download className="w-5 h-5" />
              <span>Télécharger le Guide Gratuit</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Ebook;
