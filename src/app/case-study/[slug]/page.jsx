"use client"

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { caseStudiesDetails } from '@/data/caseStudiesDetails';

export default function CaseStudyPage() {
  const params = useParams();
  const [caseStudy, setCaseStudy] = useState(null);

  useEffect(() => {
    // In a real application, you might fetch this data from an API
    if (params.slug && caseStudiesDetails[params.slug]) {
      setCaseStudy(caseStudiesDetails[params.slug]);
    }
  }, [params.slug]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading case study...</p>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1a2a3a]/90 to-[#0f1a26]/90 rounded-xl shadow-xl overflow-hidden border border-white/10">
          {/* Hero Section */}
          <div className="relative h-[20vh] md:h-[25vh] bg-gradient-to-tr from-primary to-secondary">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                  {caseStudy.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl md:text-2xl text-white/90"
                >
                  {caseStudy.subtitle}
                </motion.p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Left Column - Project Info */}
              <div className="col-span-2">
                <h2 className="text-2xl font-bold mb-6 text-white">Project Overview</h2>
                <div className="prose prose-lg max-w-none text-white/90">
                  {caseStudy.fullDescription.split("\n\n").map((paragraph, idx) => (
                    <p key={idx} className="mb-4">{paragraph}</p>
                  ))}
                </div>

                {/* Image Gallery */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 text-white">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {caseStudy.images.map((img, idx) => (
                      <div key={idx} className="relative aspect-[9/19.5] max-w-xs w-full mx-auto rounded-2xl overflow-hidden shadow-md flex items-center justify-center bg-transparent">
                        <Image
                          src={img}
                          alt={`${caseStudy.title} screenshot ${idx + 1}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 300px"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Design Philosophy */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 text-white">Design Philosophy</h2>
                  <p className="text-white/90">{caseStudy.designPhilosophy}</p>
                </div>

                {/* Challenges & Solutions */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-white">Challenges</h2>
                    <ul className="list-disc pl-5 space-y-2 text-white/90">
                      {caseStudy.challenges.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-white">Solutions</h2>
                    <ul className="list-disc pl-5 space-y-2 text-white/90">
                      {caseStudy.solutions.map((solution, idx) => (
                        <li key={idx}>{solution}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Results */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 text-white">Results</h2>
                  <ul className="list-disc pl-5 space-y-2 text-white/90">
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column - Project Details */}
              <div className="col-span-1">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sticky top-28">
                  <h3 className="text-xl font-bold mb-4 text-white">Project Details</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-white/70">Client</h4>
                      <p className="text-white">{caseStudy.client}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-white/70">Year</h4>
                      <p className="text-white">{caseStudy.year}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-white/70">Category</h4>
                      <p className="text-white">{caseStudy.category}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-white/70">Technologies</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {caseStudy.technologies.map((tech, idx) => (
                          <span key={idx} className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link href="/#contact" passHref>
                      <button className="btn-primary w-full">
                        Start a Similar Project
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 