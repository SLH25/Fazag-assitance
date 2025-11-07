import { motion } from 'framer-motion';

const AboutTestimonial = () => {
  const TESTIMONIALS = [
    {
      name: 'Marie Dupont',
      role: 'HR Manager, TechCorp',
      quote: "Fazag Assistance nous a permis de trouver rapidement des profils compétents et fiables."
    },
    {
      name: 'John Smith',
      role: 'CEO, StartupX',
      quote: "Le processus était fluide et les talents présentés correspondaient parfaitement à nos besoins."
    },
    {
      name: 'Aisha Mbarga',
      role: 'Freelance Designer',
      quote: "J'ai trouvé des missions à l'international grâce à Fazag — expérience professionnelle transformante."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-tr from-emerald-50 via-white to-emerald-900/60 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div className="grid md:grid-cols-3 gap-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md">
              <div className="text-gray-700 dark:text-gray-200 italic mb-4">“{t.quote}”</div>
              <div className="font-semibold text-gray-900 dark:text-white">{t.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t.role}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTestimonial;
