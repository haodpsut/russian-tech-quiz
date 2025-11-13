
import React from 'react';

interface ControlsProps {
  currentIndex: number;
  totalCards: number;
  onNext: () => void;
  onPrev: () => void;
}

const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const Controls: React.FC<ControlsProps> = ({ currentIndex, totalCards, onNext, onPrev }) => {
  return (
    <div className="flex items-center justify-between w-full max-w-xl">
      <button
        onClick={onPrev}
        disabled={currentIndex === 0}
        className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors duration-300"
      >
        <ArrowLeftIcon className="w-5 h-5" />
        <span>Назад</span>
      </button>
      <div className="text-lg font-mono text-cyan-300 bg-gray-800 px-4 py-2 rounded-md">
        {currentIndex + 1} / {totalCards}
      </div>
      <button
        onClick={onNext}
        disabled={currentIndex === totalCards - 1}
        className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors duration-300"
      >
        <span>Далее</span>
        <ArrowRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Controls;
