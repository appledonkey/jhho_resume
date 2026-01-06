import React from 'react';
import { useResumeData } from '../context/ResumeDataProvider';
import { Mail, Linkedin, MapPin } from 'lucide-react';

const PrintView = () => {
  const resumeData = useResumeData();
  const { basics, experience, education, skills, projects, certifications } = resumeData;

  const linkedInUrl = basics.profiles.find(p => p.network.toLowerCase() === 'linkedin')?.url;

  return (
    <div className="bg-white text-gray-800 p-6 max-w-[8.5in] mx-auto">
      <header className="text-center mb-4 pb-3 border-b-2 border-gray-300">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">{basics.name}</h1>
        <p className="text-sm mt-1 text-gray-600 font-medium">{basics.label}</p>
        <div className="flex items-center justify-center gap-4 mt-2 text-xs text-gray-600">
          <a href={`mailto:${basics.email}`} className="flex items-center gap-1 hover:text-blue-600">
            <Mail size={12} />
            {basics.email}
          </a>
          {linkedInUrl && (
            <a href={linkedInUrl} className="flex items-center gap-1 hover:text-blue-600">
              <Linkedin size={12} />
              LinkedIn
            </a>
          )}
          <span className="flex items-center gap-1">
            <MapPin size={12} />
            {basics.location.city}, {basics.location.region}
          </span>
        </div>
      </header>

      <main className="space-y-4">
        <section className="break-inside-avoid">
          <h2 className="text-sm font-bold uppercase tracking-wide text-gray-700 border-b border-gray-300 pb-1 mb-2">Summary</h2>
          <p className="text-xs leading-relaxed text-gray-700">{basics.summary}</p>
        </section>

        <section>
          <h2 className="text-sm font-bold uppercase tracking-wide text-gray-700 border-b border-gray-300 pb-1 mb-2">Experience</h2>
          <div className="space-y-3">
            {experience.map(job => (
              <div key={job.company} className="break-inside-avoid">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold text-gray-800">{job.position}</h3>
                  <span className="text-xs text-gray-500">{job.startDate} — {job.endDate}</span>
                </div>
                <p className="text-xs font-semibold text-gray-600 mb-1">{job.company}</p>
                <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-700">
                  {job.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="break-inside-avoid">
          <h2 className="text-sm font-bold uppercase tracking-wide text-gray-700 border-b border-gray-300 pb-1 mb-2">Skills</h2>
          <div className="space-y-1">
            {Object.entries(skills.reduce((acc, skill) => {
              if (!acc[skill.category]) acc[skill.category] = [];
              acc[skill.category].push(skill.name);
              return acc;
            }, {})).map(([category, skillList]) => (
              <div key={category} className="flex text-xs">
                <span className="font-semibold text-gray-700 w-36 shrink-0">{category}:</span>
                <span className="text-gray-600">{skillList.join(' · ')}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="break-inside-avoid">
          <h2 className="text-sm font-bold uppercase tracking-wide text-gray-700 border-b border-gray-300 pb-1 mb-2">Projects</h2>
          <div className="space-y-2">
            {projects.map(project => (
              <div key={project.name} className="break-inside-avoid">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-xs font-bold text-gray-800">{project.name}</h3>
                  <span className="text-xs text-gray-500">({project.tags.join(', ')})</span>
                </div>
                <p className="text-xs text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex gap-6 break-inside-avoid">
          <section className="flex-1">
            <h2 className="text-sm font-bold uppercase tracking-wide text-gray-700 border-b border-gray-300 pb-1 mb-2">Certifications</h2>
            <div className="space-y-1">
              {certifications.map(cert => (
                <div key={cert.name} className="flex justify-between text-xs">
                  <span className="font-medium text-gray-700">{cert.name}</span>
                  <span className="text-gray-500">{cert.date}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="w-64 shrink-0">
            <h2 className="text-sm font-bold uppercase tracking-wide text-gray-700 border-b border-gray-300 pb-1 mb-2">Education</h2>
            {education.map(edu => (
              <div key={edu.institution} className="text-xs">
                <div className="flex justify-between">
                  <span className="font-bold text-gray-800">{edu.institution}</span>
                  <span className="text-gray-500">{edu.endDate}</span>
                </div>
                <p className="text-gray-600">{edu.studyType} in {edu.area}</p>
                <p className="text-gray-500 italic">{edu.courses.join(', ')}</p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrintView;
