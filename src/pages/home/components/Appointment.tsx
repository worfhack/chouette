import { useState } from 'react';

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('FORM_SUBMIT_URL_PLACEHOLDER', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-gray-900 mb-6">
              Prendre Rendez-vous
            </h2>
            <div className="w-24 h-1 bg-gray-900 mb-8"></div>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Notre atelier fonctionne sur rendez-vous uniquement afin de vous garantir un accueil personnalisé et une attention exclusive. Chaque consultation est une expérience unique où nous prenons le temps d'écouter vos besoins et de vous conseiller.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-lg flex-shrink-0">
                  <i className="ri-map-pin-line text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                  <p className="text-gray-600 text-sm">Paris, France</p>
                  <p className="text-gray-500 text-xs mt-1">Adresse exacte communiquée lors de la prise de rendez-vous</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-lg flex-shrink-0">
                  <i className="ri-time-line text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Horaires</h3>
                  <p className="text-gray-600 text-sm">Lundi - Vendredi : 10h00 - 18h00</p>
                  <p className="text-gray-500 text-xs mt-1">Sur rendez-vous uniquement</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-lg flex-shrink-0">
                  <i className="ri-mail-line text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Contact</h3>
                  <p className="text-gray-600 text-sm">contact@lespierresdelachouette.fr</p>
                  <p className="text-gray-600 text-sm">+33 1 XX XX XX XX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <form id="appointment-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-900 transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-900 transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-900 transition-colors"
                  placeholder="+33 X XX XX XX XX"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-2">
                  Service souhaité *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-900 transition-colors cursor-pointer"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="expertise">Expertise & Identification</option>
                  <option value="sourcing">Sourcing de Pierres</option>
                  <option value="creation">Création Sur Mesure</option>
                  <option value="restauration">Restauration & Transformation</option>
                  <option value="conseil">Conseil & Formation</option>
                  <option value="evaluation">Évaluation & Assurance</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-900 mb-2">
                  Date souhaitée *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-900 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-900 transition-colors resize-none"
                  placeholder="Décrivez brièvement votre projet ou vos besoins..."
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 caractères</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gray-900 text-white font-medium text-sm tracking-wider hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap rounded-sm"
              >
                {isSubmitting ? 'ENVOI EN COURS...' : 'ENVOYER LA DEMANDE'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800">
                  Votre demande a été envoyée avec succès. Nous vous contacterons rapidement.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">
                  Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
