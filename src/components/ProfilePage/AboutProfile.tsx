import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaBalanceScale } from 'react-icons/fa';

const AboutProfile = () => {
  const HIGHLIGHTS = [
    { title: 'Développement', icon: FaCode, desc: 'Développeurs Full-Stack, Frontend et Backend.' },
    { title: 'Design', icon: FaPaintBrush, desc: 'UI/UX designers et infographistes.' },
    { title: 'Juridique', icon: FaBalanceScale, desc: 'Assistants juridiques bilingues.' }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Profils par domaine</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">Explorez des catégories de talents soigneusement sélectionnées.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {HIGHLIGHTS.map((h, i) => (
              <div key={i} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow">
                <div className="w-12 h-12 rounded-md bg-emerald-500 text-white flex items-center justify-center mb-4">
                  <h.icon />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{h.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{h.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutProfile;
