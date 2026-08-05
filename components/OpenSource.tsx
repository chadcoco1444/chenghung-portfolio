import React from 'react';
import { OPEN_SOURCE_PROJECTS } from '../constants';
import { GitHubIcon, ExternalLinkIcon, GlobeIcon, ILLUSTRATION_MAP } from './illustrations/OpenSourceIllustrations';

const OpenSource: React.FC = () => {
  return (
    <section id="opensource" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <div className="section-label reveal">Open Source</div>
          <h2 className="text-4xl md:text-6xl font-black font-display mb-4 tracking-tighter reveal">
            GitHub Projects
          </h2>
          <p className="text-gray-500 font-mono text-sm uppercase tracking-widest reveal">
            Side projects built with passion — from AI video generation to quant analytics and developer tooling
          </p>
        </div>

        <div className="flex flex-col gap-8 stagger-children">
          {OPEN_SOURCE_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass rounded-2xl overflow-hidden group card-hover reveal"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Illustration */}
                <div className="relative lg:w-[45%] h-56 lg:h-auto overflow-hidden flex-shrink-0">
                  {(() => {
                    const Illustration = ILLUSTRATION_MAP[project.id] ?? ILLUSTRATION_MAP[2];
                    return <Illustration />;
                  })()}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900/80 hidden lg:block"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent lg:hidden"></div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold font-display group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <GitHubIcon className="w-5 h-5" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-emerald-400 transition-colors"
                        aria-label={`${project.title} live site`}
                      >
                        <GlobeIcon className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                        <span className="w-1 h-1 rounded-full bg-amber-400/60 mt-2 flex-shrink-0"></span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack + link */}
                  <div className="flex flex-wrap items-center gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-white/5 rounded-md text-[10px] font-mono text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                    <div className="ml-auto flex items-center gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-mono text-emerald-400/80 hover:text-emerald-400 transition-colors group/live"
                        >
                          Live Demo
                          <ExternalLinkIcon className="w-3.5 h-3.5 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-mono text-amber-400/70 hover:text-amber-400 transition-colors group/link"
                      >
                        View Source
                        <ExternalLinkIcon className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
