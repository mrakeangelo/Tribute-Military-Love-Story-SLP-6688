import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiCamera, FiBook, FiPlay } = FiIcons;

const AboutSection = () => {
  return (
    <section className="py-20 bg-bone">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
            A Love Story You Can Scroll Through Forever
          </h2>
          <p className="font-body text-lg md:text-xl text-navy-light max-w-3xl mx-auto leading-relaxed">
            This is a cinematic tribute site to your shared military journey. Every deployment, 
            letter, hug, and milestone captured in one beautiful, scrollable space that honors 
            the love that endured across oceans and time zones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center p-8 bg-white rounded-2xl shadow-lg"
          >
            <div className="w-16 h-16 bg-blush rounded-full flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiHeart} className="text-2xl text-navy" />
            </div>
            <h3 className="font-serif text-xl text-navy mb-3">Emotional Timeline</h3>
            <p className="font-body text-navy-light">
              From first meeting to forever, every moment beautifully chronicled
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-8 bg-white rounded-2xl shadow-lg"
          >
            <div className="w-16 h-16 bg-blush rounded-full flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiCamera} className="text-2xl text-navy" />
            </div>
            <h3 className="font-serif text-xl text-navy mb-3">Photo Gallery</h3>
            <p className="font-body text-navy-light">
              Military balls, homecomings, and everyday moments preserved forever
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center p-8 bg-white rounded-2xl shadow-lg"
          >
            <div className="w-16 h-16 bg-blush rounded-full flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiBook} className="text-2xl text-navy" />
            </div>
            <h3 className="font-serif text-xl text-navy mb-3">Love Letters Vault</h3>
            <p className="font-body text-navy-light">
              Digitized letters and messages from deployments, with optional voiceover
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-navy rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center">
              <SafeIcon icon={FiPlay} className="text-3xl text-navy ml-1" />
            </div>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl text-bone mb-4">
            See a Demo Preview
          </h3>
          <p className="font-body text-blush-light mb-6 max-w-2xl mx-auto">
            Watch how your love story comes to life with cinematic scrolling, 
            gentle animations, and heartfelt storytelling.
          </p>
          <button className="bg-blush hover:bg-blush-dark text-navy font-sans font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            Watch Demo →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;