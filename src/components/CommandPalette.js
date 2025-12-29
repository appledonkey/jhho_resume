'use client';

import { useEffect, useRef, useState } from 'react';
import { Command, FileJson, Layout, Download, Mail, Code, Linkedin } from 'lucide-react';
import { useResumeData } from '../context/ResumeDataProvider';

const CommandPalette = ({ isOpen, onClose, setView }) => {
  const inputRef = useRef(null);
  const resumeData = useResumeData();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Focus trap
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery(''); // Reset query on open
    }
  }, [isOpen]);

  const options = [
    { label: "View: GUI Mode", action: () => setView('gui'), icon: Layout },
    { label: "View: JSON Data", action: () => setView('json'), icon: FileJson },
    { label: "Action: Print / PDF", action: () => window.print(), icon: Download },
    { label: "Contact: Email", action: () => window.open(`mailto:${resumeData.basics.email}`), icon: Mail },
    { label: "Go: Boot.dev", action: () => window.open(resumeData.basics.profiles[0].url), icon: Code },
    { label: "Go: LinkedIn", action: () => window.open(resumeData.basics.profiles[1].url), icon: Linkedin },
  ];

  const filteredOptions = query
    ? options.filter((opt) => opt.label.toLowerCase().includes(query.toLowerCase()))
    : options;

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredOptions.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredOptions.length) % filteredOptions.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredOptions[selectedIndex]) {
          filteredOptions[selectedIndex].action();
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredOptions, selectedIndex, onClose]);
  
  // Reset selected index on query change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);


  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-[20vh] animate-in fade-in duration-200 print:hidden" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-900 w-full max-w-lg rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden" 
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3 bg-gray-50 dark:bg-gray-800">
          <Command className="w-5 h-5 text-gray-400" />
          <input 
            ref={inputRef}
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command..." 
            className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400 font-mono text-sm"
          />
          <div className="flex gap-1">
             <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs text-gray-500 bg-white dark:bg-gray-900 rounded border border-gray-300 dark:border-gray-600 font-mono">Esc</kbd>
          </div>
        </div>
        <div className="py-2">
          {filteredOptions.map((opt, i) => (
            <button 
              key={opt.label}
              onClick={() => { opt.action(); onClose(); }}
              onMouseMove={() => setSelectedIndex(i)}
              className={`w-full text-left px-4 py-3 flex items-center gap-3 text-gray-700 dark:text-gray-200 transition-colors font-mono text-sm ${
                i === selectedIndex ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <opt.icon className="w-4 h-4" />
              {opt.label}
            </button>
          ))}
          {filteredOptions.length === 0 && (
            <p className="p-4 text-center text-gray-500 font-mono text-sm">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
