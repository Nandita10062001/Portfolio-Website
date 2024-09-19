"use client"; // Ensure this is a client component

import { useState, useEffect } from 'react';
import '../styles/globals.css'; // Ensure the path is correct

export default function Layout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  // Sync the dark mode with local storage or user preferences
  useEffect(() => {
    const storedMode = localStorage.getItem('theme');
    if (storedMode) {
      setDarkMode(storedMode === 'dark');
    }
  }, []);

  useEffect(() => {
    console.log("Dark Mode: ", darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <html lang="en" className={darkMode ? 'dark' : ''}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Nandita Nandakumar</title>
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        {/* Other components like header */}
        {children}

        {/* Light/Dark Mode Toggle Button */}
        <button
          onClick={() => {
            console.log("Toggling mode...");
            setDarkMode(!darkMode); // Toggle dark mode
          }}
          className="fixed bottom-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 shadow-lg transition-colors z-50"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
           </svg>
         ) : (
           // Moon icon for dark mode
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
           </svg>
          )}
        </button>
      </body>
    </html>
  );
}
