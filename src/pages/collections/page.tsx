import { useState } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function CollectionsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const collections = [
    {
      id: 'sapphire',
      category: 'precious',
      title: 'Saphirs d\'Exception',
      subtitle: 'Cachemire, Birmanie & Sri Lanka',
      description: 'Une sélection rare de saphirs du Cachemire, de Birmanie et du Sri Lanka, choisis pour leur couleur veloutée et leur pureté remarquable.',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20blue%20sapphire%20gemstones%20collection%20various%20cuts%20and%20sizes%20deep%20cornflower%20blue%20color%20velvet%20texture%20Kashmir%20Burma%20Ceylon%20origins%20elegant%20display%20on%20white%20silk%20fabric%20professional%20jewelry%20photography%20soft%20natural%20lighting&width=800&height=600&seq=collection-sapphire-001&orientation=landscape',
      story: 'Le saphir du Cachemire est considéré comme le plus précieux au monde. Découvert en 1881 dans les montagnes de l\'Himalaya, ce trésor géologique offre une couleur bleue veloutée unique, appelée "bleu bleuet". Notre collection comprend des pièces exceptionnelles provenant de ces gisements légendaires, aujourd\'hui épuisés, ainsi que des saphirs birmans et ceylanais de qualité supérieure.',
      pieces: 12
    },
    {
      id: 'ruby',
      category: 'precious',
      title: 'Rubis Précieux',
      subtitle: 'Sang de Pigeon',
      description: 'Des rubis birmans "sang de pigeon" et mozambicains d\'une intensité chromatique exceptionnelle, certifiés non chauffés.',
      image: 'https://readdy.ai/api/search-image?query=Premium%20pigeon%20blood%20red%20ruby%20gemstones%20collection%20brilliant%20cuts%20unheated%20natural%20stones%20Burma%20Mozambique%20origins%20deep%20crimson%20color%20luxury%20display%20on%20black%20velvet%20professional%20gemstone%20photography%20dramatic%20lighting&width=800&height=600&seq=collection-ruby-001&orientation=landscape',
      story: 'Le rubis "sang de pigeon" de Birmanie représente le summum de la perfection gemmologique. Cette couleur rouge intense, légèrement pourprée avec une fluorescence naturelle, est le résultat de millions d\'années de formation géologique. Notre collection privilégie les rubis non chauffés, véritables raretés dont la valeur ne cesse de croître. Chaque pierre est accompagnée d\'un certificat d\'authenticité détaillé.',
      pieces: 8
    },
    {
      id: 'emerald',
      category: 'precious',
      title: 'Émeraudes Royales',
      subtitle: 'Muzo & Chivor',
      description: 'Émeraudes colombiennes et zambiennes au vert profond, sélectionnées pour leur clarté et leur brillance naturelle.',
      image: 'https://readdy.ai/api/search-image?query=Royal%20Colombian%20emerald%20gemstones%20collection%20vivid%20green%20color%20natural%20crystals%20Muzo%20Chivor%20origins%20luxury%20presentation%20on%20cream%20silk%20elegant%20display%20professional%20jewelry%20photography%20soft%20diffused%20lighting&width=800&height=600&seq=collection-emerald-001&orientation=landscape',
      story: 'Les émeraudes colombiennes de Muzo et Chivor sont réputées dans le monde entier pour leur vert intense et velouté. Ces mines légendaires, exploitées depuis l\'époque précolombienne, produisent les émeraudes les plus prisées des collectionneurs. Notre sélection comprend des pierres au "jardin" naturel, ces inclusions caractéristiques qui témoignent de leur authenticité et racontent leur histoire géologique unique.',
      pieces: 15
    },
    {
      id: 'tourmaline',
      category: 'semi-precious',
      title: 'Tourmalines Paraïba',
      subtitle: 'Brésil & Mozambique',
      description: 'Tourmalines paraïba aux couleurs néon électriques, parmi les gemmes les plus rares et recherchées au monde.',
      image: 'https://readdy.ai/api/search-image?query=Rare%20Paraiba%20tourmaline%20gemstones%20collection%20electric%20blue%20neon%20green%20colors%20copper%20bearing%20stones%20Brazil%20Mozambique%20origins%20luxury%20display%20on%20white%20background%20professional%20jewelry%20photography%20vibrant%20lighting&width=800&height=600&seq=collection-tourmaline-001&orientation=landscape',
      story: 'Découverte en 1989 dans l\'État de Paraíba au Brésil, cette tourmaline cuprifère offre des couleurs néon uniques, du bleu électrique au vert turquoise. Plus rare que le diamant, la tourmaline paraïba est devenue l\'une des gemmes les plus convoitées. Notre collection comprend des pièces brésiliennes d\'origine ainsi que des paraïbas mozambicaines de qualité exceptionnelle.',
      pieces: 6
    },
    {
      id: 'aquamarine',
      category: 'semi-precious',
      title: 'Aigues-Marines',
      subtitle: 'Santa Maria',
      description: 'Aigues-marines brésiliennes au bleu profond Santa Maria, cristaux de grande taille d\'une transparence parfaite.',
      image: 'https://readdy.ai/api/search-image?query=Premium%20aquamarine%20gemstones%20collection%20Santa%20Maria%20blue%20color%20large%20crystals%20perfect%20clarity%20Brazil%20origins%20elegant%20display%20on%20white%20silk%20professional%20jewelry%20photography%20natural%20lighting&width=800&height=600&seq=collection-aquamarine-001&orientation=landscape',
      story: 'L\'aigue-marine Santa Maria, du nom de la mine brésilienne qui a produit les plus beaux spécimens, se distingue par son bleu profond et saturé. Ces cristaux de béryl, d\'une transparence exceptionnelle, peuvent atteindre des tailles impressionnantes. Notre collection privilégie les pierres de couleur naturelle, non chauffées, provenant des gisements les plus réputés du Brésil et du Pakistan.',
      pieces: 10
    }
  ];

  const filters = [
    { id: 'all', label: 'Toutes les Pierres' },
    { id: 'precious', label: 'Pierres Précieuses' },
    { id: 'semi-precious', label: 'Pierres Fines' }
  ];

  const filteredCollections = activeFilter === 'all' 
    ? collections 
    : collections.filter(c => c.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://readdy.ai/api/search-image?query=Luxury%20gemstone%20collection%20display%20precious%20stones%20sapphires%20rubies%20emeralds%20arranged%20elegantly%20on%20velvet%20sophisticated%20lighting%20museum%20quality%20presentation%20refined%20atmosphere%20professional%20photography&width=1920&height=600&seq=collections-hero-001&orientation=landscape"
            alt="Collections de Pierres"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3 sm:mb-4 tracking-wide break-words">
            Collections de Pierres
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
            Des pierres d'exception soigneusement sélectionnées à travers le monde
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap rounded-sm ${
                  activeFilter === filter.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            Chaque pierre de nos collections est le fruit d'une recherche minutieuse et d'une sélection rigoureuse. Nous privilégions les gemmes naturelles, non traitées ou avec traitements traditionnels acceptés, provenant de sources éthiques et traçables.
          </p>
        </div>
      </section>

      {/* Collections */}
      <section className="pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {filteredCollections.map((collection, index) => (
              <div key={collection.id} className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="w-full h-64 sm:h-80 md:h-96 rounded-sm overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="mb-3 sm:mb-4">
                    <p className="text-xs sm:text-sm text-gray-500 tracking-wider mb-2">
                      {collection.subtitle}
                    </p>
                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3 sm:mb-4 break-words">
                      {collection.title}
                    </h2>
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {collection.description}
                  </p>

                  {/* Histoire */}
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-sm mb-4 sm:mb-6">
                    <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-2 sm:mb-3">
                      Histoire & Origine
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {collection.story}
                    </p>
                  </div>

                  {/* Pièces disponibles */}
                  <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-gray-200">
                    <span className="text-xs sm:text-sm text-gray-600">
                      {collection.pieces} pièces disponibles
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 sm:mt-16 md:mt-20 text-center bg-gray-50 p-6 sm:p-8 md:p-12 lg:p-16 rounded-sm">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3 sm:mb-4 break-words">
              Découvrez Nos Pierres
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Prenez rendez-vous pour découvrir nos collections en atelier et bénéficier de conseils personnalisés
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a
                href="/rendez-vous"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white font-medium text-xs sm:text-sm tracking-wider hover:bg-gray-800 transition-all duration-300 cursor-pointer whitespace-nowrap rounded-sm"
              >
                PRENDRE RENDEZ-VOUS
              </a>
              <a
                href="/creations-uniques"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-900 text-gray-900 font-medium text-xs sm:text-sm tracking-wider hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap rounded-sm"
              >
                VOIR LES CRÉATIONS
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
