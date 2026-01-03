'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, ArrowLeft, CheckCircle2, Building2, User, Mail, 
  Phone, Globe, Briefcase, Users, Send, Loader2
} from 'lucide-react';
import { partnerTypes, PartnerType } from '@/lib/partners';
import AnimatedSection from '@/components/AnimatedSection';

interface FormData {
  partnerType: PartnerType;
  // Contact Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  // Company Info
  companyName: string;
  companyWebsite: string;
  companySize: string;
  country: string;
  // Experience
  sapExperience: string;
  currentClients: string;
  expectedRevenue: string;
  // Additional
  howDidYouHear: string;
  message: string;
  agreeTerms: boolean;
  agreeMarketing: boolean;
}

const initialFormData: FormData = {
  partnerType: 'referral',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  companyName: '',
  companyWebsite: '',
  companySize: '',
  country: 'Deutschland',
  sapExperience: '',
  currentClients: '',
  expectedRevenue: '',
  howDidYouHear: '',
  message: '',
  agreeTerms: false,
  agreeMarketing: false,
};

const companySizes = [
  'Freelancer / Einzelunternehmer',
  '2-10 Mitarbeiter',
  '11-50 Mitarbeiter',
  '51-200 Mitarbeiter',
  '201-500 Mitarbeiter',
  '500+ Mitarbeiter',
];

const sapExperienceOptions = [
  'Keine SAP-Erfahrung',
  '1-2 Jahre SAP-Projekterfahrung',
  '3-5 Jahre SAP-Projekterfahrung',
  '5-10 Jahre SAP-Projekterfahrung',
  '10+ Jahre SAP-Projekterfahrung',
];

const expectedRevenueOptions = [
  'Unter €10.000 / Jahr',
  '€10.000 - €25.000 / Jahr',
  '€25.000 - €75.000 / Jahr',
  '€75.000 - €150.000 / Jahr',
  'Über €150.000 / Jahr',
];

const howDidYouHearOptions = [
  'Google / Suchmaschine',
  'LinkedIn',
  'Empfehlung',
  'SAP-Event / Konferenz',
  'Webinar',
  'Sonstiges',
];

export default function PartnerApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const totalSteps = 4;
  const selectedPartner = partnerTypes.find(p => p.id === formData.partnerType);
  
  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };
  
  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.partnerType;
      case 2:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 3:
        return formData.companyName && formData.companySize && formData.sapExperience;
      case 4:
        return formData.agreeTerms;
      default:
        return false;
    }
  };
  
  if (isSubmitted) {
    return (
      <main className="relative overflow-hidden min-h-screen flex items-center justify-center">
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fade-in-up">
            <div className="max-w-lg mx-auto glass-card rounded-2xl p-10 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Vielen Dank für Ihre Bewerbung!
              </h1>
              
              <p className="text-gray-600 mb-6">
                Wir haben Ihre Bewerbung als <strong>{selectedPartner?.name}</strong> erhalten 
                und werden uns innerhalb von 2 Werktagen bei Ihnen melden.
              </p>
              
              <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
                <h3 className="font-semibold text-gray-900 mb-2">Nächste Schritte:</h3>
                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                  <li>Prüfung Ihrer Bewerbung durch unser Partner-Team</li>
                  <li>Telefonisches Kennenlerngespräch</li>
                  <li>Vertragsunterzeichnung & Onboarding</li>
                  <li>Zugang zum Partner-Portal</li>
                </ol>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#952494] text-white rounded-xl font-semibold hover:bg-[#7a1d7a] transition-colors"
                >
                  Zur Startseite
                </Link>
                <Link
                  href="/partners"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                >
                  Partner-Programm
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>
    );
  }
  
  return (
    <main className="relative overflow-hidden">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection animation="fade-in-up">
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zum Partner-Programm
            </Link>
            
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Partner-Bewerbung
            </h1>
            
            <p className="text-white/80">
              Füllen Sie das Formular aus, um sich als CUTO Partner zu bewerben. 
              Die Bearbeitung dauert in der Regel 1-2 Werktage.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Progress Bar */}
      <section className="px-4 sm:px-6 lg:px-8 relative z-10 mb-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`flex items-center ${step < 4 ? 'flex-1' : ''}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    step <= currentStep
                      ? 'bg-white text-[#952494]'
                      : 'bg-white/20 text-white/50'
                  }`}
                >
                  {step < currentStep ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    step
                  )}
                </div>
                {step < 4 && (
                  <div
                    className={`flex-1 h-1 mx-2 rounded transition-colors ${
                      step < currentStep ? 'bg-white' : 'bg-white/20'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-white/60">
            <span>Partner-Typ</span>
            <span>Kontakt</span>
            <span>Unternehmen</span>
            <span>Absenden</span>
          </div>
        </div>
      </section>
      
      {/* Form */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="glass-card rounded-2xl p-8">
              {/* Step 1: Partner Type */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Welcher Partner-Typ passt zu Ihnen?
                  </h2>
                  
                  <div className="space-y-4">
                    {partnerTypes.map((type) => {
                      const IconComponent = type.IconComponent;
                      return (
                        <label
                          key={type.id}
                          className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            formData.partnerType === type.id
                              ? 'border-[#952494] bg-[#952494]/5'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="partnerType"
                            value={type.id}
                            checked={formData.partnerType === type.id}
                            onChange={(e) => updateFormData('partnerType', e.target.value as PartnerType)}
                            className="sr-only"
                          />
                          <div className={`w-12 h-12 ${type.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-gray-900">{type.name}</h3>
                              {type.highlight && (
                                <span className="px-2 py-0.5 bg-[#FA9B0C] text-white text-xs rounded-full">
                                  Beliebt
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-500 mt-1">{type.targetAudience}</p>
                            <p className="text-sm text-gray-600 mt-2">{type.description}</p>
                            <div className="mt-2 flex gap-4 text-sm">
                              <span className="text-[#952494] font-semibold">
                                {type.commission.firstYear} 1. Jahr
                              </span>
                              <span className="text-[#FA9B0C] font-semibold">
                                {type.commission.recurring} Recurring
                              </span>
                            </div>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                            formData.partnerType === type.id
                              ? 'border-[#952494] bg-[#952494]'
                              : 'border-gray-300'
                          }`}>
                            {formData.partnerType === type.id && (
                              <CheckCircle2 className="w-4 h-4 text-white" />
                            )}
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </motion.div>
              )}
              
              {/* Step 2: Contact Info */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Ihre Kontaktdaten
                  </h2>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Vorname *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => updateFormData('firstName', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#952494]"
                          placeholder="Max"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nachname *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => updateFormData('lastName', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#952494]"
                          placeholder="Mustermann"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        E-Mail *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateFormData('email', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#952494]"
                          placeholder="max@beispiel.de"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telefon *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateFormData('phone', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#952494]"
                          placeholder="+49 123 456789"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* Step 3: Company Info */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Ihr Unternehmen & Erfahrung
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Unternehmen / Name *
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            value={formData.companyName}
                            onChange={(e) => updateFormData('companyName', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#952494]"
                            placeholder="Muster GmbH"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Website
                        </label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="url"
                            value={formData.companyWebsite}
                            onChange={(e) => updateFormData('companyWebsite', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#952494]"
                            placeholder="https://..."
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Unternehmensgröße *
                        </label>
                        <select
                          value={formData.companySize}
                          onChange={(e) => updateFormData('companySize', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#952494] appearance-none bg-white"
                          required
                        >
                          <option value="">Bitte wählen...</option>
                          {companySizes.map((size) => (
                            <option key={size} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Land
                        </label>
                        <select
                          value={formData.country}
                          onChange={(e) => updateFormData('country', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#952494] appearance-none bg-white"
                        >
                          <option value="Deutschland">Deutschland</option>
                          <option value="Österreich">Österreich</option>
                          <option value="Schweiz">Schweiz</option>
                          <option value="Andere">Andere</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          SAP-Projekterfahrung *
                        </label>
                        <select
                          value={formData.sapExperience}
                          onChange={(e) => updateFormData('sapExperience', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#952494] appearance-none bg-white"
                          required
                        >
                          <option value="">Bitte wählen...</option>
                          {sapExperienceOptions.map((exp) => (
                            <option key={exp} value={exp}>{exp}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Erwarteter Jahresumsatz mit CUTO
                        </label>
                        <select
                          value={formData.expectedRevenue}
                          onChange={(e) => updateFormData('expectedRevenue', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#952494] appearance-none bg-white"
                        >
                          <option value="">Bitte wählen...</option>
                          {expectedRevenueOptions.map((rev) => (
                            <option key={rev} value={rev}>{rev}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* Step 4: Final */}
              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Fast geschafft!
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Wie haben Sie von uns erfahren?
                      </label>
                      <select
                        value={formData.howDidYouHear}
                        onChange={(e) => updateFormData('howDidYouHear', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#952494] appearance-none bg-white"
                      >
                        <option value="">Bitte wählen...</option>
                        {howDidYouHearOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nachricht (optional)
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => updateFormData('message', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#952494] min-h-[100px]"
                        placeholder="Erzählen Sie uns mehr über Ihre Ziele als CUTO Partner..."
                      />
                    </div>
                    
                    {/* Summary */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h3 className="font-semibold text-gray-900 mb-3">Zusammenfassung</h3>
                      <div className="grid sm:grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-500">Partner-Typ:</span>{' '}
                          <span className="font-medium">{selectedPartner?.name}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Name:</span>{' '}
                          <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">E-Mail:</span>{' '}
                          <span className="font-medium">{formData.email}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Unternehmen:</span>{' '}
                          <span className="font-medium">{formData.companyName}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Checkboxes */}
                    <div className="space-y-3">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.agreeTerms}
                          onChange={(e) => updateFormData('agreeTerms', e.target.checked)}
                          className="w-5 h-5 rounded border-gray-300 text-[#952494] focus:ring-[#952494] mt-0.5"
                          required
                        />
                        <span className="text-sm text-gray-600">
                          Ich akzeptiere die{' '}
                          <Link href="/terms" className="text-[#952494] hover:underline">AGB</Link>
                          {' '}und die{' '}
                          <Link href="/privacy" className="text-[#952494] hover:underline">Datenschutzrichtlinie</Link>
                          . *
                        </span>
                      </label>
                      
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.agreeMarketing}
                          onChange={(e) => updateFormData('agreeMarketing', e.target.checked)}
                          className="w-5 h-5 rounded border-gray-300 text-[#952494] focus:ring-[#952494] mt-0.5"
                        />
                        <span className="text-sm text-gray-600">
                          Ich möchte Updates zum Partner-Programm und relevante Neuigkeiten per E-Mail erhalten.
                        </span>
                      </label>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="inline-flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Zurück
                  </button>
                ) : (
                  <div />
                )}
                
                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep + 1)}
                    disabled={!canProceed()}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#952494] text-white rounded-xl font-semibold hover:bg-[#7a1d7a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Weiter
                    <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!canProceed() || isSubmitting}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-[#FA9B0C] text-white rounded-xl font-semibold hover:bg-[#e88d0b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Bewerbung absenden
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

