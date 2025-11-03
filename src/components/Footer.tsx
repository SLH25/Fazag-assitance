import { useEffect, useState, type FC } from 'react';
// Importez les icônes nécessaires pour les réseaux sociaux, le toggle thème et le bouton
import { FaLinkedin, FaTwitter, FaFacebook, FaArrowRight, FaSun, FaMoon } from 'react-icons/fa';
import LogoLight from '../assets/LogoLight.png';
import LogoDark from '../assets/LogoDark.png';

// Theme toggle component (keeps behavior consistent with Navbar)
const ThemeToggle: FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? 'Basculer en mode clair' : 'Basculer en mode sombre'}
      className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
    >
      {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
    </button>
  );
};

const Footer: FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  return (
  // Footer responsive avec support clair/sombre
  <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        
        {/* Grille principale du footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* 1. Colonne Identité & Réseaux */}
          <div className="md:col-span-2 lg:col-span-1">
            {/* LogoLight (image) */}
            <a href="/" className="inline-flex items-center gap-3">
              <img src={isDark ? LogoDark : LogoLight} alt="Fazag Assistance" className="h-10 w-auto object-contain" />
              <span className="hidden sm:inline text-lg font-semibold text-emerald-600 dark:text-emerald-400">Fazag Assistance</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Connecter les talents camerounais qualifiés aux recruteurs du monde entier.
            </p>

            {/* Icônes de réseaux sociaux et Toggle thème */}
            <div className="flex items-center space-x-4 mt-6">
              <div className="flex space-x-3">
                <a 
                  href="#" // Mettez votre lien LinkedIn ici
                  aria-label="LinkedIn"
                  className="text-gray-500 hover:text-emerald-500 transition-colors duration-300"
                >
                  <FaLinkedin size={20} />
                </a>
                <a 
                  href="#" // Mettez votre lien Twitter ici
                  aria-label="Twitter"
                  className="text-gray-500 hover:text-emerald-500 transition-colors duration-300"
                >
                  <FaTwitter size={20} />
                </a>
                <a 
                  href="#" // Mettez votre lien Facebook ici
                  aria-label="Facebook"
                  className="text-gray-500 hover:text-emerald-500 transition-colors duration-300"
                >
                  <FaFacebook size={20} />
                </a>
              </div>

              {/* Theme toggle (shared behavior with Navbar) */}
              <ThemeToggle />
            </div>
          </div>

          {/* 2. Colonne Liens Rapides (Navigation) */}
          <div>
            <h5 className="font-semibold text-white mb-4 uppercase tracking-wider">Navigation</h5>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-emerald-400 transition-colors">Accueil</a></li>
              <li><a href="/about" className="hover:text-emerald-400 transition-colors">À propos</a></li>
              <li><a href="/services" className="hover:text-emerald-400 transition-colors">Services</a></li>
              <li><a href="/talents" className="hover:text-emerald-400 transition-colors">Profils</a></li>
              <li><a href="/contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* 3. Colonne Services Clés */}
          <div>
            <h5 className="font-semibold text-white mb-4 uppercase tracking-wider">Domaines Clés</h5>
            <ul className="space-y-3">
              <li><a href="/services#it" className="hover:text-emerald-400 transition-colors">Assistance IT</a></li>
              <li><a href="/services#legal" className="hover:text-emerald-400 transition-colors">Support Juridique</a></li>
              <li><a href="/services#design" className="hover:text-emerald-400 transition-colors">Design & Infographie</a></li>
              <li><a href="/services#admin" className="hover:text-emerald-400 transition-colors">Support Administratif</a></li>
            </ul>
          </div>

          {/* 4. Colonne Newsletter (CTA) */}
          <div>
            <h5 className="font-semibold text-white mb-4 uppercase tracking-wider">Rejoignez-nous</h5>
            <p className="text-sm mb-4">Recevez les dernières nouvelles et opportunités de talents.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                aria-label="Votre email pour la newsletter"
                className="
                  flex-1 w-full px-4 py-2 rounded-md 
                  bg-gray-800 border border-gray-700 
                  text-white placeholder-gray-500 
                  focus:outline-none focus:ring-2 focus:ring-emerald-500
                "
              />
              <button 
                type="submit" 
                className="
                  bg-emerald-600 text-white p-2.5 rounded-md 
                  hover:bg-emerald-700 transition-colors duration-300
                  focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900
                "
                aria-label="S'inscrire à la newsletter"
              >
                <FaArrowRight size={16} />
              </button>
            </form>
          </div>

        </div>
        
        {/* Barre de Copyright (en bas) */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Fazag Assistance. Tous droits réservés.</p>
          <p className="mt-2">
            <a href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Politique de confidentialité</a>
            <span className="mx-2">|</span>
            <a href="/terms-of-service" className="hover:text-emerald-400 transition-colors">Conditions d'utilisation</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;