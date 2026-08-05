import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RAGim from '../assets/works/RAGimg.png';
import cloneimg from '../assets/works/Cloneimg.png';
import Roadassist from '../assets/works/roadassist.png';
import Atelierim from '../assets/works/architect.png';
import hotelsearch from '../assets/works/hotelsearch.png';
import edfly from '../assets/works/edfly.png';




const PROJECTS = [
  {
    id: 1,
    number: '01',
    title: 'Infinity | Multi modal RAG system',
    category: 'AI / GenAI',
    year: '2026',
    description:
      'A retrieval-augmented generation chatbot that ingests different kinds of documents into a Qdrant vector store and answers questions with cited, grounded responses using LangChain and an LLM orchestration layer.',
    tags: ['LangChain', 'Qdrant', 'Python', 'OpenAI API', 'YOLO', 'Groq'],
    image: RAGim,
    github: 'https://github.com/jiinnjoseph/MULTI-MODAL-RAG',
    live: 'https://multi-modal-rag-xz.streamlit.app',
    featured: false,
  },
  {
    id: 2,
    number: '02',
    title: 'Atelier AI | Architecture Assistant',
    category: 'AI / GenAI',
    year: '2026',
    description: 'Atelier AI is an ai-powered architecture assistant that transforms text prompts into intelligent floor plans and realistic architectural visualizations.',
    tags: ['Hugging Face', 'Python', 'Torch', 'Streamlit'],
    image: Atelierim,
    github: 'https://github.com/jiinnjoseph/Architecture-assistant',
    live: 'https://architecture-assistant-xkdc7bg2qvqem8rsjpesr8.streamlit.app/',
    featured: false,
  },

  {
    id: 3,
    number: '03',
    title: 'RoadAssist | Emergency Fuel and service Assistance',
    category: 'Full-Stack',
    year: '2026',
    description:
      'RoadAssist is a full-stack web application that provides emergency fuel and service assistance to users in need. It features real-time location tracking, service provider matching, and a seamless user interface for requesting help.',
    tags: ['python','Django','MySQL','HTML','CSS','JavaScript'],
    image: Roadassist,
    github: 'https://github.com/jiinnjoseph/DJANGO-APP',
    live: '#',
    featured: false,
  },
  {
    id: 4,
    number: '04',
    title: 'Second Home | Hotel Search App',
    category: 'Frontend',
    year: '2026',
    description:
      'A hotel search app that fetches real-time hotel listings, prices, ratings, and booking links using the Google Hotels API via SerpAPI.',
    tags: ['Google Hotels API','Django','Tailwind CSS', 'javascript', 'React', 'SerpAPI'],
    image: hotelsearch,
    github: 'https://github.com/jiinnjoseph/API_PROJECT',
    live: '#',
    featured: false,
  },
  {
    id: 5,
    number: '05',
    title: 'Edfly | Study Abroad Education consultancy application',
    category: ' Frontend',
    year: '2026',
    description:
      'A modern study abroad consultancy platform that helps students explore universities, courses, and global education opportunities with an intuitive user experience.',
    tags: ['python','HTML','CSS',],
    image: edfly,
    github: 'https://github.com/jiinnjoseph/Edfly-app',
    live: '#',
    featured: false,
  },
  {
    id: 6,
    number: '06',
    title: 'Pepsi Clone | Pepsi Website Clone',
    category: 'Frontend',
    year: '2026',
    description:
      'A responsive Pepsi landing page clone featuring smooth animations, modern UI, and a pixel-perfect design.',
    tags: ['Python', 'HTML','CSS', 'JavaScript', 'React'],
    image: cloneimg,
    github: 'https://github.com/jiinnjoseph/Pepsi-clone',
    live: '#',
    featured: false,
  },
];

const FILTERS = ['All', 'AI / GenAI', 'Full-Stack', 'Frontend'];

// Columns used once cards split into their grid positions
const GRID_COLS = 3;

const ProjectCard = ({ project, index, isSplit }) => {
  const [isHovered, setIsHovered] = useState(false);


  const stackOffset = {
    x: index * 6,
    y: index * 10,
    rotate: (index % 2 === 0 ? 1 : -1) * (2 + index * 1.1),
    scale: 1 - index * 0.02,
  };

  return (
    <motion.div
      layout
      initial={false}
      animate={
        isSplit
          ? { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }
          : { ...stackOffset, opacity: 1 }
      }
      transition={{
        layout: { duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] },
        default: { duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] },
      }}
      style={{
        zIndex: isSplit ? 1 : PROJECTS.length - index,
        position: isSplit ? 'static' : 'absolute',
        top: isSplit ? 'auto' : 0,
        left: isSplit ? 'auto' : 0,
        width: isSplit ? 'auto' : '100%',
        willChange: 'transform',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex flex-col rounded-3xl p-1 transition-shadow duration-700 hover:-translate-y-1 ${
        isSplit || index === 0
          ? isHovered
            ? 'crystal crystal-accent shadow-[0_25px_60px_rgba(255,42,42,0.35)]'
            : 'crystal crystal-light hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]'
          : 'bg-gray-50 border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.08)]'
      }`}
    >
      {/* Hole punch detail */}
      <div className="w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-3 left-1/2 -translate-x-1/2 border border-gray-300 z-20 flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-gray-800 rounded-full opacity-20"></div>
      </div>

      {/* Media */}
      <div className="w-full h-44 mt-6 rounded-2xl overflow-hidden relative bg-gray-900 shrink-0">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-black">
            <span className="text-white/20 text-5xl font-black">{project.number}</span>
          </div>
        )}

        {/* Hover overlay with quick links */}
        <div
          className={`absolute inset-0 flex items-center justify-center gap-4 bg-black/60 backdrop-blur-sm transition-transform duration-500 origin-center ${
            isHovered ? 'scale-100' : 'scale-0 pointer-events-none'
          }`}
          style={{ willChange: 'transform' }}
        >
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform duration-300"
            aria-label={`View ${project.title} live`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform duration-300"
            aria-label={`View ${project.title} source code`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.17c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.48 5.921.43.372.823 1.104.823 2.226v3.3c0 .32.192.694.8.576C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>

        {/* Featured tag */}
        {project.featured && (
          <span
            className={`absolute top-3 left-3 z-10 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md ${
              isHovered ? 'bg-white text-[#ff2a2a]' : 'bg-black/60 text-white'
            }`}
          >
            Featured
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col p-5">
        <div className="flex items-center justify-between mb-2">
          <span
            className={`text-sm font-bold font-serif italic transition-colors duration-700 ${
              isHovered ? 'text-red-200' : 'text-gray-400'
            }`}
          >
            {project.number}
          </span>
          <span
            className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-700 ${
              isHovered ? 'text-red-100' : 'text-gray-400'
            }`}
          >
            {project.category} · {project.year}
          </span>
        </div>

        <h3
          className={`text-xl font-black mb-2 tracking-tight transition-colors duration-700 ${
            isHovered ? 'text-white' : 'text-gray-900'
          }`}
        >
          {project.title}
        </h3>

        <p
          className={`text-sm leading-relaxed font-medium mb-4 transition-colors duration-700 ${
            isHovered ? 'text-red-50' : 'text-gray-500'
          }`}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[11px] font-bold px-3 py-1 rounded-full border transition-colors duration-700 ${
                isHovered
                  ? 'border-white/30 text-white bg-white/10'
                  : 'border-gray-200 text-gray-600 bg-gray-50'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isSplit, setIsSplit] = useState(false);
  const containerRef = useRef(null);
  const stackRef = useRef(null);

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.trim() === activeFilter.trim());

  useEffect(() => {
    const node = stackRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSplit(true);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-gray-300 pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-14 md:mb-20"
        >
          <div className="crystal crystal-light inline-block rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8">
            My Works
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight relative">
            Projects built with{' '}
            <span className="text-red-600">
              purpose
            </span>
            <svg
              className="absolute -bottom-8 left-2 w-12 h-12 text-gray-800 hidden md:block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-lg font-medium leading-relaxed">
            A mix of AI applications, full-stack products, and interfaces —
            each one shipped, not just prototyped.
            {!isSplit && ' Tap the stack to spread it out.'}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap items-center gap-3 mb-12 md:mb-16"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#ff2a2a] text-white shadow-[0_10px_25px_rgba(255,42,42,0.35)]'
                  : 'crystal crystal-light text-gray-600 hover:text-gray-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <div className="relative">
          <motion.div
            ref={stackRef}
            layout
            role={isSplit ? undefined : 'button'}
            tabIndex={isSplit ? undefined : 0}
            aria-label={isSplit ? undefined : 'Spread the project stack'}
            onClick={() => !isSplit && setIsSplit(true)}
            onKeyDown={(e) => {
              if (!isSplit && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                setIsSplit(true);
              }
            }}
            className={
              isSplit
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start'
                : 'relative w-full max-w-sm mx-auto cursor-pointer'
            }
            style={!isSplit ? { height: '26rem' } : undefined}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isSplit={isSplit}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Click-to-collapse control, only shown once split */}
          {isSplit && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setIsSplit(false)}
                className="crystal crystal-light px-5 py-2 rounded-full text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                ↺ Restack
              </button>
            </div>
          )}

          {/* Empty state (edge case: filter with no matches) */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-gray-400 font-semibold">
              No projects in this category yet.
            </div>
          )}
        </div>

        {/* Bottom CTA, mirrors Hero's button styling */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14 flex flex-col md:flex-row items-center justify-between gap-8 crystal crystal-dark rounded-4xl p-10 md:p-14 relative overflow-hidden transition-all duration-700 hover:-translate-y-2"
        >
          <div className="absolute top-6 right-8 text-red-600 opacity-10">
            <svg className="w-20 h-20" viewBox="0 0 24 24">
              <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
            </svg>
          </div>
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black text-black mb-2 tracking-tight">
              Got an idea worth building?
            </h3>
            <p className="text-black font-medium max-w-md">
              I'm open to freelance work and collaborations on AI and full-stack projects.
            </p>
          </div>
          <a
            href="#contact"
            className="relative z-10 shrink-0 px-8 py-3.5 rounded-full bg-red-600 text-white font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105 shadow-md whitespace-nowrap"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient flow to next component (Contact - bg-black) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-gray-400/30 to-black pointer-events-none z-20" />

      {/* Torn paper divider into Contact */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-black"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Projects;
