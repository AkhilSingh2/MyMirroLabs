'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Search, Database, Globe, Store } from 'lucide-react';

const pillars = [
  {
    title: 'AI Styling & Visual Merchandising',
    description: 'Curate head-to-toe outfits, showcase products instantly with AI-generated models, and elevate engagement through inspirational merchandising—all with expert-reviewed styling.',
    icon: Sparkles,
    href: '/pillars/ai-styling',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Personalized Shopping & Discovery',
    description: 'Deliver tailored recommendations, natural-language styling, and photo-based search for every shopper, driving loyalty and inspiration-led journeys.',
    icon: Search,
    href: '/pillars/personalized-shopping',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Catalog Intelligence & Data Enrichment',
    description: 'Reduce manual work with auto-tagging, real-time bundle creation, and ongoing catalog enrichment—plus actionable insights from reviews and trend signals.',
    icon: Database,
    href: '/pillars/catalog-intelligence',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Omnichannel Personalization & Engagement',
    description: 'Trigger personalized journeys across web, app, email, and chat, with brand-protective controls to ensure consistent voice at every touchpoint.',
    icon: Globe,
    href: '/pillars/omnichannel',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Phygital & In-Store Experiences',
    description: 'Bridge online and offline with virtual style screens, AR try-ons, and seamless shopping—unlocking immersive in-store events and unified cart journeys.',
    icon: Store,
    href: '/pillars/phygital',
    gradient: 'from-indigo-500 to-purple-500',
  },
];

export default function PillarCards() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            MyMirro Solution Pillars
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI-powered solutions for next-generation fashion retail
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={pillar.href}>
                <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-300 group-hover:scale-105 relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Icon with gradient background */}
                  <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${pillar.gradient} mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    <pillar.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="relative text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                    {pillar.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="relative text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <div className={`relative flex items-center bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent font-semibold`}>
                    Learn More
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'currentColor' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
