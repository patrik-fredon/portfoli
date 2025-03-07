'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Strategic Business Transformation',
    description: 'Led digital transformation initiative for Fortune 500 company, resulting in 35% efficiency increase.',
    image: '/project1.jpg',
    tags: ['Strategy', 'Digital Transformation', 'Change Management'],
  },
  {
    title: 'Process Optimization Program',
    description: 'Implemented Lean Six Sigma methodologies to streamline operations, reducing costs by 25%.',
    image: '/project2.jpg',
    tags: ['Process Optimization', 'Six Sigma', 'Cost Reduction'],
  },
  {
    title: 'Market Expansion Strategy',
    description: 'Developed and executed market entry strategy for emerging markets, achieving 50% growth.',
    image: '/project3.jpg',
    tags: ['Market Analysis', 'Growth Strategy', 'International'],
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
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
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A selection of key projects that demonstrate my expertise in business 
            transformation and strategic consulting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg 
                hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 
                        dark:text-blue-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
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
            className="inline-block px-8 py-3 rounded-lg bg-blue-600 text-white font-medium 
              hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
