'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Strategic Planning',
    description: 'Develop comprehensive business strategies aligned with your objectives and market opportunities.',
    icon: '📊',
  },
  {
    title: 'Process Optimization',
    description: 'Streamline operations and enhance efficiency through data-driven process improvements.',
    icon: '⚡',
  },
  {
    title: 'Change Management',
    description: 'Guide organizations through transitions with effective change management strategies.',
    icon: '🔄',
  },
  {
    title: 'Project Management',
    description: 'Deliver successful projects through methodical planning and execution.',
    icon: '📈',
  },
  {
    title: 'Business Analysis',
    description: 'Provide in-depth analysis and insights to drive informed decision-making.',
    icon: '🔍',
  },
  {
    title: 'Innovation Consulting',
    description: 'Foster innovation and digital transformation initiatives.',
    icon: '💡',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent 
            bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Professional Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions tailored to drive your business forward and achieve 
            sustainable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg 
                hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg 
              hover:bg-blue-700 transition-colors duration-200"
          >
            Discuss Your Needs
          </a>
        </motion.div>
      </div>
    </section>
  );
}
