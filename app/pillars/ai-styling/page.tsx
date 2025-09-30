'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Camera, Palette, Sparkles, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Outfit Bundling',
    description: 'Showcase "Complete the Look" bundles for every product, driving higher conversions and units per transaction through intelligent cross-selling.',
  },
  {
    icon: Camera,
    title: 'AI Model Imagery & Videos',
    description: 'Generate photorealistic visuals of products on diverse, customizable virtual models—cutting photoshoot costs and improving customer confidence.',
  },
  {
    icon: Palette,
    title: 'Curated Visual Merchandising',
    description: 'Deliver lookbooks, full-look inspiration, and style-driven pages to create immersive shopping experiences and lift engagement across the site.',
  },
  {
    icon: Sparkles,
    title: 'Stylist-Vetted Creativity',
    description: 'Blend AI efficiency with human expertise—every style and suggestion is reviewed by professional stylists for true brand accuracy.',
  },
  {
    icon: Zap,
    title: 'Real-Time Personalization',
    description: 'Instantly adapt bundles, looks, and recommendations to every user session for seamless, dynamic shopping journeys online.',
  },
];

export default function AIStylingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-900 dark:via-pink-900 dark:to-blue-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Turn Every Product Page Into a{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Shoppable Story
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-4xl mx-auto"
            >
              Delight shoppers and lift sales with AI-powered outfit creation, instant model imagery, and curated merchandising—designed to boost conversions, units per cart, and AOV while reducing manual effort and costs.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
              >
                Book a Demo & See Smart Styling in Action
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
                AI Styling & Visual Merchandising is an intelligent e-commerce solution that automatically creates on-brand outfit bundles ("Complete the Look"), generates model imagery and videos, and assembles visually engaging, curated shopping experiences for every product and campaign—verified by industry stylists for inspiration-driven, digital selling.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Ideal Customer Profile
              </h2>
              <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-2xl">•</span>
                  <span>E-commerce brands, online fashion retailers, and marketplaces aiming to boost conversion and AOV through advanced styling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 text-2xl">•</span>
                  <span>Growth, merchandising, and digital product teams focused on scalable visual presentation and personalized shopping experiences</span>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
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
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Book a Styling Demo Now
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Contact Our Team for Details
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-purple-600 rounded-full text-lg font-semibold hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
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
