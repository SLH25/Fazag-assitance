import AboutSection from '../HomePage/AboutSection';
import { motion } from 'framer-motion';

const MainAbout = () => {
  return (
    <main>
      {/* Reuse the AboutSection from HomePage to keep content consistent */}
      <AboutSection />

      {/* Additional content: team / contact CTA */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Notre Équipe</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Une équipe dédiée d'experts en recrutement international et en gestion de talents.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Jean Dupont</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Head of Talent</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Amina Ngassa</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Recruteur Senior</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Paul Mbida</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Opérations & Partenariats</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default MainAbout;
