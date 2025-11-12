import { motion } from 'framer-motion';
import { ALL_DOMAINS } from './domainsData';

const AllDomainsPage = () => {
  return (
    <div className="min-h-screen py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Tous les domaines</h1>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_DOMAINS.map((domain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-md bg-emerald-500 text-white flex items-center justify-center mb-4">
                <domain.icon className="text-xl" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{domain.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{domain.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllDomainsPage;