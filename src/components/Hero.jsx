import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, BookOpen, Users } from 'lucide-react';
import heroImage from '../../Affiches deja concus/assets/Affiche demo.jpeg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden border-b border-white/5">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto max-w-6xl z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-8"
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium text-white/80">Masterclass En Présentiel</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-heading leading-[1.1] tracking-tight uppercase">
            Crée des affiches <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">
              d’église
            </span> qui attirent et impactent.
          </h1>

          <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-xl font-light">
            Découvre la méthode étape par étape pour transformer tes concepts visuels en outils puissants, capables de remplir tes événements.
          </p>

          <div className="grid grid-cols-2 gap-4 max-w-md">
            <div className="flex items-center space-x-3 bg-white/5 rounded-xl p-4 border border-white/10">
              <Calendar className="text-secondary w-6 h-6" />
              <div>
                <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Date</p>
                <p className="font-semibold text-sm">Sam. 18 Avril 2026</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/5 rounded-xl p-4 border border-white/10">
              <MapPin className="text-primary w-6 h-6" />
              <div>
                <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Lieu</p>
                <p className="font-semibold text-sm">Église Kalikak</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <a 
              href="#tarifs" 
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-primary hover:bg-green-500 text-dark font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(157,243,4,0.4)] cursor-pointer"
            >
              <span>Réserver ma place</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a 
              href="https://chat.whatsapp.com/Kj6nPPgj2IX4y63XjC45Cz" 
              target="_blank" rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-transparent border border-secondary hover:bg-secondary/20 text-white font-medium px-8 py-4 rounded-xl transition-all cursor-pointer"
            >
              <Users className="w-5 h-5 text-secondary" />
              <span>Rejoindre le groupe de formation gratuit</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Visual / Speaker */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative mt-8 lg:mt-0"
        >
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(43,25,112,0.5)] border border-secondary/30 group bg-neutral-900 flex items-center justify-center">
            {/* Real Image */}
            <img src={heroImage} alt="Affiche Démo" className="w-full h-full object-cover" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent z-10"></div>
            
            {/* Price Badge Removed */}
            
            <div className="absolute bottom-8 left-8 z-20">
              <div className="bg-white text-dark font-black text-xl uppercase tracking-widest px-4 py-2 rounded-lg inline-block shadow-lg">Design Church</div>
            </div>
          </div>

          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 bg-dark/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl z-30"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <BookOpen className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="font-bold font-heading text-white text-lg uppercase">Plus de 200 Affiches</p>
                <p className="text-xs text-white/60">réalisées par le formateur</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
