import React, { useEffect } from 'react';

const KeyboardShortcuts: React.FC = () => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        const modals = document.querySelectorAll('[data-modal]');
        modals.forEach(modal => {
          (modal as HTMLElement).click();
        });
      }

      if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
        if (document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }

      if (e.key === 'h' && !e.ctrlKey && !e.metaKey) {
        if (document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
          window.location.hash = '/';
        }
      }

      if (e.key === 'a' && !e.ctrlKey && !e.metaKey) {
        if (document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
          window.location.hash = '/about';
        }
      }

      if (e.key === 'c' && !e.ctrlKey && !e.metaKey) {
        if (document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
          window.location.hash = '/contact';
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return null;
};

export const KeyboardShortcutsHelp: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const shortcuts = [
    { key: 'Esc', description: '关闭弹窗' },
    { key: '/', description: '返回顶部' },
    { key: 'H', description: '首页' },
    { key: 'A', description: '关于我们' },
    { key: 'C', description: '联系我们' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-gray-900 border border-white/10 rounded-2xl p-8 max-w-md w-full mx-4" onClick={e => e.stopPropagation()}>
        <h3 className="text-xl font-bold text-white mb-6">键盘快捷键</h3>
        <div className="space-y-4">
          {shortcuts.map((shortcut, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-gray-400">{shortcut.description}</span>
              <kbd className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-white text-sm font-mono">
                {shortcut.key}
              </kbd>
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full py-3 bg-white text-black font-medium rounded-xl hover:bg-gray-200 transition-colors"
        >
          关闭
        </button>
      </div>
    </div>
  );
};

export default KeyboardShortcuts;
