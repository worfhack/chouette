export default function Heritage() {
  const timeline = [
    {
      year: '1985',
      title: 'Fondation de l\'Atelier',
      description: 'Jean-Pierre Dumont, gemmologue diplômé, ouvre son premier atelier dans le Marais parisien, animé par la passion des pierres précieuses transmise par son grand-père.'
    },
    {
      year: '1992',
      title: 'Reconnaissance Internationale',
      description: 'L\'atelier obtient la certification de la Chambre de Commerce et d\'Industrie de Paris et devient membre de l\'Association Française de Gemmologie.'
    },
    {
      year: '2008',
      title: 'Transmission Familiale',
      description: 'Sophie Dumont rejoint l\'atelier familial après ses études à l\'Institut National de Gemmologie. Elle apporte une vision moderne tout en préservant le savoir-faire ancestral.'
    },
    {
      year: '2024',
      title: 'Excellence & Innovation',
      description: 'Aujourd\'hui, l\'atelier combine tradition artisanale et technologies modernes pour offrir des expertises de haute précision et créer des bijoux d\'exception uniques.'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 md:mb-6 break-words">
            Notre Héritage
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Deux générations de passion et d'expertise au service de l'excellence gemmologique
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 md:space-y-12">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center"
            >
              {/* Year */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                  <span className="font-serif text-xl md:text-2xl font-medium text-gray-900">
                    {item.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-serif font-medium text-gray-900 mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <a
            href="/heritage"
            className="inline-block px-6 md:px-8 py-3 md:py-4 bg-gray-900 text-white font-medium text-xs md:text-sm tracking-wider hover:bg-gray-800 transition-all duration-300 cursor-pointer whitespace-nowrap rounded-sm"
          >
            DÉCOUVRIR NOTRE HISTOIRE
          </a>
        </div>
      </div>
    </section>
  );
}
