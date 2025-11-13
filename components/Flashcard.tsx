
import React, { useState } from 'react';
import { Flashcard as FlashcardType } from '../types';

interface FlashcardProps {
  card: FlashcardType;
}

const Flashcard: React.FC<FlashcardProps> = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  // Use a key to force re-render when the card changes, resetting the flip state
  React.useEffect(() => {
    setIsFlipped(false);
  }, [card]);

  return (
    <div className="w-full h-full perspective-1000" onClick={handleFlip}>
      <div
        className={`relative w-full h-full transform-style-3d transition-transform duration-700 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full backface-hidden flex items-center justify-center p-6 bg-gray-800 border-2 border-cyan-400 rounded-2xl shadow-lg shadow-cyan-500/20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">{card.term_ru}</h2>
            <p className="mt-4 text-gray-400 text-lg">Нажмите, чтобы перевернуть</p>
          </div>
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col p-6 bg-gray-800 border-2 border-purple-400 rounded-2xl shadow-lg shadow-purple-500/20 overflow-y-auto">
          <div className="flex-grow space-y-4 text-left">
            <div>
              <h3 className="text-xl font-bold text-cyan-300">Tiếng Việt</h3>
              <p className="text-lg text-gray-200">{card.translation_vi}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-300">English</h3>
              <p className="text-lg text-gray-200">{card.translation_en}</p>
            </div>
            <hr className="border-gray-600 my-4"/>
            <div>
                <h3 className="text-xl font-bold text-purple-300 mb-2">Объяснение (Diễn giải)</h3>
                <div className="space-y-3 text-gray-300 bg-gray-900/50 p-4 rounded-lg">
                    <p><strong className="text-purple-400">RU:</strong> {card.explanation_ru}</p>
                    <p><strong className="text-purple-400">VI:</strong> {card.explanation_vi}</p>
                    <p><strong className="text-purple-400">EN:</strong> {card.explanation_en}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
