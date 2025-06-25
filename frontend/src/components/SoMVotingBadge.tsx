import React from 'react';

const SoMVotingBadge = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`group relative ${className}`}>
      <span className="absolute -top-2 -right-2 bg-purple-400 text-purple-900 text-xs font-bold px-2.5 py-1 rounded-full shadow-md transform group-hover:scale-110 transition-transform cursor-help z-[100]">
        SoM Voting
      </span>
      <div className="absolute -top-12 -right-2 w-48 bg-gray-900 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[101]">
        Will be implemented after SoM voting. Requires additional cost of services.
      </div>
    </div>
  );
};

export default SoMVotingBadge; 