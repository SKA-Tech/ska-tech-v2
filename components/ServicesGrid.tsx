
import React from 'react';
import { Globe, Shield, Smartphone, Database, CheckCircle2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const ServicesGrid: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 sm:py-32 px-6 max-w-7xl mx-auto bg-white dark:bg-black transition-colors duration-300">
      <div className="text-center max-w-3xl mx-auto mb-20">
         <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white mb-6">
          {t('services.title')} <span className="text-brand-dark dark:text-brand">{t('services.titleHighlight')}</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed">
          {t('services.desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[380px]">
        
        {/* Card 1: Web Ecosystems (Span 2) */}
        <div className="md:col-span-2 group relative overflow-hidden rounded-[2rem] bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-white/5 p-8 transition-all hover:border-slate-300 dark:hover:border-white/10 hover:shadow-lg dark:hover:shadow-none min-h-[380px] md:min-h-0">
           <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 p-3 bg-white dark:bg-white/5 w-fit rounded-xl border border-slate-100 dark:border-white/5 shadow-sm">
                <Globe className="w-6 h-6 text-brand-dark dark:text-brand" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{t('services.card1Title')}</h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-md text-base leading-relaxed mb-8">
                  {t('services.card1Desc')}
              </p>
              
              {/* Visual: Mock Browser/Terminal */}
              <div className="mt-auto w-full h-48 bg-white dark:bg-black rounded-t-xl border border-slate-200 dark:border-white/10 shadow-sm overflow-hidden flex flex-col group-hover:translate-y-[-5px] transition-transform duration-500">
                 <div className="h-9 border-b border-slate-100 dark:border-white/5 flex items-center px-4 gap-1.5 bg-slate-50 dark:bg-zinc-900/50">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-zinc-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-zinc-700"></div>
                 </div>
                 <div className="p-5 space-y-3 font-mono text-[11px] text-slate-400">
                    <div className="flex gap-2 items-center">
                        <span className="text-brand font-bold">➜</span>
                        <span className="text-slate-600 dark:text-slate-300">npx create-ska-app@latest</span>
                    </div>
                    <div className="text-slate-400 pl-4">
                        Initializing project structure...
                    </div>
                     <div className="text-slate-400 pl-4">
                        Installing dependencies...
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Card 2: Security (Span 1) */}
        <div className="group relative overflow-hidden rounded-[2rem] bg-slate-900 dark:bg-black border border-slate-800 dark:border-white/10 p-8 text-white min-h-[380px] md:min-h-0">
           {/* Subtle Grid Background */}
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#34a880 1px, transparent 1px), linear-gradient(90deg, #34a880 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900 dark:to-black"></div>
           
           <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 p-3 bg-white/10 w-fit rounded-xl backdrop-blur-sm border border-white/10">
                <Shield className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('services.card2Title')}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {t('services.card2Desc')}
              </p>
              
              {/* Visual: Animated Shield/Scanner */}
              <div className="mt-auto flex items-center justify-center py-6">
                 <div className="relative">
                    <div className="absolute inset-0 bg-brand/20 blur-2xl rounded-full animate-pulse-slow"></div>
                    <Shield className="relative w-24 h-24 text-slate-800 dark:text-zinc-900 fill-slate-800 dark:fill-zinc-900 stroke-brand stroke-[1.5]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-white fill-brand" />
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Card 3: Mobile (Span 1) */}
        <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-white/10 p-8 min-h-[380px] md:min-h-0">
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 p-3 bg-white dark:bg-white/5 w-fit rounded-xl border border-slate-100 dark:border-white/5 shadow-sm">
                <Smartphone className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('services.card3Title')}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {t('services.card3Desc')}
              </p>
              
              {/* Visual: Phone Mockup - Improved Height and Detail */}
              <div className="mt-auto relative w-full flex-1 min-h-[180px] flex justify-center overflow-hidden">
                  {/* Phone Frame */}
                  <div className="absolute top-4 w-44 aspect-[9/19] bg-slate-900 dark:bg-black border-[6px] border-slate-300 dark:border-zinc-800 rounded-[2rem] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                      {/* Dynamic Island / Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-slate-900 dark:bg-black rounded-b-xl z-20"></div>
                      
                      {/* Screen */}
                      <div className="w-full h-full bg-slate-50 dark:bg-zinc-900 overflow-hidden rounded-[1.6rem]">
                          {/* App UI Header */}
                          <div className="h-16 bg-blue-500/5 dark:bg-blue-500/10 flex items-end pb-3 justify-center">
                             <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-blue-500/30">
                                S
                             </div>
                          </div>

                          {/* App UI Body */}
                          <div className="p-3 space-y-3">
                              {/* Cards */}
                              <div className="p-3 bg-white dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5 shadow-sm space-y-2">
                                  <div className="w-1/2 h-2 bg-slate-200 dark:bg-white/10 rounded-full"></div>
                                  <div className="w-full h-12 bg-slate-100 dark:bg-white/5 rounded-lg"></div>
                              </div>
                              <div className="p-3 bg-white dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5 shadow-sm space-y-2">
                                  <div className="w-1/3 h-2 bg-slate-200 dark:bg-white/10 rounded-full"></div>
                                  <div className="grid grid-cols-4 gap-2">
                                      {[1,2,3,4].map(i => <div key={i} className="aspect-square rounded-md bg-brand/10"></div>)}
                                  </div>
                              </div>
                              
                              {/* Floating Action Button */}
                              <div className="absolute bottom-4 right-4 w-10 h-10 bg-brand text-black rounded-full flex items-center justify-center shadow-lg shadow-brand/20 font-bold text-xl">
                                +
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        </div>

        {/* Card 4: Infrastructure (Span 2) */}
        <div className="md:col-span-2 group relative overflow-hidden rounded-[2rem] bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/5 p-6 md:p-8 transition-all hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none min-h-[380px] md:min-h-0">
            <div className="relative z-10 flex flex-col h-full">
               
               <div className="flex flex-row justify-between items-start mb-6">
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 w-fit rounded-xl border border-indigo-100 dark:border-indigo-500/20">
                      <Database className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-full text-[11px] font-bold text-green-700 dark:text-green-400 uppercase tracking-wide shadow-sm">
                     <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                     </span>
                     <span className="hidden sm:inline">{t('services.allSystems')}</span>
                     <span className="sm:hidden">OK</span>
                  </div>
               </div>

               <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('services.card4Title')}</h3>
                  <p className="text-slate-500 dark:text-slate-400 max-w-sm text-base leading-relaxed">
                      {t('services.card4Desc')}
                  </p>
               </div>

               {/* Visual: Metrics Grid */}
               <div className="mt-8 md:mt-auto grid grid-cols-3 gap-2 md:gap-4 pt-4 md:pt-10">
                   {[
                     { label: t('services.metrics.uptime'), val: '99.99%', color: 'text-slate-900 dark:text-white' },
                     { label: t('services.metrics.latency'), val: '< 24ms', color: 'text-brand-dark dark:text-brand' },
                     { label: t('services.metrics.requests'), val: '1.2M/s', color: 'text-slate-900 dark:text-white' },
                   ].map((metric, i) => (
                       <div key={i} className="p-3 md:p-5 rounded-2xl bg-slate-50 dark:bg-black/40 border border-slate-100 dark:border-white/5 text-center group-hover:scale-105 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                           <div className={`text-lg md:text-2xl font-bold ${metric.color} mb-1`}>{metric.val}</div>
                           <div className="text-[9px] md:text-[10px] text-slate-400 uppercase tracking-widest font-bold truncate">{metric.label}</div>
                       </div>
                   ))}
               </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;
