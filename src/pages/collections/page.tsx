import { useTranslation } from 'react-i18next';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function CollectionsPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Luxury%20precious%20gemstones%20collection%20display%20on%20elegant%20white%20silk%2C%20professional%20jewelry%20photography%2C%20sophisticated%20minimalist%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20artisanal%20presentation%2C%20refined%20French%20craftsmanship%20mood%2C%20museum%20quality%20atmosphere&width=1920&height=800&seq=collections-hero-bg&orientation=landscape"
            alt="Collections"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-white/90 mb-4">
              {t('common.collections.label')}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              {t('common.collections.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              {t('common.collections.description')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 md:mb-32">
            <div className="order-2 lg:order-1">
              <p className="text-sm tracking-[0.3em] text-gray-600 mb-4">
                {t('common.collections.stones.subtitle')}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6">
                {t('common.collections.stones.title')}
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                {t('common.collections.stones.story')}
              </p>
              <button className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer">
                {t('common.collections.stones.cta')}
              </button>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-3 md:gap-4">
              <div className="relative h-[200px] md:h-[300px] rounded-lg overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Luxury%20blue%20sapphire%20gemstone%20close-up%20on%20white%20silk%2C%20professional%20jewelry%20photography%2C%20elegant%20minimalist%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20precious%20stone%20display%2C%20refined%20artisanal%20presentation&width=400&height=600&seq=collection-stone-001&orientation=portrait"
                  alt="Saphir"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="relative h-[200px] md:h-[300px] rounded-lg overflow-hidden mt-6 md:mt-12">
                <img
                  src="https://readdy.ai/api/search-image?query=Luxury%20red%20ruby%20gemstone%20close-up%20on%20white%20silk%2C%20professional%20jewelry%20photography%2C%20elegant%20minimalist%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20precious%20stone%20display%2C%20refined%20artisanal%20presentation&width=400&height=600&seq=collection-stone-002&orientation=portrait"
                  alt="Rubis"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="relative h-[200px] md:h-[300px] rounded-lg overflow-hidden -mt-6 md:-mt-12">
                <img
                  src="https://readdy.ai/api/search-image?query=Luxury%20green%20emerald%20gemstone%20close-up%20on%20white%20silk%2C%20professional%20jewelry%20photography%2C%20elegant%20minimalist%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20precious%20stone%20display%2C%20refined%20artisanal%20presentation&width=400&height=600&seq=collection-stone-003&orientation=portrait"
                  alt="Émeraude"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="relative h-[200px] md:h-[300px] rounded-lg overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Luxury%20pink%20tourmaline%20gemstone%20close-up%20on%20white%20silk%2C%20professional%20jewelry%20photography%2C%20elegant%20minimalist%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20precious%20stone%20display%2C%20refined%20artisanal%20presentation&width=400&height=600&seq=collection-stone-004&orientation=portrait"
                  alt="Tourmaline"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Featured Stones */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-32">
            <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-[250px] md:h-[300px]">
                <img
                  src="https://readdy.ai/api/search-image?query=Exceptional%20blue%20sapphire%20gemstone%20on%20luxury%20white%20display%2C%20professional%20jewelry%20photography%2C%20elegant%20minimalist%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20precious%20stone%20presentation%2C%20refined%20artisanal%20mood&width=600&height=600&seq=featured-sapphire-001&orientation=squarish"
                  alt="Saphir Birman"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-2">Saphir Birman</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">18.5 carats - Couleur royale exceptionnelle</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm text-gray-500">Origine: Mogok, Birmanie</span>
                  <i className="ri-arrow-right-line text-xl text-gray-900 cursor-pointer"></i>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-[250px] md:h-[300px]">
                <img
                  src="https://readdy.ai/api/search-image?query=Exceptional%20red%20ruby%20gemstone%20on%20luxury%20white%20display%2C%20professional%20jewelry%20photography%2C%20elegant%20minimalist%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20precious%20stone%20presentation%2C%20refined%20artisanal%20mood&width=600&height=600&seq=featured-ruby-001&orientation=squarish"
                  alt="Rubis Pigeon Blood"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-2">Rubis Pigeon Blood</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">12.3 carats - Rouge intense parfait</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm text-gray-500">Origine: Mogok, Birmanie</span>
                  <i className="ri-arrow-right-line text-xl text-gray-900 cursor-pointer"></i>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-[250px] md:h-[300px]">
                <img
                  src="https://readdy.ai/api/search-image?query=Exceptional%20green%20emerald%20gemstone%20on%20luxury%20white%20display%2C%20professional%20jewelry%20photography%2C%20elegant%20minimalist%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20precious%20stone%20presentation%2C%20refined%20artisanal%20mood&width=600&height=600&seq=featured-emerald-001&orientation=squarish"
                  alt="Émeraude Colombienne"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-2">Émeraude Colombienne</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">25.7 carats - Vert profond exceptionnel</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm text-gray-500">Origine: Muzo, Colombie</span>
                  <i className="ri-arrow-right-line text-xl text-gray-900 cursor-pointer"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bespoke Jewelry Collection */}
      <section className="py-12 md:py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 md:mb-32">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="relative h-[200px] md:h-[300px] rounded-lg overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=Luxury%20custom%20sapphire%20ring%20on%20white%20silk%2C%20professional%20jewelry%20photography%2C%20elegant%20minimalist%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20bespoke%20jewelry%20display%2C%20refined%20artisanal%20presentation&width=400&height=600&seq=collection-jewelry-001&orientation=portrait"
                    alt="Bague Saphir"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="relative h-[200px] md:h-[300px] rounded-lg overflow-hidden mt-6 md:mt-12">
                  <img
                    src="https://readdy.ai/api/search-image?query=Luxury%20custom%20emerald%20necklace%20on%20white%20silk%2C%20professional%20jewelry%20photography%2C%20elegant%20minimalist%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20bespoke%20jewelry%20display%2C%20refined%20artisanal%20presentation&width=400&height=600&seq=collection-jewelry-002&orientation=portrait"
                    alt="Collier Émeraude"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="relative h-[200px] md:h-[300px] rounded-lg overflow-hidden -mt-6 md:-mt-12">
                  <img
                    src="https://readdy.ai/api/search-image?query=Luxury%20custom%20ruby%20earrings%20on%20white%20silk%2C%20professional%20jewelry%20photography%2C%20elegant%20minimalist%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20bespoke%20jewelry%20display%2C%20refined%20artisanal%20presentation&width=400&height=600&seq=collection-jewelry-003&orientation=portrait"
                    alt="Boucles d'Oreilles Rubis"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="relative h-[200px] md:h-[300px] rounded-lg overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=Luxury%20custom%20diamond%20bracelet%20on%20white%20silk%2C%20professional%20jewelry%20photography%2C%20elegant%20minimalist%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20bespoke%20jewelry%20display%2C%20refined%20artisanal%20presentation&width=400&height=600&seq=collection-jewelry-004&orientation=portrait"
                    alt="Bracelet Diamant"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm tracking-[0.3em] text-gray-600 mb-4">
                {t('common.collections.jewelry.subtitle')}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6">
                {t('common.collections.jewelry.title')}
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                {t('common.collections.jewelry.story')}
              </p>
              <button className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer">
                {t('common.collections.jewelry.cta')}
              </button>
            </div>
          </div>

          {/* Featured Jewelry */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#FAF8F5] rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-[250px] md:h-[300px]">
                <img
                  src="https://readdy.ai/api/search-image?query=Luxury%20bespoke%20sapphire%20engagement%20ring%20on%20white%20silk%2C%20professional%20jewelry%20photography%2C%20elegant%20minimalist%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20custom%20jewelry%20presentation%2C%20refined%20artisanal%20mood&width=600&height=600&seq=featured-ring-001&orientation=squarish"
                  alt="Bague de Fiançailles"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-2">Bague de Fiançailles</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">Saphir 5 carats - Platine et diamants</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm text-gray-500">Création sur mesure</span>
                  <i className="ri-arrow-right-line text-xl text-gray-900 cursor-pointer"></i>
                </div>
              </div>
            </div>
            <div className="bg-[#FAF8F5] rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-[250px] md:h-[300px]">
                <img
                  src="https://readdy.ai/api/search-image?query=Luxury%20bespoke%20emerald%20pendant%20necklace%20on%20white%20silk%2C%20professional%20jewelry%20photography%2C%20elegant%20minimalist%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20custom%20jewelry%20presentation%2C%20refined%20artisanal%20mood&width=600&height=600&seq=featured-necklace-001&orientation=squarish"
                  alt="Collier Émeraude"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-2">Collier Émeraude</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">Émeraude 8 carats - Or blanc 18k</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm text-gray-500">Création sur mesure</span>
                  <i className="ri-arrow-right-line text-xl text-gray-900 cursor-pointer"></i>
                </div>
              </div>
            </div>
            <div className="bg-[#FAF8F5] rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-[250px] md:h-[300px]">
                <img
                  src="https://readdy.ai/api/search-image?query=Luxury%20bespoke%20ruby%20drop%20earrings%20on%20white%20silk%2C%20professional%20jewelry%20photography%2C%20elegant%20minimalist%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20custom%20jewelry%20presentation%2C%20refined%20artisanal%20mood&width=600&height=600&seq=featured-earrings-001&orientation=squarish"
                  alt="Boucles d'Oreilles"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-2">Boucles d'Oreilles</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">Rubis 3 carats chacun - Or rose 18k</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm text-gray-500">Création sur mesure</span>
                  <i className="ri-arrow-right-line text-xl text-gray-900 cursor-pointer"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
