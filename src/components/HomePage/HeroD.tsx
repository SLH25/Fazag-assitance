import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
// Icônes pour les services et le processus
import { 
  FaCode, 
  FaPaintBrush, 
  FaBalanceScale, 
  FaUserClock, 
  FaChartArea, 
  FaHeadset,
  FaClipboardList,
  FaSearch,
  FaHandshake
} from 'react-icons/fa';

// Données statiques pour les services
const SERVICES = [
  {
    icon: FaCode,
    title: "Assistance IT & Développement",
    description: "Développeurs web/mobile, administrateurs système et support technique qualifiés."
  },
  {
    icon: FaPaintBrush,
    title: "Design & Infographie",
    description: "Créatifs pour vos logos, maquettes UI/UX, et supports de communication visuelle."
  },
  {
    icon: FaBalanceScale,
    title: "Support Juridique",
    description: "Assistants juridiques pour la relecture de contrats, la recherche et la conformité."
  },
  {
    icon: FaUserClock,
    title: "Assistance Administrative",
    description: "Gestion d'agenda, saisie de données, et support administratif pour optimiser votre temps."
  },
  {
    icon: FaChartArea,
    title: "Marketing Digital",
    description: "Spécialistes en SEO, gestion de réseaux sociaux, et création de contenu."
  },
  {
    icon: FaHeadset,
    title: "Service Client",
    description: "Agents de support client bilingues pour une satisfaction client irréprochable."
  }
] as const;

// Données statiques pour le processus
const PROCESS = [
  {
    icon: FaClipboardList,
    title: "1. Analyse des Besoins",
    description: "Nous définissons ensemble vos besoins précis et le profil de talent que vous recherchez."
  },
  {
    icon: FaSearch,
    title: "2. Sélection & Vérification",
    description: "Nous identifions et validons les meilleurs profils de notre réseau camerounais."
  },
  {
    icon: FaHandshake,
    title: "3. Mise en Relation",
    description: "Nous facilitons la rencontre et l'intégration du talent au sein de votre équipe."
  }
] as const;

const ServicesSection = () => {

  // Variantes d'animation (copiées de AboutSection)
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

  return (
    // Style de section cohérent (alternance de couleur : bg-white)
    <section id="services" className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* En-tête de section (même logique que AboutSection) */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nos <span className="text-emerald-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Une gamme complète d'assistance virtuelle pour propulser votre entreprise.
          </p>
        </motion.div>

        {/* Grille des Services (même logique que la grille des Valeurs) */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              // Style de carte cohérent (bg, shadow, hover)
              className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ y: -5 }} // Effet de survol identique
            >
              {/* Style d'icône identique */}
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                <service.icon className="text-white text-2xl" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Sous-section : Notre Processus (Similaire à la section "Valeurs") */}
        <motion.div
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Notre Processus en 3 Étapes
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Simplicité, transparence et efficacité pour trouver votre talent idéal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROCESS.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                  <step.icon className="text-white text-2xl" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;