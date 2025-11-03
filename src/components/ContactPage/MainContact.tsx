// import { motion } from 'framer-motion';

const MainContact = () => {
  return (
    <main>
      <section className="py-16 bg-emerald-50 dark:bg-emerald-900/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Nos coordonnées</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Email: <a href="mailto:contact@fazag.com" className="text-emerald-500">contact@fazag.com</a></p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Téléphone: <a href="tel:+237000000000" className="text-emerald-500">+237 000 000 000</a></p>
            <p className="text-gray-600 dark:text-gray-300">Adresse: Douala, Cameroun</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Horaires</h4>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>Lundi - Vendredi: 9h - 18h</li>
              <li>Samedi: 9h - 13h</li>
              <li>Dimanche: Fermé</li>
            </ul>

            <div className="mt-6 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 h-48 flex items-center justify-center">
              <span className="text-gray-600 dark:text-gray-300">Carte / Map (placeholder)</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContact;
