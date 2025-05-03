"use client"

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CaseStudy = ({ project }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#e0f7fa]/80 to-[#b2ebf2]/60 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full border border-primary/10 p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex h-[320px] pt-6 gap-4 justify-center items-start">
        {project.images.slice(0, 2).map((img, idx) => (
          <div
            key={idx}
            className="relative w-1/2 h-full flex items-start justify-center"
            style={{ maxWidth: 180 }}
          >
            <div className="w-full h-full flex items-center justify-center scale-110">
              <Image
                src={img}
                alt={`${project.title} screenshot ${idx + 1}`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col flex-1 p-0 md:p-2 mt-4">
        <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <Link href={`/case-study/${project.slug}`} passHref>
            <button className="btn-primary w-full">
              View Case Study
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudy; 