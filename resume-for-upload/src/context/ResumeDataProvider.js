'use client';

import { createContext, useContext } from 'react';
import { RESUME_DATA } from '../data/resume-data';

const ResumeDataContext = createContext(null);

export function ResumeDataProvider({ children }) {
  return (
    <ResumeDataContext.Provider value={RESUME_DATA}>
      {children}
    </ResumeDataContext.Provider>
  );
}

export function useResumeData() {
  const context = useContext(ResumeDataContext);
  if (!context) {
    throw new Error('useResumeData must be used within a ResumeDataProvider');
  }
  return context;
}
