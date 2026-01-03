'use client';

import { useState } from 'react';

const targetAudiences = [
  {
    id: 'kunden',
    label: 'SAP Customers',
    title: 'For SAP Customers',
    description: 'CUTO supports you as an SAP customer in professionally managing and successfully implementing your internal SAP projects.',
    benefits: [
      'Structured project management without external consulting costs',
      'Proven templates for typical SAP projects in your company',
      'Full control over project progress, efforts, and risks',
      'Reusable project structures for future initiatives',
      'Transparent communication with internal stakeholders'
    ]
  },
  {
    id: 'beratungen',
    label: 'SAP Consultancies',
    title: 'For SAP Consultancies',
    description: 'Increase the efficiency of your consulting projects and deliver structured, traceable results to your clients.',
    benefits: [
      'Faster project initialization with pre-configured templates',
      'Professional project presentations for clients',
      'Standardized processes for consistent project execution',
      'Better resource planning and effort estimation',
      'Reusable best practices for similar projects'
    ]
  },
  {
    id: 'freelancer',
    label: 'Freelancers',
    title: 'For Freelancers',
    description: 'As a freelancer, you benefit from professional project management tools that highlight your expertise.',
    benefits: [
      'Professional project management even as an individual',
      'Quick start into new projects with templates',
      'Credible effort estimates for your clients',
      'Structured documentation of your work',
      'Reusable project structures for similar assignments'
    ]
  },
  {
    id: 'anwender',
    label: 'SAP Users',
    title: 'For SAP Users',
    description: 'As an SAP user, you get the tools to manage your SAP projects independently and successfully.',
    benefits: [
      'Independent project management without external support',
      'Best practices for typical SAP user projects',
      'Clear structuring even for smaller projects',
      'Learning support through predefined templates',
      'Traceable documentation for your team'
    ]
  }
];

export default function TargetAudienceTabs() {
  const [activeTab, setActiveTab] = useState('kunden');

  const activeAudience = targetAudiences.find(aud => aud.id === activeTab) || targetAudiences[0];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            For every target group
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
            CUTO supports everyone who wants to successfully manage SAP projects
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
              Why CUTO for {activeAudience.label}?
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

