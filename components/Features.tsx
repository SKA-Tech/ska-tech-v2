
import React from 'react';
import { Layout, Shield, Palette, Smartphone } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: t('features.webTitle'),
      desc: t('features.webDesc'),
      gradient: "from-blue-500/10 to-cyan-500/10",
      border: "group-hover:border-blue-500/30",
      text: "text-blue-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('features.supportTitle'),
      desc: t('features.supportDesc'),
      gradient: "from-emerald-500/10 to-green-500/10",
      border: "group-hover:border-emerald-500/30",
      text: "text-emerald-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: t('features.designTitle'),
      desc: t('features.designDesc'),
      gradient: "from-pink-500/10 to-rose-500/10",
      border: "group-hover:border-pink-500/30",
      text: "text-pink-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: t('features.appTitle'),
      desc: t('features.appDesc'),
      gradient: "from-violet-500/10 to-purple-500/10",
      border: "group-hover:border-violet-500/30",
      text: "text-violet-500"
    },
  ];

  return (
    <section className="py-32 bg-white dark:bg-black relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 dark:text-white mb-6 leading-[0.9]">
            {t('features.title')}
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-brand to-transparent rounded-full opacity-80"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className={`group relative bg-slate-50 dark:bg-[#0A0A0A] border border-slate-200 dark:border-white/5 rounded-3xl p-8 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200 dark:hover:shadow-black/50 overflow-hidden ${s.border}`}>
               
               {/* Hover Gradient Background */}
               <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
               
               <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-white dark:bg-black border border-slate-100 dark:border-white/10 flex items-center justify-center mb-8 ${s.text} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {s.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:translate-x-1 transition-transform">
                    {s.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-grow font-medium">
                    {s.desc}
                  </p>
               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
