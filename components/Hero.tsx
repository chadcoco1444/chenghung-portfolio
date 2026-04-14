import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden data-grid">
      {/* Background halos */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[150px]" style={{ animation: 'hero-glow 6s ease-in-out infinite' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-400/5 rounded-full blur-[120px]" style={{ animation: 'hero-glow 8s ease-in-out infinite 2s' }}></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Profile Photo */}
        <div className="mb-10 flex justify-center hero-animate">
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400/60 to-cyan-400/40 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-700"></div>
            <img
              src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
              alt={PERSONAL_INFO.name}
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-2xl object-cover shadow-2xl transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = 'relative w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-gradient-to-br from-amber-400 to-cyan-400 flex items-center justify-center text-5xl font-bold text-midnight shadow-2xl';
                  fallback.textContent = PERSONAL_INFO.name.charAt(0);
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>
        </div>

        {/* Status Badge */}
        <div className="hero-animate hero-animate-delay-1 inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm text-gray-300 mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
          </span>
          <span className="font-mono text-xs tracking-wider">Freelance Engineer &bull; Open to Opportunities</span>
        </div>

        {/* Heading */}
        <h1 className="hero-animate hero-animate-delay-2 text-5xl md:text-8xl font-display font-extrabold tracking-tighter mb-6">
          <span className="gradient-text">{PERSONAL_INFO.name.toUpperCase()}</span>
        </h1>

        {/* Tagline */}
        <p className="hero-animate hero-animate-delay-3 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-14 leading-relaxed">
          {PERSONAL_INFO.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="hero-animate hero-animate-delay-4 flex flex-wrap justify-center gap-5">
          <a
            href={`${import.meta.env.BASE_URL}assets/Mediatek_CV.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-amber-400/20 hover:border-amber-400/50 text-gray-300 hover:text-white rounded-xl font-medium transition-all duration-300 hover:bg-amber-400/5"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
