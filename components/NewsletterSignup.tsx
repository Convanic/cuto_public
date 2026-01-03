'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'footer';
  className?: string;
}

export default function NewsletterSignup({ variant = 'default', className = '' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address.');
      return;
    }

    setStatus('loading');

    // Simulate API call - replace with actual newsletter service integration
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For now, just simulate success
    setStatus('success');
    setMessage('🎉 Thank you! Check your email for the SAP Project Checklist.');
    setEmail('');

    // Reset after 5 seconds
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  if (variant === 'footer') {
    return (
      <div className={className}>
        <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
        <p className="text-white/70 text-sm mb-4">
          Get SAP project tips & CUTO updates.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
            disabled={status === 'loading' || status === 'success'}
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="w-full px-4 py-2 bg-white text-gray-900 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Subscribing...' : status === 'success' ? '✓ Subscribed!' : 'Subscribe'}
          </button>
        </form>
        {message && (
          <p className={`mt-2 text-xs ${status === 'error' ? 'text-red-300' : 'text-green-300'}`}>
            {message}
          </p>
        )}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`glass-card rounded-xl p-6 ${className}`}>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-semibold text-gray-900 mb-1">📧 Get SAP Project Tips</h3>
            <p className="text-sm text-gray-600">Weekly insights for successful SAP projects.</p>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 sm:w-48 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              disabled={status === 'loading' || status === 'success'}
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="px-4 py-2 bg-[#952494] text-white rounded-lg text-sm font-semibold hover:bg-[#7a1f75] transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              {status === 'loading' ? '...' : status === 'success' ? '✓' : 'Subscribe'}
            </button>
          </form>
        </div>
        <AnimatePresence>
          {message && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`mt-3 text-sm text-center ${status === 'error' ? 'text-red-600' : 'text-green-600'}`}
            >
              {message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Default variant - full lead magnet section
  return (
    <div className={`glass-card rounded-2xl overflow-hidden ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left side - Content */}
        <div className="p-8 lg:p-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#952494]/10 to-[#FA9B0C]/10 px-3 py-1 rounded-full mb-4">
            <span className="text-lg">📋</span>
            <span className="text-sm font-medium text-[#952494]">Free Download</span>
          </div>
          
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            SAP Project Checklist
          </h3>
          
          <p className="text-gray-600 mb-6">
            Get our comprehensive checklist covering all phases of SAP implementations. 
            Used by 500+ project managers worldwide.
          </p>
          
          <ul className="space-y-3 mb-6">
            {[
              'Pre-project assessment criteria',
              'Go-live readiness checklist',
              'Risk identification framework',
              'Cutover planning template',
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-700">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#952494] focus:border-transparent transition-all"
                disabled={status === 'loading' || status === 'success'}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="w-full px-6 py-3 bg-gradient-to-r from-[#952494] to-[#FA9B0C] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {status === 'loading' ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </span>
              ) : status === 'success' ? (
                '✓ Check Your Email!'
              ) : (
                'Download Free Checklist'
              )}
            </button>
            <p className="text-xs text-gray-500 text-center">
              By subscribing, you agree to receive occasional updates. Unsubscribe anytime.
            </p>
          </form>

          <AnimatePresence>
            {message && status !== 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`mt-4 text-sm text-center ${status === 'error' ? 'text-red-600' : 'text-green-600'}`}
              >
                {message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Right side - Visual */}
        <div className="hidden lg:flex bg-gradient-to-br from-[#952494] to-[#FA9B0C] p-10 items-center justify-center">
          <div className="text-center text-white">
            <div className="w-32 h-32 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="text-4xl font-bold mb-2">42</div>
            <div className="text-white/80">Checklist Items</div>
            <div className="mt-6 flex justify-center gap-2">
              {['PDF', 'Excel', 'Notion'].map((format) => (
                <span key={format} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                  {format}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

