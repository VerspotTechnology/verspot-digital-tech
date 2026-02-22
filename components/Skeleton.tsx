import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-white/5 rounded-2xl border border-white/10 p-6 animate-pulse">
      <div className="h-4 bg-white/10 rounded w-1/4 mb-4"></div>
      <div className="h-6 bg-white/10 rounded w-3/4 mb-6"></div>
      <div className="space-y-3">
        <div className="h-3 bg-white/10 rounded w-full"></div>
        <div className="h-3 bg-white/10 rounded w-5/6"></div>
        <div className="h-3 bg-white/10 rounded w-4/6"></div>
      </div>
      <div className="mt-6 flex gap-4">
        <div className="h-10 bg-white/10 rounded-full w-24"></div>
        <div className="h-10 bg-white/10 rounded-full w-32"></div>
      </div>
    </div>
  );
};

const SkeletonText: React.FC<{ lines?: number }> = ({ lines = 3 }) => {
  return (
    <div className="space-y-3 animate-pulse">
      {Array.from({ length: lines }).map((_, i) => (
        <div 
          key={i} 
          className="h-4 bg-white/10 rounded"
          style={{ width: i === lines - 1 ? '60%' : '100%' }}
        ></div>
      ))}
    </div>
  );
};

const SkeletonImage: React.FC<{ aspectRatio?: string }> = ({ aspectRatio = '16/9' }) => {
  return (
    <div 
      className="bg-white/10 rounded-2xl animate-pulse"
      style={{ aspectRatio }}
    ></div>
  );
};

export { SkeletonCard, SkeletonText, SkeletonImage };
