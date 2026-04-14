import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { PERSONAL_INFO } from './constants';
import { useReveal } from './hooks/useReveal';

const App: React.FC = () => {
  useReveal();
  return (
    <div className="min-h-screen noise-overlay">
      <Navbar />

      <main>
        <Hero />

        <section id="about" className="py-32 px-4 max-w-5xl mx-auto">
          <div className="glass p-12 rounded-[3rem] border-white/5 relative overflow-hidden reveal">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-amber-400/10 rounded-full blur-[80px]"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <img
                src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
                alt={PERSONAL_INFO.name}
                className="w-32 h-32 md:w-48 md:h-48 rounded-[2rem] object-cover flex-shrink-0 shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-bold font-display mb-6 tracking-tight">Professional Profile</h2>
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                  {PERSONAL_INFO.bio}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span> LinkedIn
                  </a>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span> GitHub
                  </a>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Publications />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <footer className="py-20 border-t border-white/5 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-2">&copy; 2026 {PERSONAL_INFO.name}</p>
          <p className="font-mono text-[10px] opacity-30 uppercase tracking-widest text-amber-400/5">NR/LTE Protocol Stack / Embedded Systems / Firmware Engineering</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
