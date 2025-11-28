import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function ServicesPage() {
  const { t } = useTranslation();

  const services = [
    {
      icon: 'ri-shield-check-line',
      title: t('common.services.expertise.title'),
      description: t('common.services.expertise.description'),
      features: [
        'Analyse spectroscopique avancée',
        'Identification des traitements',
        'Certification internationale',
        'Rapport détaillé avec photographies'
      ]
    },
    {
      icon: 'ri-fingerprint-line',
      title: t('common.services.identification.title'),
      description: t('common.services.identification.description'),
      features: [
        'Détermination de l\'origine géographique',
        'Analyse des inclusions',
        'Évaluation de la qualité',
        'Historique des traitements'
      ]
    },
    {
      icon: 'ri-book-2-line',
      title: t('common.services.research.title'),
      description: t('common.services.research.description'),
      features: [
        'Recherche de provenance',
        'Documentation historique',
        'Analyse de marché',
        'Conseil en investissement'
      ]
    },
    {
      icon: 'ri-global-line',
      title: t('common.services.sourcing.title'),
      description: t('common.services.sourcing.description'),
      features: [
        'Réseau international de fournisseurs',
        'Accès aux ventes privées',
        'Négociation experte',
        'Sourcing de pierres rares'
      ]
    },
    {
      icon: 'ri-gem-line',
      title: t('common.services.sales.title'),
      description: t('common.services.sales.description'),
      features: [
        'Collection de pierres certifiées',
        'Conseil personnalisé',
        'Garantie d\'authenticité',
        'Service après-vente'
      ]
    },
    {
      icon: 'ri-palette-line',
      title: t('common.services.bespoke.title'),
      description: t('common.services.bespoke.description'),
      features: [
        'Design sur mesure',
        'Sélection de la pierre',
        'Fabrication artisanale',
        'Suivi personnalisé'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Luxury%20gemology%20services%20professional%20workspace%20with%20gemological%20equipment%20and%20precious%20stones%2C%20elegant%20modern%20setting%2C%20sophisticated%20lighting%2C%20high-end%20artisanal%20atmosphere%2C%20refined%20French%20craftsmanship%20mood%2C%20soft%20focus%20background%2C%20premium%20service%20presentation&width=1920&height=800&seq=services-hero-bg&orientation=landscape"
            alt="Services"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-xs sm:text-sm tracking-[0.3em] text-white/90 mb-4">
              {t('common.services.label')}
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 break-words">
              {t('common.services.title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              {t('common.services.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-gray-900 rounded-full mb-6">
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <i className="ri-check-line text-gray-900 mt-1 flex-shrink-0"></i>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Info */}
      <section className="py-20 px-6 lg:px-12 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <i className="ri-calendar-check-line text-5xl mb-6 block"></i>
          <h2 className="font-serif text-3xl mb-6">{t('common.services.consultation')}</h2>
          <Link to="/rendez-vous">
            <button className="px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              {t('common.services.cta')}
            </button>
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl text-gray-900 text-center mb-16">Notre Approche</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-24 h-24 flex items-center justify-center bg-gray-900 text-white rounded-full mx-auto mb-6">
                <span className="font-serif text-3xl">1</span>
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-4">Consultation Initiale</h3>
              <p className="text-gray-600">Rencontre personnalisée pour comprendre vos besoins, vos objectifs et vos attentes spécifiques.</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 flex items-center justify-center bg-gray-900 text-white rounded-full mx-auto mb-6">
                <span className="font-serif text-3xl">2</span>
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-4">Expertise Approfondie</h3>
              <p className="text-gray-600">Analyse détaillée utilisant notre expertise et nos équipements de pointe pour garantir la qualité.</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 flex items-center justify-center bg-gray-900 text-white rounded-full mx-auto mb-6">
                <span className="font-serif text-3xl">3</span>
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-4">Accompagnement Continu</h3>
              <p className="text-gray-600">Suivi personnalisé et conseil permanent pour assurer votre satisfaction et la valorisation de votre investissement.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
