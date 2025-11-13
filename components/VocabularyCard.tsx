
import React, { useState, useEffect } from 'react';
import { VocabularyItem } from '../types';

interface VocabCardProps {
  card: VocabularyItem;
}

const VocabularyCard: React.FC<VocabCardProps> = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(false);
  }, [card]);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div className="w-full h-full perspective-1000" onClick={handleFlip} aria-live="polite">
      <div
        className={`relative w-full h-full transform-style-3d transition-transform duration-700 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden flex items-center justify-center p-6 bg-gray-800 border-2 border-green-400 rounded-2xl shadow-lg shadow-green-500/20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">{card.term_ru}</h2>
            <p className="mt-4 text-gray-400 text-lg">Нажмите, чтобы перевернуть</p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col justify-center p-6 bg-gray-800 border-2 border-yellow-400 rounded-2xl shadow-lg shadow-yellow-500/20">
          <div className="space-y-6 text-left">
            <div>
              <h3 className="text-xl font-bold text-green-300">Tiếng Việt</h3>
              <p className="text-2xl text-gray-200">{card.translation_vi}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-300">English</h3>
              <p className="text-2xl text-gray-200">{card.translation_en}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VocabularyCard;
