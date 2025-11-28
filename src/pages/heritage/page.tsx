import { useTranslation } from 'react-i18next';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function HeritagePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Elegant%20luxury%20gemology%20workshop%20interior%20with%20vintage%20wooden%20furniture%20and%20precious%20stones%20display%2C%20warm%20ambient%20lighting%2C%20refined%20artisanal%20atmosphere%2C%20sophisticated%20French%20craftsmanship%20setting%2C%20soft%20focus%20background%20with%20bokeh%20effect%2C%20high-end%20heritage%20mood%2C%20timeless%20elegance&width=1920&height=800&seq=heritage-hero-bg&orientation=landscape"
            alt="Héritage"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-xs sm:text-sm tracking-[0.3em] text-white/90 mb-4">
              {t('common.heritage.label')}
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 break-words px-4">
              {t('common.heritage.title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-4">
              {t('common.heritage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Father Story */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-lg overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Elderly%20French%20gemologist%20examining%20precious%20stones%20with%20loupe%20in%20traditional%20workshop%2C%20warm%20lighting%2C%20vintage%20wooden%20desk%20with%20gemological%20tools%2C%20professional%20portrait%2C%20authentic%20craftsmanship%20atmosphere%2C%20soft%20focus%20background%2C%20elegant%20and%20refined%20mood%2C%20luxury%20artisanal%20setting&width=800&height=1200&seq=heritage-father-001&orientation=portrait"
                alt="Le Père Fondateur"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4 md:mb-6 break-words">
                {t('common.heritage.father.title')}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                {t('common.heritage.father.description')}
              </p>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gray-900 rounded-full flex-shrink-0">
                    <i className="ri-eye-line text-lg md:text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl text-gray-900 mb-2 break-words">Vision d'Excellence</h3>
                    <p className="text-sm sm:text-base text-gray-600">Une quête incessante de la perfection dans l'art de la gemmologie, établissant les standards les plus élevés de l'industrie.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gray-900 rounded-full flex-shrink-0">
                    <i className="ri-book-open-line text-lg md:text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl text-gray-900 mb-2 break-words">Savoir Ancestral</h3>
                    <p className="text-sm sm:text-base text-gray-600">Des décennies d'expérience accumulées, combinant techniques traditionnelles et connaissances scientifiques modernes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gray-900 rounded-full flex-shrink-0">
                    <i className="ri-heart-line text-lg md:text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl text-gray-900 mb-2 break-words">Passion Transmise</h3>
                    <p className="text-sm sm:text-base text-gray-600">Un amour profond pour les pierres précieuses, partagé et transmis à la génération suivante avec dévouement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sons Story */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4 md:mb-6 break-words">
                {t('common.heritage.sons.title')}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                {t('common.heritage.sons.description')}
              </p>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gray-900 rounded-full flex-shrink-0">
                    <i className="ri-graduation-cap-line text-lg md:text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl text-gray-900 mb-2 break-words">Formation d'Excellence</h3>
                    <p className="text-sm sm:text-base text-gray-600">Diplômés des plus prestigieuses écoles de gemmologie, maîtrisant les techniques les plus avancées de l'analyse des pierres.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gray-900 rounded-full flex-shrink-0">
                    <i className="ri-lightbulb-line text-lg md:text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl text-gray-900 mb-2 break-words">Innovation Continue</h3>
                    <p className="text-sm sm:text-base text-gray-600">Intégration des technologies modernes tout en préservant l'authenticité et les valeurs traditionnelles de l'atelier familial.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gray-900 rounded-full flex-shrink-0">
                    <i className="ri-global-line text-lg md:text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl text-gray-900 mb-2 break-words">Réseau International</h3>
                    <p className="text-sm sm:text-base text-gray-600">Connexions établies avec les meilleurs fournisseurs et collectionneurs à travers le monde pour sourcer les gemmes les plus rares.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-lg overflow-hidden order-1 lg:order-2">
              <img
                src="https://readdy.ai/api/search-image?query=Two%20young%20French%20gemologists%20brothers%20working%20together%20in%20modern%20luxury%20workshop%2C%20examining%20precious%20gemstones%20with%20professional%20equipment%2C%20contemporary%20elegant%20setting%2C%20natural%20daylight%2C%20sophisticated%20atmosphere%2C%20high-end%20artisanal%20workspace%2C%20refined%20and%20professional%20mood&width=800&height=1200&seq=heritage-sons-001&orientation=portrait"
                alt="La Nouvelle Génération"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Quote */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-12 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <i className="ri-double-quotes-l text-3xl sm:text-4xl md:text-5xl text-gray-600 mb-6 md:mb-8 block"></i>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-6 md:mb-8 break-words px-4">
            {t('common.heritage.legacy')}
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-white mx-auto"></div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-gray-900 text-center mb-12 md:mb-16 break-words px-4">Notre Parcours</h2>
          <div className="space-y-8 md:space-y-12">
            <div className="flex gap-4 md:gap-8 items-start">
              <div className="flex-shrink-0 w-20 sm:w-24 md:w-32 text-right">
                <span className="font-serif text-xl sm:text-2xl text-gray-900">1985</span>
              </div>
              <div className="flex-shrink-0 w-3 h-3 md:w-4 md:h-4 bg-gray-900 rounded-full mt-2"></div>
              <div className="flex-1">
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-gray-900 mb-2 break-words">Fondation de l'Atelier</h3>
                <p className="text-sm sm:text-base text-gray-700">Création de l'atelier par le père fondateur, animé par sa passion pour les pierres précieuses et son désir de partager son expertise.</p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-8 items-start">
              <div className="flex-shrink-0 w-20 sm:w-24 md:w-32 text-right">
                <span className="font-serif text-xl sm:text-2xl text-gray-900">1995</span>
              </div>
              <div className="flex-shrink-0 w-3 h-3 md:w-4 md:h-4 bg-gray-900 rounded-full mt-2"></div>
              <div className="flex-1">
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-gray-900 mb-2 break-words">Reconnaissance Internationale</h3>
                <p className="text-sm sm:text-base text-gray-700">L'atelier gagne en notoriété auprès des collectionneurs et investisseurs internationaux grâce à son expertise reconnue.</p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-8 items-start">
              <div className="flex-shrink-0 w-20 sm:w-24 md:w-32 text-right">
                <span className="font-serif text-xl sm:text-2xl text-gray-900">2010</span>
              </div>
              <div className="flex-shrink-0 w-3 h-3 md:w-4 md:h-4 bg-gray-900 rounded-full mt-2"></div>
              <div className="flex-1">
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-gray-900 mb-2 break-words">Transmission Familiale</h3>
                <p className="text-sm sm:text-base text-gray-700">Les fils rejoignent l'atelier après leurs formations en gemmologie, apportant un souffle nouveau tout en préservant les valeurs familiales.</p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-8 items-start">
              <div className="flex-shrink-0 w-20 sm:w-24 md:w-32 text-right">
                <span className="font-serif text-xl sm:text-2xl text-gray-900">2024</span>
              </div>
              <div className="flex-shrink-0 w-3 h-3 md:w-4 md:h-4 bg-gray-900 rounded-full mt-2"></div>
              <div className="flex-1">
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-gray-900 mb-2 break-words">Excellence Continue</h3>
                <p className="text-sm sm:text-base text-gray-700">Deux générations travaillent ensemble, combinant tradition et innovation pour offrir un service d'exception à une clientèle internationale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
