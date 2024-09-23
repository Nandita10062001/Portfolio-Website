import Link from 'next/link';
import { Grid, User, Code, Monitor, Edit, Mail } from 'lucide-react';

const SideBar = () => {
    return (
        <aside className="fixed left-4 top-1/4 h-auto w-12 bg-[#292F36] flex flex-col items-center justify-center gap-6 p-3 z-40 rounded-xl shadow-lg border border-gray-600">
            <Link href="#dashboard" className="p-2 bg-[#1e1e24] rounded-full text-white hover:bg-teal-400 transition-all duration-300">
                <Grid size={20} />
            </Link>
            <Link href="#profile" className="p-2 bg-[#1e1e24] rounded-full text-white hover:bg-teal-400 transition-all duration-300">
                <User size={20} />
            </Link>
            <Link href="#code" className="p-2 bg-[#1e1e24] rounded-full text-white hover:bg-teal-400 transition-all duration-300">
                <Code size={20} />
            </Link>
            <Link href="#monitor" className="p-2 bg-[#1e1e24] rounded-full text-white hover:bg-teal-400 transition-all duration-300">
                <Monitor size={20} />
            </Link>
            <Link href="#edit" className="p-2 bg-[#1e1e24] rounded-full text-white hover:bg-teal-400 transition-all duration-300">
                <Edit size={20} />
            </Link>
            <Link href="#mail" className="p-2 bg-[#1e1e24] rounded-full text-white hover:bg-teal-400 transition-all duration-300">
                <Mail size={20} />
            </Link>
        </aside>
    );
}

export default SideBar;

