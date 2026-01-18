
import React, { useEffect } from 'react';
import { CheckCircle2, BookOpen, Clock, Users, Globe, ChevronRight, Terminal, Layout, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const HtmlCssCourse: React.FC = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const modules = [
    {
      title: "Module 1: HTML Basics",
      items: [
        "HTML document structure",
        "Tags and attributes",
        "Semantic markup",
        "Forms and inputs",
        "Meta tags and SEO basics"
      ]
    },
    {
      title: "Module 2: CSS Basics",
      items: [
        "Selectors and specificity",
        "Box model and positioning",
        "Flexbox and Grid layouts",
        "Responsive design",
        "CSS variables"
      ]
    },
    {
      title: "Module 3: Practice",
      items: [
        "Creating a landing page",
        "Layout from Figma design",
        "Mobile adaptation",
        "Optimization and performance",
        "Project deployment"
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-black transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[100px] pointer-events-none opacity-50 mix-blend-multiply dark:mix-blend-screen"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Column: Content */}
            <div className="flex-1">
              <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-brand transition-colors mb-8">
                <ChevronRight className="w-4 h-4 rotate-180 mr-1" /> Back to Home
              </Link>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-brand/10 text-brand-dark dark:text-brand text-xs font-bold uppercase tracking-wider border border-brand/20">Frontend</span>
                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider border border-slate-200 dark:border-white/5">1 Month</span>
                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider border border-slate-200 dark:border-white/5">For Beginners</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 dark:text-white mb-6 leading-tight">
                HTML <span className="text-brand-dark dark:text-brand">&</span> CSS
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12 max-w-2xl">
                Master the architectural foundations of the web. Create your first modern, responsive websites from scratch and launch your career in IT.
              </p>

              {/* Who is this for */}
              <div className="mb-16">
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Who is this course for?</h3>
                 <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-white/10">
                       <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                          <Terminal className="w-5 h-5" />
                       </div>
                       <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">IT Beginners</h4>
                       <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                         Those who want to start a career in web development but don't know where to begin. No prior experience needed.
                       </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-white/10">
                       <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500 mb-4">
                          <Layout className="w-5 h-5" />
                       </div>
                       <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Designers</h4>
                       <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                         Understand technical limitations and possibilities to improve communication with developers and design better products.
                       </p>
                    </div>
                 </div>
              </div>

              {/* Curriculum */}
              <div className="mb-12">
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Course Program</h3>
                 <div className="space-y-4">
                    {modules.map((mod, idx) => (
                      <div key={idx} className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden">
                        <div className="p-6 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5">
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-3">
                             <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand text-black text-xs font-bold">{idx + 1}</span>
                             {mod.title}
                          </h4>
                        </div>
                        <div className="p-6">
                           <ul className="grid sm:grid-cols-2 gap-3">
                             {mod.items.map((item, i) => (
                               <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                  <div className="w-1.5 h-1.5 rounded-full bg-brand/50"></div>
                                  {item}
                               </li>
                             ))}
                           </ul>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>

            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="w-full lg:w-[400px] lg:sticky lg:top-28 space-y-8">
              
              {/* Pricing Card */}
              <div className="p-8 rounded-3xl bg-slate-900 dark:bg-zinc-900 text-white shadow-2xl shadow-brand/5 ring-1 ring-white/10 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-32 bg-brand/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                 
                 <div className="relative z-10">
                   <div className="text-sm font-medium text-slate-400 mb-2 uppercase tracking-wide">Total Price</div>
                   <div className="flex items-baseline gap-2 mb-8">
                     <span className="text-4xl font-extrabold tracking-tight">4 499 ₽</span>
                     <span className="text-slate-500 line-through text-sm">8 000 ₽</span>
                   </div>

                   <button className="w-full py-4 rounded-xl bg-brand hover:bg-brand-dark text-black font-bold text-base transition-colors shadow-lg shadow-brand/20 mb-8">
                     Enroll in the course
                   </button>

                   <ul className="space-y-4 mb-8">
                      {[
                        "12 practical lessons",
                        "Lifetime access to materials",
                        "Completion certificate",
                        "Instructor support",
                        "Code reviews"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                           <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                           {feature}
                        </li>
                      ))}
                   </ul>
                 </div>
              </div>

              {/* Details Card */}
              <div className="p-6 rounded-3xl bg-white dark:bg-black border border-slate-200 dark:border-white/10">
                 <h4 className="font-bold text-slate-900 dark:text-white mb-6">Course Details</h4>
                 <div className="space-y-6">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300">
                          <Users className="w-5 h-5" />
                       </div>
                       <div>
                          <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Level</div>
                          <div className="text-sm font-medium text-slate-900 dark:text-white">Beginner</div>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300">
                          <Clock className="w-5 h-5" />
                       </div>
                       <div>
                          <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Duration</div>
                          <div className="text-sm font-medium text-slate-900 dark:text-white">4 Weeks (3x / week)</div>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300">
                          <Globe className="w-5 h-5" />
                       </div>
                       <div>
                          <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Format</div>
                          <div className="text-sm font-medium text-slate-900 dark:text-white">Online / Offline</div>
                       </div>
                    </div>
                 </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HtmlCssCourse;
