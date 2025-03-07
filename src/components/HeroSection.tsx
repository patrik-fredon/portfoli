'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-16 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent 
                bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 
                animate-gradient"
            >
              Freelance Professional
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Transforming ideas into exceptional results. With expertise in business consulting,
              digital transformation, and project management, I help organizations achieve their goals
              and drive success.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 
                  text-white font-medium transition-colors duration-200"
              >
                Get in Touch
              </a>
              <a
                href="#portfolio"
                className="px-8 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 
                  dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium 
                  transition-colors duration-200"
              >
                View Portfolio
              </a>
            </motion.div>
          </motion.div>

          {/* Image/Visual Element */}
          <motion.div
            className="relative h-[400px] lg:h-[500px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 
              dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl transform rotate-3 scale-95" />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-blue-100 
              dark:from-indigo-900/20 dark:to-blue-900/20 rounded-2xl transform -rotate-3 scale-95" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-blue-500/10 dark:bg-blue-400/10 
                animate-float" />
            </div>
            {/* Replace src with your actual profile/hero image */}
            <div className="relative h-full flex items-center justify-center">
              <Image
                src="/professional-photo.jpg"
                alt="Professional headshot"
                width={400}
                height={400}
                className="rounded-2xl shadow-xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-400/10 rounded-full 
        filter blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-indigo-400/10 rounded-full 
        filter blur-3xl animate-float" />
    </section>
  );
}
