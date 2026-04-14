import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-black font-display mb-4 tracking-tighter">Professional Journey</h2>
          <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Chronological career &amp; academic evolution</p>
        </div>
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px timeline-line hidden md:block"></div>
          <div className="space-y-24">
            {EXPERIENCES.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 top-0 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_15px_rgba(226,168,75,0.6)] z-20 hidden md:block"></div>
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass overflow-hidden rounded-3xl hover:border-amber-400/20 transition-all duration-500 group reveal">
                    <div className="p-8">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <div>
                          <span className="text-amber-400 font-mono text-[10px] font-bold tracking-widest block mb-1">{exp.period}</span>
                          <h3 className="text-2xl font-bold group-hover:text-white transition-colors">{exp.role}</h3>
                          <p className="text-gray-400 font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-500 text-sm leading-relaxed flex items-start gap-3">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-400 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map(skill => (
                          <span key={skill} className="px-3 py-1 bg-amber-400/5 rounded-full text-[10px] font-mono text-amber-300/60 border border-amber-400/10">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
