import React from 'react';

export default function Header() {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 bg-[#0A0E17]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-500 w-10 h-10 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <span className="text-white font-bold text-lg">DS</span>
            </div>
            <span className="text-xl font-bold text-white">DataShadow</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-10">
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors font-medium">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors font-medium">How It Works</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors font-medium">About</a></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="hidden sm:block px-6 py-2 rounded-full text-gray-300 hover:text-white transition-colors font-medium">
              Log in
            </button>
            <button className="px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all font-medium shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              Sign up
            </button>
            <button className="md:hidden text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 