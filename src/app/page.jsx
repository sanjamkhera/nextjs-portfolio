"use client"

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from 'next/image';
import CaseStudy from "@/components/CaseStudy";
import { caseStudies } from "@/data/caseStudies";

const Home = () => {
  const slides = [
    {
      title: "Prototype Fast",
      description: "Streamlined prototyping tool for busy tech leaders. Transforming design workflows with rapid iterations, team collaboration, and seamless handoff between design and development teams.",
      image: "/PrototypeFast1.png",
      image2: "/PrototypeFast2.png"
    },
    {
      title: "Verses",
      description: "Mobile-first content platform showcasing dynamic visual storytelling. Built with React Native, featuring offline support and smooth animations for an engaging user experience.",
      image: "/Verses1.png",
      image2: "/Verses2.png"
    },
    {
      title: "Celestial Insights",
      description: "Cloud-based astrology platform leveraging modern technology to provide personalized career insights. Features include real-time celestial tracking and AI-powered interpretations.",
      image: "/CelestialInsights1.png",
      image2: "/CelestialInsights2.png"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$2,999",
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "Custom Website Development",
        "Basic Mobile Optimization",
        "3 Months Support",
        "Analytics Integration"
      ]
    },
    {
      name: "Professional",
      price: "$5,999",
      description: "Ideal for growing companies needing comprehensive solutions",
      features: [
        "Full-Stack Web Application",
        "Mobile App Development",
        "6 Months Support",
        "Advanced Analytics",
        "API Integration",
        "Cloud Hosting Setup"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Custom Software Development",
        "Digital Transformation Strategy",
        "24/7 Priority Support",
        "Advanced Security Features",
        "Full System Integration",
        "Dedicated Project Manager"
      ]
    }
  ];

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <section className="flex flex-col justify-center gap-8 md:gap-12 lg:gap-16 pt-8 md:pt-12 mb-12 md:mb-24 px-4">
        <motion.h1
          className="section-title text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          We Provide Digital Solutions
        </motion.h1>

        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 justify-between mx-auto p-4 md:p-8 lg:py-16 max-w-6xl w-full">
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-center md:text-right mb-auto w-full md:w-1/2 text-black"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            We deliver personalized web applications, mobile solutions, and enterprise software that drives business growth and digital transformation.
          </motion.p>

          <motion.div
            className="relative mx-auto w-full md:w-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Image
              src="/SeawallSoftware.png"
              width={300}
              height={300}
              className='rounded-2xl mx-auto w-48 md:w-64 lg:w-[300px] h-auto shadow-xl'
              alt="Seawall Software"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className='relative z-0 py-16 md:py-24'>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary transform -skew-y-6 -z-10 min-h-[500px]" />

        <div className='relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          <motion.h1
            className="section-title text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Solutions for Every Business
          </motion.h1>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mt-8'>
            {[
              {
                title: "Digital Transformation",
                description: "Transform traditional operations into streamlined digital workflows.",
                image: "/Transform.png"
              },
              {
                title: "Custom Software",
                description: "Tailor-made applications that align perfectly with your workflow.",
                image: "/SWSoftware.png"
              },
              {
                title: "Mobile Solutions",
                description: "Powerful functionality with elegant design for every device.",
                image: "/phone.png"
              },
              {
                title: "Data Intelligence",
                description: "Harness your data for clear insights and informed decisions.",
                image: "/DataDrive.png"
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                className="glass-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <h3 className="font-bold text-xl text-white mb-4 whitespace-nowrap">{solution.title}</h3>
                <p className="text-sm leading-relaxed text-gray-200 mb-4">
                  {solution.description}
                </p>
                <div className="w-full h-[200px] relative rounded-lg overflow-hidden">
                  <Image
                    src={solution.image}
                    width={200}
                    height={200}
                    className='object-cover'
                    alt={solution.title}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="pt-32 md:pt-40 py-16 md:py-24 bg-gradient-to-r from-accent/20 to-accent">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <motion.h1
            className="section-title text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Work
          </motion.h1>

          <motion.p
            className="text-center max-w-3xl mx-auto mb-12 text-black/80 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            We believe great user interfaces are essential for all digital products. Our designs focus on clarity, aesthetics, and exceptional user experience regardless of the complexity behind them.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
            {caseStudies.map((project) => (
              <CaseStudy
                key={project.id}
                project={{
                  ...project,
                  technologies: project.technologies,
                  images: project.images
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className='relative z-0 mt-0'>
        <div className="relative w-full min-h-[80vh] px-4 md:px-6 lg:px-8">
          {/* Skewed background only, behind everything */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary -z-10"
            style={{

            }}
          />
          {/* Heading in main flow, with top margin to sit on gray */}
          <div className="flex flex-col justify-center items-center pt-12 md:pt-16 lg:pt-20 pb-8">
            <h1 className="section-title text-white text-center drop-shadow-lg">
              Transparent Pricing
            </h1>
          </div>
          <div className='relative flex flex-col justify-center items-center h-full pb-16 md:pb-24 lg:pb-32'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 max-w-7xl w-full items-stretch'>
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  className="glass-card flex flex-col justify-between h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="space-y-4">
                    <h3 className="font-bold text-2xl text-white">{tier.name}</h3>
                    <p className="text-3xl font-bold text-white">{tier.price}</p>
                    <p className="text-base text-gray-300 leading-relaxed">
                      {tier.description}
                    </p>
                    <ul className="space-y-4 flex-grow">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-base text-gray-300 flex items-start">
                          <span className="mr-3 text-lg">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="btn-primary w-full mt-8">
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;