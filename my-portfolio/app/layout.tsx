"use client"; 

import { createContext, useContext, useState, useEffect } from 'react';
import '../styles/globals.css'; 

// Create a context for dark mode
const DarkModeContext = createContext({
  darkMode: true,
  setDarkMode: (mode: boolean) => {},
});

export const useDarkMode = () => useContext(DarkModeContext);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);

  // Sync the dark mode with local storage 
  useEffect(() => {
    const storedMode = localStorage.getItem('theme');
    if (storedMode) {
      setDarkMode(storedMode === 'dark');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <html lang="en" className={darkMode ? 'dark' : ''}>
        <head>
          <link rel="icon" href="/favicon.ico" />
          <title>Nandita Nandakumar</title>
        </head>
        <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
          {children}
        </body>
      </html>
    </DarkModeContext.Provider>
  );
}
