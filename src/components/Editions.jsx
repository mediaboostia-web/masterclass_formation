import React from 'react';
import { motion } from 'framer-motion';

import img1 from '../../temoignage et preuves/Preuve3.jpg';
import img2 from '../../temoignage et preuves/Preuve4.jpg';
import img3 from '../../temoignage et preuves/Preuve5jpg.jpg';
import img4 from '../../temoignage et preuves/masterclassjpg.jpg';
import img5 from '../../temoignage et preuves/preuve masterclassjpg.jpg';
import img6 from '../../temoignage et preuves/preuve.jpg';
import img7 from '../../temoignage et preuves/preuve2.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7];

const Editions = () => {
  return (
    <section className="py-24 bg-dark relative border-b border-white/5 overflow-hidden" id="editions">
      <div className="container mx-auto px-4 mb-12 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-4 uppercase text-white">Éditions Précédentes</h2>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto">
            Revivez en images les moments forts et la transformation vécue par les participants des sessions passées.
          </p>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden flex whitespace-nowrap pt-8">
         {/* Transparent gradients to fade edges */}
         <div className="absolute top-0 bottom-0 left-0 w-16 md:w-48 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none"></div>
         <div className="absolute top-0 bottom-0 right-0 w-16 md:w-48 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none"></div>

         <motion.div 
           className="flex gap-6 items-center flex-nowrap"
           animate={{ x: ["0%", "-50%"] }}
           transition={{ ease: "linear", duration: 40, repeat: Infinity }}
         >
            {/* Double array for infinite scroll effect */}
            {[...images, ...images].map((src, index) => (
               <div key={index} className="w-[300px] md:w-[450px] aspect-[4/3] shrink-0 rounded-2xl overflow-hidden border border-white/10 group relative shadow-[0_10px_30px_rgba(43,25,112,0.3)]">
                 <img src={src} alt={`Edition precedente ${index}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/20 mix-blend-overlay transition-all duration-300"></div>
               </div>
            ))}
         </motion.div>
      </div>
    </section>
  );
};
export default Editions;
