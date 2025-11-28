export default function Services() {
  const services = [
    {
      title: 'Création Sur Mesure',
      description: 'Conception et réalisation de bijoux uniques selon vos désirs, de l\'esquisse à la pièce finale.',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20jewelry%20design%20sketch%20on%20white%20paper%20with%20precious%20gemstones%20and%20gold%20tools%20on%20velvet%20surface%20luxury%20Parisian%20atelier%20setting%20soft%20natural%20lighting%20professional%20craftsmanship%20minimalist%20aesthetic%20refined%20composition&width=600&height=400&seq=service-001&orientation=landscape'
    },
    {
      title: 'Restauration de Bijoux',
      description: 'Remise en état et restauration de vos bijoux anciens avec respect des techniques traditionnelles.',
      image: 'https://readdy.ai/api/search-image?query=Antique%20jewelry%20restoration%20process%20with%20vintage%20gemstone%20ring%20being%20carefully%20repaired%20by%20expert%20hands%20precision%20tools%20on%20velvet%20mat%20luxury%20Parisian%20workshop%20soft%20lighting%20professional%20craftsmanship%20elegant%20composition&width=600&height=400&seq=service-002&orientation=landscape'
    },
    {
      title: 'Transformation',
      description: 'Modernisation de vos bijoux familiaux en créations contemporaines tout en préservant leur essence.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20jewelry%20transformation%20process%20showing%20before%20and%20after%20vintage%20gemstone%20pieces%20being%20redesigned%20into%20contemporary%20jewelry%20luxury%20Parisian%20atelier%20soft%20natural%20light%20elegant%20minimalist%20aesthetic%20professional%20craftsmanship&width=600&height=400&seq=service-003&orientation=landscape'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 md:mb-6 break-words">
            Nos Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un savoir-faire artisanal au service de vos projets les plus précieux
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-full h-48 md:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-serif font-medium text-gray-900 mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/services"
            className="inline-block px-6 md:px-8 py-3 md:py-4 bg-gray-900 text-white font-medium text-xs md:text-sm tracking-wider hover:bg-gray-800 transition-all duration-300 cursor-pointer whitespace-nowrap rounded-sm"
          >
            DÉCOUVRIR TOUS NOS SERVICES
          </a>
        </div>
      </div>
    </section>
  );
}
