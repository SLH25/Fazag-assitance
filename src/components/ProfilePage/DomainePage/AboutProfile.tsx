import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaSearch, FaArrowRight } from 'react-icons/fa';
import { ALL_DOMAINS } from './domainsData';

const AboutProfile = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDomains = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return ALL_DOMAINS.filter(domain =>
      domain.title.toLowerCase().includes(query) ||
      domain.desc.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Si pas de recherche, on montre juste les 3 premiers domaines
  const displayedDomains = searchQuery === '' ? ALL_DOMAINS.slice(0, 3) : filteredDomains;

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 12 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Profils par domaine</h2>
              <p className="text-gray-600 dark:text-gray-300">Explorez des catégories de talents soigneusement sélectionnées.</p>
            </div>
            <Link
              to="/talents/domains"
              className="inline-flex items-center mt-4 sm:mt-0 text-emerald-500 hover:text-emerald-600 font-medium"
            >
              Voir tous les domaines
              <FaArrowRight className="ml-2" />
            </Link>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un domaine..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {displayedDomains.map((domain, i) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-md bg-emerald-500 text-white flex items-center justify-center mb-4">
                  <domain.icon />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{domain.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{domain.desc}</p>
              </motion.div>
            ))}
          </div>

          {displayedDomains.length === 0 && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              Aucun domaine ne correspond à votre recherche.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutProfile;
