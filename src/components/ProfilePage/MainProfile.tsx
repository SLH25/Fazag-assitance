import { motion } from 'framer-motion';

const profiles = [
  { name: 'Awa Diallo', role: 'Développeuse Frontend', location: 'Dakar, SN' },
  { name: 'Jean-Pierre Mbaye', role: 'Consultant Juridique', location: 'Dakar, SN' },
  { name: 'Fatou Sarr', role: 'UI/UX Designer', location: 'Dakar, SN' }
];

const MainProfile = () => {
  return (
    <main className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Talents récents</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map((p, i) => (
              <article key={i} className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
                <div className="h-36 w-full bg-gray-200 dark:bg-gray-700 rounded-md mb-4" />
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{p.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{p.role}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{p.location}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default MainProfile;
