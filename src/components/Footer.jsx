import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiMail, FiPhone, FiMapPin, FiInstagram, FiTwitter, FiFacebook } = FiIcons;

const Footer = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const quotes = [
    "Distance taught us how to love stronger.",
    "His hug after deployment said everything.",
    "Love didn't pause — it deployed, too.",
    "Home is wherever you are.",
    "Every letter was a bridge to tomorrow.",
    "She waited. He served. Together, they endured."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-navy text-bone py-16">
      <div className="container mx-auto px-4">
        {/* Quote Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <SafeIcon icon={FiHeart} className="text-blush text-3xl animate-float" />
          </div>
          
          <div className="h-16 flex items-center justify-center">
            <motion.p
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="font-body text-xl md:text-2xl text-blush-light italic max-w-2xl"
            >
              "{quotes[currentQuote]}"
            </motion.p>
          </div>
          
          <div className="flex justify-center space-x-2 mt-4">
            {quotes.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentQuote ? 'bg-gold' : 'bg-blush-light opacity-50'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-2"
          >
            <div className="flex items-center mb-4">
              <SafeIcon icon={FiHeart} className="text-blush text-2xl mr-3" />
              <h3 className="font-serif text-2xl text-bone">Mrake Agency</h3>
            </div>
            <p className="font-body text-blush-light leading-relaxed mb-6">
              We craft digital monuments to military love stories—preserving the letters, 
              moments, and sacrifices that define the strongest bonds on earth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blush hover:text-gold transition-colors">
                <SafeIcon icon={FiInstagram} className="text-xl" />
              </a>
              <a href="#" className="text-blush hover:text-gold transition-colors">
                <SafeIcon icon={FiFacebook} className="text-xl" />
              </a>
              <a href="#" className="text-blush hover:text-gold transition-colors">
                <SafeIcon icon={FiTwitter} className="text-xl" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-serif text-lg text-bone mb-4">Services</h4>
            <ul className="space-y-2 font-body text-blush-light">
              <li><a href="#" className="hover:text-gold transition-colors">Sweetheart Tribute</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Cinematic Love Story</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Forever After Package</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Custom Tributes</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-serif text-lg text-bone mb-4">Contact</h4>
            <div className="space-y-3 font-body text-blush-light">
              <div className="flex items-center">
                <SafeIcon icon={FiMail} className="text-lg mr-3" />
                <span>hello@mrake.com</span>
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiPhone} className="text-lg mr-3" />
                <span>1-800-LOVE-STORY</span>
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiMapPin} className="text-lg mr-3" />
                <span>Proudly serving worldwide</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-navy-light pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="font-body text-blush-light text-sm mb-4 md:mb-0">
            © 2024 Mrake Agency. Crafting love stories with honor and precision.
          </p>
          <div className="flex space-x-6 font-body text-blush-light text-sm">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Military Discounts</a>
          </div>
        </motion.div>

        {/* Final Heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-8"
        >
          <SafeIcon icon={FiHeart} className="text-gold text-3xl animate-float" />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;