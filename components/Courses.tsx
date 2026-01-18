
import React from 'react';
import { Code, Terminal, Layers, Baby, Zap, Cpu, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

const Courses: React.FC = () => {
  const { t } = useLanguage();
  
  const courses = [
    { icon: <Code size={24} />, title: t('courses.list.html.title'), cat: t('categories.frontend'), dur: `1 ${t('coursePage.month')}`, desc: t('courses.list.html.desc'), link: '/courses/html-css' },
    { icon: <Zap size={24} />, title: t('courses.list.js.title'), cat: t('categories.frontend'), dur: `2 ${t('coursePage.month')}s`, desc: t('courses.list.js.desc'), link: '/courses/javascript' },
    { icon: <Layers size={24} />, title: t('courses.list.react.title'), cat: t('categories.frontend'), dur: `2 ${t('coursePage.month')}s`, desc: t('courses.list.react.desc'), link: '/courses/react' },
    { icon: <Baby size={24} />, title: t('courses.list.kids.title'), cat: t('categories.beginner'), dur: `6 ${t('coursePage.month')}s`, desc: t('courses.list.kids.desc'), link: '/courses/kids-coding' },
    { icon: <Terminal size={24} />, title: t('courses.list.go.title'), cat: t('categories.backend'), dur: `3 ${t('coursePage.month')}s`, desc: t('courses.list.go.desc'), link: '/courses/golang' },
    { icon: <Cpu size={24} />, title: t('courses.list.cpp.title'), cat: t('categories.basics'), dur: `2 ${t('coursePage.month')}s`, desc: t('courses.list.cpp.desc'), link: '/courses/cpp-basics' },
  ];

  return (
    <section id="courses" className="relative py-40 bg-white dark:bg-black transition-colors duration-300 overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base Grid - Increased visibility */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Top Highlight Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_0%,rgba(99,208,165,0.05),transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_0%,rgba(99,208,165,0.08),transparent)]"></div>
        
        {/* Fade Out Edges - Adjusted to keep center clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/90 dark:from-black/90 dark:via-transparent dark:to-black/90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="text-brand-dark dark:text-brand text-xs font-black tracking-[0.3em] uppercase mb-4">{t('courses.hub')}</div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 text-slate-900 dark:text-white">{t('courses.title')}</h2>
          <p className="text-slate-600 dark:text-slate-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {t('courses.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((c, idx) => {
            return (
              <Link 
                key={idx} 
                to={c.link}
                className="group bg-slate-50 dark:bg-[#080808] border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-10 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 dark:hover:bg-[#0c0c0c] dark:hover:border-brand/20 dark:hover:shadow-none transition-all duration-500 block"
              >
                 <div className="flex justify-between items-center mb-10">
                   <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-transparent flex items-center justify-center text-brand-dark dark:text-brand group-hover:bg-brand/10 dark:group-hover:bg-brand/10 transition-all shadow-sm dark:shadow-none">
                     {c.icon}
                   </div>
                   <span className="text-[10px] uppercase font-black tracking-widest text-slate-500 dark:text-slate-500 py-1.5 px-3.5 bg-white dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/5">
                     {c.cat}
                   </span>
                 </div>
                 <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">{c.title}</h3>
                 <p className="text-[13px] text-slate-600 dark:text-slate-500 mb-10 leading-relaxed font-medium">
                   {c.desc}
                 </p>
                 <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-white/5">
                   <div className="text-[11px] text-slate-500 dark:text-slate-600 uppercase font-black tracking-wider">
                      {c.dur}
                   </div>
                   <div className="flex items-center text-[13px] font-black text-brand-dark dark:text-brand group-hover:translate-x-1 transition-transform uppercase tracking-tighter cursor-pointer">
                     {t('courses.enroll')} <ChevronRight className="ml-1 w-4 h-4" />
                   </div>
                 </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
