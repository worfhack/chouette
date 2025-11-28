export default function Heritage() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Notre Héritage
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Deux générations de passion pour les pierres précieuses, un savoir-faire transmis de père en fils, une expertise reconnue dans l'art de la gemmologie et de la joaillerie sur mesure
          </p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* First Generation */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gray-900 to-gray-300"></div>
            <div className="pl-12">
              <div className="mb-6">
                <div className="inline-block px-4 py-2 bg-gray-900 text-white text-sm font-medium tracking-wider mb-4">
                  PREMIÈRE GÉNÉRATION
                </div>
                <h3 className="font-serif text-3xl font-medium text-gray-900 mb-4">
                  Les Fondations
                </h3>
              </div>
              <div className="w-full h-80 mb-6 rounded-lg overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Vintage%20black%20and%20white%20photograph%20of%20elderly%20master%20gemologist%20examining%20precious%20stones%20with%20loupe%20in%20traditional%20Parisian%20workshop%201970s%20aesthetic%20antique%20wooden%20desk%20with%20gemstone%20tools%20warm%20nostalgic%20atmosphere%20professional%20craftsmanship%20heritage%20expertise&width=600&height=400&seq=heritage-gen1-001&orientation=landscape"
                  alt="Première génération"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tout commence dans les années 1970, lorsque notre fondateur, passionné par la beauté des gemmes, ouvre son premier atelier dans le quartier historique de Paris. Formé auprès des plus grands gemmologues européens, il développe une expertise pointue dans l'identification et l'évaluation des pierres précieuses.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Son approche méticuleuse et son œil affûté lui permettent rapidement de se forger une réputation auprès des collectionneurs et des maisons de joaillerie prestigieuses. Il établit des relations durables avec des sources d'approvisionnement éthiques en Asie et en Amérique du Sud.
              </p>
            </div>
          </div>

          {/* Second Generation */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gray-300 to-gray-900"></div>
            <div className="pl-12">
              <div className="mb-6">
                <div className="inline-block px-4 py-2 bg-gray-900 text-white text-sm font-medium tracking-wider mb-4">
                  DEUXIÈME GÉNÉRATION
                </div>
                <h3 className="font-serif text-3xl font-medium text-gray-900 mb-4">
                  L'Innovation
                </h3>
              </div>
              <div className="w-full h-80 mb-6 rounded-lg overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20professional%20gemologist%20using%20advanced%20microscope%20and%20spectroscope%20equipment%20examining%20brilliant%20sapphire%20in%20contemporary%20bright%20Parisian%20laboratory%20clean%20minimalist%20workspace%20with%20precision%20instruments%20natural%20daylight%20scientific%20expertise%20meets%20artisanal%20tradition&width=600&height=400&seq=heritage-gen2-001&orientation=landscape"
                  alt="Deuxième génération"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Formé dès son plus jeune âge aux côtés de son père, la nouvelle génération apporte une vision moderne tout en préservant les valeurs traditionnelles. Diplômé en gemmologie avec les plus hautes distinctions, il intègre les technologies d'analyse les plus avancées à l'atelier.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Aujourd'hui, l'atelier combine l'expertise ancestrale et les méthodes scientifiques de pointe pour offrir des services d'identification, d'expertise et de création joaillière d'une précision inégalée. Chaque pierre est étudiée avec la même passion et le même respect que nos prédécesseurs.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gray-900 text-white rounded-full">
              <i className="ri-shield-check-line text-3xl"></i>
            </div>
            <h4 className="font-serif text-xl font-medium text-gray-900 mb-3">
              Authenticité Garantie
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Chaque pierre est analysée avec rigueur et accompagnée d'un certificat d'authenticité détaillé
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gray-900 text-white rounded-full">
              <i className="ri-earth-line text-3xl"></i>
            </div>
            <h4 className="font-serif text-xl font-medium text-gray-900 mb-3">
              Sourcing Éthique
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Nous travaillons exclusivement avec des fournisseurs respectant les normes éthiques et environnementales
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gray-900 text-white rounded-full">
              <i className="ri-hand-heart-line text-3xl"></i>
            </div>
            <h4 className="font-serif text-xl font-medium text-gray-900 mb-3">
              Savoir-Faire Artisanal
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Un travail minutieux et personnalisé pour chaque création, dans le respect des traditions joaillières
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
