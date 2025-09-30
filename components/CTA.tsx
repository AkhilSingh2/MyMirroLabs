'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Book Your Free Demo Today
          </h2>
          <p className="text-2xl text-white/95 mb-12 max-w-2xl mx-auto">
            Unlock Next-Gen Retail—Book a Demo Call
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="px-12 py-5 bg-white text-purple-600 rounded-full text-xl font-semibold hover:bg-gray-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Book a Demo Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
