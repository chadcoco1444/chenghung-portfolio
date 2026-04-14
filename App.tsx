import React from 'react';
import Navbar from './components/Navbar';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/50">
      <Navbar />

      <main>
        {/* Sections will be added in subsequent tasks */}
        <div className="pt-32 text-center text-gray-500">
          <p>Portfolio sections loading...</p>
        </div>
      </main>

      <footer className="py-20 border-t border-white/5 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-2">&copy; 2026 {PERSONAL_INFO.name} | {PERSONAL_INFO.company}</p>
          <p className="fira-code text-[10px] opacity-30 uppercase tracking-widest">NR/LTE Protocol Stack / Embedded Systems / Firmware Engineering</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
