'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import {
  changelog,
  roadmap,
  changeTypeConfig,
  roadmapStatusConfig,
  ChangelogEntry,
  RoadmapItem,
  RoadmapQuarter,
} from '@/lib/changelog';

type TabType = 'changelog' | 'roadmap';

export default function ChangelogPage() {
  const [activeTab, setActiveTab] = useState<TabType>('changelog');
  const [selectedYear, setSelectedYear] = useState<number>(2025);

  const years = [2025, 2024];
  const quarters: RoadmapQuarter[] = ['Q1', 'Q2', 'Q3', 'Q4'];

  const getRoadmapForQuarter = (quarter: RoadmapQuarter, year: number) => {
    return roadmap.filter((item) => item.quarter === quarter && item.year === year);
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto mb-12">
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-4">
              <span>🚀</span>
              Produkt Updates
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Changelog & Roadmap
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow-md">
              Bleiben Sie auf dem Laufenden über neue Features, Verbesserungen und unsere Pläne für die Zukunft.
            </p>

            {/* Tab Switcher */}
            <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-xl p-1">
              <button
                onClick={() => setActiveTab('changelog')}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'changelog'
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                📋 Changelog
              </button>
              <button
                onClick={() => setActiveTab('roadmap')}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'roadmap'
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                🗺️ Roadmap
              </button>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto">
        {activeTab === 'changelog' ? (
          <ChangelogContent entries={changelog} />
        ) : (
          <RoadmapContent
            items={roadmap}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            years={years}
            quarters={quarters}
            getRoadmapForQuarter={getRoadmapForQuarter}
          />
        )}
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto mt-16">
        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="glass-card rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Feature-Wunsch?
            </h2>
            <p className="text-gray-600 mb-6">
              Haben Sie Ideen für neue Features? Wir freuen uns über Ihr Feedback!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#952494] to-[#FA9B0C] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              💡 Feature vorschlagen
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}

// Changelog Content Component
function ChangelogContent({ entries }: { entries: ChangelogEntry[] }) {
  return (
    <div className="space-y-8">
      {entries.map((entry, index) => (
        <AnimatedSection key={entry.version} animation="fade-in-up" delay={0.1 + index * 0.05}>
          <div className="glass-card rounded-2xl p-6 md:p-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-200">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-[#952494] to-[#FA9B0C] text-white text-sm font-bold rounded-full">
                    v{entry.version}
                  </span>
                  {index === 0 && (
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      Aktuell
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-bold text-gray-900">{entry.title}</h2>
                {entry.description && (
                  <p className="text-gray-600 mt-1">{entry.description}</p>
                )}
              </div>
              <div className="text-sm text-gray-500 whitespace-nowrap">
                {new Date(entry.date).toLocaleDateString('de-DE', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            </div>

            {/* Changes */}
            <div className="space-y-4">
              {entry.changes.map((change, changeIndex) => {
                const config = changeTypeConfig[change.type];
                return (
                  <div key={changeIndex} className="flex gap-4">
                    <div className={`flex-shrink-0 w-8 h-8 ${config.color} rounded-lg flex items-center justify-center text-white text-sm`}>
                      {config.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded ${config.color} text-white`}>
                          {config.label}
                        </span>
                        <h3 className="font-semibold text-gray-900">{change.title}</h3>
                      </div>
                      {change.description && (
                        <p className="text-gray-600 text-sm">{change.description}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}

// Roadmap Content Component
function RoadmapContent({
  items,
  selectedYear,
  setSelectedYear,
  years,
  quarters,
  getRoadmapForQuarter,
}: {
  items: RoadmapItem[];
  selectedYear: number;
  setSelectedYear: (year: number) => void;
  years: number[];
  quarters: RoadmapQuarter[];
  getRoadmapForQuarter: (quarter: RoadmapQuarter, year: number) => RoadmapItem[];
}) {
  return (
    <div>
      {/* Year Selector */}
      <AnimatedSection animation="fade-in-up" delay={0.1}>
        <div className="flex justify-center gap-2 mb-8">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedYear === year
                  ? 'bg-white text-gray-900 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </AnimatedSection>

      {/* Quarters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quarters.map((quarter, qIndex) => {
          const quarterItems = getRoadmapForQuarter(quarter, selectedYear);
          const isCurrentQuarter = selectedYear === 2025 && quarter === 'Q1'; // Simulate current quarter

          return (
            <AnimatedSection key={quarter} animation="fade-in-up" delay={0.1 + qIndex * 0.1}>
              <div className={`glass-card rounded-2xl p-6 h-full ${isCurrentQuarter ? 'ring-2 ring-[#952494]' : ''}`}>
                {/* Quarter Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-gray-900">{quarter}</span>
                    <span className="text-gray-500">{selectedYear}</span>
                  </div>
                  {isCurrentQuarter && (
                    <span className="px-2 py-1 bg-[#952494] text-white text-xs font-medium rounded-full animate-pulse">
                      Aktuell
                    </span>
                  )}
                </div>

                {/* Items */}
                {quarterItems.length > 0 ? (
                  <div className="space-y-4">
                    {quarterItems.map((item) => {
                      const statusConfig = roadmapStatusConfig[item.status];
                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h3 className="font-semibold text-gray-900">{item.title}</h3>
                            <span className={`flex-shrink-0 px-2 py-1 ${statusConfig.color} text-white text-xs font-medium rounded-full flex items-center gap-1`}>
                              <span>{statusConfig.icon}</span>
                              <span className="hidden sm:inline">{statusConfig.label}</span>
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">
                              {item.category}
                            </span>
                            {item.votes && (
                              <span className="text-xs text-gray-500 flex items-center gap-1">
                                👍 {item.votes} Votes
                              </span>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-400">
                    <span className="text-3xl mb-2 block">📭</span>
                    <p className="text-sm">Keine Items geplant</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      {/* Legend */}
      <AnimatedSection animation="fade-in-up" delay={0.5}>
        <div className="mt-8 glass-card rounded-xl p-4">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(roadmapStatusConfig).map(([key, config]) => (
              <div key={key} className="flex items-center gap-2 text-sm">
                <span className={`w-3 h-3 ${config.color} rounded-full`}></span>
                <span className="text-gray-600">{config.label}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

