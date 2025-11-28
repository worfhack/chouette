export default function Appointment() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-br from-amber-50 to-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 md:mb-8 flex justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-full shadow-md">
            <i className="ri-calendar-check-line text-3xl md:text-4xl text-amber-700"></i>
          </div>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 md:mb-6 break-words">
          Prenez Rendez-vous
        </h2>

        <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
          Notre atelier vous accueille sur rendez-vous pour une consultation personnalisée. Que ce soit pour une expertise, une création sur mesure ou simplement découvrir nos collections, nous serons ravis de vous recevoir.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-10">
          <a
            href="/rendez-vous"
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gray-900 text-white font-medium text-xs md:text-sm tracking-wider hover:bg-gray-800 transition-all duration-300 cursor-pointer whitespace-nowrap rounded-sm"
          >
            RÉSERVER UN RENDEZ-VOUS
          </a>
          <a
            href="tel:+33142778899"
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-gray-900 text-gray-900 font-medium text-xs md:text-sm tracking-wider hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap rounded-sm"
          >
            NOUS APPELER
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
          <div className="flex items-start gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white rounded-full shadow-sm flex-shrink-0">
              <i className="ri-map-pin-line text-lg md:text-xl text-amber-700"></i>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-medium text-gray-900 mb-1 md:mb-2">Adresse</h3>
              <p className="text-xs md:text-sm text-gray-600">15 Rue des Francs-Bourgeois<br />75004 Paris</p>
            </div>
          </div>

          <div className="flex items-start gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white rounded-full shadow-sm flex-shrink-0">
              <i className="ri-time-line text-lg md:text-xl text-amber-700"></i>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-medium text-gray-900 mb-1 md:mb-2">Horaires</h3>
              <p className="text-xs md:text-sm text-gray-600">Lun-Ven: 10h-18h<br />Sam: Sur rendez-vous</p>
            </div>
          </div>

          <div className="flex items-start gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white rounded-full shadow-sm flex-shrink-0">
              <i className="ri-phone-line text-lg md:text-xl text-amber-700"></i>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-medium text-gray-900 mb-1 md:mb-2">Contact</h3>
              <p className="text-xs md:text-sm text-gray-600">+33 1 42 77 88 99<br />contact@lespierresdelachouette.fr</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
