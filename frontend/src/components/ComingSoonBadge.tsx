import React from 'react';

const ComingSoonBadge = ({ className = '' }: { className?: string }) => {
  return (
    <span className={`absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2.5 py-1 rounded-full shadow-md transform group-hover:scale-110 transition-transform ${className}`}>
      Coming Soon
    </span>
  );
};

export default ComingSoonBadge; 