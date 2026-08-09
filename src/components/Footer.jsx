import { motion } from 'framer-motion';
import { Mail } from "lucide-react";
import { FaGithub , FaLinkedin ,FaInstagram } from "react-icons/fa";


const Medialinks = [
  {
    name: "Github",
    icon: FaGithub,
    href: "https://github.com/jiinnjoseph",
  },
  {
    name: "Linkedin",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/jithin-joseph-a875203b5",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/7.iiinn",
  },
  {
    name: "Mail",
    icon: Mail,
    href: "mailto:heyyjithin@gmail.com",
  },
];

const Footer = () => {
  return (
    <footer className="crystal crystal-dark bg-[#111111]/80 backdrop-blur-xl border-t border-white/5 text-[#d4d4d4] py-16 px-6 md:px-12 w-full max-w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh] overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium text-grey-500"
      >
        <div className="flex flex-col gap-1">
          <p>Cinematic & Creative Production</p>
          <p>Lighting, Editing, Photo</p>
          <p>Motion Graphics</p>
        </div>
        <div className="flex flex-col gap-1 md:items-center">
          <p>1+ years of experience</p>
          <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">View Work</a>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <p>Worldwide Available</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </motion.div>

      {/* Fixed: clamp() instead of raw vw, and a hard overflow guard */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden"
      >
        <h2
          className="leading-none font-sans font-bold tracking-tighter capitalize select-none text-[#f4f4f4] w-full text-center whitespace-nowrap drop-shadow-2xl"
          style={{ fontSize: 'clamp(2.5rem, 16vw, 11rem)' }}
        >
          Heyyjithin
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium"
      >
        <div className="flex flex-col gap-6">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
        </div>
              <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

        <div className="flex items-center gap-3">
          {Medialinks.map(({ name, icon: Icon, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="
              group flex h-10 w-10 items-center justify-center
              rounded-full border border-white/10
              bg-white/[0.03]
              text-gray-500
              transition-all duration-300
              hover:-translate-y-1
              hover:border-white
              hover:bg-red-600
              hover:text-white
              hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
            >
              <Icon size={18} strokeWidth={1.8} />
            </a>
          ))}
        </div>

      </div>
        <div className="flex flex-col gap-1 md:items-end">
          <a href="#" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">Privacy Policy</a>
        </div>
      </motion.div>
        <div className='mt-10'>
           <p className="text-[12px] text-gray-500" >
          © 2026 Jithin Joseph. All rights reserved.
        </p>
        </div>

    </footer>
  );
};

export default Footer;