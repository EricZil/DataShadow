import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`bg-gradient-to-br ${isOpen ? 'from-[#1A2035] to-[#1F2940]' : 'from-[#1A1F2E] to-[#1F2433]'} rounded-xl border ${isOpen ? 'border-blue-500/30' : 'border-gray-800/50'} overflow-hidden transition-all duration-500 hover:border-blue-500/30 shadow-lg ${isOpen ? 'shadow-blue-500/10' : ''}`}>
      <button 
        className="w-full text-left p-6 flex justify-between items-center group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className={`text-xl font-semibold ${isOpen ? 'text-blue-300' : 'text-white'} group-hover:text-blue-300 transition-colors duration-300`}>{question}</h3>
        <div className={`relative w-8 h-8 flex items-center justify-center rounded-full ${isOpen ? 'bg-blue-500/20' : 'bg-gray-800/50'} transition-all duration-300`}>
          <svg 
            className={`w-5 h-5 ${isOpen ? 'text-blue-400' : 'text-gray-400'} transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <span className={`absolute inset-0 rounded-full ${isOpen ? 'bg-blue-500/10' : 'bg-transparent'} animate-ping opacity-75 ${isOpen ? 'block' : 'hidden'}`}></span>
        </div>
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
      >
        <div className={`border-t ${isOpen ? 'border-blue-500/20' : 'border-gray-800/50'} pt-4 text-gray-300 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ${isOpen ? 'delay-200' : 'delay-0'}`}>
          {isOpen && (
            <div className="relative">
              {/* Subtle glow effect */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-blue-500/5 blur-xl rounded-full"></div>
              
              <div className="relative">
                {typeof answer === 'string' ? <p>{answer}</p> : answer}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQItem; 