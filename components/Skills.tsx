import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Technical Arsenal</h2>
          <p className="text-gray-500 fira-code text-sm uppercase tracking-widest">Core competencies across firmware and protocol development</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS.map((cat, index) => (
            <div key={cat.category} className="glass p-8 rounded-2xl hover:border-blue-500/30 transition-all duration-500 group relative">
              <div className="absolute top-6 right-6 text-4xl font-black text-white/[0.03] fira-code">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
                <h3 className="text-lg font-bold group-hover:text-blue-400 transition-colors">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-blue-500/10 hover:text-blue-300 transition-colors cursor-default">{skill}</span>
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
