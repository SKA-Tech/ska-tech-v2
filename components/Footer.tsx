
import React from 'react';
import { useLanguage } from './LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="relative bg-slate-50 dark:bg-black pt-20 pb-10 transition-colors duration-300">
      
      {/* Smooth Transition Gradient */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent dark:from-black dark:to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 text-smaller relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
          <div className="col-span-2 space-y-4">
            <span className="text-lg font-extrabold tracking-tighter text-slate-900 dark:text-white">SKA-Tech</span>
            <p className="text-slate-600 dark:text-slate-600 text-[12px] leading-relaxed max-w-xs">
              {t('footer.desc')}
            </p>
          </div>
          
          <div>
             <h4 className="text-slate-900 dark:text-white font-bold mb-4 text-[12px] uppercase tracking-wider">{t('footer.product')}</h4>
             <ul className="space-y-3 text-[12px] text-slate-600">
               <li><a href="#" className="hover:text-brand-dark dark:hover:text-brand transition-colors">{t('nav.services')}</a></li>
               <li><a href="#" className="hover:text-brand-dark dark:hover:text-brand transition-colors">{t('courses.hub')}</a></li>
               <li><a href="#" className="hover:text-brand-dark dark:hover:text-brand transition-colors">{t('footer.links.components')}</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-slate-900 dark:text-white font-bold mb-4 text-[12px] uppercase tracking-wider">{t('footer.company')}</h4>
             <ul className="space-y-3 text-[12px] text-slate-600">
               <li><a href="#" className="hover:text-brand-dark dark:hover:text-brand transition-colors">{t('nav.about')}</a></li>
               <li><a href="#" className="hover:text-brand-dark dark:hover:text-brand transition-colors">{t('footer.links.careers')}</a></li>
               <li><a href="#" className="hover:text-brand-dark dark:hover:text-brand transition-colors">{t('footer.links.press')}</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-slate-900 dark:text-white font-bold mb-4 text-[12px] uppercase tracking-wider">{t('footer.connect')}</h4>
             <ul className="space-y-3 text-[12px] text-slate-600">
               <li><a href="#" className="hover:text-brand-dark dark:hover:text-brand transition-colors">Discord</a></li>
               <li><a href="#" className="hover:text-brand-dark dark:hover:text-brand transition-colors">LinkedIn</a></li>
               <li><a href="#" className="hover:text-brand-dark dark:hover:text-brand transition-colors">Twitter</a></li>
             </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-200 dark:border-white/5 text-[10px] text-slate-500 dark:text-slate-700 font-bold uppercase tracking-widest">
          <p>{t('footer.rights')}</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('footer.terms')}</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('footer.security')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
