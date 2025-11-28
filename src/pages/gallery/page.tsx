import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function GalleryPage() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: t('common.gallery.all') },
    { id: 'stones', label: t('common.gallery.stones') },
    { id: 'jewelry', label: t('common.gallery.jewelry') },
    { id: 'workshop', label: t('common.gallery.workshop') }
  ];

  const galleryItems = [
    {
      category: 'stones',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20blue%20sapphire%20gemstone%20on%20white%20silk%20fabric%2C%20professional%20jewelry%20photography%2C%20elegant%20minimalist%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20precious%20stone%20display%2C%20refined%20artisanal%20presentation&width=800&height=800&seq=gallery-stone-001&orientation=squarish',
      title: 'Saphir Birman',
      description: '18.5 carats'
    },
    {
      category: 'jewelry',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20custom%20sapphire%20ring%20on%20white%20silk%2C%20professional%20jewelry%20photography%2C%20elegant%20minimalist%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20bespoke%20jewelry%20display%2C%20refined%20artisanal%20presentation&width=800&height=800&seq=gallery-jewelry-001&orientation=squarish',
      title: 'Bague Saphir Sur Mesure',
      description: 'Platine et diamants'
    },
    {
      category: 'workshop',
      image: 'https://readdy.ai/api/search-image?query=French%20gemologist%20examining%20precious%20stones%20with%20professional%20loupe%20in%20luxury%20workshop%2C%20warm%20lighting%2C%20elegant%20wooden%20desk%20with%20gemological%20tools%2C%20authentic%20craftsmanship%20atmosphere%2C%20refined%20artisanal%20setting&width=800&height=800&seq=gallery-workshop-001&orientation=squarish',
      title: 'Expertise en Atelier',
      description: 'Analyse gemmologique'
    },
    {
      category: 'stones',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20red%20ruby%20gemstone%20on%20white%20silk%20fabric%2C%20professional%20jewelry%20photography%2C%20elegant%20minimalist%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20precious%20stone%20display%2C%20refined%20artisanal%20presentation&width=800&height=800&seq=gallery-stone-002&orientation=squarish',
      title: 'Rubis Pigeon Blood',
      description: '12.3 carats'
    },
    {
      category: 'jewelry',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20custom%20emerald%20necklace%20on%20white%20silk%2C%20professional%20jewelry%20photography%2C%20elegant%20minimalist%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20bespoke%20jewelry%20display%2C%20refined%20artisanal%20presentation&width=800&height=800&seq=gallery-jewelry-002&orientation=squarish',
      title: 'Collier Émeraude',
      description: 'Or blanc 18k'
    },
    {
      category: 'stones',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20green%20emerald%20gemstone%20on%20white%20silk%20fabric%2C%20professional%20jewelry%20photography%2C%20elegant%20minimalist%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20precious%20stone%20display%2C%20refined%20artisanal%20presentation&width=800&height=800&seq=gallery-stone-003&orientation=squarish',
      title: 'Émeraude Colombienne',
      description: '25.7 carats'
    },
    {
      category: 'workshop',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20gemology%20workshop%20interior%20with%20professional%20equipment%2C%20microscopes%20and%20gemological%20tools%20on%20elegant%20wooden%20desk%2C%20warm%20ambient%20lighting%2C%20refined%20artisanal%20atmosphere%2C%20high-end%20craftsmanship%20setting&width=800&height=800&seq=gallery-workshop-002&orientation=squarish',
      title: 'Outils de Gemmologie',
      description: 'Équipement professionnel'
    },
    {
      category: 'jewelry',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20custom%20ruby%20earrings%20on%20white%20silk%2C%20professional%20jewelry%20photography%2C%20elegant%20minimalist%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20bespoke%20jewelry%20display%2C%20refined%20artisanal%20presentation&width=800&height=800&seq=gallery-jewelry-003&orientation=squarish',
      title: 'Boucles d\'Oreilles Rubis',
      description: 'Or rose 18k'
    },
    {
      category: 'stones',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20pink%20tourmaline%20gemstone%20on%20white%20silk%20fabric%2C%20professional%20jewelry%20photography%2C%20elegant%20minimalist%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20precious%20stone%20display%2C%20refined%20artisanal%20presentation&width=800&height=800&seq=gallery-stone-004&orientation=squarish',
      title: 'Tourmaline Paraïba',
      description: '8.2 carats'
    },
    {
      category: 'workshop',
      image: 'https://readdy.ai/api/search-image?query=French%20gemologist%20hands%20working%20on%20custom%20jewelry%20design%20sketches%20in%20luxury%20workshop%2C%20professional%20tools%20and%20gemstones%20on%20elegant%20desk%2C%20warm%20lighting%2C%20refined%20artisanal%20atmosphere%2C%20high-end%20craftsmanship&width=800&height=800&seq=gallery-workshop-003&orientation=squarish',
      title: 'Création Joaillière',
      description: 'Design sur mesure'
    },
    {
      category: 'jewelry',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20custom%20diamond%20bracelet%20on%20white%20silk%2C%20professional%20jewelry%20photography%2C%20elegant%20minimalist%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20bespoke%20jewelry%20display%2C%20refined%20artisanal%20presentation&width=800&height=800&seq=gallery-jewelry-004&orientation=squarish',
      title: 'Bracelet Diamant',
      description: 'Platine et diamants'
    },
    {
      category: 'stones',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20white%20diamond%20gemstone%20on%20white%20silk%20fabric%2C%20professional%20jewelry%20photography%2C%20elegant%20minimalist%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20precious%20stone%20display%2C%20refined%20artisanal%20presentation&width=800&height=800&seq=gallery-stone-005&orientation=squarish',
      title: 'Diamant Exceptionnel',
      description: '5.5 carats - D/IF'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Luxury%20gemology%20gallery%20showcase%20with%20precious%20stones%20and%20jewelry%20displays%2C%20elegant%20museum-like%20setting%2C%20sophisticated%20lighting%2C%20high-end%20artisanal%20atmosphere%2C%20refined%20French%20craftsmanship%20presentation%2C%20artistic%20composition%2C%20premium%20gallery%20mood&width=1920&height=800&seq=gallery-hero-bg&orientation=landscape"
            alt="Galerie"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-white/90 mb-4">
              {t('common.gallery.label')}
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl text-white mb-6">
              {t('common.gallery.title')}
            </h1>
          </div>

          {/* Filters */}
          <div className="flex justify-center gap-4 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === filter.id
                    ? 'bg-white text-gray-900'
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
