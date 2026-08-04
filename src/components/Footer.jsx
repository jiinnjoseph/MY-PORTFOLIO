import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="crystal crystal-dark bg-[#111111]/80 backdrop-blur-xl border-t border-white/5 text-[#d4d4d4] py-16 px-6 md:px-12 w-full max-w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh] overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium"
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
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:heyyjithin@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">heyyjithin@gmail.com</a>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <a href="#" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">Privacy Policy</a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;