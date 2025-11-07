import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';

const HeroProfile = () => {
  return (
    <header className="bg-gradient-to-br from-emerald-50 via-white to-emerald-900/60 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mx-auto inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white mb-6">
            <FaUser />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Découvrez nos <span className="text-emerald-500">Profils</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Accédez aux meilleurs talents camerounais sélectionnés par notre équipe — développeurs, designers, juristes, et plus.
          </p>
        </motion.div>
      </div>
    </header>
  );
};

export default HeroProfile;
