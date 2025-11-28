export default function Expertise() {
  const expertises = [
    {
      icon: 'ri-search-eye-line',
      title: 'Expertise Gemmologique',
      description: 'Identification précise et certification de vos pierres précieuses selon les standards internationaux les plus rigoureux.'
    },
    {
      icon: 'ri-file-text-line',
      title: 'Certificats & Rapports',
      description: 'Délivrance de certificats d\'authenticité détaillés reconnus par les institutions gemmologiques mondiales.'
    },
    {
      icon: 'ri-price-tag-3-line',
      title: 'Estimation & Évaluation',
      description: 'Évaluation professionnelle de vos bijoux et pierres pour assurance, succession ou transaction.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Conseil d\'Achat',
      description: 'Accompagnement personnalisé dans vos acquisitions de pierres précieuses et bijoux d\'exception.'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 md:mb-6 break-words">
            Notre Expertise
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des services d'excellence pour authentifier, évaluer et valoriser vos pierres précieuses
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {expertises.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-amber-100 rounded-full mb-4 md:mb-6">
                <i className={`${item.icon} text-2xl md:text-3xl text-amber-700`}></i>
              </div>
              <h3 className="text-lg md:text-xl font-serif font-medium text-gray-900 mb-3 md:mb-4">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/expertise"
            className="inline-block px-6 md:px-8 py-3 md:py-4 bg-gray-900 text-white font-medium text-xs md:text-sm tracking-wider hover:bg-gray-800 transition-all duration-300 cursor-pointer whitespace-nowrap rounded-sm"
          >
            EN SAVOIR PLUS
          </a>
        </div>
      </div>
    </section>
  );
}
