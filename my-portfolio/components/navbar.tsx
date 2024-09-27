// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import { Grid, User, Code, Monitor, Edit, Mail } from 'lucide-react';

// const NavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setMenuOpen(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 shadow-md" style={{backgroundColor:'#292F36'}}>
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           <Link href="#landing" className="text-2xl font-bold py-4">
//             <span className="text-teal-400">&lt;</span>
//             <span className="text-white">Nandita Nandakumar</span>
//             <span className="text-teal-400">/&gt;</span>
//           </Link>
//           <button
//             className="md:hidden text-white p-2"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               />
//             </svg>
//           </button>
//           <nav className={`md:flex ${menuOpen ? 'block' : 'hidden'} absolute md:static top-full left-0 w-full md:w-auto bg-[#292F36] md:bg-transparent`}>
//             <ul className="flex flex-col md:flex-row md:items-center">
//               {['Home', 'Skills', 'Experience', 'Projects', 'Research', 'Case Studies', 'Education', 'Resume', 'Contact'].map((item) => (
//                 <li key={item}>
//                   <Link 
//                     href={`#${item.toLowerCase().replace(' ', '-')}`}
//                     className="block py-2 px-4 text-white hover:text-teal-400 transition-all duration-300 relative group"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     {item}
//                     <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
  
//   );
// };

// export default NavBar;

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = ['HOME', 'SKILLS', 'EXPERIENCE', 'PROJECTS', 'RESEARCH', 'CASE STUDIES', 'EDUCATION', 'RESUME', 'CONTACT'];

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-[#111827]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="#landing" className="text-xl sm:text-2xl font-bold py-4 whitespace-nowrap">
            <span className="text-teal-400">&lt;</span>
            <span className="text-white">Nandita Nandakumar</span>
            <span className="text-teal-400">/&gt;</span>
          </Link>
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className={`lg:flex ${menuOpen ? 'block' : 'hidden'} absolute lg:static top-full left-0 w-full lg:w-auto bg-[#292F36] lg:bg-transparent`}>
            <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-1 xl:space-x-2">
              {navItems.map((item) => (
                <li key={item} className="text-left">
                  <Link 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="block py-2 px-2 xl:px-3 text-sm xl:text-base text-white hover:text-teal-400 transition-all duration-300 relative group whitespace-nowrap"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-24"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;