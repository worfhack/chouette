import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function ServicesPage() {
  const services = [
    {
      icon: 'ri-search-eye-line',
      title: 'Expertise Gemmologique',
      description: 'Identification précise et évaluation complète de vos pierres précieuses par nos gemmologues certifiés.',
      features: [
        'Analyse au microscope et spectroscope',
        'Détermination de l\'origine géographique',
        'Évaluation des traitements éventuels',
        'Certificat d\'authenticité détaillé'
      ]
    },
    {
      icon: 'ri-file-text-line',
      title: 'Certification',
      description: 'Délivrance de certificats reconnus internationalement attestant de l\'authenticité et de la qualité de vos gemmes.',
      features: [
        'Certificat conforme aux normes internationales',
        'Photographies haute résolution',
        'Description détaillée des caractéristiques',
        'Traçabilité et archivage sécurisé'
      ]
    },
    {
      icon: 'ri-palette-line',
      title: 'Création Sur Mesure',
      description: 'Conception et réalisation de bijoux uniques selon vos désirs, alliant tradition et modernité.',
      features: [
        'Consultation personnalisée',
        'Dessins et maquettes 3D',
        'Sélection de pierres d\'exception',
        'Fabrication artisanale en atelier'
      ]
    },
    {
      icon: 'ri-tools-line',
      title: 'Restauration',
      description: 'Remise en état et valorisation de vos bijoux anciens avec respect des techniques d\'origine.',
      features: [
        'Diagnostic complet de l\'état',
        'Nettoyage et polissage professionnel',
        'Remplacement de pierres manquantes',
        'Modernisation respectueuse'
      ]
    },
    {
      icon: 'ri-shopping-bag-line',
      title: 'Achat & Vente',
      description: 'Accompagnement dans l\'acquisition ou la cession de pierres précieuses et bijoux de valeur.',
      features: [
        'Estimation gratuite et confidentielle',
        'Réseau international de collectionneurs',
        'Conseil en investissement',
        'Transaction sécurisée et transparente'
      ]
    },
    {
      icon: 'ri-book-open-line',
      title: 'Formation',
      description: 'Ateliers et cours pour découvrir l\'univers fascinant de la gemmologie et de la joaillerie.',
      features: [
        'Initiation à la gemmologie',
        'Reconnaissance des pierres',
        'Histoire de la joaillerie',
        'Petits groupes personnalisés'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://readdy.ai/api/search-image?query=Luxury%20jewelry%20services%20professional%20gemologist%20hands%20working%20on%20custom%20ring%20design%20elegant%20workshop%20tools%20precious%20stones%20craftsmanship%20detailed%20close-up%20sophisticated%20lighting%20refined%20atmosphere%20artisan%20expertise&width=1920&height=600&seq=services-hero-001&orientation=landscape"
            alt="Nos Services"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3 sm:mb-4 tracking-wide break-words">
            Nos Services
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
            Un accompagnement complet pour tous vos besoins en gemmologie et joaillerie
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Depuis deux générations, nous mettons notre expertise au service de particuliers, collectionneurs et professionnels pour répondre à tous leurs besoins en matière de pierres précieuses et de joaillerie d'exception.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 sm:p-8 rounded-sm hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-4 sm:mb-6">
                  <i className={`${service.icon} text-3xl sm:text-4xl text-gray-900`}></i>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-light text-gray-900 mb-3 sm:mb-4 break-words">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      <i className="ri-check-line text-gray-900 text-base sm:text-lg mt-0.5 flex-shrink-0"></i>
                      <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 md:mt-20 text-center bg-gray-50 p-8 sm:p-12 md:p-16 rounded-sm">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3 sm:mb-4 break-words">
              Un Projet en Tête ?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Que vous souhaitiez faire expertiser une pierre, créer un bijou unique ou simplement en savoir plus sur nos services, nous sommes à votre écoute.
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
