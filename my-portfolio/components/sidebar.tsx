import Link from 'next/link';
import { useState } from 'react';
import { GlobeIcon, X, Mail } from 'lucide-react'; 
import DarkModeToggle from './darkMode';
import { FaLinkedin, FaGithub, FaInstagram, FaResearchgate } from 'react-icons/fa';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to toggle the sidebar */}
      <button
        className="top-4 left-0 p-3 rounded-full bg-[#111827] text-white shadow-lg border border-teal-400 transition-all duration-300"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <X size={22} /> : <GlobeIcon size={22} />}
      </button>
      <aside
        className={`mt-4 left-4 top-1/4 h-auto w-12 bg-[#111827] flex flex-col items-center justify-center gap-6 p-3 rounded-full z-50 shadow-lg border border-teal-400 transition-all duration-300 ease-in-out ${
          isOpen ? 'w-12 opacity-100' : 'w-12 opacity-0'
        }`}
      >
        <div className="flex items-center">
          <DarkModeToggle />
        </div>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={35} className="p-2 bg-[#1e1e24] rounded-full text-white hover:bg-white hover:text-blue-600 transition-all duration-300" />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub size={35} className="p-2 bg-[#1e1e24] rounded-full text-white hover:bg-white hover:text-gray-600 transition-all duration-300" />
        </a>
        <a href="https://www.researchgate.net/profile/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaResearchgate size={35} className="p-2 bg-[#1e1e24] rounded-full text-white hover:bg-white hover:text-[#237B76] transition-all duration-300" />
        </a>
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={35} className="p-2 bg-[#1e1e24] rounded-full text-white hover:bg-white hover:text-pink-500 transition-all duration-300" />
        </a>
        <Link href="mailto:nanditankr1062001@gmail.com" className="p-2 bg-[#1e1e24] rounded-full text-white hover:bg-white hover:text-black transition-all duration-300">
          <Mail size={20} />
        </Link>
      </aside>
    </div>
  );
};

export default SideBar;
