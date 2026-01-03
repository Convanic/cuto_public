'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { useI18n } from '@/lib/i18n/context';

export default function ContactPage() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Formular-Submit-Logik - Integration mit Backend-Service
    console.log('Form submitted:', formData);
    alert(t.contact.form.successMessage);
    // Formular zurücksetzen
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {t.contact.title}
            </h1>
            <p className="text-xl text-white/90 drop-shadow-md">
              {t.contact.subtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedSection animation="fade-in-left" delay={0.2}>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 drop-shadow-lg">{t.contact.info.title}</h2>
              <div className="space-y-6">
                <AnimatedSection animation="fade-in-up" delay={0.3}>
                  <div className="glass-card p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.contact.info.email}</h3>
                    <a href="mailto:info@cuto.de" className="text-purple-600 hover:text-purple-700 transition-colors font-medium">
                      info@cuto.de
                    </a>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fade-in-up" delay={0.4}>
                  <div className="glass-card p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.contact.info.phone}</h3>
                    <p className="text-gray-600">{t.contact.info.phoneText}</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fade-in-up" delay={0.5}>
                  <div className="glass-card p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.contact.info.demo}</h3>
                    <p className="text-gray-600">
                      {t.contact.info.demoText}
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="fade-in-right" delay={0.2}>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 drop-shadow-lg">{t.contact.form.title}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <AnimatedSection animation="fade-in-up" delay={0.3}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2 drop-shadow-md">
                      {t.contact.form.name} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/90 border border-white/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900 transition-all"
                    />
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-in-up" delay={0.35}>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2 drop-shadow-md">
                      {t.contact.form.email} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/90 border border-white/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900 transition-all"
                    />
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-in-up" delay={0.4}>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2 drop-shadow-md">
                      {t.contact.form.company}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/90 border border-white/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900 transition-all"
                    />
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-in-up" delay={0.45}>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2 drop-shadow-md">
                      {t.contact.form.message} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/90 border border-white/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900 transition-all"
                    />
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="scale-in" delay={0.5}>
                  <button
                    type="submit"
                    className="w-full bg-[#8B2486] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#7a1f75] transition-all shadow-lg hover:-translate-y-1"
                  >
                    {t.contact.form.submit}
                  </button>
                </AnimatedSection>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
