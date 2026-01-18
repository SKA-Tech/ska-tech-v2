
import React, { useEffect } from 'react';
import { CheckCircle2, BookOpen, Clock, Users, Globe, ChevronRight, Terminal, Layout, Smartphone, Code, Zap, Cpu, Layers, Baby, Server } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

const CoursePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  
  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLScv6iDEEeL4jxPwoQKnQp6Mm6-9iGVOhedXtnKlhg0FjJ8WXg/viewform";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Data structure keyed by language then course ID
  const courseData: Record<string, any> = {
    en: {
      "html-css": {
        category: "Frontend",
        duration: "1 Month",
        level: "Beginner",
        title: "HTML & CSS",
        subtitle: "The architectural foundations of the modern web.",
        description: "Master the architectural foundations of the web. Create your first modern, responsive websites from scratch and launch your career in IT.",
        price: "4 499 ₽",
        oldPrice: "8 000 ₽",
        schedule: "3 times / week",
        modules: [
          { title: "Module 1: HTML Basics", items: ["HTML document structure", "Tags and attributes", "Semantic markup", "Forms and inputs", "Meta tags and SEO basics"] },
          { title: "Module 2: CSS Basics", items: ["Selectors and specificity", "Box model and positioning", "Flexbox and Grid layouts", "Responsive design", "CSS variables"] },
          { title: "Module 3: Practice", items: ["Creating a landing page", "Layout from Figma design", "Mobile adaptation", "Optimization and performance", "Project deployment"] }
        ],
        targetAudience: [
          { icon: <Terminal className="w-5 h-5" />, color: "text-blue-500", bg: "bg-blue-500/10", title: "IT Beginners", desc: "Those who want to start a career in web development but don't know where to begin." },
          { icon: <Layout className="w-5 h-5" />, color: "text-pink-500", bg: "bg-pink-500/10", title: "Designers", desc: "Understand technical limitations to improve communication with developers." }
        ]
      },
      "javascript": {
        category: "Frontend",
        duration: "2 Months",
        level: "Beginner",
        title: "JavaScript",
        subtitle: "The language of the web.",
        description: "Go from zero to hero in JavaScript. Learn ES6+, asynchronous programming, and DOM manipulation to build dynamic web applications.",
        price: "6 499 ₽",
        oldPrice: "10 000 ₽",
        schedule: "3 times / week",
        modules: [
          { title: "Module 1: JS Fundamentals", items: ["Variables & Data Types", "Control Flow", "Functions", "Arrays & Objects"] },
          { title: "Module 2: DOM & Events", items: ["Selecting Elements", "Event Listeners", "DOM Manipulation", "Form Validation"] },
          { title: "Module 3: Advanced JS", items: ["ES6+ Features", "Promises & Async/Await", "Fetch API", "Local Storage"] }
        ],
        targetAudience: [
          { icon: <Code className="w-5 h-5" />, color: "text-amber-500", bg: "bg-amber-500/10", title: "Students", desc: "Computer science students wanting practical skills." },
          { icon: <Zap className="w-5 h-5" />, color: "text-violet-500", bg: "bg-violet-500/10", title: "Frontend Hopefuls", desc: "The next step after HTML/CSS." }
        ]
      },
      "react": {
        category: "Frontend",
        duration: "2 Months",
        level: "Intermediate",
        title: "React.js",
        subtitle: "Build modern, scalable user interfaces.",
        description: "Learn the most popular UI library. Master components, hooks, state management, and build single-page applications.",
        price: "7 999 ₽",
        oldPrice: "12 000 ₽",
        schedule: "2 times / week",
        modules: [
          { title: "Module 1: React Basics", items: ["Components & Props", "State & Lifecycle", "Event Handling", "Conditional Rendering"] },
          { title: "Module 2: Hooks Deep Dive", items: ["useState, useEffect", "Custom Hooks", "useContext", "useReducer"] },
          { title: "Module 3: Ecosystem", items: ["React Router", "State Management (Redux/Zustand)", "API Integration", "Next.js Intro"] }
        ],
        targetAudience: [
          { icon: <Layers className="w-5 h-5" />, color: "text-cyan-500", bg: "bg-cyan-500/10", title: "JS Developers", desc: "Developers looking to specialize in modern frontend frameworks." }
        ]
      },
      "kids-coding": {
        category: "Beginner",
        duration: "6 Months",
        level: "Kids (8-14)",
        title: "Kids Coding",
        subtitle: "Logic, creativity, and games.",
        description: "A fun introduction to programming for children. We use visual languages like Scratch and move to Python to build games.",
        price: "3 999 ₽/mo",
        oldPrice: "5 000 ₽/mo",
        schedule: "2 times / week",
        modules: [
          { title: "Module 1: Visual Logic", items: ["Scratch Interface", "Loops & Conditions", "Animation Basics", "Sound & Interaction"] },
          { title: "Module 2: Game Design", items: ["Character Design", "Level Building", "Score Systems", "Project Presentation"] },
          { title: "Module 3: Intro to Python", items: ["Syntax Basics", "Variables", "Simple Calculations", "Text Games"] }
        ],
        targetAudience: [
          { icon: <Baby className="w-5 h-5" />, color: "text-green-500", bg: "bg-green-500/10", title: "Young Minds", desc: "Children aged 8-14 interested in technology." }
        ]
      },
      "golang": {
        category: "Backend",
        duration: "3 Months",
        level: "Advanced",
        title: "Golang",
        subtitle: "High-performance backend systems.",
        description: "Master Go for scalable backend services. Learn concurrency, microservices architecture, and cloud deployment.",
        price: "9 999 ₽",
        oldPrice: "15 000 ₽",
        schedule: "2 times / week",
        modules: [
          { title: "Module 1: Go Syntax", items: ["Types & Variables", "Structs & Interfaces", "Packages", "Error Handling"] },
          { title: "Module 2: Concurrency", items: ["Goroutines", "Channels", "Select Statement", "Sync Package"] },
          { title: "Module 3: Web Services", items: ["HTTP Server", "REST APIs", "Database Connection", "Microservices"] }
        ],
        targetAudience: [
          { icon: <Server className="w-5 h-5" />, color: "text-blue-500", bg: "bg-blue-500/10", title: "Backend Devs", desc: "Developers wanting to build high-load systems." }
        ]
      },
      "cpp-basics": {
        category: "Basics",
        duration: "2 Months",
        level: "Beginner/Inter",
        title: "C++ Basics",
        subtitle: "Deep dive into memory and algorithms.",
        description: "Understand how computers really work. Learn memory management, pointers, and object-oriented programming.",
        price: "5 999 ₽",
        oldPrice: "9 000 ₽",
        schedule: "2 times / week",
        modules: [
          { title: "Module 1: Syntax", items: ["Variables & Types", "Loops & Logic", "Functions", "Arrays"] },
          { title: "Module 2: Memory", items: ["Pointers", "References", "Dynamic Memory", "Stack vs Heap"] },
          { title: "Module 3: OOP", items: ["Classes", "Inheritance", "Polymorphism", "Templates"] }
        ],
        targetAudience: [
          { icon: <Cpu className="w-5 h-5" />, color: "text-red-500", bg: "bg-red-500/10", title: "Students", desc: "University students needing strong algorithmic foundations." }
        ]
      }
    },
    ru: {
      "html-css": {
        category: "Frontend",
        duration: "1 Месяц",
        level: "Новичок",
        title: "HTML и CSS",
        subtitle: "Архитектурные основы современного веба.",
        description: "Освойте архитектурные основы веба. Создайте свои первые современные адаптивные сайты с нуля и начните карьеру в IT.",
        price: "4 499 ₽",
        oldPrice: "8 000 ₽",
        schedule: "3 раза / неделю",
        modules: [
          { title: "Модуль 1: Основы HTML", items: ["Структура HTML документа", "Теги и атрибуты", "Семантическая верстка", "Формы и инпуты", "Мета-теги и основы SEO"] },
          { title: "Модуль 2: Основы CSS", items: ["Селекторы и специфичность", "Блочная модель и позиционирование", "Flexbox и Grid", "Адаптивный дизайн", "CSS переменные"] },
          { title: "Модуль 3: Практика", items: ["Создание лендинга", "Верстка из Figma", "Мобильная адаптация", "Оптимизация и производительность", "Деплой проекта"] }
        ],
        targetAudience: [
          { icon: <Terminal className="w-5 h-5" />, color: "text-blue-500", bg: "bg-blue-500/10", title: "Новички в IT", desc: "Те, кто хочет начать карьеру в веб-разработке, но не знает с чего начать." },
          { icon: <Layout className="w-5 h-5" />, color: "text-pink-500", bg: "bg-pink-500/10", title: "Дизайнеры", desc: "Понимание технических ограничений для улучшения коммуникации с разработчиками." }
        ]
      },
      "javascript": {
        category: "Frontend",
        duration: "2 Месяца",
        level: "Новичок",
        title: "JavaScript",
        subtitle: "Язык программирования веба.",
        description: "Пройдите путь от нуля до профи в JS. Изучите ES6+, асинхронность и работу с DOM для создания динамичных приложений.",
        price: "6 499 ₽",
        oldPrice: "10 000 ₽",
        schedule: "3 раза / неделю",
        modules: [
          { title: "Модуль 1: Основы JS", items: ["Переменные и типы", "Управление потоком", "Функции", "Массивы и объекты"] },
          { title: "Модуль 2: DOM и события", items: ["Выбор элементов", "Слушатели событий", "Манипуляция DOM", "Валидация форм"] },
          { title: "Модуль 3: Продвинутый JS", items: ["ES6+ фичи", "Промисы и Async/Await", "Fetch API", "Local Storage"] }
        ],
        targetAudience: [
          { icon: <Code className="w-5 h-5" />, color: "text-amber-500", bg: "bg-amber-500/10", title: "Студенты", desc: "Студенты технических вузов, желающие практики." }
        ]
      },
      "react": {
        category: "Frontend",
        duration: "2 Месяца",
        level: "Средний",
        title: "React.js",
        subtitle: "Создание современных интерфейсов.",
        description: "Изучите самую популярную библиотеку UI. Компоненты, хуки, управление состоянием и SPA.",
        price: "7 999 ₽",
        oldPrice: "12 000 ₽",
        schedule: "2 раза / неделю",
        modules: [
          { title: "Модуль 1: Основы React", items: ["Компоненты и пропсы", "State и Lifecycle", "События", "Рендеринг"] },
          { title: "Модуль 2: Хуки", items: ["useState, useEffect", "Кастомные хуки", "useContext", "useReducer"] },
          { title: "Модуль 3: Экосистема", items: ["React Router", "Redux/Zustand", "Работа с API", "Введение в Next.js"] }
        ],
        targetAudience: [
          { icon: <Layers className="w-5 h-5" />, color: "text-cyan-500", bg: "bg-cyan-500/10", title: "JS Разработчики", desc: "Разработчики, желающие освоить современные фреймворки." }
        ]
      },
      "kids-coding": {
        category: "Для детей",
        duration: "6 Месяцев",
        level: "Дети (8-14)",
        title: "Программирование для детей",
        subtitle: "Логика, творчество и игры.",
        description: "Увлекательное введение в IT для детей. Scratch, создание игр и переход к Python.",
        price: "3 999 ₽/мес",
        oldPrice: "5 000 ₽/мес",
        schedule: "2 раза / неделю",
        modules: [
          { title: "Модуль 1: Визуальная логика", items: ["Интерфейс Scratch", "Циклы и условия", "Анимация", "Звук"] },
          { title: "Модуль 2: Создание игр", items: ["Дизайн персонажей", "Уровни", "Очки", "Презентация"] },
          { title: "Модуль 3: Введение в Python", items: ["Синтаксис", "Переменные", "Текстовые игры", "Калькулятор"] }
        ],
        targetAudience: [
          { icon: <Baby className="w-5 h-5" />, color: "text-green-500", bg: "bg-green-500/10", title: "Юные умы", desc: "Дети 8-14 лет, интересующиеся технологиями." }
        ]
      },
      "golang": {
        category: "Backend",
        duration: "3 Месяца",
        level: "Продвинутый",
        title: "Golang",
        subtitle: "Высоконагруженные системы.",
        description: "Go для масштабируемых бэкендов. Конкурентность, микросервисы и облака.",
        price: "9 999 ₽",
        oldPrice: "15 000 ₽",
        schedule: "2 раза / неделю",
        modules: [
          { title: "Модуль 1: Синтаксис Go", items: ["Типы и переменные", "Структуры и интерфейсы", "Пакеты", "Ошибки"] },
          { title: "Модуль 2: Конкурентность", items: ["Горутины", "Каналы", "Select", "Sync"] },
          { title: "Модуль 3: Веб-сервисы", items: ["HTTP Server", "REST API", "Базы данных", "Микросервисы"] }
        ],
        targetAudience: [
          { icon: <Server className="w-5 h-5" />, color: "text-blue-500", bg: "bg-blue-500/10", title: "Бэкенд разработчики", desc: "Желающие создавать High-load системы." }
        ]
      },
      "cpp-basics": {
        category: "Базовый",
        duration: "2 Месяца",
        level: "Новичок",
        title: "Основы C++",
        subtitle: "Память и алгоритмы.",
        description: "Поймите, как работает компьютер. Управление памятью, указатели и ООП.",
        price: "5 999 ₽",
        oldPrice: "9 000 ₽",
        schedule: "2 раза / неделю",
        modules: [
          { title: "Модуль 1: Синтаксис", items: ["Переменные", "Циклы", "Функции", "Массивы"] },
          { title: "Модуль 2: Память", items: ["Указатели", "Ссылки", "Динамическая память", "Стек и Куча"] },
          { title: "Модуль 3: ООП", items: ["Классы", "Наследование", "Полиморфизм", "Шаблоны"] }
        ],
        targetAudience: [
          { icon: <Cpu className="w-5 h-5" />, color: "text-red-500", bg: "bg-red-500/10", title: "Студенты", desc: "Студенты, нуждающиеся в алгоритмической базе." }
        ]
      }
    },
    tj: {
      "html-css": {
        category: "Frontend",
        duration: "1 Моҳ",
        level: "Нав омӯз",
        title: "HTML ва CSS",
        subtitle: "Асосҳои меъмории веби муосир.",
        description: "Асосҳои меъмории вебро аз худ кунед. Аввалин вебсайтҳои муосир ва адаптивии худро аз сифр созед ва карераи худро дар IT оғоз кунед.",
        price: "4 499 ₽",
        oldPrice: "8 000 ₽",
        schedule: "3 бор / ҳафта",
        modules: [
          { title: "Модули 1: Асосҳои HTML", items: ["Сохтори ҳуҷҷати HTML", "Тегҳо ва атрибутҳо", "Нишонагузории семантикӣ", "Формаҳо ва вуруди маълумот", "Мета тегҳо ва асосҳои SEO"] },
          { title: "Модули 2: Асосҳои CSS", items: ["Селекторҳо ва мушаххасот", "Модели қуттӣ ва ҷойгиршавӣ", "Тарҳҳои Flexbox ва Grid", "Тарҳи адаптивӣ", "Тағйирёбандаҳои CSS"] },
          { title: "Модули 3: Таҷриба", items: ["Сохтани саҳифаи фуруд (landing)", "Тарҳрезӣ аз Figma", "Мутобиқсозии мобилӣ", "Оптимизатсия ва иҷроиш", "Истиқрори лоиҳа"] }
        ],
        targetAudience: [
          { icon: <Terminal className="w-5 h-5" />, color: "text-blue-500", bg: "bg-blue-500/10", title: "Нав омӯзони IT", desc: "Онҳое, ки мехоҳанд карераро дар таҳияи веб оғоз кунанд, аммо намедонанд аз куҷо оғоз кунанд." },
          { icon: <Layout className="w-5 h-5" />, color: "text-pink-500", bg: "bg-pink-500/10", title: "Дизайнерҳо", desc: "Фаҳмидани маҳдудиятҳои техникӣ барои беҳтар кардани муошират бо таҳиягарон." }
        ]
      },
      "javascript": {
        category: "Frontend",
        duration: "2 Моҳ",
        level: "Нав омӯз",
        title: "JavaScript",
        subtitle: "Забони веби муосир.",
        description: "Аз сифр то мутахассис дар JS. ES6+, барномасозии асинхронӣ ва DOM-ро омӯзед.",
        price: "6 499 ₽",
        oldPrice: "10 000 ₽",
        schedule: "3 бор / ҳафта",
        modules: [
          { title: "Модули 1: Асосҳои JS", items: ["Тағйирёбандаҳо", "Функсияҳо", "Массивҳо", "Объектҳо"] },
          { title: "Модули 2: DOM ва ҳодисаҳо", items: ["Интихоби элементҳо", "Ҳодисаҳо", "Тағйири DOM", "Санҷиши формаҳо"] },
          { title: "Модули 3: JS-и пешрафта", items: ["ES6+", "Promises", "Fetch API", "Local Storage"] }
        ],
        targetAudience: [
          { icon: <Code className="w-5 h-5" />, color: "text-amber-500", bg: "bg-amber-500/10", title: "Донишҷӯён", desc: "Донишҷӯёне, ки мехоҳанд малакаҳои амалӣ дошта бошанд." }
        ]
      },
      "react": {
        category: "Frontend",
        duration: "2 Моҳ",
        level: "Миёна",
        title: "React.js",
        subtitle: "Сохтани интерфейсҳои муосир.",
        description: "Машҳуртарин китобхонаи UI. Компонентҳо, хукҳо ва идоракунии ҳолат.",
        price: "7 999 ₽",
        oldPrice: "12 000 ₽",
        schedule: "2 бор / ҳафта",
        modules: [
          { title: "Модули 1: Асосҳои React", items: ["Компонентҳо", "State", "Lifecycle", "Render"] },
          { title: "Модули 2: Hooks", items: ["useState", "useEffect", "Custom Hooks", "Context"] },
          { title: "Модули 3: Экосистема", items: ["Router", "Redux", "API", "Next.js"] }
        ],
        targetAudience: [
          { icon: <Layers className="w-5 h-5" />, color: "text-cyan-500", bg: "bg-cyan-500/10", title: "Барномасозони JS", desc: "Барои онҳое, ки мехоҳанд фреймворкҳои муосирро омӯзанд." }
        ]
      },
      "kids-coding": {
        category: "Барои кӯдакон",
        duration: "6 Моҳ",
        level: "Кӯдакон (8-14)",
        title: "Барномасозӣ барои кӯдакон",
        subtitle: "Мантиқ ва эҷодиёт.",
        description: "Шиносоӣ бо IT барои кӯдакон. Scratch ва Python барои сохтани бозиҳо.",
        price: "3 999 ₽/моҳ",
        oldPrice: "5 000 ₽/моҳ",
        schedule: "2 бор / ҳафта",
        modules: [
          { title: "Модули 1: Scratch", items: ["Интерфейс", "Сиклҳо", "Аниматсия", "Овоз"] },
          { title: "Модули 2: Сохтани бозӣ", items: ["Қаҳрамонҳо", "Сатҳҳо", "Холҳо", "Намоиш"] },
          { title: "Модули 3: Python", items: ["Синтаксис", "Тағйирёбандаҳо", "Бозиҳои матнӣ", "Ҳисобкунак"] }
        ],
        targetAudience: [
          { icon: <Baby className="w-5 h-5" />, color: "text-green-500", bg: "bg-green-500/10", title: "Наврасон", desc: "Кӯдакони шавқманд ба технология." }
        ]
      },
      "golang": {
        category: "Backend",
        duration: "3 Моҳ",
        level: "Пешрафта",
        title: "Golang",
        subtitle: "Системаҳои баландсифат.",
        description: "Go барои бэкенд. Микросервисҳо ва инфрасохтори абрӣ.",
        price: "9 999 ₽",
        oldPrice: "15 000 ₽",
        schedule: "2 бор / ҳафта",
        modules: [
          { title: "Модули 1: Асосҳо", items: ["Типҳо", "Структураҳо", "Пакетҳо", "Хатогиҳо"] },
          { title: "Модули 2: Ҳамзамонӣ", items: ["Goroutines", "Channels", "Select", "Sync"] },
          { title: "Модули 3: Веб", items: ["HTTP", "REST API", "Database", "Microservices"] }
        ],
        targetAudience: [
          { icon: <Server className="w-5 h-5" />, color: "text-blue-500", bg: "bg-blue-500/10", title: "Бэкенд", desc: "Барои сохтани системаҳои бузург." }
        ]
      },
      "cpp-basics": {
        category: "Асосӣ",
        duration: "2 Моҳ",
        level: "Нав омӯз",
        title: "Асосҳои C++",
        subtitle: "Хотира ва алгоритмҳо.",
        description: "Компютер чӣ гуна кор мекунад. Хотира, нишондиҳандаҳо ва OOP.",
        price: "5 999 ₽",
        oldPrice: "9 000 ₽",
        schedule: "2 бор / ҳафта",
        modules: [
          { title: "Модули 1: Синтаксис", items: ["Тағйирёбандаҳо", "Сиклҳо", "Функсияҳо", "Массивы"] },
          { title: "Модули 2: Хотира", items: ["Pointer", "Reference", "Dynamic Memory", "Stack/Heap"] },
          { title: "Модули 3: OOP", items: ["Class", "Inheritance", "Polymorphism", "Templates"] }
        ],
        targetAudience: [
          { icon: <Cpu className="w-5 h-5" />, color: "text-red-500", bg: "bg-red-500/10", title: "Донишҷӯён", desc: "Барои фаҳмиши амиқи алгоритмҳо." }
        ]
      }
    }
  };

  // Fallback to English if translation is missing for a specific course ID (handling incomplete data mock)
  // In a real app, all data would be fully populated.
  // We use a safe access pattern here.
  const currentLangData = courseData[language] || courseData['en'];
  const course = id ? (currentLangData[id] || courseData['en'][id]) : null;

  if (!course) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{t('coursePage.notFound')}</h2>
        <p className="text-slate-500 mb-8">{t('coursePage.notFound')}</p>
        <Link to="/#courses" className="px-6 py-3 bg-brand text-black rounded-xl font-bold">{t('coursePage.back')}</Link>
      </div>
    );
  }

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/#courses');
    }
  };

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
              <a href="/#courses" onClick={handleBack} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-brand transition-colors mb-8 cursor-pointer">
                <ChevronRight className="w-4 h-4 rotate-180 mr-1" /> {t('coursePage.back')}
              </a>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-brand/10 text-brand-dark dark:text-brand text-xs font-bold uppercase tracking-wider border border-brand/20">{course.category}</span>
                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider border border-slate-200 dark:border-white/5">{course.duration}</span>
                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider border border-slate-200 dark:border-white/5">{course.level}</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 dark:text-white mb-6 leading-tight">
                {course.title}
              </h1>
              <p className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-4">{course.subtitle}</p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12 max-w-2xl">
                {course.description}
              </p>

              {/* Who is this for */}
              <div className="mb-16">
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">{t('coursePage.whoFor')}</h3>
                 <div className="grid sm:grid-cols-2 gap-6">
                    {course.targetAudience?.map((item: any, idx: number) => (
                      <div key={idx} className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-white/10">
                         <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center ${item.color} mb-4`}>
                            {item.icon}
                         </div>
                         <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                         <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                           {item.desc}
                         </p>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Curriculum */}
              <div className="mb-12">
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">{t('coursePage.program')}</h3>
                 <div className="space-y-4">
                    {course.modules?.map((mod: any, idx: number) => (
                      <div key={idx} className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden">
                        <div className="p-6 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5">
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-3">
                             <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand text-black text-xs font-bold">{idx + 1}</span>
                             {mod.title}
                          </h4>
                        </div>
                        <div className="p-6">
                           <ul className="grid sm:grid-cols-2 gap-3">
                             {mod.items.map((item: string, i: number) => (
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
                   <div className="text-sm font-medium text-slate-400 mb-2 uppercase tracking-wide">{t('coursePage.totalPrice')}</div>
                   <div className="flex items-baseline gap-2 mb-8">
                     <span className="text-4xl font-extrabold tracking-tight">{course.price}</span>
                     {course.oldPrice && <span className="text-slate-500 line-through text-sm">{course.oldPrice}</span>}
                   </div>

                   <a 
                     href={formLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="block w-full py-4 rounded-xl bg-brand hover:bg-brand-dark text-black font-bold text-base transition-colors shadow-lg shadow-brand/20 mb-8 text-center"
                   >
                     {t('coursePage.enroll')}
                   </a>

                   <ul className="space-y-4 mb-8">
                      {[
                        t('coursePage.features.practical'),
                        t('coursePage.features.access'),
                        t('coursePage.features.certificate'),
                        t('coursePage.features.support'),
                        t('coursePage.features.reviews')
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
                 <h4 className="font-bold text-slate-900 dark:text-white mb-6">{t('coursePage.details')}</h4>
                 <div className="space-y-6">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300">
                          <Users className="w-5 h-5" />
                       </div>
                       <div>
                          <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">{t('coursePage.level')}</div>
                          <div className="text-sm font-medium text-slate-900 dark:text-white">{course.level}</div>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300">
                          <Clock className="w-5 h-5" />
                       </div>
                       <div>
                          <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">{t('coursePage.duration')}</div>
                          <div className="text-sm font-medium text-slate-900 dark:text-white">{course.duration} ({course.schedule})</div>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300">
                          <Globe className="w-5 h-5" />
                       </div>
                       <div>
                          <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">{t('coursePage.format')}</div>
                          <div className="text-sm font-medium text-slate-900 dark:text-white">{t('coursePage.formatValue')}</div>
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

export default CoursePage;
