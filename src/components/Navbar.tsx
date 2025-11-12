import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import LogoLight from '../assets/LogoLight.png'; 
import LogoDark from '../assets/LogoDark.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Si on a défilé de plus de 50px, active l'effet
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gestion du thème
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  // Search state and handler
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    // Use SPA navigation
    navigate(`/search?query=${encodeURIComponent(q)}`);
    setSearchQuery('');
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Profils', href: '/Profils' },
    { name: 'Témoignages', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-screen z-50 transition-all duration-500 ${
        isScrolled
          ? "shadow-md backdrop-blur bg-white/90 dark:bg-gray-900/90"
          : "bg-transparent shadow-none"
      }`}
    >
      {/* full-width navbar; replace `h-16` with `h-screen` below to make it full viewport height */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src={isDark ? LogoDark : LogoLight}
                alt="Fazag Assistance"
                className="h-20 sm:h-26 w-auto object-contain"
              />
            </a>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:underline ${
                      isActive ? 'text-emerald-500' : 'text-gray-800 dark:text-gray-100'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Côté droit */}
          <div className="flex items-center space-x-4">
            {/* Recherche (desktop) */}
            <form onSubmit={handleSearchSubmit} className="hidden md:flex  items-center">
              <label htmlFor="nav-search" className="sr-only">Rechercher</label>
              <div className="relative">
                <input
                  id="nav-search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  type="text"
                  placeholder="Rechercher..."
                  className="pl-3 pr-9 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 hover:bg-gray-100 dark:hover:border-emerald-500 hover:border-emerald-500 transition-colors"
                />
                <button type="submit" className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-800 dark:text-gray-100 hover:text-emerald-500 dark:hover:text-emerald-500 p-1">
                  <FaSearch />
                </button>
              </div>
            </form>

            {/* Bouton thème */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-800 dark:text-gray-100 hover:text-emerald-500 dark:hover:text-emerald-500 transition-all duration-300"
              aria-label="Changer le thème"
            >
              {isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>


            {/* Menu Burger Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-800 dark:text-gray-100 hover:hover:text-emerald-500 dark:hover:text-emerald-500 transition-all duration-300"
                aria-label="Menu"
              >
                {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 rounded-lg mt-2 shadow-lg">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isActive ? 'text-emerald-500' : 'text-gray-800 dark:text-gray-100'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            {/* Recherche (mobile) */}
            <div className="pt-2 px-3">
              <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2">
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  type="text"
                  placeholder="Rechercher..."
                  className="flex-1 px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-base text-gray-800 dark:text-gray-100 focus:outline-none"
                />
                <button type="submit" className="px-3 py-2 bg-emerald-500 text-white rounded-md">
                  <FaSearch />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;