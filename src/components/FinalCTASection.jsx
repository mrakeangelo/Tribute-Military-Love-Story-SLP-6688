import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiMail, FiStar, FiAnchor } = FiIcons;

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy-lighter relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blush rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gold rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blush opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <SafeIcon icon={i % 2 === 0 ? FiHeart : FiMail} className="text-2xl animate-envelope" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-8">
            <SafeIcon icon={FiAnchor} className="text-blush text-4xl mr-4" />
            <SafeIcon icon={FiHeart} className="text-gold text-5xl mx-2" />
            <SafeIcon icon={FiStar} className="text-blush text-4xl ml-4" />
          </div>
          
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-bone mb-8 leading-tight">
            Preserve the Love Story<br />
            <span className="text-blush">They Built in Uniform</span>
          </h2>
          
          <p className="font-body text-xl md:text-2xl text-blush-light max-w-4xl mx-auto mb-12 leading-relaxed">
            This is more than a website. It's their forever—a digital monument to a love 
            that survived deployments, distance, and duty. Every sacrifice honored, 
            every moment cherished, every letter preserved.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-16"
        >
          <button className="bg-gold hover:bg-yellow-500 text-navy font-sans font-bold px-12 py-6 rounded-full text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl mb-8">
            Start Their Tribute →
          </button>
          
          <p className="font-body text-blush-light text-lg">
            Join 500+ military families who've trusted us with their love stories
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-blush-light rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <h3 className="font-serif text-2xl md:text-3xl text-navy mb-6">
            A Love Story That Deserves to Be Remembered
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiMail} className="text-blush text-2xl" />
              </div>
              <h4 className="font-sans font-semibold text-navy mb-2">Every Letter</h4>
              <p className="font-body text-navy-light text-sm">Preserved with love and honor</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiHeart} className="text-blush text-2xl" />
              </div>
              <h4 className="font-sans font-semibold text-navy mb-2">Every Moment</h4>
              <p className="font-body text-navy-light text-sm">Captured in cinematic beauty</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiStar} className="text-blush text-2xl" />
              </div>
              <h4 className="font-sans font-semibold text-navy mb-2">Every Sacrifice</h4>
              <p className="font-body text-navy-light text-sm">Honored for generations</p>
            </div>
          </div>
          
          <p className="font-body text-navy-light italic text-lg mb-6">
            "Distance taught us how to love stronger. Their story deserves to be told."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-navy hover:bg-navy-light text-bone font-sans font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
              Get Started Now →
            </button>
            <button className="border-2 border-navy text-navy hover:bg-navy hover:text-bone font-sans font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
              Schedule a Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;