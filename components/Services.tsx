
import React from 'react';
import { Layout, Shield, Palette, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-8 h-8" />,
    title_ru: 'Разработка сайтов',
    title: 'Website Creation and Development',
    desc: 'We create modern and user-friendly websites: corporate sites, landing pages, and online stores. Each project is developed individually.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title_ru: 'Техническая поддержка',
    title: 'Support and Maintenance',
    desc: 'We ensure stable operation of your projects: updates, technical support, and protection against failures. Always reliable.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title_ru: 'Дизайн и брендинг',
    title: 'Design and Branding',
    desc: 'We develop unique design and corporate identity. We create interfaces, logos, and visual solutions that make your brand stand out.',
    color: 'bg-pink-50 text-pink-600',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title_ru: 'Разработка приложений',
    title: 'Application Development',
    desc: 'We create mobile and web applications: user-friendly, functional, and modern. Built to improve your business operations.',
    color: 'bg-emerald-50 text-emerald-600',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-blue-600 uppercase tracking-wide">Expertise</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            We Do Everything in IT
          </p>
          <p className="mt-4 text-lg text-slate-500">
            Development, support, and training - a full cycle of services for your business and IT career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, idx) => (
            <div key={idx} className="group p-8 rounded-3xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
              <div className={`inline-flex p-4 rounded-2xl mb-6 transition-transform group-hover:scale-110 ${item.color}`}>
                {item.icon}
              </div>
              <span className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-tighter">{item.title_ru}</span>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
