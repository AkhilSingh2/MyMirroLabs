'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Search, MessageCircle, Shirt } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Dynamic Recommendations',
    description: 'Personalized on-site and cross-channel product suggestions that instantly adapt to shopper behavior—boosting conversion rates, order value, and retention.',
  },
  {
    icon: Search,
    title: 'Visual & Contextual Search',
    description: 'Let customers "shop by photo," find similar items, and explore by occasion—making product discovery seamless, intuitive, and ideal for Gen Z inspiration-led browsing.',
  },
  {
    icon: MessageCircle,
    title: 'Conversational AI Stylist',
    description: 'Humanize the digital experience with chat-based guidance—an AI stylist that engages shoppers, lifts satisfaction, and increases average order value through 1:1 support and recommendations.',
  },
  {
    icon: Shirt,
    title: 'Virtual Try-On',
    description: 'Empower shoppers to try products on avatars or their own photos, improving confidence to purchase, increasing conversions, and dramatically reducing costly returns.',
  },
];

export default function PersonalizedShoppingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-blue-900 dark:via-cyan-900 dark:to-teal-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Personalized Journeys That Turn{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Discovery Into Loyalty
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-4xl mx-auto"
            >
              Boost retention and repeat purchases with AI-powered recommendations, photo-based search, and a conversational stylist—delivering truly tailored, seamless shopping for every customer.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
              >
                See Smart Personalization Live—Book Your Demo
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
                Personalized Shopping & Discovery uses AI to deliver unique journeys for every shopper. It powers tailored product recommendations, photo-led search, and conversational stylist tools, creating a seamless, loyalty-driving online experience.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Ideal Customer Profile
              </h2>
              <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-2xl">•</span>
                  <span>Fast-scaling e-commerce brands and marketplaces focused on maximizing repeat business and retention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-3 text-2xl">•</span>
                  <span>Product, CRM, and marketing teams seeking deeper personalization and smarter shopper engagement</span>
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
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
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See Personalization in Action
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Request a Demo
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
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
