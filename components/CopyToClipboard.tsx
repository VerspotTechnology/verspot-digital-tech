import React, { useState, useEffect } from 'react';

const CopyToClipboard: React.FC<{ text: string; children: React.ReactNode }> = ({ text, children }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative inline-block" onClick={handleCopy} style={{ cursor: 'pointer' }}>
      {children}
      {copied && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-green-500 text-white text-xs font-medium rounded-lg whitespace-nowrap animate-fade-in">
          ✓ 已复制
        </div>
      )}
    </div>
  );
};

export const CopyToast: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleCopy = () => {
      setShow(true);
      setTimeout(() => setShow(false), 2000);
    };

    document.addEventListener('copy', handleCopy);
    return () => document.removeEventListener('copy', handleCopy);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[90] animate-fade-in">
      <div className="flex items-center gap-2 px-4 py-2 bg-green-500/90 backdrop-blur-sm rounded-full shadow-lg">
        <span className="text-white">✓</span>
        <span className="text-white text-sm font-medium">已复制到剪贴板</span>
      </div>
    </div>
  );
};

export default CopyToClipboard;
