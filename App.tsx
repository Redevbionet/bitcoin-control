
import React, { useState, useCallback } from 'react';
import { PrivateKeyCard } from './components/PrivateKeyCard';
import { generatePrivateKey } from './services/cryptoService';

const App: React.FC = () => {
  const [privateKey, setPrivateKey] = useState<string>('');

  const handleGenerateKey = useCallback(() => {
    const newKey = generatePrivateKey();
    setPrivateKey(newKey);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-gray-200 font-sans p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
            Bitcoin's Remote Control
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            Understanding the raw, fundamental components that give you control over your Bitcoin.
          </p>
        </header>

        <main className="grid grid-cols-0 lg:grid-cols-1 gap-auto lg:gap-9">
          <PrivateKeyCard
            privateKey={privateKey}
            onGenerate={handleGenerateKey}
          />
        </main>

        <footer className="text-center mt-12 md:mt-16 text-slate-500">
          <p>Built with React, TypeScript, and Tailwind CSS. All data is generated locally in your browser.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
