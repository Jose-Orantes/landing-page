import { useState, useEffect } from 'react';
import genesisLogo from '@/assets/genesis-logo.png';

export const StickyHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-8 sm:pb-4 flex justify-center transition-all duration-300">
        <img
          src={genesisLogo}
          alt="Genesis Credit Repair"
          onClick={handleLogoClick}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className={`transition-all duration-300 w-auto cursor-pointer hover:opacity-80 ${
            isScrolled ? 'h-16 sm:h-20' : 'h-28 sm:h-24 md:h-32 lg:h-40'
          }`}
        />
      </div>
    </header>
  );
};
