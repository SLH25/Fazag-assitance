import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { PROFILES } from "./profilesData";
import { Mail, Phone, MapPin, ArrowRight, Star, Calendar } from "lucide-react";

const MainProfile = () => {
  const visible = PROFILES.slice(0, 3);

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

  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] // easeOut
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: [0.42, 0, 0.58, 1] // easeInOut
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
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
            Nos <span className="text-emerald-500">Talents</span> Étoiles
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez les profils les plus prometteurs sélectionnés pour leur expertise et leur potentiel exceptionnel
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {visible.map((profile,) => (
            <motion.article
              key={profile.id}
              variants={cardVariants}
              whileHover="hover"
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              {/* Badge étoile pour les meilleurs profils */}
              {/* {index === 0 && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3 fill-current" />
                    Talent Star
                  </div>
                </div>
              )} */}

              {/* Header avec gradient */}
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                    {profile.image ? (
                      <img
                        src={profile.image}
                        alt={profile.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-white text-xl font-bold">
                        {profile.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= 4 ? "fill-current text-yellow-300" : "text-white/40"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-white/80 text-sm">4.8/5</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-1">{profile.name}</h3>
                <p className="text-white/90 text-sm">{profile.role}</p>
              </div>

              {/* Contenu principal */}
              <div className="p-6">
                {/* Résumé */}
                {profile.summary && (
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                    {profile.summary}
                  </p>
                )}

                {/* Informations de contact */}
                <div className="space-y-3 mb-6">
                  {profile.location && (
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <span className="text-sm">{profile.location}</span>
                    </div>
                  )}
                  
                  {profile.email && (
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-sm truncate">{profile.email}</span>
                    </div>
                  )}
                  
                  {profile.phone && (
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-sm">{profile.phone}</span>
                    </div>
                  )}
                </div>

                {/* Compétences (si disponibles) */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Compétences clés
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills?.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {profile.skills && profile.skills.length > 3 && (
                      <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-medium">
                        +{profile.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Disponibilité */}
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Disponible</span>
                  </div>
                  <span className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                    Immédiatement
                  </span>
                </div>
              </div>

              {/* Footer avec bouton */}
              <div className="px-6 pb-6">
                <button className="w-full group/btn bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25">
                  Voir le profil complet
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Section CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à Découvrir Plus de Talents ?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Accédez à notre base complète de professionnels camerounais qualifiés et trouvez le talent parfait pour votre entreprise.
            </p>
            <Link
              to="/Profils/profiles"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explorer tous les profils
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainProfile;