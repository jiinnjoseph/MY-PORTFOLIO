import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
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
        // Trigger when a section occupies the middle band of the viewport
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const textColorBase = isScrolled ? 'text-black/80' : 'text-white/80';
  const textColorHover = isScrolled ? 'hover:text-black' : 'hover:text-white';
  const logoColor = isScrolled ? 'text-black' : 'text-white';
  const hamburgerColor = isScrolled ? 'text-black' : 'text-white';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen
          ? 'bg-[#ff2a2a]/95 backdrop-blur-xl py-4 shadow-[0_4px_30px_rgba(255,42,42,0.3)]'
          : isScrolled
            ? 'bg-transparent backdrop-blur-xl border-b border-black/5 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
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
                className={`font-medium relative group transition-colors duration-300 ${
                  isActive
                    ? (isScrolled ? 'text-black' : 'text-white')
                    : `${textColorBase} ${textColorHover}`
                }`}
              >
                {link.label}
                {/* Underline: full width + red when active section matches,
                    otherwise slides in from left on hover */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-red-500 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
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
            className={`px-6 py-2.5 bg-grey-200 rounded-full  border border-red-600  font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,42,42,0.25)] ${
              isScrolled
                ? 'text-black hover:bg-black/10'
                : 'text-white hover:bg-white/15'
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