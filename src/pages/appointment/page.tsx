import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function AppointmentPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    interest: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const formUrl = 'FORM_URL_PLACEHOLDER';
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch(formUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          interest: '',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Luxury%20gemology%20consultation%20room%20with%20elegant%20furniture%20and%20professional%20atmosphere%2C%20sophisticated%20French%20interior%20design%2C%20warm%20ambient%20lighting%2C%20refined%20artisanal%20setting%2C%20high-end%20appointment%20space%2C%20welcoming%20and%20exclusive%20mood&width=1920&height=800&seq=appointment-hero-bg&orientation=landscape"
            alt="Rendez-vous"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-xs sm:text-sm tracking-[0.3em] text-white/90 mb-4">
              {t('common.appointment.label')}
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 break-words">
              {t('common.appointment.title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              {t('common.appointment.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-3xl text-gray-900 mb-6">Informations de Contact</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-full flex-shrink-0">
                    <i className="ri-map-pin-line text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-600">Paris, France</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-full flex-shrink-0">
                    <i className="ri-phone-line text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-gray-900 mb-1">Téléphone</h3>
                    <p className="text-gray-600">+33 1 XX XX XX XX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-full flex-shrink-0">
                    <i className="ri-mail-line text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">contact@lespierresdelachouette.fr</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-full flex-shrink-0">
                    <i className="ri-time-line text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-gray-900 mb-1">Horaires</h3>
                    <p className="text-gray-600">Lundi - Vendredi</p>
                    <p className="text-gray-600">10h00 - 18h00</p>
                    <p className="text-sm text-gray-500 italic mt-2">Sur rendez-vous uniquement</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <form id="appointment-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('common.appointment.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('common.appointment.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('common.appointment.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('common.appointment.form.date')}
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('common.appointment.form.interest')}
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="expertise">{t('common.appointment.form.interests.expertise')}</option>
                    <option value="sourcing">{t('common.appointment.form.interests.sourcing')}</option>
                    <option value="bespoke">{t('common.appointment.form.interests.bespoke')}</option>
                    <option value="collection">{t('common.appointment.form.interests.collection')}</option>
                    <option value="investment">{t('common.appointment.form.interests.investment')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('common.appointment.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm resize-none"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 caractères</p>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
                >
                  {t('common.appointment.form.submit')}
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-800">{t('common.appointment.form.success')}</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-800">{t('common.appointment.form.error')}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
