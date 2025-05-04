"use client";
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <section className="flex flex-col justify-center gap-8 md:gap-12 lg:gap-16 pt-8 md:pt-12 px-4">
        <motion.div
          className="bg-white/30 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col items-center max-w-2xl mx-auto mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            Start Your Digital Transformation with Seawall Software
          </h1>
          <p className="text-lg md:text-xl text-gray-700 text-center mb-8">
            Transform your business with Seawall Software&apos;s cutting-edge digital solutions. Our Vancouver-based expert team specializes in web development, mobile apps, and AI integration. Let&apos;s collaborate to create innovative solutions that drive growth and success.
          </p>
          <a
            href="mailto:notify@seawallsoftware.ca"
            className="btn-primary px-8 py-3 text-lg rounded-full shadow-md transition hover:scale-105"
          >
            Contact Us
          </a>
        </motion.div>
      </section>

      {/* Customer Support Section */}
      <div className="relative z-0 py-32 px-4 overflow-hidden -skew-y-6">
        <div className="absolute inset-0 w-[120vw] left-1/2 -translate-x-1/2 min-h-[700px] h-full -z-10">
          <div className="w-full h-full bg-gradient-to-tr from-primary to-secondary opacity-90" />
        </div>
        <section className="skew-y-6 relative flex flex-col items-center justify-center max-w-3xl mx-auto">
          <Image
            src="/Customer.png"
            alt="Customer Support"
            width={256}
            height={256}
            className="w-64 h-auto mb-8 rounded-lg shadow-lg"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-white">Outstanding Customer Support</h2>
          <p className="text-lg md:text-xl text-center max-w-2xl text-gray-100 mb-8">
            We pride ourselves on providing excellent customer support. Our team is always here to help you with any questions or issues, ensuring a smooth and successful experience from start to finish. Your satisfaction is our top priority!
          </p>
        </section>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#F3F3E0]/80 to-[#B9E5E8]/80 backdrop-blur-md mt-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 -mt-12">Why Choose Seawall Software?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-14 h-14 text-blue-400 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 0h-1v-4h-1m-4 0h-1v-4h-1m4 0h-1v-4h-1" />
                  </svg>
                ),
                title: "Fast Response",
                tagline: "LIGHTNING QUICK",
                desc: "We respond quickly to all inquiries and support requests, ensuring you're never left waiting."
              },
              {
                icon: (
                  <svg className="w-14 h-14 text-green-400 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v4m0 0h4m-4 0H8" />
                  </svg>
                ),
                title: "Experienced Team",
                tagline: "EXPERTISE",
                desc: "Our team brings years of experience in digital solutions, software development, and customer care."
              },
              {
                icon: (
                  <svg className="w-14 h-14 text-yellow-400 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2z" />
                  </svg>
                ),
                title: "Transparency",
                tagline: "TRANSPARENCY",
                desc: "We keep you informed at every step, so you always know what's happening with your project."
              },
              {
                icon: (
                  <svg className="w-14 h-14 text-pink-400 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v4m0 0h4m-4 0H8" />
                  </svg>
                ),
                title: "Custom Solutions",
                tagline: "TAILORED FOR YOU",
                desc: "Every business is unique. We tailor our solutions to fit your specific needs and goals."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-white/30 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {item.icon}
                <span className="uppercase text-xs font-semibold text-black tracking-widest mb-1">{item.tagline}</span>
                <h3 className="font-bold text-xl mb-2 text-black">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='relative z-0 pb-8 pt-16 md:pt-24'>
        <div className="absolute inset-0 w-full h-full -z-10">
          <div className="w-full h-full bg-gradient-to-tr from-primary to-secondary" />
        </div>
        <div className='relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16'>
            {/* Contact Details */}
            <motion.div
              className="glass-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-bold text-2xl text-white mb-8">Contact Details</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" className="text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+12049632506" className="text-gray-200 hover:text-white transition-colors">
                    +1 204 963 2506
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" className="text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:notify@seawallsoftware.ca" className="text-gray-200 hover:text-white transition-colors">
                    notify@seawallsoftware.ca
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" className="text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-200">
                    410 W Georgia St,<br />
                    Vancouver, BC V6B 1Z3,<br />
                    Canada
                  </p>
                </div>

                <div className="flex gap-4 mt-8">
                  <Link
                    href="https://github.com/sanjamkhera"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://linkedin.com/in/sanjkhera"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Map Section */}
            <motion.div
              className="glass-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-bold text-2xl text-white mb-8">Our Location</h3>
              <div className="w-full h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.6000000000004!2d-123.1187!3d49.2827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717f7f8f0f1d%3A0x7d0d7f8f0f0f0f0f!2s410%20W%20Georgia%20St%2C%20Vancouver%2C%20BC%20V6B%201Z3%2C%20Canada!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;