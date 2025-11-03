import { motion } from 'framer-motion';

const MainTestimonial = () => {
  return (
    <main>
      <section className="py-16 bg-emerald-50 dark:bg-emerald-900/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Pourquoi nos clients nous choisissent</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mb-8">
              Réactivité, qualité de profil, et accompagnement — ce sont les retours les plus fréquents de nos clients.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                <div className="text-emerald-500 font-bold text-xl mb-2">Rapidité</div>
                <div className="text-gray-600 dark:text-gray-300">Nous réduisons le temps de recrutement grâce à une sélection préalable rigoureuse.</div>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                <div className="text-emerald-500 font-bold text-xl mb-2">Fiabilité</div>
                <div className="text-gray-600 dark:text-gray-300">Profils vérifiés et processus transparent pour une collaboration sereine.</div>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                <div className="text-emerald-500 font-bold text-xl mb-2">Support</div>
                <div className="text-gray-600 dark:text-gray-300">Accompagnement continu et assistance multilingue pour vos projets.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default MainTestimonial;
