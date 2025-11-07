import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  FaSearch, 
  FaUserTie, 
  FaHandshake, 
  FaRocket, 
  FaShieldAlt, 
  FaHeadset,
  FaArrowRight,
  FaCheck
} from 'react-icons/fa';

// Données statiques
const SERVICES = [
  {
    icon: FaSearch,
    title: "Recrutement sur Mesure",
    description: "Nous trouvons les talents camerounais les plus qualifiés selon vos besoins spécifiques.",
    features: [
      "Sélection rigoureuse des CV",
      "Tests techniques et comportementaux",
      "Présélection des meilleurs profils",
      "Entretiens préalables"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: FaUserTie,
    title: "Mise en Relation",
    description: "Connectez-vous directement avec des professionnels vérifiés et compétents.",
    features: [
      "Profils vérifiés et authentifiés",
      "Compétences certifiées",
      "Disponibilités confirmées",
      "Support de communication"
    ],
    color: "from-emerald-500 to-green-500"
  },
  {
    icon: FaHandshake,
    title: "Accompagnement RH",
    description: "Un suivi complet de l'intégration à la gestion de la collaboration.",
    features: [
      "Contrats et formalités",
      "Intégration personnalisée",
      "Suivi des performances",
      "Gestion des paiements"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: FaRocket,
    title: "Développement Talent",
    description: "Formation et montée en compétence de vos talents pour l'excellence.",
    features: [
      "Plans de formation sur mesure",
      "Mentorat professionnel",
      "Certifications internationales",
      "Évolution de carrière"
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: FaShieldAlt,
    title: "Sécurité & Confidentialité",
    description: "Protection totale des données et confidentialité garantie.",
    features: [
      "Données cryptées",
      "Contrats de confidentialité",
      "Conformité RGPD",
      "Sécurité des transactions"
    ],
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: FaHeadset,
    title: "Support 24/7",
    description: "Assistance continue pour talents et recruteurs à chaque étape.",
    features: [
      "Support multilingue",
      "Résolution de problèmes",
      "Médiation professionnelle",
      "Assistance technique"
    ],
    color: "from-teal-500 to-emerald-500"
  }
] as const;

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Analyse des Besoins",
    description: "Évaluation approfondie de vos besoins en recrutement"
  },
  {
    step: "02",
    title: "Sélection des Talents",
    description: "Recherche et sélection des profils les plus adaptés"
  },
  {
    step: "03",
    title: "Mise en Relation",
    description: "Organisation des entretiens et tests techniques"
  },
  {
    step: "04",
    title: "Accompagnement",
    description: "Suivi et support pendant toute la collaboration"
  }
] as const;

const ServicesSection = () => {
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

  // const itemVariants: Variants = {
  //   hidden: { y: 50, opacity: 0 },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       duration: 0.6,
  //       ease: "easeOut"
  //     }
  //   }
  // };

  const cardVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
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
            Nos <span className="text-emerald-500">Services</span> Complets
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Une gamme complète de services pour connecter les talents camerounais aux meilleures opportunités internationales
          </p>
        </motion.div>

        {/* Grille des services */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              {/* Header avec gradient */}
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <service.icon className="text-3xl" />
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaCheck className="text-emerald-600 dark:text-emerald-400 text-xs" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full group/btn bg-gray-50 dark:bg-gray-700 hover:bg-emerald-500 dark:hover:bg-emerald-600 text-gray-700 dark:text-gray-300 hover:text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                  En savoir plus
                  <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Processus de travail */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-emerald-50 dark:from-gray-800 dark:to-emerald-900/20 rounded-3xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Notre Processus en 4 Étapes
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Un processus éprouvé pour garantir des recrutements réussis et durables
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto group-hover:bg-emerald-600 transition-colors duration-300">
                    <span className="text-white text-2xl font-bold">{step.step}</span>
                  </div>
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-1/2 w-full h-0.5 bg-emerald-200 dark:bg-emerald-800 transform -translate-y-1/2 -translate-x-1/2"></div>
                  )}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Prêt à Découvrir Nos Services ?
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Rejoignez les entreprises qui font confiance à Fazag Assistance pour leurs recrutements internationaux
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                Commencer maintenant
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Contacter un expert
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;