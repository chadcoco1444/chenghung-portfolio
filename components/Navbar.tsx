import React, { useState, useEffect, useCallback } from 'react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Open Source', href: '#opensource' },
    { name: 'Publications', href: '#publications' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center gap-4">
              <span className="text-xl font-bold gradient-text-warm font-mono">&lt;chenghung /&thinsp;&gt;</span>
              <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-white/10">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-amber-400 transition-colors font-mono tracking-wide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Hamburger button */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              <div className="w-5 flex flex-col gap-[5px]">
                <span
                  className={`block h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${
                    isOpen ? 'rotate-45 translate-y-[7px]' : ''
                  }`}
                />
                <span
                  className={`block h-[2px] bg-current rounded-full transition-all duration-300 ${
                    isOpen ? 'opacity-0 scale-x-0' : ''
                  }`}
                />
                <span
                  className={`block h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${
                    isOpen ? '-rotate-45 -translate-y-[7px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-midnight/90 backdrop-blur-xl transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={close}
        />

        {/* Menu content */}
        <div
          className={`relative flex flex-col items-center justify-center h-full transition-all duration-500 ${
            isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            {navItems.map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                onClick={close}
                className="text-2xl font-display font-semibold text-gray-300 hover:text-amber-400 px-6 py-3 transition-all duration-300"
                style={{ transitionDelay: isOpen ? `${i * 50}ms` : '0ms' }}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-white/10">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onClick={close}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-amber-400 transition-colors font-mono"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
