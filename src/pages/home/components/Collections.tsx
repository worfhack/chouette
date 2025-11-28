export default function Collections() {
  const collections = [
    {
      title: 'Saphirs de Ceylan',
      description: 'Collection exclusive de saphirs bleus provenant des mines historiques du Sri Lanka',
      image: 'https://readdy.ai/api/search-image?query=Stunning%20blue%20Ceylon%20sapphire%20gemstone%20on%20white%20velvet%20display%20luxury%20jewelry%20presentation%20soft%20natural%20lighting%20professional%20photography%20minimalist%20elegant%20composition%20Parisian%20atelier%20aesthetic%20refined%20precious%20stone&width=600&height=400&seq=collection-001&orientation=landscape',
      link: '/collections'
    },
    {
      title: 'Rubis de Birmanie',
      description: 'Rubis pigeon blood d\'exception aux couleurs profondes et intenses',
      image: 'https://readdy.ai/api/search-image?query=Magnificent%20pigeon%20blood%20Burmese%20ruby%20gemstone%20on%20white%20velvet%20elegant%20display%20luxury%20jewelry%20presentation%20soft%20natural%20lighting%20professional%20photography%20minimalist%20composition%20Parisian%20atelier%20aesthetic%20refined%20precious%20stone&width=600&height=400&seq=collection-002&orientation=landscape',
      link: '/collections'
    },
    {
      title: 'Émeraudes de Colombie',
      description: 'Émeraudes aux verts profonds issues des mines légendaires de Muzo',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20Colombian%20emerald%20gemstone%20on%20white%20velvet%20luxury%20display%20deep%20green%20color%20soft%20natural%20lighting%20professional%20jewelry%20photography%20minimalist%20elegant%20composition%20Parisian%20atelier%20aesthetic%20refined%20precious%20stone&width=600&height=400&seq=collection-003&orientation=landscape',
      link: '/collections'
    },
    {
      title: 'Créations Joaillières',
      description: 'Bijoux uniques conçus et réalisés dans notre atelier parisien',
      image: 'https://readdy.ai/api/search-image?query=Exquisite%20custom%20jewelry%20pieces%20with%20precious%20gemstones%20elegant%20display%20on%20white%20velvet%20luxury%20Parisian%20craftsmanship%20soft%20natural%20lighting%20professional%20photography%20minimalist%20aesthetic%20refined%20composition%20unique%20creations&width=600&height=400&seq=collection-004&orientation=landscape',
      link: '/creations-uniques'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 md:mb-6 break-words">
            Collections & Créations
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos pierres d'exception et nos créations joaillières uniques
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {collections.map((collection, index) => (
            <a
              key={index}
              href={collection.link}
              className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="w-full h-56 md:h-64 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-serif font-medium text-gray-900 mb-3 md:mb-4">
                  {collection.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {collection.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
          <a
            href="/collections"
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gray-900 text-white font-medium text-xs md:text-sm tracking-wider hover:bg-gray-800 transition-all duration-300 cursor-pointer whitespace-nowrap rounded-sm"
          >
            VOIR LES PIERRES
          </a>
          <a
            href="/creations-uniques"
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-gray-900 text-gray-900 font-medium text-xs md:text-sm tracking-wider hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap rounded-sm"
          >
            VOIR LES CRÉATIONS
          </a>
        </div>
      </div>
    </section>
  );
}
