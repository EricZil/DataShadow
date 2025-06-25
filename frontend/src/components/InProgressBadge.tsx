import React from 'react';

const InProgressBadge = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`group relative ${className}`}>
      <span className="absolute -top-2 -right-2 bg-blue-400 text-blue-900 text-xs font-bold px-2.5 py-1 rounded-full shadow-md transform group-hover:scale-110 transition-transform cursor-help z-[100]">
        In Development
      </span>
      <div className="absolute -top-12 -right-2 w-48 bg-gray-900 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[101]">
        This feature is currently being developed and will be available soon.
      </div>
    </div>
  );
};

export default InProgressBadge; 