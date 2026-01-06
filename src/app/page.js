'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FileJson, Layout, Moon, Sun, Mail, Terminal, Linkedin, Printer } from 'lucide-react';
import { useResumeData } from '../context/ResumeDataProvider';
import CommandPalette from '../components/CommandPalette';
import GuiView from '../components/GuiView';
import JsonView from '../components/JsonView';
import PrintView from '../components/PrintView';

const Favicon = ({ url }) => (
  <img 
    src={`https://www.google.com/s2/favicons?domain=${url}&sz=32`} 
    alt="" 
    width={16} 
    height={16}
    className="rounded-sm"
  />
);

export default function Page() {
  const [view, setView] = useState('gui'); // 'gui' or 'json'
  const [cmdOpen, setCmdOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const resumeData = useResumeData();

  // Command Palette Keyboard Listener
  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCmdOpen((open) => !open);
      }
      if (e.key === 'Escape') {
        setCmdOpen(false);
      }
      // Print shortcut overrides
      if ((e.metaKey || e.ctrlKey) && e.key === 'p') {
        e.preventDefault();
        window.print();
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 print:bg-white">
      
      <div className="print:hidden">
        {/* Navbar / Control Bar */}
        <nav className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
                 <FileJson className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="font-mono text-sm text-gray-600 dark:text-gray-400 hidden sm:inline-block tracking-tight">
                resume.json
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setView(view === 'gui' ? 'json' : 'gui')}
                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                title="Toggle JSON View"
              >
                {view === 'gui' ? <FileJson className="w-5 h-5" /> : <Layout className="w-5 h-5" />}
              </button>
              
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-4 py-12">
          
          {/* Hero Header */}
          <header className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1 space-y-4">
                
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  {resumeData.basics.name}
                </h1>
                <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-mono">
                  {`> ${resumeData.basics.label}_`}
                </p>
                <p className="max-w-2xl text-gray-600 dark:text-gray-400 leading-loose text-lg">
                  {resumeData.basics.summary}
                </p>
                
                 <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-base font-mono mt-2">
                   <span>📍 {resumeData.basics.location.city}, {resumeData.basics.location.region}</span>
                 </div>

                <div className="flex flex-wrap gap-4 pt-4">
                   <button 
                     onClick={() => window.open(`mailto:${resumeData.basics.email}`)}
                     className="px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                   >
                     <Mail className="w-4 h-4" />
                     Contact Me
                   </button>
                   <button
                     onClick={() => window.open(resumeData.basics.profiles[0].url)}
                     className="px-6 py-2.5 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
                   >
                     <Favicon url={resumeData.basics.profiles[0].url} />
                     LinkedIn
                   </button>
                   <button 
                     onClick={() => window.print()}
                     className="px-6 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
                   >
                     <Printer className="w-4 h-4" />
                     Print PDF
                   </button>
                </div>
              </div>
            </div>
          </header>

          {/* Dynamic View Content */}
          {view === 'json' ? <JsonView /> : <GuiView />}

        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 mt-20">
          <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <p>© {new Date().getFullYear()} James Oswald. Built with React & Tailwind.</p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                All Systems Operational
              </span>
            </div>
          </div>
        </footer>

        {/* Command Palette Modal */}
        <CommandPalette 
          isOpen={cmdOpen} 
          onClose={() => setCmdOpen(false)} 
          setView={setView}
        />
      </div>

      <div className="hidden print:block">
        <PrintView />
      </div>

    </div>
  );
}
