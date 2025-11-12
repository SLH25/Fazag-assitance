import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaPlay, FaArrowRight} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Heroimage from '../../assets/Heroimage.jpeg'; // Assurez-vous d'avoir une image appropriée

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // cleanup: unobserve the element and disconnect the observer to avoid leaks
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      observer.disconnect();
    };
  }, []);

  // Animation variants avec des types valides
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
  ref={ref}
  className="relative min-h-screen pt-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-900/60 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/60 flex items-center justify-center px-4 sm:px-6 lg:px-8"
>
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Texte Content */}
        <div className="text-center lg:text-left">
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Connectons les{' '}
            <span className="text-emerald-500">talents camerounais</span>{' '}
            au monde
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl"
          >
            Bienvenue sur le site officiel de Fazag Assistance, la passerelle entre l’expertise camerounaise et les besoins des entreprises à l’international.

          </motion.p>

          <motion.div
            variants={buttonVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link to="/services" className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-emerald-500/25 flex items-center justify-center gap-3">
              <span>Découvrir nos services</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
            </Link>

            <Link to="/Profils" className="group border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 backdrop-blur-sm">
              <FaPlay className="text-sm" aria-hidden="true" />
              <span>Voir les Profils</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-500 dark:text-emerald-400">500+</div>
              <div className="text-gray-600 dark:text-gray-400">Talents qualifiés</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-500 dark:text-emerald-400">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Entreprises partenaires</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-500 dark:text-emerald-400">95%</div>
              <div className="text-gray-600 dark:text-gray-400">Taux de satisfaction</div>
            </div>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          variants={imageVariants}
          className="relative"
        >
          <div className="relative z-10">
            {/* Image principale - Remplacez par votre image */}
            <div className="w-full h-80 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl shadow-2xl flex items-center justify-center">
              {/* <span className="text-white text-lg font-semibold">Image de collaboration professionnelle</span> */}
              <img src={Heroimage} alt="Collaboration professionnelle" className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
            </div>
            
            {/* Éléments flottants */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg z-20"
            >
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center">
                <span className="text-emerald-500 font-bold text-xl">💼</span>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg z-20"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-blue-500 font-bold text-xl">🌍</span>
              </div>
            </motion.div>

            {/* Background décoratif */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl opacity-10 blur-xl -z-10"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-emerald-500 dark:border-emerald-400 rounded-full flex justify-center">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-3 bg-emerald-500 dark:bg-emerald-400 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;