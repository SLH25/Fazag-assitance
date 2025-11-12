import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  FaGlobe, 
  FaUsers, 
  FaChartLine, 
  FaAward,
  FaArrowRight,
  FaCheckCircle,
  FaLightbulb,
  FaHandshake
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Données statiques
const KEY_FEATURES = [
  {
    icon: FaGlobe,
    title: "Portée Internationale",
    description: "Connectez-vous avec des recruteurs du monde entier"
  },
  {
    icon: FaUsers,
    title: "Réseau de Talents",
    description: "Accédez à des profils camerounais qualifiés et vérifiés"
  },
  {
    icon: FaChartLine,
    title: "Croissance Garantie",
    description: "Des résultats mesurables pour votre entreprise"
  },
  {
    icon: FaAward,
    title: "Excellence",
    description: "Des standards de qualité internationaux"
  }
] as const;

const SUCCESS_METRICS = [
  { number: "98%", label: "Taux de satisfaction client", suffix: "de satisfaction" },
  { number: "24h", label: "Délai moyen de mise en relation", suffix: "de délai" },
  { number: "500+", label: "Talents actifs sur la plateforme", suffix: "talents" },
  { number: "50+", label: "Pays partenaires", suffix: "pays" }
] as const;

const MainService = () => {
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
        ease: [0.25, 0.46, 0.45, 0.94]
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
        ease: [0.25, 0.46, 0.45, 0.94]
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
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-tr from-emerald-50 via-white to-emerald-900/60 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Colonne texte */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-400/30 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FaLightbulb className="text-emerald-500 text-sm" />
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                Solution innovante
              </span>
            </motion.div>

            {/* Titre principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Des services qui{' '}
              <span className="text-emerald-500 bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">
                transforment
              </span>{' '}
              votre vision en réalité
            </h1>

            {/* Sous-titre */}
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Chez Fazag Assistance, nous révolutionnons le recrutement en créant des ponts durables 
              entre l'excellence camerounaise et les opportunités mondiales. 
              Notre approche sur mesure garantit des résultats exceptionnels.
            </p>

            {/* Points clés */}
            <div className="space-y-4 mb-8">
              {[
                "Accès à des talents pré-sélectionnés et vérifiés",
                "Processus de recrutement accéléré et simplifié",
                "Support continu tout au long de la collaboration",
                "Sécurité et confidentialité garanties"
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* Boutons CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contact"
                className="group bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-emerald-500/25 flex items-center justify-center gap-3"
              >
                Démarrer 
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/about"
                className="group border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <FaHandshake className="text-sm" />
                Découvrir notre approche
              </Link>
            </motion.div>
          </motion.div>

          {/* Colonne visuelle */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Carte statistiques */}
            <div className="relative bg-gradient-to-br from-emerald-500 to-green-500 rounded-3xl p-8 text-white shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Impact Mesurable</h3>
                <p className="text-emerald-100">Des résultats concrets pour nos clients</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {SUCCESS_METRICS.map((metric, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold mb-1">{metric.number}</div>
                    <div className="text-xs text-emerald-100">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Éléments décoratifs */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
            </div>

            {/* Points flottants */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-purple-500/20 rounded-full"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-orange-500/20 rounded-full"></div>
          </motion.div>
        </div>

        {/* Section Caractéristiques principales */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Pourquoi Choisir{' '}
              <span className="text-emerald-500">Fazag Assistance</span> ?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Une approche unique qui fait la différence dans le recrutement international
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {KEY_FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
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
                Une Vision Qui Transcende les Frontières
              </h3>
              <p className="text-lg opacity-90 leading-relaxed">
                Nous croyons en un monde où chaque talent camerounais peut accéder aux meilleures 
                opportunités internationales. Notre mission est de briser les barrières géographiques 
                et de créer des connexions qui propulsent les carrières et transforment les entreprises.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                <FaUsers className="text-3xl mx-auto mb-2 opacity-80" />
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-sm opacity-90">Opportunités créées</div>
              </div>
              <div className="text-center p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                <FaChartLine className="text-3xl mx-auto mb-2 opacity-80" />
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm opacity-90">Taux de réussite</div>
              </div>
              <div className="text-center p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                <FaHandshake className="text-3xl mx-auto mb-2 opacity-80" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-90">Engagement</div>
              </div>
              <div className="text-center p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                <FaAward className="text-3xl mx-auto mb-2 opacity-80" />
                <div className="text-2xl font-bold">2024</div>
                <div className="text-sm opacity-90">Excellence continue</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainService;
