
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  const { t } = useLanguage();

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') }
  ];

  return (
    <section className="py-24 relative bg-slate-50 dark:bg-black transition-colors duration-300">
      
      {/* Smooth Transition Gradients */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent dark:from-black dark:to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent dark:from-black dark:to-transparent pointer-events-none"></div>

      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-center mb-12 text-slate-900 dark:text-white">{t('faq.title')}</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="group rounded-2xl bg-white dark:bg-white/5 px-6 transition-all duration-200 hover:shadow-lg dark:hover:bg-white/10 border border-slate-100 dark:border-white/5">
              <button 
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex justify-between items-center py-6 text-left"
              >
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-brand-dark dark:group-hover:text-brand transition-colors">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 dark:text-slate-500 transition-transform duration-200 ${open === idx ? 'rotate-180 text-brand-dark dark:text-brand' : ''}`} />
              </button>
              {open === idx && (
                <div className="pb-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
