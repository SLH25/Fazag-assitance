import { motion } from 'framer-motion';
import { FaUsers } from 'react-icons/fa';

const HeroAbout = () => {
  return (
    <header className="bg-gradient-to-r from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-8 items-center"
        >
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              À propos de <span className="text-emerald-500">Fazag Assistance</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Nous mettons en relation les talents camerounais avec des opportunités internationales.
              Notre mission : faciliter l'accès aux meilleures carrières tout en accompagnant les recruteurs.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start gap-4">
              <a
                href="#about"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition"
                aria-label="En savoir plus"
              >
                En savoir plus
              </a>
              <a
                href="/talents"
                className="inline-flex items-center gap-2 border border-emerald-500 text-emerald-500 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 dark:hover:bg-emerald-900 transition"
                aria-label="Voir les talents"
              >
                <FaUsers /> Voir les talents
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-emerald-400 to-blue-500 h-72 flex items-center justify-center">
              <span className="text-white font-semibold">Illustration / Image</span>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default HeroAbout;
