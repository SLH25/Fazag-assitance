import { motion } from 'framer-motion';
// import { FaCog } from 'react-icons/fa';

const HeroService = () => {
  return (
    <header className="bg-gradient-to-br from-emerald-50 via-white to-emerald-900/60 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/60">
    {/* <header className="bg-gradient-to-r from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800"> */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="text-center ">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Nos <span className="text-emerald-500">Services</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Une gamme complète de services pour accompagner les entreprises et les talents : recrutement, support, formation et plus.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition"
                aria-label="Voir les services"
              >
                Voir les services
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-emerald-500 text-emerald-500 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 dark:hover:bg-emerald-900 transition"
                aria-label="Contactez-nous"
              >
                Contacter un expert
              </a>
            </div>
          </div>

          {/* <div className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-emerald-400 to-blue-500 h-72 flex items-center justify-center">
              <FaCog className="text-white text-4xl opacity-90" />
            </div>
          </div> */}
        </motion.div>
      </div>
    </header>
  );
};

export default HeroService;
