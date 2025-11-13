
import React, { useState, useEffect } from 'react';
import { PresentationItem } from '../types';

interface PresentationCardProps {
  item: PresentationItem;
}

const PresentationCard: React.FC<PresentationCardProps> = ({ item }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  useEffect(() => {
    setIsAnswerVisible(false);
  }, [item]);

  return (
    <div className="w-full h-full flex flex-col p-6 bg-gray-800 border-2 border-blue-400 rounded-2xl shadow-lg shadow-blue-500/20 overflow-hidden">
      <div className="flex-shrink-0 mb-4">
        <h2 className="text-xl font-bold text-gray-300 mb-1">Вопрос (Câu hỏi):</h2>
        <p className="text-2xl md:text-3xl font-semibold text-white">{item.question_ru}</p>
        <p className="text-md text-gray-400 mt-2">({item.question_vi})</p>
      </div>

      {!isAnswerVisible && (
        <div className="flex-grow flex items-center justify-center">
            <button
            onClick={() => setIsAnswerVisible(true)}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
            Показать ответ (Show Answer)
            </button>
        </div>
      )}

      {isAnswerVisible && (
         <div className="flex-grow overflow-y-auto bg-gray-900/50 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-gray-300 mb-2">Ответ (Câu trả lời):</h3>
            <div className="space-y-4 text-gray-200">
                <p><strong className="text-blue-300">RU:</strong> {item.answer_ru}</p>
                <p><strong className="text-blue-300">VI:</strong> {item.answer_vi}</p>
                <p><strong className="text-blue-300">EN:</strong> {item.answer_en}</p>
            </div>
         </div>
      )}
    </div>
  );
};

export default PresentationCard;
