export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-50 to-gray-100 py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <img
                src="https://static.readdy.ai/image/126b640000aeae8749c53b905168a238/67aa0638997c6b4ca14b72947735317f.png"
                alt="Les Pierres de la Chouette"
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
              <span className="font-serif text-base md:text-lg font-medium text-gray-900">
                Les Pierres de la Chouette
              </span>
            </div>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Atelier familial parisien spécialisé en gemmologie et joaillerie sur mesure depuis 1985.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm md:text-base font-medium text-gray-900 mb-3 md:mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">Accueil</a></li>
              <li><a href="/heritage" className="text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">Héritage</a></li>
              <li><a href="/expertise" className="text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">Expertise</a></li>
              <li><a href="/services" className="text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">Services</a></li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-sm md:text-base font-medium text-gray-900 mb-3 md:mb-4">Collections</h3>
            <ul className="space-y-2">
              <li><a href="/collections" className="text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">Pierres Précieuses</a></li>
              <li><a href="/creations-uniques" className="text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">Créations Uniques</a></li>
              <li><a href="/galerie" className="text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">Galerie</a></li>
              <li><a href="/rendez-vous" className="text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">Rendez-vous</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm md:text-base font-medium text-gray-900 mb-3 md:mb-4">Contact</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2">
                <i className="ri-map-pin-line text-base md:text-lg text-amber-700 flex-shrink-0"></i>
                <span className="text-xs md:text-sm text-gray-600">15 Rue des Francs-Bourgeois, 75004 Paris</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-phone-line text-base md:text-lg text-amber-700 flex-shrink-0"></i>
                <a href="tel:+33142778899" className="text-xs md:text-sm text-gray-600 hover:text-gray-900 cursor-pointer">+33 1 42 77 88 99</a>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-mail-line text-base md:text-lg text-amber-700 flex-shrink-0"></i>
                <a href="mailto:contact@lespierresdelachouette.fr" className="text-xs md:text-sm text-gray-600 hover:text-gray-900 cursor-pointer break-all">contact@lespierresdelachouette.fr</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-gray-600 text-center md:text-left">
            © 2024 Les Pierres de la Chouette. Tous droits réservés.
          </p>
          <a 
            href="https://readdy.ai/?origin=logo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
          >
          </a>
        </div>
      </div>
    </footer>
  );
}
