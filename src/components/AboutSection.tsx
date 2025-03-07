'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { handleCVDownload } from '@/utils/downloadCV';

const skills = [
  'Strategic Planning',
  'Business Analysis',
  'Project Management',
  'Process Optimization',
  'Change Management',
  'Risk Assessment',
  'Stakeholder Management',
  'Digital Transformation',
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square rounded-2xl overflow-hidden"
          >
            <Image
              src="/about-image.jpg"
              alt="Professional Portrait"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent 
              bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              About Me
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              With over a decade of experience in business consulting and strategy 
              development, I help organizations navigate complex challenges and achieve 
              their strategic objectives.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300">
              My approach combines analytical rigor with creative problem-solving to 
              deliver practical solutions that drive measurable results.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full 
                      text-gray-700 dark:text-gray-300 text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCVDownload}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                  transition-colors duration-200"
              >
                Download CV
              </motion.button>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 
                  dark:border-blue-400 dark:text-blue-400 rounded-lg hover:bg-blue-50 
                  dark:hover:bg-blue-900/20 transition-colors duration-200"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
