'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Digital Transformation Strategy',
    category: 'Business Strategy',
    description: 'Led digital transformation initiative for a Fortune 500 company, resulting in 35% operational efficiency improvement.',
    image: '/project1.jpg',
  },
  {
    title: 'Process Optimization Project',
    category: 'Process Improvement',
    description: 'Streamlined core business processes resulting in $2M annual cost savings and 25% productivity increase.',
    image: '/project2.jpg',
  },
  {
    title: 'Enterprise System Implementation',
    category: 'Project Management',
    description: 'Successfully managed implementation of enterprise-wide ERP system within budget and timeline.',
    image: '/project3.jpg',
  },
  {
    title: 'Business Growth Strategy',
    category: 'Strategic Planning',
    description: 'Developed and executed growth strategy leading to 40% revenue increase within 18 months.',
    image: '/project4.jpg',
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
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore some of my recent projects and success stories that demonstrate
            my expertise in driving business transformation and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg 
                bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 
                    group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
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
            className="inline-block px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 
              active:bg-blue-800 text-white font-medium transition-colors duration-200"
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
