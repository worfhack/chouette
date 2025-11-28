import { useState } from 'react';

const gemstones = [
  {
    id: 'sapphire',
    name: 'Saphir',
    icon: 'ri-contrast-drop-2-line',
    color: 'from-blue-600 to-blue-800',
    description: 'Le saphir, corindon bleu d\'une dureté exceptionnelle (9 sur l\'échelle de Mohs), est apprécié pour sa couleur intense et sa brillance. Les saphirs du Cachemire, de Birmanie et du Sri Lanka sont particulièrement recherchés.',
    expertise: 'Analyse de la couleur, détection des traitements thermiques, identification de l\'origine géographique par l\'étude des inclusions caractéristiques'
  },
  {
    id: 'ruby',
    name: 'Rubis',
    icon: 'ri-fire-line',
    color: 'from-red-600 to-red-800',
    description: 'Le rubis, variété rouge du corindon, est l\'une des pierres les plus précieuses. Le "sang de pigeon" birman représente la couleur la plus recherchée. Sa fluorescence naturelle lui confère un éclat unique.',
    expertise: 'Évaluation de la saturation de couleur, détection de remplissage au verre, analyse spectroscopique, certification de l\'origine birmane ou mozambicaine'
  },
  {
    id: 'emerald',
    name: 'Émeraude',
    icon: 'ri-leaf-line',
    color: 'from-emerald-600 to-emerald-800',
    description: 'L\'émeraude, béryl vert chromifère, est caractérisée par son "jardin" d\'inclusions naturelles. Les émeraudes colombiennes sont réputées pour leur vert intense et leur transparence exceptionnelle.',
    expertise: 'Identification du type d\'inclusion, détection des traitements à l\'huile ou à la résine, évaluation de la pureté et de l\'intensité de la couleur verte'
  },
  {
    id: 'tourmaline',
    name: 'Tourmaline',
    icon: 'ri-flashlight-line',
    color: 'from-pink-600 to-purple-800',
    description: 'La tourmaline offre la plus grande variété de couleurs parmi les gemmes. La Paraïba, avec sa couleur néon cuprifère unique, et la rubellite rose-rouge sont particulièrement prisées des collectionneurs.',
    expertise: 'Analyse chimique pour identifier les variétés, détection de l\'irradiation, évaluation du pléochroïsme et de la saturation de couleur'
  },
  {
    id: 'diamond',
    name: 'Diamant',
    icon: 'ri-vip-diamond-line',
    color: 'from-gray-400 to-gray-600',
    description: 'Le diamant, carbone cristallisé, est la pierre la plus dure connue. Évalué selon les 4C (Carat, Clarity, Color, Cut), chaque diamant possède une signature unique révélée par nos analyses.',
    expertise: 'Gradation selon les normes GIA, détection des diamants synthétiques et traités, analyse des proportions de taille, certification complète'
  },
  {
    id: 'aquamarine',
    name: 'Aigue-marine',
    icon: 'ri-water-flash-line',
    color: 'from-cyan-400 to-blue-500',
    description: 'L\'aigue-marine, béryl bleu évoquant l\'eau de mer, est appréciée pour sa transparence cristalline. Les pierres "Santa Maria" du Brésil présentent la couleur bleue la plus intense et recherchée.',
    expertise: 'Évaluation de la pureté exceptionnelle, détection des traitements thermiques, analyse de la couleur et de la transparence'
  }
];

export default function Expertise() {
  const [selectedGem, setSelectedGem] = useState(gemstones[0]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Notre Expertise
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Spécialisés dans l'identification et l'expertise des pierres précieuses les plus rares, nous mettons notre savoir-faire gemmologique au service de vos projets
          </p>
        </div>

        {/* Gemstone Selector */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {gemstones.map((gem) => (
            <button
              key={gem.id}
              onClick={() => setSelectedGem(gem)}
              className={`p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                selectedGem.id === gem.id
                  ? 'border-gray-900 bg-gray-900 text-white shadow-lg scale-105'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-gray-400'
              }`}
            >
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <i className={`${gem.icon} text-4xl`}></i>
              </div>
              <p className="text-sm font-medium text-center whitespace-nowrap">{gem.name}</p>
            </button>
          ))}
        </div>

        {/* Selected Gemstone Details */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${selectedGem.color} opacity-20 rounded-2xl blur-3xl`}></div>
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={`https://readdy.ai/api/search-image?query=Professional%20macro%20photography%20of%20brilliant%20cut%20$%7BselectedGem.name%7D%20gemstone%20on%20pure%20white%20background%20studio%20lighting%20highlighting%20facets%20and%20clarity%20extreme%20detail%20jewelry%20grade%20precious%20stone%20vibrant%20natural%20color%20museum%20quality%20specimen&width=600&height=600&seq=gem-${selectedGem.id}-001&orientation=squarish`}
                  alt={selectedGem.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${selectedGem.color} text-white rounded-full shadow-lg`}>
                  <i className={`${selectedGem.icon} text-3xl`}></i>
                </div>
                <h3 className="font-serif text-4xl font-medium text-gray-900">
                  {selectedGem.name}
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                    Caractéristiques
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedGem.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                    Notre Expertise
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedGem.expertise}
                  </p>
                </div>

                <a
                  href="/expertise"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-medium tracking-wider hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap rounded-sm"
                >
                  EN SAVOIR PLUS
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mt-20">
          <h3 className="font-serif text-3xl font-medium text-gray-900 text-center mb-12">
            Notre Processus d'Expertise
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Examen Visuel',
                description: 'Observation à la loupe et au microscope pour identifier les caractéristiques externes et internes'
              },
              {
                step: '02',
                title: 'Analyses Gemmologiques',
                description: 'Mesure de l\'indice de réfraction, densité, spectre d\'absorption et fluorescence'
              },
              {
                step: '03',
                title: 'Identification Origine',
                description: 'Étude des inclusions caractéristiques pour déterminer la provenance géographique'
              },
              {
                step: '04',
                title: 'Certification',
                description: 'Rédaction d\'un rapport détaillé avec photographies et garantie d\'authenticité'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-serif font-light text-gray-200 mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
