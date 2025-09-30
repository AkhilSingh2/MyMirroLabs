'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const faqs = [
  {
    category: 'Pricing',
    questions: [
      {
        q: "How is MyMirro's pricing structured?",
        a: 'MyMirro offers flexible subscription plans tailored to your business size, feature needs, and order volume. Contact us to get a personalized quote or book a demo for detailed pricing breakdowns.',
      },
      {
        q: 'Are there setup or integration fees?',
        a: 'Basic onboarding is included in your subscription. Advanced integrations, custom feature add-ons, or API connections may require a one-time setup fee—quoted transparently before onboarding.',
      },
    ],
  },
  {
    category: 'Integrations',
    questions: [
      {
        q: 'Does MyMirro integrate with my ecommerce platform?',
        a: 'Yes, MyMirro supports seamless integration with major platforms like Shopify, Salesforce Commerce Cloud, Magento, and custom stacks via API.',
      },
      {
        q: 'How long does setup and integration take?',
        a: 'Most brands launch core features within 2–4 weeks. Advanced modules (phygital, omnichannel, AI bundling) may take 4–6 weeks depending on data flows and scope.',
      },
      {
        q: 'What if I switch ecommerce platforms?',
        a: 'Your data and settings can be migrated—our team will guide the transition and re-integrate your MyMirro solutions.',
      },
    ],
  },
  {
    category: 'Support & Training',
    questions: [
      {
        q: 'What kind of support do you offer?',
        a: 'Dedicated onboarding, live chat, and email support are available to all clients. Enterprise plans include a named account manager and quarterly optimization reviews.',
      },
      {
        q: 'Is training included?',
        a: 'Yes. Every subscription includes onboarding workshops, access to documentation, and ongoing feature webinars to keep your team up to speed.',
      },
      {
        q: 'Can I get help with campaign strategy or merchandising?',
        a: 'Absolutely. Our experts offer consulting for styling campaigns, merchandising automation, and best-practices with AI—just reach out via email or your account manager.',
      },
    ],
  },
  {
    category: 'Other Common Questions',
    questions: [
      {
        q: 'Can I trial the platform before committing?',
        a: 'Live demos and guided trials are available—book a slot with our team to experience MyMirro directly.',
      },
      {
        q: 'Will my data be secure?',
        a: 'Yes. MyMirro follows industry-best security practices and is compatible with all major compliance frameworks.',
      },
      {
        q: 'Can I request customized features?',
        a: 'We welcome feature requests and often build custom workflows for growing brands—contact our product team to discuss.',
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex justify-between items-center"
      >
        <span className="font-semibold text-gray-900 dark:text-white pr-8">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-primary-600 dark:text-primary-400 transition-transform flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-40"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-40"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="text-gray-900 dark:text-white">Frequently Asked </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Questions
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Common questions about pricing, integrations, and support
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqs.map((category, idx) => (
              <div key={idx}>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, qIdx) => (
                    <FAQItem key={qIdx} question={faq.q} answer={faq.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Need more details?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-full text-lg font-semibold border-2 border-gray-300 dark:border-gray-700 hover:border-primary-600 hover:shadow-xl transition-all duration-300"
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
