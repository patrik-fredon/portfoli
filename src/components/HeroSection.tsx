'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { handleCVDownload } from '@/utils/downloadCV';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-gray-900 dark:text-white">Welcome, I'm</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r 
                from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Freelance Professional
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300">
              Transforming ideas into impactful solutions. Specializing in strategy 
              development, business optimization, and innovative problem-solving.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCVDownload}
                className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium 
                  hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200"
              >
                Download CV
              </motion.button>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg border-2 border-blue-600 text-blue-600 
                  dark:border-blue-400 dark:text-blue-400 font-medium hover:bg-blue-50 
                  dark:hover:bg-blue-900/20 transition-colors duration-200"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>

          {/* Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 
              to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl">
              <div className="relative w-full h-full">
                <Image
                  src="/hero-image.png"
                  alt="Professional Illustration"
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
