import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FaBullseye, FaHandshake, FaRocket, FaUsers, FaChartLine, FaGlobe } from 'react-icons/fa';

// Données statiques
const VALUES = [
  {
    icon: FaBullseye,
    title: "Mission",
    description: "Connecter les talents camerounais qualifiés avec les meilleures opportunités internationales."
  },
  {
    icon: FaHandshake,
    title: "Engagement",
    description: "Garantir une collaboration transparente et durable entre talents et recruteurs."
  },
  {
    icon: FaRocket,
    title: "Innovation",
    description: "Utiliser les dernières technologies pour optimiser le processus de recrutement."
  }
] as const;

const STATS = [
  { number: "2+", label: "Années d'expérience" },
  { number: "15+", label: "Domaines d'expertise" },
  { number: "98%", label: "Clients satisfaits" },
  { number: "24/7", label: "Support disponible" }
] as const;

const TEAM_HIGHLIGHTS = [
  "Experts en recrutement international",
  "Connaissance approfondie du marché camerounais",
  "Réseau étendu de recruteurs étrangers",
  "Processus de sélection rigoureux"
];

const AboutSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInLeft: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInRight: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-tr from-emerald-50 via-white to-emerald-900/60 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* En-tête de section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            À propos de <span className="text-emerald-500">Fazag Assistance</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Leader dans la mise en relation des talents camerounais avec les recruteurs internationaux
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Colonne texte */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Votre pont vers l'opportunité mondiale
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Fondée avec la vision de démocratiser l'accès aux opportunités internationales, 
              <strong className="text-emerald-500"> Fazag Assistance</strong> s'est imposée comme 
              le partenaire de confiance pour les talents camerounais et les recruteurs étrangers.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Notre plateforme révolutionne le recrutement en connectant directement les 
              professionnels qualifiés du Cameroun avec des entreprises à la recherche 
              d'expertise, de fiabilité et d'innovation.
            </p>

            {/* Points forts de l'équipe */}
            <div className="space-y-4">
              {TEAM_HIGHLIGHTS.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Colonne stats */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-emerald-500 mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Section Valeurs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Nos Valeurs Fondamentales
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Les principes qui guident chaque décision et chaque action chez Fazag Assistance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-8 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                  <value.icon className="text-white text-2xl" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Vision */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl p-8 sm:p-12 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <FaGlobe className="text-6xl mb-6 opacity-80" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Notre Vision pour l'Avenir
              </h3>
              <p className="text-lg opacity-90 leading-relaxed">
                Nous aspirons à devenir la plateforme de référence pour le recrutement 
                de talents africains à l'échelle mondiale, en créant des ponts durables 
                entre le potentiel camerounais et les opportunités internationales.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                <FaUsers className="text-3xl mx-auto mb-2 opacity-80" />
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-sm opacity-90">Talents à former</div>
              </div>
              <div className="text-center p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                <FaChartLine className="text-3xl mx-auto mb-2 opacity-80" />
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm opacity-90">Pays partenaires</div>
              </div>
              <div className="text-center p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                <FaHandshake className="text-3xl mx-auto mb-2 opacity-80" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-90">Satisfaction client</div>
              </div>
              <div className="text-center p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                <FaRocket className="text-3xl mx-auto mb-2 opacity-80" />
                <div className="text-2xl font-bold">2025</div>
                <div className="text-sm opacity-90">Leader africain</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;