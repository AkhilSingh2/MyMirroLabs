'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Monitor, RefreshCw, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Monitor,
    title: 'MyMirro Virtual Style Screens',
    description: 'In-store interactive screens let shoppers create outfits, experience AR try-ons, get personalized recommendations, and navigate the store easily—bringing the digital experience into physical retail for greater engagement.',
  },
  {
    icon: RefreshCw,
    title: 'Seamless Online–Offline Journeys',
    description: 'Unify digital and store inventories, allow instant ordering of out-of-stock items, and enable frictionless checkout right at the screen—maximizing convenience and turning browsing into buying.',
  },
  {
    icon: Sparkles,
    title: 'Immersive Store Activations',
    description: 'Powerful support for launches, pop-ups, and styling events, blending AI suggestions with real human expertise to create standout in-store experiences and drive higher conversion.',
  },
];

export default function PhygitalPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Bridge Online and Offline—
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Make Stores Smarter & More Inspiring
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-4xl mx-auto"
            >
              Boost in-store conversions with interactive style screens, AR try-ons, and unified online-offline journeys—delivering immersive, data-driven experiences and frictionless shopping anywhere.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
              >
                Experience Phygital Retail—Book a Demo Now
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
                Phygital & In-Store Experiences blend the ease of online shopping with the immediacy of physical retail—using smart style screens, AR try-ons, and unified checkout to create immersive, connected journeys that drive in-store sales.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Ideal Customer Profile
              </h2>
              <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 text-2xl">•</span>
                  <span>Omnichannel fashion brands and retail operations teams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-2xl">•</span>
                  <span>Teams eager to boost in-store engagement, conversion, and customer satisfaction by connecting digital tools with every physical retail footprint</span>
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
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
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience Style Screens
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Request a Store Demo
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-indigo-600 rounded-full text-lg font-semibold hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
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
