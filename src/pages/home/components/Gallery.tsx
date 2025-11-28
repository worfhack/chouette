import { useState } from 'react';

const categories = ['Tout', 'Pierres', 'Joaillerie', 'Atelier'];

const galleryItems = [
  {
    category: 'Pierres',
    image: 'https://readdy.ai/api/search-image?query=Macro%20photography%20of%20brilliant%20cut%20blue%20sapphire%20gemstone%20on%20white%20background%20extreme%20detail%20showing%20facets%20professional%20jewelry%20photography%20museum%20quality%20precious%20stone&width=600&height=600&seq=gallery-stone-001&orientation=squarish',
    title: 'Saphir du Cachemire',
    description: '5.2 carats'
  },
  {
    category: 'Joaillerie',
    image: 'https://readdy.ai/api/search-image?query=Elegant%20white%20gold%20ring%20with%20large%20emerald%20center%20stone%20and%20diamond%20accents%20on%20white%20marble%20surface%20professional%20jewelry%20photography%20luxury%20craftsmanship%20contemporary%20design&width=600&height=600&seq=gallery-jewelry-001&orientation=squarish',
    title: 'Bague Émeraude',
    description: 'Or blanc 18k'
  },
  {
    category: 'Atelier',
    image: 'https://readdy.ai/api/search-image?query=Professional%20gemologist%20hands%20examining%20precious%20gemstone%20with%20loupe%20in%20bright%20modern%20workshop%20precision%20tools%20on%20wooden%20desk%20natural%20daylight%20artisanal%20craftsmanship%20expertise&width=600&height=600&seq=gallery-workshop-001&orientation=squarish',
    title: 'Expertise en Cours',
    description: 'Analyse gemmologique'
  },
  {
    category: 'Pierres',
    image: 'https://readdy.ai/api/search-image?query=Collection%20of%20brilliant%20red%20rubies%20various%20sizes%20on%20white%20velvet%20fabric%20professional%20gemstone%20photography%20pigeon%20blood%20color%20museum%20quality%20precious%20stones&width=600&height=600&seq=gallery-stone-002&orientation=squarish',
    title: 'Rubis Birmans',
    description: 'Collection privée'
  },
  {
    category: 'Joaillerie',
    image: 'https://readdy.ai/api/search-image?query=Luxury%20diamond%20necklace%20with%20sapphire%20pendant%20on%20white%20silk%20fabric%20professional%20jewelry%20photography%20elegant%20design%20platinum%20setting%20high%20end%20craftsmanship&width=600&height=600&seq=gallery-jewelry-002&orientation=squarish',
    title: 'Collier Saphir',
    description: 'Platine et diamants'
  },
  {
    category: 'Atelier',
    image: 'https://readdy.ai/api/search-image?query=Jeweler%20workbench%20with%20precision%20tools%20gemstones%20and%20sketches%20in%20bright%20Parisian%20workshop%20natural%20light%20artisanal%20workspace%20traditional%20craftsmanship%20setting&width=600&height=600&seq=gallery-workshop-002&orientation=squarish',
    title: 'Notre Atelier',
    description: 'Paris'
  },
  {
    category: 'Pierres',
    image: 'https://readdy.ai/api/search-image?query=Stunning%20Colombian%20emerald%20gemstone%20emerald%20cut%20on%20white%20background%20vivid%20green%20color%20professional%20photography%20high%20clarity%20museum%20quality%20precious%20stone&width=600&height=600&seq=gallery-stone-003&orientation=squarish',
    title: 'Émeraude Colombienne',
    description: '8.7 carats'
  },
  {
    category: 'Joaillerie',
    image: 'https://readdy.ai/api/search-image?query=Pair%20of%20elegant%20diamond%20earrings%20with%20ruby%20drops%20on%20white%20marble%20surface%20professional%20jewelry%20photography%20luxury%20design%20gold%20setting%20high%20end%20craftsmanship&width=600&height=600&seq=gallery-jewelry-003&orientation=squarish',
    title: 'Boucles d\'Oreilles',
    description: 'Or jaune et rubis'
  },
  {
    category: 'Atelier',
    image: 'https://readdy.ai/api/search-image?query=Advanced%20gemological%20equipment%20microscope%20and%20spectroscope%20in%20modern%20laboratory%20precision%20instruments%20for%20gemstone%20analysis%20professional%20workspace%20scientific%20expertise&width=600&height=600&seq=gallery-workshop-003&orientation=squarish',
    title: 'Équipement Professionnel',
    description: 'Analyses de pointe'
  }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Tout');

  const filteredItems = activeCategory === 'Tout'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Galerie
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre univers à travers une sélection de pierres précieuses, créations joaillières et moments de notre atelier
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 text-sm font-medium tracking-wider transition-all cursor-pointer whitespace-nowrap rounded-sm ${
                activeCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative w-full h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-xl font-medium mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/galerie"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-medium text-sm tracking-wider hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap rounded-sm"
          >
            VOIR TOUTE LA GALERIE
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
