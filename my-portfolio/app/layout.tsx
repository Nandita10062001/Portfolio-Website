// app/layout.tsx
"use client"; // Ensure this is a client component

import { useState } from 'react';
import '../styles/globals.css'; // Ensure the path is correct

// Properly typed Layout component
export default function Layout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <html className={darkMode ? 'dark' : ''}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Your Site Title</title>
      </head>
      <body>
        <header className="flex justify-between p-4 bg-gray-100 dark:bg-gray-900">
          <h1 className="text-3xl font-bold">Your Name</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded bg-gray-300 dark:bg-gray-600"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
