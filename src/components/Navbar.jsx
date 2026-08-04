import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Handle scroll to make navbar solid + invert colors
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -40% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const isLightSection = activeSection === 'services' || activeSection === 'projects';

  const textColorBase = isLightSection ? 'text-gray-700' : 'text-white/70';
  const textColorHover = isLightSection ? 'hover:text-black' : 'hover:text-white';
  const logoColor = isLightSection ? 'text-black' : 'text-white';
  const hamburgerColor = isLightSection ? 'text-black' : 'text-white';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isOpen
          ? 'bg-[#ff2a2a]/95 backdrop-blur-xl py-4 shadow-[0_4px_30px_rgba(255,42,42,0.3)]'
          : isScrolled
            ? isLightSection
              ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
              : 'bg-black/40 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_4px_25px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <a
            href="#home"
            className={`text-2xl font-black tracking-tight transition-colors duration-300 ${
              isOpen ? 'text-white' : logoColor
            }`}
          >
            Heyyjithin<span className="text-red-500">.</span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`font-semibold relative group transition-colors duration-300 ${
                  isActive
                    ? (isLightSection ? 'text-black font-bold' : 'text-white font-bold')
                    : `${textColorBase} ${textColorHover}`
                }`}
              >
                {link.label}
                {/* Underline: full width + red when active section matches */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-red-500 transition-all duration-300 ${
                    isActive ? 'w-full shadow-[0_0_8px_rgba(255,42,42,0.8)]' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </a>
            );
          })}
        </div>

        {/* Right Side: CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className={`px-6 py-2.5 rounded-full border border-red-600 font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(255,42,42,0.2)] hover:shadow-[0_0_25px_rgba(255,42,42,0.5)] ${
              isLightSection
                ? 'text-black bg-red-500/10 hover:bg-red-600 hover:text-white'
                : 'text-white bg-red-600/20 hover:bg-red-600 hover:text-white'
            }`}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none p-2 transition-colors duration-300 ${
              isOpen ? 'text-white' : hamburgerColor
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-4 opacity-100 bg-[#ff2a2a] shadow-2xl' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-black font-bold text-lg border-b border-white/20 pb-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 pb-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-block px-6 py-3 rounded-full bg-white text-[#ff2a2a] font-black hover:bg-black hover:text-white transition-colors w-full text-center shadow-lg"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;