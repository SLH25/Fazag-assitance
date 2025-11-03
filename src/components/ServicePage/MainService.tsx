import HeroD from '../HomePage/HeroD';
import { motion } from 'framer-motion';

const MainService = () => {
  return (
    <main>
      {/* Réutilise le composant HeroD (services détaillés) comme contenu principal */}
      <HeroD />

      {/* Petite section additionnelle CTA */}
      <motion.section
        className="py-16 bg-emerald-50 dark:bg-emerald-900/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Besoin d'un service sur mesure ?</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Contactez notre équipe pour une offre personnalisée et un accompagnement dédié.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition">
            Contacter un expert
          </a>
        </div>
      </motion.section>
    </main>
  );
};

export default MainService;
