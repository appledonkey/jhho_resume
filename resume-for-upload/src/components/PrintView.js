import React from 'react';
import { useResumeData } from '../context/ResumeDataProvider';
import { Mail, Phone, Linkedin, Globe } from 'lucide-react';

const PrintView = () => {
  const resumeData = useResumeData();
  const { basics, experience, education, skills, projects, certifications } = resumeData;

  const contactInfo = [
    { icon: <Mail size={14} />, text: basics.email, href: `mailto:${basics.email}` },
    { icon: <Linkedin size={14} />, text: 'LinkedIn', href: basics.profiles.find(p => p.network.toLowerCase() === 'linkedin')?.url },
    { icon: <Globe size={14} />, text: 'Portfolio', href: basics.profiles.find(p => p.network.toLowerCase() === 'boot.dev')?.url },
  ].filter(item => item.href);

  return (
    <div className="bg-white text-gray-800 p-8">
      {/* --- HEADER --- */}
      <header className="flex flex-col items-center mb-6 border-b pb-4">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{basics.name}</h1>
        <p className="text-md mt-1 text-blue-600">{basics.label}</p>
        <div className="flex items-center gap-x-4 gap-y-1 mt-3 text-xs flex-wrap justify-center">
          {contactInfo.map(item => (
            <a key={item.text} href={item.href} className="flex items-center gap-2">
              {item.icon}
              <span>{item.text}</span>
            </a>
          ))}
           <span className="flex items-center gap-2">
              <span>📍</span>
              <span>{basics.location.city}, {basics.location.region}</span>
            </span>
        </div>
      </header>

      <main className="space-y-6">
        {/* --- SUMMARY --- */}
        <section>
           <h2 className="text-lg font-bold uppercase tracking-wider text-gray-700 border-b-2 border-gray-200 pb-1 mb-3">Summary</h2>
           <p className="text-sm leading-relaxed">{basics.summary}</p>
        </section>

        {/* --- EXPERIENCE --- */}
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wider text-gray-700 border-b-2 border-gray-200 pb-1 mb-3">Experience</h2>
          <div className="space-y-5">
            {experience.map(job => (
              <div key={job.company} className="break-inside-avoid">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-md font-semibold text-gray-800">{job.position}</h3>
                  <span className="text-xs font-medium text-gray-600">{job.startDate} — {job.endDate}</span>
                </div>
                <p className="text-sm font-semibold text-blue-600 mb-1">{job.company}</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  {job.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* --- SKILLS --- */}
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wider text-gray-700 border-b-2 border-gray-200 pb-1 mb-3">Skills</h2>
          <div className="space-y-1">
            {Object.entries(skills.reduce((acc, skill) => {
              if (!acc[skill.category]) acc[skill.category] = [];
              acc[skill.category].push(skill.name);
              return acc;
            }, {})).map(([category, skillList]) => (
              <div key={category} className="flex items-baseline">
                <h3 className="w-40 font-semibold text-sm text-gray-700">{category}:</h3>
                <p className="text-xs flex-1">{skillList.join(', ')}</p>
              </div>
            ))}
          </div>
        </section>
        
         {/* --- PROJECTS --- */}
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wider text-gray-700 border-b-2 border-gray-200 pb-1 mb-3">Projects</h2>
           <div className="space-y-3">
              {projects.map(project => (
                 <div key={project.name} className="break-inside-avoid">
                    <h3 className="text-md font-semibold text-gray-800">{project.name}</h3>
                    <p className="text-xs italic mb-1">{project.tags.join(', ')}</p>
                    <p className="text-xs">{project.description}</p>
                 </div>
              ))}
           </div>
        </section>

        {/* --- CERTIFICATIONS --- */}
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wider text-gray-700 border-b-2 border-gray-200 pb-1 mb-3">Certifications</h2>
          <div className="space-y-1">
            {certifications.map(cert => (
              <div key={cert.name} className="flex justify-between items-baseline">
                <h3 className="text-md font-semibold text-gray-800">{cert.name}</h3>
                <span className="text-xs font-medium text-gray-600">{cert.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- EDUCATION --- */}
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wider text-gray-700 border-b-2 border-gray-200 pb-1 mb-3">Education</h2>
          {education.map(edu => (
            <div key={edu.institution}>
              <div className="flex justify-between items-baseline">
                <h3 className="text-md font-semibold text-gray-800">{edu.institution}</h3>
                <span className="text-xs font-medium text-gray-600">{edu.endDate}</span>
              </div>
              <p className="text-sm text-blue-600">{edu.studyType} in {edu.area} ({edu.courses.join(', ')})</p>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
};

export default PrintView;
