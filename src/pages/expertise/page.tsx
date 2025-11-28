import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function ExpertisePage() {
  const { t } = useTranslation('common');
  const [selectedStone, setSelectedStone] = useState<string>('sapphire');

  const stones = [
    {
      id: 'sapphire',
      name: t('expertise.sapphire.name'),
      color: 'from-blue-600 to-indigo-700',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      icon: 'ri-gemini-fill'
    },
    {
      id: 'ruby',
      name: t('expertise.ruby.name'),
      color: 'from-red-600 to-rose-700',
      bgColor: 'bg-gradient-to-br from-red-50 to-rose-50',
      icon: 'ri-heart-fill'
    },
    {
      id: 'emerald',
      name: t('expertise.emerald.name'),
      color: 'from-emerald-600 to-green-700',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-green-50',
      icon: 'ri-leaf-fill'
    },
    {
      id: 'tourmaline',
      name: t('expertise.tourmaline.name'),
      color: 'from-teal-600 to-cyan-700',
      bgColor: 'bg-gradient-to-br from-teal-50 to-cyan-50',
      icon: 'ri-contrast-2-fill'
    },
    {
      id: 'diamond',
      name: t('expertise.diamond.name'),
      color: 'from-slate-400 to-slate-600',
      bgColor: 'bg-gradient-to-br from-slate-50 to-gray-50',
      icon: 'ri-vip-diamond-fill'
    },
    {
      id: 'aquamarine',
      name: t('expertise.aquamarine.name'),
      color: 'from-sky-500 to-cyan-600',
      bgColor: 'bg-gradient-to-br from-sky-50 to-cyan-50',
      icon: 'ri-water-flash-fill'
    }
  ];

  const currentStone = stones.find(s => s.id === selectedStone);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Luxury%20gemology%20expertise%20workspace%20with%20professional%20gemological%20equipment%20and%20precious%20stones%20under%20examination%2C%20elegant%20sophisticated%20setting%2C%20warm%20ambient%20lighting%2C%20refined%20French%20craftsmanship%20atmosphere%2C%20high-end%20artisanal%20presentation%2C%20expert%20analysis%20mood&width=1920&height=800&seq=expertise-hero-bg&orientation=landscape"
            alt="Expertise"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-xs font-medium tracking-widest text-white">{t('expertise.label')}</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            {t('expertise.title')}
          </h1>
          <p className="text-lg text-white/90 font-light leading-relaxed mb-4">
            {t('expertise.subtitle')}
          </p>
          <p className="text-base text-white/80 leading-relaxed max-w-3xl mx-auto">
            {t('expertise.intro')}
          </p>
        </div>
      </section>

      {/* Stone Selection */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stones.map((stone) => (
              <button
                key={stone.id}
                onClick={() => setSelectedStone(stone.id)}
                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                  selectedStone === stone.id
                    ? `${stone.bgColor} shadow-lg scale-105`
                    : 'bg-white hover:shadow-md hover:scale-102'
                }`}
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br ${stone.color} flex items-center justify-center`}>
                  <i className={`${stone.icon} text-2xl text-white`}></i>
                </div>
                <p className={`text-sm font-medium ${
                  selectedStone === stone.id ? 'text-slate-900' : 'text-slate-600'
                }`}>
                  {stone.name}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stone Details */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`rounded-2xl p-12 ${currentStone?.bgColor} transition-all duration-500`}>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={`https://readdy.ai/api/search-image?query=Professional%20close-up%20photograph%20of%20a%20natural%20$%7BselectedStone%7D%20gemstone%20on%20a%20soft%20white%20velvet%20surface%2C%20studio%20lighting%20highlighting%20the%20brilliant%20facets%20and%20deep%20rich%20color%2C%20minimal%20elegant%20composition%2C%20luxury%20jewelry%20photography%20style%2C%20shallow%20depth%20of%20field%2C%20pristine%20clarity%2C%20museum%20quality%20presentation&width=600&height=600&seq=${selectedStone}-detail&orientation=squarish`}
                    alt={currentStone?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br ${currentStone?.color} opacity-20 blur-3xl`}></div>
              </div>

              {/* Content */}
              <div>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 mb-6`}>
                  <i className="ri-map-pin-line text-sm text-slate-600"></i>
                  <span className="text-sm font-medium text-slate-700">
                    {t(`expertise.${selectedStone}.origin`)}
                  </span>
                </div>

                <h2 className="font-serif text-4xl font-bold text-slate-900 mb-6">
                  {currentStone?.name}
                </h2>

                <p className="text-base text-slate-700 leading-relaxed mb-8">
                  {t(`expertise.${selectedStone}.description`)}
                </p>

                <div className="bg-white/60 rounded-xl p-6 backdrop-blur-sm">
                  <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <i className="ri-file-list-3-line text-lg"></i>
                    Caractéristiques Techniques
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t(`expertise.${selectedStone}.characteristics`)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">
              {t('expertise.process.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['step1', 'step2', 'step3', 'step4'].map((step, index) => (
              <div key={step} className="relative">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center mb-6">
                    <span className="text-xl font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-3">
                    {t(`expertise.process.${step}.title`)}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t(`expertise.process.${step}.description`)}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <i className="ri-arrow-right-line text-2xl text-amber-400"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">
              {t('expertise.commitment.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {['ethics', 'authenticity', 'expertise'].map((item) => (
              <div key={item} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center mb-6">
                  <i className={`${
                    item === 'ethics' ? 'ri-shield-check-line' :
                    item === 'authenticity' ? 'ri-award-line' :
                    'ri-microscope-line'
                  } text-2xl text-emerald-700`}></i>
                </div>
                <h3 className="font-semibold text-xl text-slate-900 mb-4">
                  {t(`expertise.commitment.${item}.title`)}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t(`expertise.commitment.${item}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Faites Expertiser Vos Pierres
          </h2>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed">
            Bénéficiez de notre expertise reconnue pour l'authentification et l'évaluation de vos gemmes. Consultation sur rendez-vous uniquement.
          </p>
          <Link
            to="/rendez-vous"
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-medium rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
          >
            PRENDRE RENDEZ-VOUS
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
