'use client';

import { motion } from 'framer-motion';
import { Search, Link2, TrendingUp, Users } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Schedule a personalized demo to explore how MyMirro fits your brand\'s unique needs and goals.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Integrate',
    description: 'Our team seamlessly integrates MyMirro with your existing platform and catalog—typically within 2-4 weeks.',
    icon: Link2,
  },
  {
    number: '03',
    title: 'Scale',
    description: 'Launch core features and progressively unlock advanced modules as your needs grow.',
    icon: TrendingUp,
  },
  {
    number: '04',
    title: 'Support',
    description: 'Receive ongoing optimization, training, and dedicated support to maximize your ROI.',
    icon: Users,
  },
];

export default function HowItWorks() {
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
            How It Works
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            From demo to deployment—your journey to next-gen fashion commerce
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 dark:from-blue-800/50 dark:via-purple-800/50 dark:to-pink-800/50 -translate-y-1/2 rounded-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-700 h-full hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Step Icon */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white mb-6 shadow-xl"
                  >
                    <step.icon className="w-12 h-12" strokeWidth={2} />
                  </motion.div>
                  
                  {/* Step Number Label */}
                  <div className="relative text-sm font-bold text-purple-600 dark:text-purple-400 mb-2">
                    STEP {step.number}
                  </div>
                  
                  {/* Title */}
                  <h3 className="relative text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="relative text-gray-700 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
