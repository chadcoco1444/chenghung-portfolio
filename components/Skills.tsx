import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-black font-display mb-4 tracking-tighter">Technical Arsenal</h2>
          <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Core competencies across firmware and protocol development</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {SKILLS.map((cat, index) => (
            <div key={cat.category} className="glass p-8 rounded-2xl hover:border-amber-400/20 transition-all duration-500 group relative card-hover reveal">
              <div className="absolute top-6 right-6 text-4xl font-black text-white/[0.03] font-mono">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-amber-400 rounded-full"></div>
                <h3 className="text-lg font-bold font-display group-hover:text-amber-400 transition-colors">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-amber-400/10 hover:text-amber-300 transition-colors cursor-default">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
