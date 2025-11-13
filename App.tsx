
import React, { useState, useCallback } from 'react';
import Flashcard from './components/Flashcard';
import Controls from './components/Controls';
import { flashcards } from './constants/data';

// Add custom CSS for 3D transform effects
const customStyles = `
  .perspective-1000 { perspective: 1000px; }
  .transform-style-3d { transform-style: preserve-3d; }
  .rotate-y-180 { transform: rotateY(180deg); }
  .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
`;

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, flashcards.length - 1));
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }, []);
  
  return (
    <>
      <style>{customStyles}</style>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Russian Tech Quiz
          </h1>
          <p className="text-lg text-gray-400 mt-2">
            Изучение и повторение технических терминов | Học và ôn tập thuật ngữ kỹ thuật
          </p>
        </header>

        <main className="w-full max-w-4xl h-[50vh] md:h-[60vh] flex-grow flex items-center justify-center mb-8">
          {flashcards.length > 0 && <Flashcard key={flashcards[currentIndex].id} card={flashcards[currentIndex]} />}
        </main>

        <footer className="w-full flex justify-center">
            {flashcards.length > 0 && (
                <Controls
                    currentIndex={currentIndex}
                    totalCards={flashcards.length}
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
