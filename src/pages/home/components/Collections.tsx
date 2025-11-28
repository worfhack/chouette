const collections = [
  {
    title: 'Saphirs d\'Exception',
    subtitle: 'Cachemire & Birmanie',
    description: 'Collection exclusive de saphirs bleus provenant des mines légendaires du Cachemire et de Birmanie, sélectionnés pour leur couleur veloutée unique',
    image: 'https://readdy.ai/api/search-image?query=Stunning%20collection%20of%20brilliant%20blue%20Kashmir%20sapphires%20on%20white%20velvet%20display%20various%20cuts%20and%20sizes%20professional%20jewelry%20photography%20museum%20quality%20gemstones%20deep%20cornflower%20blue%20color%20luxury%20presentation&width=800&height=600&seq=collection-sapphire-001&orientation=landscape',
    pieces: '12 pièces disponibles'
  },
  {
    title: 'Rubis Birmans',
    subtitle: 'Sang de Pigeon',
    description: 'Rubis birmans non chauffés présentant la couleur "sang de pigeon" tant recherchée, avec une fluorescence naturelle exceptionnelle',
    image: 'https://readdy.ai/api/search-image?query=Exquisite%20collection%20of%20pigeon%20blood%20red%20Burmese%20rubies%20on%20white%20silk%20fabric%20brilliant%20cuts%20intense%20red%20color%20professional%20gemstone%20photography%20luxury%20precious%20stones%20museum%20display%20quality&width=800&height=600&seq=collection-ruby-001&orientation=landscape',
    pieces: '8 pièces disponibles'
  },
  {
    title: 'Émeraudes Colombiennes',
    subtitle: 'Muzo & Chivor',
    description: 'Émeraudes colombiennes des mines de Muzo et Chivor, réputées pour leur vert intense et leur transparence cristalline remarquable',
    image: 'https://readdy.ai/api/search-image?query=Beautiful%20collection%20of%20Colombian%20emeralds%20on%20white%20background%20various%20emerald%20cuts%20vivid%20green%20color%20professional%20jewelry%20photography%20high%20clarity%20gemstones%20luxury%20presentation%20museum%20quality&width=800&height=600&seq=collection-emerald-001&orientation=landscape',
    pieces: '15 pièces disponibles'
  },
  {
    title: 'Créations Joaillières',
    subtitle: 'Pièces Uniques',
    description: 'Bijoux sur mesure créés dans notre atelier, alliant design contemporain et savoir-faire traditionnel, chaque pièce raconte une histoire unique',
    image: 'https://readdy.ai/api/search-image?query=Elegant%20custom%20made%20jewelry%20pieces%20on%20white%20marble%20surface%20contemporary%20design%20featuring%20precious%20gemstones%20gold%20settings%20professional%20jewelry%20photography%20luxury%20craftsmanship%20unique%20artisanal%20creations&width=800&height=600&seq=collection-jewelry-001&orientation=landscape',
    pieces: 'Sur commande'
  }
];

export default function Collections() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Nos Collections
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre sélection de pierres précieuses d'exception et nos créations joaillières uniques, fruit de notre expertise et de notre passion
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative w-full h-96 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="mb-3">
                  <p className="text-sm font-medium tracking-wider text-white/80 mb-2">
                    {collection.subtitle}
                  </p>
                  <h3 className="font-serif text-3xl font-medium mb-3">
                    {collection.title}
                  </h3>
                </div>
                
                <p className="text-sm text-white/90 leading-relaxed mb-4">
                  {collection.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-wider text-white/70">
                    {collection.pieces}
                  </span>
                  <button className="flex items-center gap-2 text-sm font-medium text-white hover:gap-3 transition-all cursor-pointer whitespace-nowrap">
                    Découvrir
                    <i className="ri-arrow-right-line"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/collections"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-medium text-sm tracking-wider hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap rounded-sm"
          >
            VOIR TOUTES LES COLLECTIONS
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
