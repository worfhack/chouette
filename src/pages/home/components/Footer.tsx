export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://static.readdy.ai/image/126b640000aeae8749c53b905168a238/67aa0638997c6b4ca14b72947735317f.png"
                alt="Les Pierres de la Chouette"
                className="w-12 h-12 object-contain"
              />
              <span className="font-serif text-xl font-medium">
                Les Pierres de la Chouette
              </span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Atelier familial de gemmologie et joaillerie sur mesure à Paris depuis deux générations
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm tracking-wider">NAVIGATION</h3>
            <ul className="space-y-3">
              {['Accueil', 'Héritage', 'Expertise', 'Services', 'Collections', 'Galerie'].map((item) => (
                <li key={item}>
                  <a
                    href={item === 'Accueil' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm tracking-wider">SERVICES</h3>
            <ul className="space-y-3">
              {[
                'Expertise & Identification',
                'Sourcing de Pierres',
                'Création Sur Mesure',
                'Restauration',
                'Conseil & Formation',
                'Évaluation'
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/services"
                    className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm tracking-wider">CONTACT</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <i className="ri-map-pin-line text-white/70 mt-1"></i>
                <span className="text-sm text-white/70">Paris, France</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-mail-line text-white/70 mt-1"></i>
                <a
                  href="mailto:contact@lespierresdelachouette.fr"
                  className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  contact@lespierresdelachouette.fr
                </a>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-phone-line text-white/70 mt-1"></i>
                <span className="text-sm text-white/70">+33 1 XX XX XX XX</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-time-line text-white/70 mt-1"></i>
                <span className="text-sm text-white/70">Lun-Ven : 10h-18h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              © 2024 Les Pierres de la Chouette. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://readdy.ai/?origin=logo"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-sm text-white/50 hover:text-white/70 transition-colors cursor-pointer"
              >
                Powered by Readdy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
