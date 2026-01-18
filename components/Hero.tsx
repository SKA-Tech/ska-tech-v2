
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex flex-col justify-center transition-colors duration-300">
      
      {/* --- BACKGROUND LAYERS (z-0) --- */}
      
      {/* 1. Grain/Noise Texture */}
      <div className="absolute inset-0 opacity-[0.07] dark:opacity-[0.1] pointer-events-none mix-blend-overlay" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
           }}
      ></div>

      {/* 2. Tech Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        {/* Micro Grid (Center Focus) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:10px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_60%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_60%,transparent_100%)]"></div>
      </div>

      {/* 3. Ambient Gradient Orbs (Brand & Indigo) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Base Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle,rgba(99,208,165,0.03)_0%,transparent_65%)]"></div>
        
        {/* Moving Blobs */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[150%] h-[1200px] opacity-40 dark:opacity-50">
           <div className="absolute top-[20%] left-[35%] w-[600px] h-[600px] bg-brand/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] animate-blob"></div>
           <div className="absolute top-[25%] right-[35%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] animate-blob animation-delay-2000"></div>
           <div className="absolute bottom-[20%] left-[45%] w-[600px] h-[600px] bg-indigo-400/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* 4. Horizon Beam (Tech Arc) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] pointer-events-none">
        <div className="relative w-full h-[300px]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-brand/40 dark:bg-brand/60 blur-[20px] animate-pulse-slow"></div>
          <svg viewBox="0 0 1000 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible opacity-60 dark:opacity-80">
            <path d="M0 300C0 134.315 223.858 0 500 0C776.142 0 1000 134.315 1000 300" stroke="url(#arc_line_grad)" strokeWidth="1" />
             <path d="M50 300C50 150 250 20 500 20C750 20 950 150 950 300" stroke="url(#arc_line_grad)" strokeWidth="1" strokeDasharray="4 4" className="opacity-30"/>
            <defs>
              <linearGradient id="arc_line_grad" x1="0" y1="150" x2="1000" y2="150" gradientUnits="userSpaceOnUse">
                <stop stopColor="#63d0a5" stopOpacity="0" />
                <stop offset="0.5" stopColor="#63d0a5" stopOpacity="1" />
                <stop offset="1" stopColor="#63d0a5" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-[radial-gradient(ellipse_at_top,rgba(99,208,165,0.15)_0%,transparent_80%)] blur-[60px]"></div>
        </div>
      </div>

      {/* 5. Spinning Rings */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden flex items-start justify-center pt-20">
        <div className="relative w-[700px] h-[700px] md:w-[1000px] md:h-[1000px] opacity-[0.15]">
          <div className="absolute inset-0 border border-slate-400/30 dark:border-brand/30 rounded-full animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute inset-[10%] border border-slate-400/20 dark:border-brand/20 border-dashed rounded-full animate-[spin_50s_linear_infinite_reverse]"></div>
          <div className="absolute inset-[25%] border border-slate-400/10 dark:border-brand/10 border-dotted rounded-full animate-[spin_40s_linear_infinite]"></div>
        </div>
      </div>
      
      {/* --- CONTENT (z-10) --- */}
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-10 backdrop-blur-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/10 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
          <span className="text-brand-dark dark:text-brand mr-2">{t('hero.new')}</span> {t('hero.badge')} <ArrowRight className="ml-2 w-3.5 h-3.5" />
        </div>
        
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-slate-900 dark:text-white mb-10 leading-[0.95] drop-shadow-xl dark:drop-shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
          {t('hero.title')} <br /> 
          <span className="text-brand-dark dark:text-brand">{t('hero.titleHighlight')}</span> {t('hero.titleSuffix')}
        </h1>
        
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
          {t('hero.desc')}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          <a href="#contact" className="w-full sm:w-auto bg-slate-900 dark:bg-white text-white dark:text-black px-10 py-4 rounded-2xl font-bold text-base hover:bg-brand-dark dark:hover:bg-brand transition-all hover:scale-105 shadow-2xl shadow-brand/10 dark:shadow-brand/20 text-center">
            {t('hero.getStarted')}
          </a>
          <a href="#courses" className="w-full sm:w-auto bg-white dark:bg-slate-950 text-slate-900 dark:text-white px-10 py-4 rounded-2xl font-bold text-base border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all text-center">
            {t('hero.browse')}
          </a>
        </div>
      </div>

      {/* Dashboard Mockup - Wide Container */}
      <div className="relative w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="relative group">

          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-4/5 h-[300px] bg-brand/20 blur-[120px] rounded-full pointer-events-none opacity-40 animate-pulse-slow"></div>
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 bg-brand/30 blur-[100px] rounded-full pointer-events-none opacity-60"></div>

          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="/images/dashboard.png"
              alt="Dashboard"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>
      
      {/* Smooth Transition Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-white dark:from-black to-transparent z-20 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
