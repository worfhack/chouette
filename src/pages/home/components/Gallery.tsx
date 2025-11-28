export default function Gallery() {
  const images = [
    {
      url: 'https://readdy.ai/api/search-image?query=Luxury%20gemstone%20expertise%20process%20professional%20gemmologist%20examining%20precious%20blue%20sapphire%20with%20loupe%20magnifier%20on%20white%20velvet%20elegant%20Parisian%20atelier%20soft%20natural%20lighting%20refined%20minimalist%20aesthetic%20professional%20craftsmanship&width=600&height=400&seq=gallery-001&orientation=landscape',
      alt: 'Expertise gemmologique'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=Exquisite%20custom%20jewelry%20creation%20process%20artisan%20hands%20crafting%20unique%20gold%20ring%20with%20precious%20gemstone%20luxury%20Parisian%20workshop%20soft%20natural%20lighting%20professional%20craftsmanship%20elegant%20minimalist%20aesthetic%20refined%20composition&width=600&height=400&seq=gallery-002&orientation=landscape',
      alt: 'Création de bijoux'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=Beautiful%20collection%20of%20precious%20gemstones%20sapphires%20rubies%20emeralds%20displayed%20on%20white%20velvet%20luxury%20presentation%20soft%20natural%20lighting%20professional%20photography%20minimalist%20elegant%20composition%20Parisian%20atelier%20aesthetic%20refined%20stones&width=600&height=400&seq=gallery-003&orientation=landscape',
      alt: 'Collection de pierres'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=Elegant%20Parisian%20jewelry%20atelier%20interior%20with%20vintage%20workbench%20precision%20tools%20and%20precious%20gemstones%20soft%20natural%20window%20light%20luxury%20workshop%20atmosphere%20refined%20minimalist%20aesthetic%20professional%20craftsmanship%20setting&width=600&height=400&seq=gallery-004&orientation=landscape',
      alt: 'Atelier parisien'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=Stunning%20unique%20jewelry%20piece%20custom%20designed%20ring%20with%20exceptional%20precious%20gemstone%20on%20white%20velvet%20luxury%20presentation%20soft%20natural%20lighting%20professional%20photography%20minimalist%20elegant%20composition%20Parisian%20craftsmanship&width=600&height=400&seq=gallery-005&orientation=landscape',
      alt: 'Bijou unique'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=Professional%20gemstone%20certification%20process%20expert%20examining%20precious%20stone%20with%20specialized%20equipment%20luxury%20Parisian%20laboratory%20soft%20natural%20lighting%20refined%20minimalist%20aesthetic%20professional%20documentation%20setting&width=600&height=400&seq=gallery-006&orientation=landscape',
      alt: 'Certification'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 md:mb-6 break-words">
            Galerie
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Plongez dans l'univers de notre atelier et découvrez nos plus belles réalisations
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-all duration-300 h-56 md:h-64"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/galerie"
            className="inline-block px-6 md:px-8 py-3 md:py-4 bg-gray-900 text-white font-medium text-xs md:text-sm tracking-wider hover:bg-gray-800 transition-all duration-300 cursor-pointer whitespace-nowrap rounded-sm"
          >
            VOIR TOUTE LA GALERIE
          </a>
        </div>
      </div>
    </section>
  );
}
