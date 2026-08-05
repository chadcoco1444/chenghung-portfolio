import React from 'react';
import { PROJECTS } from '../constants';
import { ProjectIllustration } from './illustrations/ProjectIllustrations';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-black font-display mb-4 tracking-tighter">
            Engineering Portfolio
          </h2>
          <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">
            Selective projects spanning cellular protocol stack, embedded systems, and
            high-performance computing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass rounded-2xl overflow-hidden group card-hover reveal"
            >
              {/* Illustration Header */}
              <div className="relative h-48 overflow-hidden">
                <ProjectIllustration id={project.id} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="relative z-10 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-amber-400/15 backdrop-blur-sm rounded-md text-[10px] font-mono text-amber-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-display mb-3 group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/5 rounded-md text-[10px] font-mono text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
