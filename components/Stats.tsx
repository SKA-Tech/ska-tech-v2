
import React from 'react';
import { useLanguage } from './LanguageContext';
import { Activity, Users, Globe, Award, Zap, Code2 } from 'lucide-react';

const Stats: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: <Users />, value: "10+", label: t('stats.colleagues') },
    { icon: <Activity />, value: "4", label: t('stats.services') },
    { icon: <Code2 />, value: "100%", label: t('stats.quality') },
    { icon: <Award />, value: t('stats.focusValue'), label: t('stats.focusLabel') },
  ];

  return (
    <section id="about" className="py-32 relative bg-white dark:bg-black overflow-hidden border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      
      {/* Minimalist Blocks Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#63d0a5 1px, transparent 1px), linear-gradient(to right, #63d0a5 1px, transparent 1px)', 
             backgroundSize: '50px 50px' 
           }}>
      </div>
      
      {/* Radial fade for background to soften edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Narrative (Minimal & Clean) */}
          <div className="space-y-10">
             <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-6">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
                   {t('stats.aboutTag')}
                </div>
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                  {t('stats.title')}
                </h2>
             </div>
            
            <div className="space-y-6">
                <p className="text-xl text-slate-700 dark:text-slate-300 font-light leading-relaxed">
                  {t('stats.desc1')}
                </p>
                <p className="text-base text-slate-500 dark:text-slate-500 leading-relaxed max-w-md">
                  {t('stats.desc2')}
                </p>
            </div>
            
            <div className="pt-4">
               <div className="h-1 w-24 bg-brand rounded-full"></div>
            </div>
          </div>

          {/* Right Side: Clean Stat Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            {stats.map((stat, idx) => (
              <div key={idx} className="group relative bg-slate-50 dark:bg-zinc-900/40 border border-slate-200 dark:border-white/5 p-4 sm:p-6 md:p-8 aspect-square flex flex-col items-center justify-center text-center rounded-[2rem] hover:border-brand/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand/5 overflow-hidden">
                 
                 {/* Hover Reveal Effect */}
                 <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 
                 <div className="relative z-10 mb-3 sm:mb-4 md:mb-6 p-3 md:p-4 bg-white dark:bg-black rounded-2xl text-slate-900 dark:text-white group-hover:text-brand group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm border border-slate-100 dark:border-white/5">
                    {React.cloneElement(stat.icon as React.ReactElement<any>, { className: "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7", strokeWidth: 1.5 })}
                 </div>
                 
                 <div className="relative z-10 w-full">
                     <div className="text-xl sm:text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-1 sm:mb-2 tracking-tight group-hover:scale-105 transition-transform break-words leading-tight">{stat.value}</div>
                     <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-500">{stat.label}</div>
                 </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
