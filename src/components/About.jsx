import { useState } from 'react';
import { motion } from 'framer-motion';
import stackImage from '../assets/about/me.png';
import reactImage from '../assets/about/react.png';
import langchain from '../assets/about/langchain.png';
import qdrant from '../assets/about/qdrant.png';
import resume from '../assets/documents/resume.pdf';


const About = () => {
  const [isFlipping, setIsFlipping] = useState(false);

  const handleCardClick = (e) => {
    e.preventDefault();
    if (isFlipping) return;
    setIsFlipping(true);
  };

  const handleFlipComplete = () => {
    if (!isFlipping) return;
    window.open(resume, '_blank', 'noopener,noreferrer');
    setIsFlipping(false);
  };

  return (
    <section id="about" className="relative z-0 w-full overflow-hidden font-sans px-4 md:px-8 pt-16 pb-48 md:pb-52 bg-gradient-to-b from-black via-[#ff2a2a]/10 to-white">

      {/* Ambient red glow — matches Hero/Contact accent treatment */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-300 to-transparent pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff2a2a]/25 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#ff2a2a]/15 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto pt-20 pb-16 px-6 md:px-12">

        <div className="flex flex-col md:flex-row gap-16 items-start">

          {/* Left Side: ID Badge and Skills */}
          <div className="flex flex-col items-center w-full md:w-87.5 shrink-0 mt-12 md:mt-0 pb-28">

            <div data-aos="drop-bounce" className="relative flex justify-center w-full" style={{ perspective: '1200px' }}>
              <div
                role="button"
                tabIndex={0}
                onClick={handleCardClick}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCardClick(e)}
                className="relative cursor-pointer"
                aria-label="Click to view resume"
              >
                {/* Lanyard string */}
                <div className="absolute -top-32 left-1/2 w-3 h-40 bg-white transform -translate-x-1/2 shadow-inner z-0"></div>
                {/* Lanyard clip */}
                <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>

                {/* Badge Card — solid panel, no glass, flips on click */}
                <motion.div
                  animate={{ rotateY: isFlipping ? 360 : 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  onAnimationComplete={handleFlipComplete}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="w-full max-w-70 rounded-2xl p-3 bg-[#141414] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(255,42,42,0.12)] relative z-20 -rotate-3 hover:rotate-0 hover:border-[#ff2a2a]/40 transition-[transform,border-color] duration-500"
                >

                  {/* Cutout Hole */}
                  <div className="absolute -top-3 left-1/2 w-16 h-6 bg-black/80 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                    <div className="w-8 h-2 bg-white/10 rounded-full shadow-inner"></div>
                  </div>
                  {/* Image Container */}
                  <div className="w-full aspect-3/4 overflow-hidden rounded-xl bg-gray-900/60 border border-white/10">
                    <img
                      src={stackImage}
                      alt="Profile"
                      className="w-full h-full object-cover pt-20 bg-[#E5E4E5]"
                    />
                  </div>
                </motion.div>

                {/* Dotted arrow pointing up from the label to the bottom of the card */}
                <svg
                  className="absolute left-1/2 -translate-x-1/2 top-full w-24 h-20 text-white pointer-events-none z-10"
                  viewBox="0 0 100 90"
                  fill="none"
                >
                  <path
                    d="M 20,85  C 20,55 70,55 70,25"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeDasharray="1 8"
                    strokeLinecap="round"
                  />
                  {/* Arrowhead */}
                  <path
                    d="M 62,16 L 70,8 L 76,20"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Label — starting point of the dotted arrow */}
                <span
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="absolute left-2 top-full mt-25 w-32 text-xl text-black font-['Caveat',cursive] bold italic leading-snug rotate-[-4deg] select-none"
                >
                  click my id to see resume
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Info Content */}
          <div id="skills" data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0">

            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              About <span className="text-[#ff2a2a]">Me</span>
            </h2>
            <p className="text-lg font-bold mb-6 leading-relaxed max-w-3xl text-white/80">
              I'm <span className="text-[#ff2a2a] text-xl font-black mx-1 tracking-wide uppercase">Jithin Joseph</span>, Software Developer and an aspiring AI Engineer focused on building intelligent, scalable AI applications that solve real-world problems. Combining software engineering expertise with modern AI technologies, I create innovative, high-performance solutions that deliver seamless user experiences and meaningful impact.
            </p>

            <ul className="space-y-3 mb-8 text-sm md:text-base font-semibold text-white/75 max-w-2xl">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#ff2a2a] shrink-0 shadow-[0_0_8px_rgba(255,42,42,0.6)]"></span>
                Building Intelligent AI Solutions using Generative AI, Retrieval-Augmented Generation (RAG), LLMs, and modern AI frameworks to solve real-world problems.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#ff2a2a] shrink-0 shadow-[0_0_8px_rgba(255,42,42,0.6)]"></span>
                Developing Scalable Full-Stack Applications with React, Node.js, Python, and modern development tools, focusing on performance, maintainability, and seamless user experiences.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#ff2a2a] shrink-0 shadow-[0_0_8px_rgba(255,42,42,0.6)]"></span>
                Passionate About AI Innovation & Automation, continuously exploring cutting-edge technologies to create efficient, impactful, and user-centric products.
              </li>
            </ul>

            {/* Horizontal Skills Row */}
            <div className="flex items-center gap-6 mt-8">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white border border-white flex items-center justify-center hover:border-[#ff2a2a]/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <img
                  data-aos="zoom-in" data-aos-delay="300"
                  src={reactImage}
                  alt="React"
                  className="w-14 h-14 md:w-16 md:h-16 object-contain"
                />
              </div>
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white border border-white/10 flex items-center justify-center hover:border-[#ff2a2a]/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <img
                  data-aos="zoom-in" data-aos-delay="450"
                  src={langchain}
                  alt="Langchain"
                  className="w-14 h-14 md:w-16 md:h-16 object-contain bg-transparent"
                />
              </div>
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white border border-white/10 flex items-center justify-center hover:border-[#ff2a2a]/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <img
                  data-aos="zoom-in" data-aos-delay="600"
                  src={qdrant}
                  alt="qdrant"
                  className="w-14 h-14 md:w-16 md:h-16 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="hidden md:block  absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none"
        >
          <div className="animate-bounce">
            <svg
              className="w-10 h-6 text-[#ff2a2a] drop-shadow-[0_0_20px_rgba(255,42,42,0.5)]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Torn paper divider — sits at section edge, Services stacks above via z-index */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white block">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default About;