import { useState, useEffect } from 'react';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://readdy.ai/api/search-image?query=Elegant%20luxury%20gemstone%20workshop%20interior%20with%20soft%20natural%20light%20streaming%20through%20windows%20illuminating%20precious%20stones%20on%20velvet%20display%20sophisticated%20Parisian%20atelier%20atmosphere%20with%20deep%20navy%20blue%20and%20gold%20accents%20refined%20minimalist%20aesthetic%20professional%20jewelry%20craftsmanship%20setting&width=1920&height=1080&seq=hero-bg-001&orientation=landscape"
          alt="Atelier de gemmologie"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <img
            src="https://static.readdy.ai/image/126b640000aeae8749c53b905168a238/67aa0638997c6b4ca14b72947735317f.png"
            alt="Les Pierres de la Chouette"
            className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-4 md:mb-6 tracking-wide break-words">
          Les Pierres de la Chouette
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-3 md:mb-4 font-light tracking-wide">
          Gemmologie Artisanale & Joaillerie Sur Mesure
        </p>

        <p className="text-sm md:text-base lg:text-lg text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Atelier familial parisien depuis deux générations, spécialisé dans l'expertise de pierres précieuses et la création de bijoux d'exception
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
          <a
            href="/rendez-vous"
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-gray-900 font-medium text-xs md:text-sm tracking-wider hover:bg-gray-100 transition-all duration-300 cursor-pointer whitespace-nowrap rounded-sm"
          >
            PRENDRE RENDEZ-VOUS
          </a>
          <a
            href="/expertise"
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white font-medium text-xs md:text-sm tracking-wider hover:bg-white hover:text-gray-900 transition-all duration-300 cursor-pointer whitespace-nowrap rounded-sm"
          >
            DÉCOUVRIR NOS EXPERTISES
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-white text-2xl md:text-3xl"></i>
      </div>
    </section>
  );
}
