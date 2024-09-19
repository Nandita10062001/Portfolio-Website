import Link from 'next/link';
import { useState } from 'react';
import { LineMaterial } from 'three/examples/jsm/Addons.js';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 dark:bg-gray-800 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-white">
          <Link href="#landing">Your Logo</Link>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        <ul
          className={`md:flex md:space-x-6 space-y-4 md:space-y-0 absolute md:static top-full left-0 w-full md:w-auto bg-gray-900 dark:bg-gray-800 md:bg-transparent transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:flex-row`}
        >
          <li><Link href="#landing" className="block py-2 px-4 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition">Home</Link></li>
          <li><Link href="#skills" className="block py-2 px-4 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition">Skills</Link></li>
          <li><Link href="#experience" className="block py-2 px-4 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition">Work Experience</Link></li>
          <li><Link href="#projects" className="block py-2 px-4 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition">Projects</Link></li>
          <li><Link href="#research" className="block py-2 px-4 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition">Research</Link></li>
          <li><Link href="#case-studies" className="block py-2 px-4 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition"> Case Studies</Link></li>
          <li><Link href="#education" className="block py-2 px-4 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition">Education</Link></li>
          <li><Link href="#resume" className="block py-2 px-4 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition">Resume</Link></li>
          <li><Link href="#contact" className="block py-2 px-4 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
