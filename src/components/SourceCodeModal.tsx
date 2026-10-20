import React, { useState } from 'react';
import { SOURCE_CODE_FILES } from '../data/sourceCodeFiles';
import { X, Copy, Check, FileCode, Download, Folder } from 'lucide-react';

interface SourceCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SourceCodeModal: React.FC<SourceCodeModalProps> = ({ isOpen, onClose }) => {
  const fileKeys = Object.keys(SOURCE_CODE_FILES);
  const [selectedFile, setSelectedFile] = useState<string>(fileKeys[0] || 'src/App.tsx');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentContent = SOURCE_CODE_FILES[selectedFile] || '';

  const handleCopy = () => {
    navigator.clipboard.writeText(currentContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadSingleFile = () => {
    const blob = new Blob([currentContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = selectedFile.split('/').pop() || 'file.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-stone-950/80 backdrop-blur-xs transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-3 sm:p-6 text-left">
        <div className="relative w-full max-w-5xl rounded-2xl bg-[#111915] text-stone-100 shadow-2xl border border-stone-800 flex flex-col max-h-[90vh] overflow-hidden">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-stone-800 bg-[#0d1511] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-950/70 border border-amber-600/40 flex items-center justify-center text-[#c99a45]">
                <FileCode className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                  AMRUTKALP Source Code Browser
                </h3>
                <p className="text-xs text-stone-400">
                  Select any project file below to view, copy, or download directly without zips.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
              aria-label="Close code browser"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Area: File Selector Bar + Code View */}
          <div className="flex flex-col md:flex-row flex-1 overflow-hidden min-h-0">
            
            {/* Left/Sidebar: File Tree List */}
            <div className="w-full md:w-64 bg-[#0a0f0d] border-b md:border-b-0 md:border-r border-stone-800 p-3 overflow-y-auto max-h-48 md:max-h-none space-y-1">
              <div className="text-[10px] uppercase font-mono tracking-widest text-stone-500 px-2 py-1 flex items-center gap-1.5">
                <Folder className="w-3.5 h-3.5 text-amber-400" />
                <span>Project Files ({fileKeys.length})</span>
              </div>
              {fileKeys.map(key => (
                <button
                  key={key}
                  onClick={() => { setSelectedFile(key); setCopied(false); }}
                  className={`w-full text-left px-2.5 py-1.5 rounded text-xs font-mono truncate transition-colors flex items-center gap-2 cursor-pointer ${
                    selectedFile === key
                      ? 'bg-amber-900/40 text-amber-200 border border-amber-500/40'
                      : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
                  }`}
                >
                  <span className="text-[10px] text-stone-600 shrink-0">📄</span>
                  <span className="truncate">{key}</span>
                </button>
              ))}
            </div>

            {/* Right: Code Viewer */}
            <div className="flex-1 flex flex-col bg-[#0e1612] overflow-hidden min-w-0">
              
              {/* File Action Bar */}
              <div className="px-4 py-2.5 bg-[#141f19] border-b border-stone-800 flex items-center justify-between gap-3 text-xs">
                <div className="font-mono text-amber-300 font-semibold truncate text-[11px] sm:text-xs">
                  {selectedFile}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopy}
                    className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer border border-stone-700"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-400" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleDownloadSingleFile}
                    className="px-3 py-1.5 bg-[#c99a45] hover:bg-amber-400 text-stone-950 font-semibold rounded text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Save File</span>
                  </button>
                </div>
              </div>

              {/* Code Pre Container */}
              <div className="flex-1 p-4 overflow-auto bg-[#0a0f0d] text-stone-300 font-mono text-[11px] sm:text-xs leading-relaxed select-all">
                <pre className="whitespace-pre">
                  {currentContent}
                </pre>
              </div>

            </div>

          </div>

          {/* Footer note */}
          <div className="p-3 bg-[#0d1511] border-t border-stone-800 text-center text-[11px] text-stone-400">
            Click <strong>Copy Code</strong> on any file to paste directly into your local IDE (VS Code, Cursor, etc.).
          </div>

        </div>
      </div>
    </div>
  );
};
