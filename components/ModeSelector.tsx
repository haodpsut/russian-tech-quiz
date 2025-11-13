
import React from 'react';
import { Mode } from '../App';

interface ModeSelectorProps {
  currentMode: Mode;
  onSelectMode: (mode: Mode) => void;
}

const ModeSelector: React.FC<ModeSelectorProps> = ({ currentMode, onSelectMode }) => {
    const baseStyle = "px-4 py-2 text-md sm:px-6 sm:text-lg font-semibold rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900";
    const activeStyle = "bg-purple-600 text-white shadow-lg";
    const inactiveStyle = "bg-gray-700 text-gray-300 hover:bg-gray-600";

    return (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 p-2 bg-gray-800 rounded-full mb-8">
            <button 
                onClick={() => onSelectMode('concepts')}
                className={`${baseStyle} ${currentMode === 'concepts' ? activeStyle : inactiveStyle} focus:ring-purple-500`}
                aria-pressed={currentMode === 'concepts'}
            >
                Концепции (Concepts)
            </button>
            <button 
                onClick={() => onSelectMode('vocabulary')}
                className={`${baseStyle} ${currentMode === 'vocabulary' ? activeStyle : inactiveStyle} focus:ring-purple-500`}
                aria-pressed={currentMode === 'vocabulary'}
            >
                Словарь (Vocabulary)
            </button>
            <button 
                onClick={() => onSelectMode('presentation')}
                className={`${baseStyle} ${currentMode === 'presentation' ? activeStyle : inactiveStyle} focus:ring-purple-500`}
                aria-pressed={currentMode === 'presentation'}
            >
                Презентация (Q&A)
            </button>
        </div>
    );
};

export default ModeSelector;
