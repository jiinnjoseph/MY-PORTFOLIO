import { motion } from 'framer-motion';
import { Code2, Server, Sparkles, Eye, Database, Wrench } from 'lucide-react';

const SKILL_GROUPS = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'React', score: 85 },
      { name: 'Tailwind CSS', score: 88 },
      { name: 'JavaScript', score: 80 },
      { name: 'Framer Motion', score: 75 },
      { name: 'HTML5 / CSS3', score: 90 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Python', score: 90 },
      { name: 'Django', score: 85 },
      { name: 'FastAPI', score: 80 },
      { name: 'REST API Design', score: 82 },
      { name: 'MySQL / SQLite', score: 78 },
    ],
  },
  {
    id: 'genai',
    title: 'GenAI & RAG',
    icon: Sparkles,
    skills: [
      { name: 'RAG Pipelines', score: 90 },
      { name: 'Prompt Engineering', score: 85 },
      { name: 'LangChain', score: 78 },
      { name: 'LLM Orchestration', score: 82 },
      { name: 'Context Grounding', score: 84 },
    ],
  },
  {
    id: 'vision-speech',
    title: 'Vision & Speech',
    icon: Eye,
    skills: [
      { name: 'CLIP', score: 82 },
      { name: 'YOLOv8', score: 78 },
      { name: 'faster-whisper', score: 80 },
      { name: 'Tesseract OCR', score: 74 },
      { name: 'Hugging Face', score: 77 },
    ],
  },
  {
    id: 'vector-db',
    title: 'Vector Databases',
    icon: Database,
    skills: [
      { name: 'Qdrant', score: 88 },
      { name: 'ChromaDB', score: 75 },
      { name: 'FAISS', score: 72 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Deployment',
    icon: Wrench,
    skills: [
      { name: 'Git / GitHub', score: 88 },
      { name: 'Streamlit Deploy', score: 85 },
      { name: 'Docker', score: 68 },
      { name: 'Postman', score: 78 },
      { name: 'VS Code', score: 92 },
    ],
  },
];

const SkillBar = ({ name, score, delay }) => (
  <div className="w-full">
    <div className="flex items-center justify-between mb-1.5">
      <span className="text-xs font-bold text-gray-700">{name}</span>
      <span className="text-xs font-bold text-red-600">{score}%</span>
    </div>
    <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${score}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        className="h-full rounded-full bg-gradient-to-r from-red-500 to-[#ff2a2a] shadow-[0_0_8px_rgba(255,42,42,0.5)]"
      />
    </div>
  </div>
);

const SkillCard = ({ group, index }) => {
  const Icon = group.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-transperant rounded-3xl p-1 flex flex-col hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:bg-[#ff2a2a] transition-colours duration-700"
    >
      {/* Hole punch detail — matches ProjectCard / TagCard motif */}
      <div className="w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-3 left-1/2 -translate-x-1/2 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-gray-800 rounded-full opacity-20"></div>
      </div>

      <div className="w-full rounded-2xl mt-6 p-6 md:p-7 bg-[#f4f4f4] flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-red-50 text-[#ff2a2a] flex items-center justify-center shrink-0 group-hover:bg-[#ff2a2a] group-hover:text-white transition-colors duration-500">
            <Icon size={20} strokeWidth={2} />
          </div>
          <h3 className="text-lg md:text-xl font-black text-gray-900 tracking-tight">
            {group.title}
          </h3>
        </div>

        {/* Bars */}
        <div className="flex flex-col gap-4">
          {group.skills.map((skill, i) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              score={skill.score}
              delay={0.15 + i * 0.08}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Header — same catchy pattern as Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-14 md:mb-20"
        >
          <div className="crystal crystal-light inline-block rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8">
            What I Bring
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight relative">
            Skills stacked with{' '}
            <span className="text-red-600">precision</span>
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
            From pixels to pipelines — the tools and technologies I use to
            take an idea from a blank page to a shipped product.
          </p>
        </motion.div>

        {/* Cards Grid — fixed in place, no stack/split motion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, index) => (
            <SkillCard key={group.id} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;