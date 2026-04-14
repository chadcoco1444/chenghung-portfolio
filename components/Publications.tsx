import React from 'react';
import { PUBLICATIONS } from '../constants';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-32 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Publications</h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full md:mx-0 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {PUBLICATIONS.map((pub, index) => (
            <div key={index} className="glass p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-500 group relative">
              <div className="absolute top-6 right-6 text-gray-600 group-hover:text-blue-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 pr-12 group-hover:text-blue-400 transition-colors">{pub.title}</h3>
              <p className="text-gray-400 text-sm mb-1">{pub.authors}</p>
              <p className="text-gray-500 text-sm mb-4">{pub.conference}, {pub.year}</p>
              {pub.award && (
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-xs font-medium mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {pub.award}
                </div>
              )}
              <div className="block">
                <a href={`${import.meta.env.BASE_URL}${pub.pdf}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-blue-500/30 text-blue-400 rounded-lg text-sm hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
