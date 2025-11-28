const services = [
  {
    icon: 'ri-search-eye-line',
    title: 'Expertise & Identification',
    description: 'Analyse complète de vos pierres précieuses avec rapport détaillé incluant origine, traitements éventuels, et estimation de valeur. Utilisation d\'équipements de pointe pour une identification précise.',
    features: ['Certificat d\'authenticité', 'Analyse spectroscopique', 'Photographies professionnelles']
  },
  {
    icon: 'ri-compass-3-line',
    title: 'Sourcing de Pierres',
    description: 'Recherche et acquisition de pierres précieuses selon vos critères spécifiques. Accès à notre réseau international de fournisseurs éthiques pour trouver la gemme parfaite pour votre projet.',
    features: ['Réseau mondial', 'Sourcing éthique', 'Sélection personnalisée']
  },
  {
    icon: 'ri-pencil-ruler-2-line',
    title: 'Création Sur Mesure',
    description: 'Conception et réalisation de bijoux uniques adaptés à vos désirs. De l\'esquisse initiale à la pièce finale, chaque étape est réalisée avec soin dans notre atelier parisien.',
    features: ['Design personnalisé', 'Fabrication artisanale', 'Suivi de projet']
  },
  {
    icon: 'ri-tools-line',
    title: 'Restauration & Transformation',
    description: 'Remise en état de bijoux anciens et transformation de pièces héritées. Nous redonnons vie à vos bijoux de famille tout en préservant leur histoire et leur valeur sentimentale.',
    features: ['Restauration délicate', 'Modernisation', 'Conservation du patrimoine']
  },
  {
    icon: 'ri-graduation-cap-line',
    title: 'Conseil & Formation',
    description: 'Accompagnement personnalisé pour collectionneurs et passionnés. Sessions privées pour apprendre à reconnaître et apprécier les pierres précieuses, comprendre leur valeur et leur entretien.',
    features: ['Consultation privée', 'Initiation gemmologie', 'Conseils d\'achat']
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Évaluation & Assurance',
    description: 'Estimation professionnelle de vos bijoux et pierres pour assurance ou succession. Rapports conformes aux standards internationaux, reconnus par les compagnies d\'assurance.',
    features: ['Rapport certifié', 'Mise à jour valeur', 'Documentation complète']
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Nos Services
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un accompagnement complet pour tous vos besoins en gemmologie et joaillerie, de l'expertise à la création sur mesure
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-900"
            >
              <div className="w-16 h-16 mb-6 flex items-center justify-center bg-gray-900 text-white rounded-lg group-hover:scale-110 transition-transform duration-300">
                <i className={`${service.icon} text-3xl`}></i>
              </div>
              
              <h3 className="font-serif text-2xl font-medium text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <i className="ri-check-line text-gray-900"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-900 rounded-2xl p-12">
          <h3 className="font-serif text-3xl font-medium text-white mb-4">
            Un Projet en Tête ?
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Prenez rendez-vous pour une consultation privée dans notre atelier parisien. Nous étudierons ensemble votre projet et vous conseillerons sur les meilleures options.
          </p>
          <a
            href="/rendez-vous"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-medium text-sm tracking-wider hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap rounded-sm"
          >
            PRENDRE RENDEZ-VOUS
            <i className="ri-calendar-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
