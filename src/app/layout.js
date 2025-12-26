import { Inter } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '../components/ThemeProvider';
import { ResumeDataProvider } from '../context/ResumeDataProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'James H. H. Oswald - Living Resume',
  description: 'IT Operations & Automation Specialist',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ResumeDataProvider>{children}</ResumeDataProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
