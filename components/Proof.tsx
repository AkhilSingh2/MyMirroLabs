'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    value: '15%+',
    label: 'Average AOV Increase',
    description: 'Brands see significant lift in average order value',
  },
  {
    value: '75%',
    label: 'Manual Work Reduction',
    description: 'Less time on catalog management and tagging',
  },
  {
    value: '2-4 weeks',
    label: 'Time to Launch',
    description: 'From integration to live core features',
  },
  {
    value: '100+',
    label: 'Style Attributes',
    description: 'AI-powered tagging for every product',
  },
];

export default function Proof() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950 dark:from-black dark:via-purple-950 dark:to-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Proven Results for Fashion Brands
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto drop-shadow-md">
            Join leading fashion retailers transforming their customer experience
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-xl"
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-4 drop-shadow-lg">
                {stat.value}
              </div>
              <div className="text-xl font-bold text-white mb-3 drop-shadow-md">
                {stat.label}
              </div>
              <div className="text-gray-200 drop-shadow-sm">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-2xl p-8 md:p-12 hover:bg-white/20 transition-all duration-300 shadow-2xl">
            <div className="text-center">
              <div className="text-5xl mb-6">💬</div>
              <p className="text-xl md:text-2xl text-white italic mb-8 leading-relaxed drop-shadow-md">
                "MyMirro has transformed how we present our collections. The AI styling and personalization have driven real growth in engagement and conversions."
              </p>
              <div className="text-gray-100">
                <div className="font-bold text-white text-lg drop-shadow-md">Fashion Brand Partner</div>
                <div className="text-base drop-shadow-sm">Leading E-commerce Retailer</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
