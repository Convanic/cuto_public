'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n/context';

export default function TargetAudienceTabs() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState('customers');

  const targetAudiences = [
    {
      id: 'customers',
      label: t.home?.targetAudience?.tabs?.customers?.label || 'SAP Customers',
      title: t.home?.targetAudience?.tabs?.customers?.title || 'For SAP Customers',
      description: t.home?.targetAudience?.tabs?.customers?.description || 'CUTO supports you as an SAP customer in professionally managing and successfully implementing your internal SAP projects.',
      whyTitle: t.home?.targetAudience?.tabs?.customers?.whyTitle || 'Why CUTO for SAP Customers?',
      benefits: t.home?.targetAudience?.tabs?.customers?.benefits || [
        'Structured project management without external consulting costs',
        'Proven templates for typical SAP projects in your company',
        'Full control over project progress, efforts, and risks',
        'Reusable project structures for future initiatives',
        'Transparent communication with internal stakeholders'
      ]
    },
    {
      id: 'consultancies',
      label: t.home?.targetAudience?.tabs?.consultancies?.label || 'SAP Consultancies',
      title: t.home?.targetAudience?.tabs?.consultancies?.title || 'For SAP Consultancies',
      description: t.home?.targetAudience?.tabs?.consultancies?.description || 'Increase the efficiency of your consulting projects and deliver structured, traceable results to your clients.',
      whyTitle: t.home?.targetAudience?.tabs?.consultancies?.whyTitle || 'Why CUTO for SAP Consultancies?',
      benefits: t.home?.targetAudience?.tabs?.consultancies?.benefits || [
        'Faster project initialization with pre-configured templates',
        'Professional project presentations for clients',
        'Standardized processes for consistent project execution',
        'Better resource planning and effort estimation',
        'Reusable best practices for similar projects'
      ]
    },
    {
      id: 'freelancers',
      label: t.home?.targetAudience?.tabs?.freelancers?.label || 'Freelancers',
      title: t.home?.targetAudience?.tabs?.freelancers?.title || 'For Freelancers',
      description: t.home?.targetAudience?.tabs?.freelancers?.description || 'As a freelancer, you benefit from professional project management tools that highlight your expertise.',
      whyTitle: t.home?.targetAudience?.tabs?.freelancers?.whyTitle || 'Why CUTO for Freelancers?',
      benefits: t.home?.targetAudience?.tabs?.freelancers?.benefits || [
        'Professional project management even as an individual',
        'Quick start into new projects with templates',
        'Credible effort estimates for your clients',
        'Structured documentation of your work',
        'Reusable project structures for similar assignments'
      ]
    },
    {
      id: 'users',
      label: t.home?.targetAudience?.tabs?.users?.label || 'SAP Users',
      title: t.home?.targetAudience?.tabs?.users?.title || 'For SAP Users',
      description: t.home?.targetAudience?.tabs?.users?.description || 'As an SAP user, you get the tools to manage your SAP projects independently and successfully.',
      whyTitle: t.home?.targetAudience?.tabs?.users?.whyTitle || 'Why CUTO for SAP Users?',
      benefits: t.home?.targetAudience?.tabs?.users?.benefits || [
        'Independent project management without external support',
        'Best practices for typical SAP user projects',
        'Clear structuring even for smaller projects',
        'Learning support through predefined templates',
        'Traceable documentation for your team'
      ]
    }
  ];

  const activeAudience = targetAudiences.find(aud => aud.id === activeTab) || targetAudiences[0];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            {t.home?.targetAudience?.title || 'For every target group'}
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
            {t.home?.targetAudience?.subtitle || 'CUTO supports everyone who wants to successfully manage SAP projects'}
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-white/20">
            <nav className="-mb-px flex flex-wrap justify-center gap-2" aria-label="Tabs">
              {targetAudiences.map((audience) => (
                <button
                  key={audience.id}
                  onClick={() => setActiveTab(audience.id)}
                  className={`
                    py-4 px-6 text-sm font-medium border-b-2 transition-colors
                    ${
                      activeTab === audience.id
                        ? 'border-white text-white'
                        : 'border-transparent text-white/70 hover:text-white hover:border-white/50'
                    }
                  `}
                >
                  {audience.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="glass-card rounded-lg p-8 md:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {activeAudience.title}
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            {activeAudience.description}
          </p>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              {activeAudience.whyTitle}
            </h4>
            <ul className="space-y-3">
              {activeAudience.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#952494] mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
