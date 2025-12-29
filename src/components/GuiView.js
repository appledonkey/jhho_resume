import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Cpu, GraduationCap, Award, Terminal, ExternalLink } from 'lucide-react';
import { useResumeData } from '../context/ResumeDataProvider';
import SectionHeading from './SectionHeading';
import Badge from './Badge';

const GuiView = () => {
  const resumeData = useResumeData();
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('All');
  const [selectedProjectTag, setSelectedProjectTag] = useState('All');
  
  const skillsByCategory = resumeData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const projectTags = [...new Set(resumeData.projects.flatMap(p => p.tags))];

  const categoryColorMap = {
    "Languages & Scripting": "blue",
    "Automation & Platforms": "green",
    "Frameworks & Tools": "yellow",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const filteredSkills = selectedSkillCategory === 'All' 
    ? skillsByCategory 
    : { [selectedSkillCategory]: skillsByCategory[selectedSkillCategory] };

  const filteredProjects = selectedProjectTag === 'All'
    ? resumeData.projects
    : resumeData.projects.filter(p => p.tags.includes(selectedProjectTag));

  return (
    <div className="space-y-12 print:space-y-6">
      
      {/* --- EXPERIENCE --- */}
      <motion.section 
        id="experience"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <SectionHeading icon={Briefcase} title="Experience" />
        <motion.div className="space-y-8 print:space-y-4" variants={containerVariants}>
          {resumeData.experience.map((job) => (
            <motion.div 
              key={`${job.company}-${job.position}`} 
              className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 print:pl-0 print:border-none transition-all duration-300 hover:border-blue-500"
              variants={itemVariants}
            >
              <div className="print:hidden absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white dark:ring-gray-900" />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 print:flex-row print:justify-between">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white print:text-base">{job.position}</h3>
                <span className="text-sm font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded print:bg-transparent print:text-black print:p-0 print:border-0 print:font-normal">
                  {job.startDate} — {job.endDate}
                </span>
              </div>
              
              <div className="text-blue-600 dark:text-blue-400 font-medium mb-2 print:text-black print:font-bold">{job.company}</div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 print:text-black italic">{job.summary}</p>
              
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-400 text-base print:text-black">
                {job.highlights.map((point) => (
                  <li key={point} className="leading-relaxed">{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* --- EDUCATION --- */}
      <motion.section 
        id="education" 
        className="break-inside-avoid"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <SectionHeading icon={GraduationCap} title="Education" />
        <motion.div className="grid grid-cols-1 gap-4" variants={containerVariants}>
          {resumeData.education.map((edu) => (
            <motion.div 
              key={edu.institution} 
              className="p-4 bg-gray-50 dark:bg-gray-800/30 rounded-lg border border-gray-100 dark:border-gray-800 print:border-none print:bg-transparent print:p-0"
              variants={itemVariants}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <h3 className="font-bold text-gray-900 dark:text-white print:text-base">{edu.institution}</h3>
                  <span className="hidden sm:inline-block text-gray-500">|</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Lubbock, TX</p>
                </div>
                <span className="mt-1 sm:mt-0 text-sm font-mono text-gray-500 bg-white dark:bg-gray-900 px-3 py-1 rounded border border-gray-200 dark:border-gray-700 print:border-none print:bg-transparent print:p-0 print:text-black print:font-normal">
                  {edu.endDate}
                </span>
              </div>
              <p className="text-sm text-blue-600 dark:text-blue-400 mt-1 print:text-black">{edu.studyType} in {edu.area} ({edu.courses.join(', ')})</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* --- SKILLS --- */}
      <motion.section 
        id="skills" 
        className="break-inside-avoid"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <SectionHeading icon={Cpu} title="Technical Skills" />
        <div className="mb-4 flex flex-wrap gap-2 print:hidden">
          <button onClick={() => setSelectedSkillCategory('All')} aria-pressed={selectedSkillCategory === 'All'} className={`px-3 py-1 text-sm rounded-full ${selectedSkillCategory === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>All</button>
          {Object.keys(skillsByCategory).map(category => (
            <button key={category} onClick={() => setSelectedSkillCategory(category)} aria-pressed={selectedSkillCategory === category} className={`px-3 py-1 text-sm rounded-full ${selectedSkillCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>{category}</button>
          ))}
        </div>
        <motion.div className="space-y-2" variants={containerVariants}>
          {Object.entries(filteredSkills).map(([category, skills]) => (
            <motion.div 
              key={category} 
              className="print:mb-4"
              variants={itemVariants}
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white print:text-base">
                {category}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{skills.map(s => s.name).join(', ')}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* --- PROJECTS --- */}
      <motion.section 
        id="projects" 
        className="break-inside-avoid"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <SectionHeading icon={Code} title="Projects" />
        <div className="mb-4 flex flex-wrap gap-2 print:hidden">
          <button onClick={() => setSelectedProjectTag('All')} aria-pressed={selectedProjectTag === 'All'} className={`px-3 py-1 text-sm rounded-full ${selectedProjectTag === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>All</button>
          {projectTags.map(tag => (
            <button key={tag} onClick={() => setSelectedProjectTag(tag)} aria-pressed={selectedProjectTag === tag} className={`px-3 py-1 text-sm rounded-full ${selectedProjectTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>{tag}</button>
          ))}
        </div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 print:block" variants={containerVariants}>
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.name} 
              className="group p-5 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:-translate-y-1 print:border-none print:bg-transparent print:p-0 print:mb-4 print:break-inside-avoid"
              variants={itemVariants}
            >
               <h3 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-500 transition-colors print:text-base">
                {project.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 print:h-auto print:text-black">
                {project.description}
              </p>
               <div className="hidden print:flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                   <span key={tag} className="text-xs print:text-sm text-gray-600 dark:text-gray-300">
                    {tag}{project.tags.length > 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

       {/* --- CERTIFICATIONS --- */}
       <motion.section 
        id="certifications" 
        className="break-inside-avoid"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <SectionHeading icon={Award} title="Certifications" />
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:block" variants={containerVariants}>
          {resumeData.certifications.map((cert) => (
            <motion.div 
              key={cert.name} 
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/30 rounded-lg border border-gray-100 dark:border-gray-800 print:border-none print:bg-transparent print:p-0 print:mb-2"
              variants={itemVariants}
            >
              <h3 className="font-bold text-gray-900 dark:text-white text-sm print:text-base">{cert.name}</h3>
              <div className="text-xs font-mono text-gray-500 bg-white dark:bg-gray-900 px-2 py-1 rounded border border-gray-200 dark:border-gray-700 whitespace-nowrap ml-2 print:border-none print:bg-transparent print:p-0 print:text-black">
                {cert.date}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default GuiView;
