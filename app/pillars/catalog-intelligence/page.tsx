'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Package, Tag, RefreshCw, BarChart3 } from 'lucide-react';

const benefits = [
  {
    icon: Package,
    title: 'Real-Time Outfit Bundling',
    description: 'Automatic multi-product bundles for occasions and trends enrich every shopping journey, boosting average order value and customer conversions.',
  },
  {
    icon: Tag,
    title: 'Visual Attribute Tagging',
    description: 'AI tags 100+ style attributes for each item, enhancing product filtering, SEO, and personalized discovery while saving merchandising time.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Data Enrichment',
    description: 'Smart catalog enrichment ensures smarter recommendations and accurate search, cutting up to 75% of manual work for merchandising teams.',
  },
  {
    icon: BarChart3,
    title: 'Brand Intelligence Dashboard',
    description: 'Social listening and review analytics deliver real-time insights on trends, sentiment, and aesthetics—informing better assortment and campaign planning.',
  },
];

export default function CatalogIntelligencePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-900 dark:via-emerald-900 dark:to-teal-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Smarter Catalogs.{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Lightning Automation. Real-Time Insights.
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-4xl mx-auto"
            >
              Automate product bundling, enrich catalogs, and unlock actionable trends with AI—cutting manual effort by up to 75% and powering sharper recommendations, search, and planning.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
              >
                Discover Automated Merchandising—Book a Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What It Is & Who It's For */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                What It Is
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                An AI solution that automates product bundling, attribute tagging, and ongoing data enrichment of fashion catalogs, while surfacing deep insights from reviews and trends for smarter planning.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Ideal Customer Profile
              </h2>
              <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-2xl">•</span>
                  <span>Digital/e-commerce teams, merchandisers, and product managers at fast-scaling fashion brands and online marketplaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 text-2xl">•</span>
                  <span>Teams seeking to eliminate manual catalog work, improve discovery, and enable strategic, data-driven growth</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Key Benefits & Features
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <benefit.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="relative text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="relative text-gray-700 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Automate Your Catalog
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Schedule a Free Demo
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-green-600 rounded-full text-lg font-semibold hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
            >
              Book a Demo
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
