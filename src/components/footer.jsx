import React from 'react';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-[#1F2228] to-[#4A4947] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Seawall Software</h3>
            <p className="text-gray-300">
              Transforming businesses through innovative digital solutions and custom software development.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Services</h3>
            <ul className="space-y-2">
              <li className="hover:text-yellow-100 transition-colors whitespace-nowrap">Digital Transformation</li>
              <li className="hover:text-yellow-100 transition-colors">Custom Software</li>
              <li className="hover:text-yellow-100 transition-colors">Mobile Solutions</li>
              <li className="hover:text-yellow-100 transition-colors">Cloud Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:notify@seawallsoftware.ca" className="hover:text-yellow-100 transition-colors">
                  notify@seawallsoftware.ca
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span className="block">410 W Georgia St,<br />Vancouver, BC V6B 1Z3,<br />Canada</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-yellow-100 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-yellow-100 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Seawall Software. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;