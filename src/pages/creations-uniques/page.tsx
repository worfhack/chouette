import { useState } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function CreationsUniquesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Toutes les Créations' },
    { id: 'rings', label: 'Bagues' },
    { id: 'necklaces', label: 'Colliers' },
    { id: 'earrings', label: 'Boucles d\'Oreilles' },
    { id: 'bracelets', label: 'Bracelets' }
  ];

  const creations = [
    {
      id: 1,
      category: 'rings',
      title: 'Bague Solitaire Saphir Cachemire',
      description: 'Saphir du Cachemire de 3,5 carats serti sur platine, design épuré mettant en valeur la couleur veloutée exceptionnelle de la pierre',
      stone: 'Saphir Cachemire 3,5ct',
      metal: 'Platine 950',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20engagement%20ring%20featuring%20Kashmir%20sapphire%20cornflower%20blue%20gemstone%20platinum%20setting%20elegant%20solitaire%20design%20professional%20jewelry%20photography%20white%20background%20museum%20quality%20craftsmanship&width=800&height=600&seq=creation-ring-sapphire-001&orientation=landscape',
      price: 'Sur demande',
      story: 'Cette bague met en scène un saphir du Cachemire d\'une rareté exceptionnelle. La monture en platine, volontairement minimaliste, laisse toute la place à la beauté naturelle de la pierre. Le serti griffes assure une sécurité optimale tout en maximisant la luminosité.'
    },
    {
      id: 2,
      category: 'rings',
      title: 'Bague Rubis Birman Entourage',
      description: 'Rubis birman "sang de pigeon" de 2,8 carats entouré de diamants, monture en or rose 18 carats, style Art Déco',
      stone: 'Rubis Birman 2,8ct',
      metal: 'Or Rose 18k',
      image: 'https://readdy.ai/api/search-image?query=Art%20Deco%20style%20ring%20pigeon%20blood%20Burmese%20ruby%20center%20stone%20diamond%20halo%20rose%20gold%20setting%20vintage%20inspired%20design%20professional%20jewelry%20photography%20elegant%20presentation&width=800&height=600&seq=creation-ring-ruby-001&orientation=landscape',
      price: 'Sur demande',
      story: 'Inspirée des créations Art Déco des années 1920, cette bague associe un rubis birman non chauffé à un entourage de diamants taille brillant. L\'or rose sublime la teinte chaude du rubis, créant une harmonie chromatique parfaite.'
    },
    {
      id: 3,
      category: 'necklaces',
      title: 'Collier Émeraude Colombienne',
      description: 'Émeraude de Muzo de 5,2 carats en pendentif, chaîne en or blanc 18 carats avec diamants, design contemporain',
      stone: 'Émeraude Muzo 5,2ct',
      metal: 'Or Blanc 18k',
      image: 'https://readdy.ai/api/search-image?query=Contemporary%20pendant%20necklace%20Colombian%20Muzo%20emerald%20center%20stone%20white%20gold%20chain%20diamond%20accents%20modern%20elegant%20design%20professional%20jewelry%20photography%20luxury%20presentation&width=800&height=600&seq=creation-necklace-emerald-001&orientation=landscape',
      price: 'Sur demande',
      story: 'Cette émeraude colombienne de Muzo, au vert profond et velouté, est mise en valeur par un design contemporain épuré. La monture ajourée permet à la lumière de traverser la pierre, révélant toute sa transparence et son éclat.'
    },
    {
      id: 4,
      category: 'necklaces',
      title: 'Collier Tourmaline Paraïba',
      description: 'Tourmaline paraïba du Brésil de 4,1 carats, couleur néon électrique, monture en or blanc avec diamants',
      stone: 'Paraïba Brésil 4,1ct',
      metal: 'Or Blanc 18k',
      image: 'https://readdy.ai/api/search-image?query=Modern%20necklace%20Brazilian%20Paraiba%20tourmaline%20electric%20blue%20neon%20color%20white%20gold%20setting%20diamond%20details%20contemporary%20design%20professional%20jewelry%20photography%20vibrant%20presentation&width=800&height=600&seq=creation-necklace-paraiba-001&orientation=landscape',
      price: 'Sur demande',
      story: 'La tourmaline paraïba, avec sa couleur néon unique, est l\'une des gemmes les plus rares au monde. Cette pièce célèbre cette rareté avec un design moderne qui amplifie l\'effet lumineux naturel de la pierre cuprifère.'
    },
    {
      id: 5,
      category: 'earrings',
      title: 'Boucles d\'Oreilles Saphir Rose',
      description: 'Paire de saphirs roses de Madagascar, 2,3 carats chacun, monture en or rose avec diamants, style goutte',
      stone: 'Saphirs Roses 2x2,3ct',
      metal: 'Or Rose 18k',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20drop%20earrings%20pink%20sapphires%20Madagascar%20rose%20gold%20setting%20diamond%20accents%20feminine%20design%20professional%20jewelry%20photography%20luxury%20presentation%20matching%20pair&width=800&height=600&seq=creation-earrings-sapphire-001&orientation=landscape',
      price: 'Sur demande',
      story: 'Cette paire de saphirs roses de Madagascar offre une teinte délicate et romantique. Le design en goutte allonge la silhouette, tandis que les diamants apportent une touche d\'éclat supplémentaire.'
    },
    {
      id: 6,
      category: 'earrings',
      title: 'Boucles d\'Oreilles Émeraude Trapiche',
      description: 'Émeraudes trapiche de Colombie, motif naturel en étoile, monture en or jaune, design géométrique',
      stone: 'Émeraudes Trapiche',
      metal: 'Or Jaune 18k',
      image: 'https://readdy.ai/api/search-image?query=Unique%20earrings%20Colombian%20trapiche%20emeralds%20natural%20star%20pattern%20yellow%20gold%20geometric%20setting%20artistic%20design%20professional%20jewelry%20photography%20museum%20quality%20presentation&width=800&height=600&seq=creation-earrings-trapiche-001&orientation=landscape',
      price: 'Sur demande',
      story: 'Les émeraudes trapiche sont parmi les plus rares au monde, avec leur motif naturel en étoile formé lors de la cristallisation. Ces boucles d\'oreilles célèbrent cette particularité géologique unique avec un design qui met en valeur le motif naturel.'
    },
    {
      id: 7,
      category: 'bracelets',
      title: 'Bracelet Tennis Saphirs Multicolores',
      description: 'Bracelet tennis composé de saphirs multicolores de 1 carat chacun, monture en or blanc, arc-en-ciel de couleurs',
      stone: 'Saphirs Multicolores',
      metal: 'Or Blanc 18k',
      image: 'https://readdy.ai/api/search-image?query=Tennis%20bracelet%20multicolor%20sapphires%20rainbow%20colors%20white%20gold%20setting%20elegant%20design%20professional%20jewelry%20photography%20luxury%20presentation%20colorful%20gemstones&width=800&height=600&seq=creation-bracelet-sapphire-001&orientation=landscape',
      price: 'Sur demande',
      story: 'Ce bracelet tennis célèbre la diversité chromatique des saphirs, du bleu au rose en passant par le jaune et le vert. Chaque pierre a été sélectionnée pour sa couleur intense et sa pureté, créant un arc-en-ciel de gemmes précieuses.'
    },
    {
      id: 8,
      category: 'bracelets',
      title: 'Bracelet Jonc Rubis et Diamants',
      description: 'Jonc en or jaune serti de rubis birmans et diamants en alternance, design intemporel et élégant',
      stone: 'Rubis Birmans & Diamants',
      metal: 'Or Jaune 18k',
      image: 'https://readdy.ai/api/search-image?query=Classic%20bangle%20bracelet%20Burmese%20rubies%20diamonds%20alternating%20pattern%20yellow%20gold%20setting%20timeless%20elegant%20design%20professional%20jewelry%20photography%20luxury%20presentation&width=800&height=600&seq=creation-bracelet-ruby-001&orientation=landscape',
      price: 'Sur demande',
      story: 'Ce bracelet jonc allie l\'intensité des rubis birmans à l\'éclat des diamants dans un design intemporel. La monture en or jaune apporte chaleur et élégance, créant une pièce qui traverse les générations.'
    }
  ];

  const filteredCreations = activeCategory === 'all' 
    ? creations 
    : creations.filter(c => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://readdy.ai/api/search-image?query=Luxury%20bespoke%20jewelry%20workshop%20artisan%20craftsmanship%20custom%20made%20pieces%20precious%20gemstones%20elegant%20display%20sophisticated%20atmosphere%20professional%20photography&width=1920&height=600&seq=creations-hero-001&orientation=landscape"
            alt="Créations Uniques"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3 sm:mb-4 tracking-wide break-words">
            Créations Uniques
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
            Joaillerie sur mesure alliant pierres d'exception et savoir-faire artisanal
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 break-words">
            L'Art de la Création Sur Mesure
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Chaque création joaillière de notre atelier est une œuvre unique, conçue en étroite collaboration avec nos clients. Du choix de la pierre à la conception finale, nous créons des bijoux qui racontent votre histoire personnelle.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Notre savoir-faire allie techniques traditionnelles transmises de génération en génération et design contemporain, pour des pièces intemporelles qui se transmettent à leur tour.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap rounded-sm ${
                  activeCategory === category.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Creations Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {filteredCreations.map((creation) => (
              <div key={creation.id} className="group">
                {/* Image */}
                <div className="w-full h-64 sm:h-80 md:h-96 rounded-sm overflow-hidden mb-4 sm:mb-6">
                  <img
                    src={creation.image}
                    alt={creation.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-gray-900 mb-2 sm:mb-3 break-words">
                    {creation.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                    {creation.description}
                  </p>

                  {/* Specifications */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-sm">
                      <p className="text-xs text-gray-500 mb-1">Pierre</p>
                      <p className="text-xs sm:text-sm font-medium text-gray-900">{creation.stone}</p>
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-sm">
                      <p className="text-xs text-gray-500 mb-1">Métal</p>
                      <p className="text-xs sm:text-sm font-medium text-gray-900">{creation.metal}</p>
                    </div>
                  </div>

                  {/* Story */}
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-sm mb-4 sm:mb-6">
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {creation.story}
                    </p>
                  </div>



                </div>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mt-16 sm:mt-20 md:mt-24 bg-gray-50 p-6 sm:p-8 md:p-12 lg:p-16 rounded-sm">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-8 sm:mb-12 text-center break-words">
              Notre Processus de Création
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl sm:text-2xl font-light">1</span>
                </div>
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">Consultation</h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Échange sur vos envies, votre style et le budget
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl sm:text-2xl font-light">2</span>
                </div>
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">Sélection</h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Choix de la pierre parmi notre collection ou sourcing sur mesure
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl sm:text-2xl font-light">3</span>
                </div>
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">Conception</h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Création de dessins et maquettes 3D pour validation
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl sm:text-2xl font-light">4</span>
                </div>
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">Réalisation</h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Fabrication artisanale dans notre atelier parisien
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 sm:mt-16 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 break-words">
              Créons Ensemble Votre Bijou Unique
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Prenez rendez-vous pour discuter de votre projet et découvrir nos pierres d'exception
            </p>
            <a
              href="/rendez-vous"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white font-medium text-xs sm:text-sm tracking-wider hover:bg-gray-800 transition-all duration-300 cursor-pointer whitespace-nowrap rounded-sm"
            >
              PRENDRE RENDEZ-VOUS
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
