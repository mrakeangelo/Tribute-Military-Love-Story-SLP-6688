import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiMail, FiVolume2, FiVolumeX } = FiIcons;

const HeroSection = () => {
  const [audioEnabled, setAudioEnabled] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-navy via-navy-light to-navy-lighter overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blush rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blush rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blush opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <SafeIcon icon={FiHeart} className="text-2xl" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center mb-4">
            <SafeIcon icon={FiMail} className="text-blush text-3xl mr-3 animate-envelope" />
            <SafeIcon icon={FiHeart} className="text-gold text-4xl mx-2" />
            <SafeIcon icon={FiMail} className="text-blush text-3xl ml-3 animate-envelope" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-bone mb-6 leading-tight">
            Military Love Story
          </h1>
          <p className="font-body text-xl md:text-2xl text-blush-light italic mb-8 max-w-2xl">
            Their story began in service… and never stopped.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12"
        >
          <button className="bg-gold hover:bg-yellow-500 text-navy font-sans font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
            Build Their Love Story →
          </button>
        </motion.div>

        {/* Audio Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center space-x-3 text-blush-light"
        >
          <button
            onClick={() => setAudioEnabled(!audioEnabled)}
            className="flex items-center space-x-2 hover:text-blush transition-colors"
          >
            <SafeIcon icon={audioEnabled ? FiVolume2 : FiVolumeX} className="text-xl" />
            <span className="font-body text-sm">
              {audioEnabled ? 'Ambient music on' : 'Enable ambient music'}
            </span>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-blush-light rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blush-light rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;