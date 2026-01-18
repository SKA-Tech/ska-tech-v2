
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    // Sync state with DOM on mount
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const languages = [
    { code: 'ru', label: 'РУС' },
    { code: 'en', label: 'ENG' },
    { code: 'tj', label: 'ТОҶ' },
  ];

  const navLinks = [
    { name: t('nav.services'), href: '/#services' },
    { name: t('nav.courses'), href: '/#courses' },
    { name: t('nav.about'), href: '/#about' },
    { name: t('nav.contact'), href: '/#contact' },
  ];

  return (
    <>
      {/* Navbar - Z-100 */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 dark:bg-black/40 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14 items-center">
            
            {/* Logo */}
            <div className="flex items-center space-x-10">
              <Link 
                to="/" 
                className="text-lg font-extrabold tracking-tighter text-slate-900 dark:text-white relative z-[110]" 
                onClick={() => setIsOpen(false)}
              >
                SKA-Tech
              </Link>
              
              {/* Desktop Nav */}
              <div className="hidden md:flex items-center space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-[13px] font-medium text-slate-600 dark:text-slate-400 hover:text-brand-dark dark:hover:text-brand transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <div className="relative">
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center text-slate-500 dark:text-slate-400 text-[11px] font-medium hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Globe className="w-4 h-4 mr-1.5 opacity-80" />
                  <span className="opacity-80 uppercase mr-1">{languages.find(l => l.code === language)?.label || 'РУС'}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
                </button>

                {isLangOpen && (
                  <div className="absolute top-full right-0 mt-2 w-24 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 rounded-xl shadow-xl overflow-hidden py-1 animate-in fade-in zoom-in-95 duration-200">
                    {languages.map((langItem) => (
                      <button
                        key={langItem.code}
                        onClick={() => {
                          setLanguage(langItem.code as any);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-[11px] font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors ${language === langItem.code ? 'text-brand-dark dark:text-brand' : 'text-slate-600 dark:text-slate-400'}`}
                      >
                        {langItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="tel:+79993227878"
                className="text-[13px] font-medium text-slate-600 dark:text-slate-300 hover:text-brand-dark dark:hover:text-brand transition-colors"
              >
                +7 999 322-78-78
              </a>
              <a href="/#contact" className="bg-slate-900 dark:bg-brand text-white dark:text-black px-4 py-1.5 rounded-lg text-[13px] font-bold hover:opacity-90 transition-opacity">
                {t('nav.getStarted')}
              </a>
            </div>

            {/* Mobile Toggle Button - Acts as Open */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={() => setIsOpen(true)} 
                className="p-2 -mr-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu - Z-Index 150 to stay above Navbar (Z-100) and blur it */}
      <div 
         className={`fixed inset-0 z-[150] md:hidden transition-all duration-300 ease-out ${isOpen ? 'visible' : 'invisible delay-300'}`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/20 backdrop-blur-md transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={() => setIsOpen(false)}
        />
        
        {/* Drawer Panel - Side Drawer (Right Aligned) */}
        <div 
          className={`absolute top-0 bottom-0 right-0 w-full max-w-[320px] bg-white/90 dark:bg-black/90 backdrop-blur-xl border-l border-slate-200 dark:border-white/5 shadow-2xl transition-transform duration-300 cubic-bezier(0.16, 1, 0.3, 1) ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
           {/* Header inside drawer (to align Close button with navbar height) */}
           <div className="flex justify-end items-center h-14 px-4 sm:px-6">
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 -mr-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              >
                <X size={24} />
              </button>
           </div>

           {/* Content Container */}
           <div className="flex flex-col h-[calc(100%-3.5rem)] px-6 pb-6 overflow-y-auto">
               
               <div className="flex-1 mt-4">
                  <div className="space-y-1">
                    {navLinks.map((link) => (
                      <a 
                        key={link.name} 
                        href={link.href} 
                        className="block text-xl font-bold text-slate-800 dark:text-white py-4 border-b border-slate-100 dark:border-white/5 last:border-0 hover:text-brand-dark dark:hover:text-brand transition-colors" 
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
               </div>
               
               {/* Footer Actions */}
               <div className="mt-auto space-y-6 pt-6 border-t border-slate-100 dark:border-white/5">
                   
                   {/* Mobile Language & Theme Row */}
                   <div className="flex items-center justify-between">
                      {/* Language */}
                      <div className="flex gap-2">
                        {languages.map(l => (
                           <button 
                             key={l.code}
                             onClick={() => setLanguage(l.code as any)}
                             className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                               language === l.code 
                                ? 'bg-brand text-black border-brand' 
                                : 'border-slate-200 dark:border-white/10 text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5'
                             }`}
                           >
                             {l.label}
                           </button>
                        ))}
                      </div>

                      {/* Theme Toggle - Icon Only */}
                      <button 
                        onClick={toggleTheme} 
                        className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors"
                        aria-label="Toggle theme"
                      >
                         {isDark ? <Moon size={20} /> : <Sun size={20} />}
                      </button>
                   </div>

                   <div className="space-y-3">
                     <a href="tel:+79993227878" className="block text-center text-lg font-bold text-slate-900 dark:text-white hover:text-brand-dark dark:hover:text-brand transition-colors">
                        +7 999 322-78-78
                     </a>
                     <a 
                       href="/#contact" 
                       className="block w-full bg-slate-900 dark:bg-brand text-white dark:text-black py-4 rounded-xl font-bold text-center shadow-lg shadow-slate-900/10 dark:shadow-brand/20 active:scale-[0.98] transition-all"
                       onClick={() => setIsOpen(false)}
                     >
                       {t('nav.getStarted')}
                     </a>
                   </div>
               </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
