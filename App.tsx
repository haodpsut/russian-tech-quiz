
import React, { useState, useCallback } from 'react';
import Flashcard from './components/Flashcard';
import VocabularyCard from './components/VocabularyCard';
import PresentationCard from './components/PresentationCard';
import Controls from './components/Controls';
import ModeSelector from './components/ModeSelector';
import { flashcards } from './constants/data';
import { vocabulary } from './constants/vocabulary';
import { presentationData } from './constants/presentation';


// Add custom CSS for 3D transform effects
const customStyles = `
  .perspective-1000 { perspective: 1000px; }
  .transform-style-3d { transform-style: preserve-3d; }
  .rotate-y-180 { transform: rotateY(180deg); }
  .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
`;

export type Mode = 'concepts' | 'vocabulary' | 'presentation';

const App: React.FC = () => {
  const [mode, setMode] = useState<Mode>('concepts');
  const [currentIndex, setCurrentIndex] = useState(0);

  const getData = () => {
    switch (mode) {
      case 'concepts':
        return flashcards;
      case 'vocabulary':
        return vocabulary;
      case 'presentation':
        return presentationData;
      default:
        return [];
    }
  };
  
  const data = getData();
  const currentCard = data[currentIndex];
  
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, data.length - 1));
  }, [data]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }, []);
  
  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
    setCurrentIndex(0); // Reset index when changing mode
  };
  
  const renderCard = () => {
    if (!currentCard) return null;

    switch (mode) {
      case 'concepts':
        return <Flashcard key={`concept-${currentCard.id}`} card={currentCard} />;
      case 'vocabulary':
        return <VocabularyCard key={`vocab-${currentCard.id}`} card={currentCard} />;
      case 'presentation':
        return <PresentationCard key={`presentation-${currentCard.id}`} item={currentCard} />;
      default:
        return null;
    }
  };


  return (
    <>
      <style>{customStyles}</style>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
        <header className="text-center mb-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Russian Tech Quiz
          </h1>
          <p className="text-lg text-gray-400 mt-2">
            Изучение и повторение технических терминов | Học và ôn tập thuật ngữ kỹ thuật
          </p>
        </header>
        
        <ModeSelector currentMode={mode} onSelectMode={handleModeChange} />

        <main className="w-full max-w-4xl h-[50vh] md:h-[60vh] flex-grow flex items-center justify-center mb-8">
          {data.length > 0 && renderCard()}
        </main>

        <footer className="w-full flex justify-center">
            {data.length > 0 && (
                <Controls
                    currentIndex={currentIndex}
                    totalCards={data.length}
                    onNext={handleNext}
                    onPrev={handlePrev}
                />
            )}
        </footer>
      </div>
    </>
  );
};

export default App;
