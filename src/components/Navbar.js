'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="space-x-6">
          <Link href="/">
            <span className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">About Me</span>
          </Link>
          <Link href="/projects">
            <span className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">Projects</span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">Contact Me</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
