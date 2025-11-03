import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

const HeroContact = () => {
  return (
    <header className="bg-gradient-to-r from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mx-auto inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white mb-6">
            <FaEnvelope />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Contactez <span className="text-emerald-500">Fazag Assistance</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Vous avez une question, un projet ou besoin d'un accompagnement ? Écrivez-nous et nous vous répondons rapidement.
          </p>
        </motion.div>
      </div>
    </header>
  );
};

export default HeroContact;
