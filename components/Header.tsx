"use client";
import Link from "next/link";
import { House, Briefcase, FileCode } from "lucide-react";

const Header: React.FC = () => {
  return (
    <div className="lg:mt-5 m-auto bg-[#213139ff] lg:rounded-xl rounded-none text-white w-full max-w-6xl font-mono text-sm lg:flex">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-xl font-bold text-md">
          <Link href="/" className="flex items-center">
            My Portfolio
          </Link>
        </div>
        <div className="space-x-4 flex items-center">
          <Link href="/" className="hover:text-gray-400 flex items-center">
            <House className="w-5 h-5 mr-1" />
            <span className="hidden lg:inline pointer-events-auto">Home</span>
          </Link>
          <Link
            href="/projects"
            className="hover:text-gray-400 flex items-center"
          >
            <FileCode className="w-5 h-5 mr-1" />
            <span className="hidden lg:inline pointer-events-auto">
              Projects
            </span>
          </Link>
          <Link
            href="/experience"
            className="hover:text-gray-400 flex items-center"
          >
            <Briefcase className="w-5 h-5 mr-1" />
            <span className="hidden lg:inline pointer-events-auto">
              Experience
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
