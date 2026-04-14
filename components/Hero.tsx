import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden data-grid">
      {/* Background halos */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Profile Photo */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
            <img
              src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
              alt={PERSONAL_INFO.name}
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-2xl object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = 'relative w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-5xl font-bold text-white shadow-2xl';
                  fallback.textContent = PERSONAL_INFO.name.charAt(0);
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-300 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Senior Engineer &bull; {PERSONAL_INFO.company}
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">
          <span className="gradient-text">{PERSONAL_INFO.name.toUpperCase()}</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          {PERSONAL_INFO.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`${import.meta.env.BASE_URL}assets/Mediatek_CV.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          >
            Download CV
          </a>
          <a
            href="#ai-chat"
            className="px-8 py-3 border border-white/10 hover:border-blue-500/50 text-gray-300 hover:text-white rounded-xl font-medium transition-all duration-300"
          >
            Inquire AI Agent
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
