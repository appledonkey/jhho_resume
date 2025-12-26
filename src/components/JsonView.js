import { useState } from 'react';
import { useResumeData } from '../context/ResumeDataProvider';
import { Check, Clipboard } from 'lucide-react';

const JsonView = () => {
  const resumeData = useResumeData();
  const [copyStatus, setCopyStatus] = useState('Copy'); // 'Copy' or 'Copied!'

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(resumeData, null, 2)).then(() => {
      setCopyStatus('Copied!');
      setTimeout(() => setCopyStatus('Copy'), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="relative font-mono text-sm bg-[#1e1e1e] text-[#d4d4d4] p-6 rounded-lg shadow-inner overflow-x-auto border border-gray-700 print:hidden">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 px-3 py-1.5 text-xs font-medium bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md flex items-center gap-2 transition-colors"
      >
        {copyStatus === 'Copy' ? <Clipboard className="w-3 h-3" /> : <Check className="w-3 h-3 text-green-400" />}
        {copyStatus}
      </button>
      <pre>{JSON.stringify(resumeData, null, 2)}</pre>
    </div>
  );
};

export default JsonView;
