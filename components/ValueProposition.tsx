'use client';

import { motion } from 'framer-motion';
import { Network, Zap, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: Network,
    title: 'Omnichannel by design',
    description: 'Seamlessly connects online, in-store, and campaigns.',
  },
  {
    icon: Zap,
    title: 'Fast, scalable AI implementation',
    description: 'For businesses of any size.',
  },
  {
    icon: CheckCircle,
    title: 'Human-vetted recommendations',
    description: 'Always on-brand and insight-driven.',
  },
];

export default function ValueProposition() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
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
            Why MyMirroLabs
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            The platform built for the future of fashion commerce
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Icon */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 mb-6 shadow-xl"
              >
                <benefit.icon className="w-14 h-14 text-white" strokeWidth={2} />
              </motion.div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
