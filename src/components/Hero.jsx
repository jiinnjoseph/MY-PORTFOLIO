import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Introvid from '../assets/hero video/Intro.mp4';

const Hero = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLooping, setIsLooping] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Raw cursor position, smoothed with a spring so the grid glow trails naturally
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const glowX = useSpring(cursorX, { stiffness: 100, damping: 30, mass: 0.3 });
  const glowY = useSpring(cursorY, { stiffness: 100, damping: 30, mass: 0.3 });
  const gridMask = useMotionTemplate`radial-gradient(260px circle at ${glowX}px ${glowY}px, black 0%, transparent 75%)`;

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);


    video.load();
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        setIsPlaying(false);
      });
    }

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    cursorX.set(e.clientX - rect.left);
    cursorY.set(e.clientY - rect.top);
  };

  const togglePlay = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const toggleLoop = () => {
    setIsLooping((prev) => !prev);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    // Toggling here is a real user gesture, so the browser will allow
    // audio to actually start — this is the only reliable way to get
    // sound on a video that had to autoplay muted.
    video.muted = !video.muted;
    setIsMuted(video.muted);

    if (!video.muted && video.paused) {
      video.play();
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#0d0408] to-black"
    >
      {/* Ambient background glow gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#ff2a2a]/20 via-transparent to-transparent pointer-events-none z-0" />

      {/* Base grid — faint, always visible */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Bright grid, revealed only inside a radial spotlight that follows the cursor */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,42,42,0.9) 0.5px, transparent 1px), linear-gradient(to bottom, rgba(255,42,42,0.9) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          WebkitMaskImage: gridMask,
          maskImage: gridMask,
        }}
      />


      {/* Portrait */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] max-w-[700px] h-[85%] flex items-end justify-center"
      >
        {/* Soft radial fade so the portrait's own background dissolves into the section's black */}
        <div className="absolute inset-0 pointer-events-none z-10"></div>

        <video
          ref={videoRef}
          src={Introvid}
          playsInline
          preload="auto"
          loop={isLooping}
          className="h-[80%] w-auto object-contain object-right relative rounded-lg"
        >
          Your browser does not support the video tag.
        </video>

        <div>
          <div className="absolute bottom-2 right-35 z-20 flex flex-col items-center gap-2">
            {/* Play / Pause control */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause intro video' : 'Play intro video'}
              className="flex items-center right-15 top-14 justify-center px-4 py-3 rounded-full md:w-12 md:h-12 crystal bg-red-600 text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,42,42,0.3)] transition-all duration-300"
            >
              {isPlaying ? (
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 translate-x-[1px] default-transition"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute intro video' : 'Mute intro video'}
              aria-pressed={!isMuted}
              className={`flex items-center justify-center px-4 py-3 rounded-full md:w-12 md:h-12 crystal transition-all duration-300 ${!isMuted
                  ? 'bg-red-600 text-white hover:shadow-[0_0_20px_rgba(255,42,42,0.3)]'
                  : 'bg-white/10 text-white hover:bg-white/20'
                }`}
            >
              {isMuted ? (
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.div>


      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full pointer-events-none">

        {/* Left Side: Text and Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex flex-col items-start text-left max-w-2xl w-full pointer-events-auto"
        >
          {/* Main Heading */}
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Hi, I'm an{" "}
            <span className="text-[#ff2a2a] text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              aspiring
            </span>{" "}
            <br />
            <span className="text-white [-webkit-text-stroke:1.5px_#ff2a2a]">AI Engineer</span>
            <br />
          </h1>

          {/* Subheading */}
          <p className="text-white/70 text-sm md:text-lg font-semibold mb-8 max-w-md drop-shadow-md">
            I build fast, scalable and modern web applications and Gen AI Applications using React, AI models and Agents.
          </p>

          {/* Buttons */}
          <div className="flex flex-row flex-wrap items-center gap-3 w-full">
            {/* Primary Button */}
            <a href="#projects" className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-[#ff2a2a] text-white font-semibold hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 transform hover:scale-105 shadow-[0_10px_25px_rgba(255,42,42,0.35)]">
              View My Work
            </a>

            {/* Secondary Button - Glassmorphism style */}
            <a href="#contact" className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full text-white font-semibold border border-white hover:bg-white hover:text-red-600 hover:shadow-[0_0_20px_rgba(255,42,42,0.3)] transition-all duration-300">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
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
      {/* Bottom gradient flow to next component (About - black top) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-black/80 to-black pointer-events-none z-20" />
    </section>
  );
};

export default Hero;
