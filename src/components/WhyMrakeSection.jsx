import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiShield, FiAward, FiUsers, FiTool, FiLock } = FiIcons;

const WhyMrakeSection = () => {
  const reasons = [
    {
      icon: FiHeart,
      title: "Emotionally Crafted Design",
      description: "Every element is designed to honor the depth of military love stories with cinematic beauty and emotional resonance."
    },
    {
      icon: FiTool,
      title: "Built with Precision & Ceremony",
      description: "Like military operations, we execute with attention to detail, honor, and the highest standards of craftsmanship."
    },
    {
      icon: FiShield,
      title: "Private, Secure & Long-term",
      description: "Your love story deserves protection. Enterprise-grade security with lifetime hosting guarantees."
    },
    {
      icon: FiUsers,
      title: "Trusted by Service Families",
      description: "Over 500 military families have entrusted us with their most precious memories and love stories."
    }
  ];

  return (
    <section className="py-20 bg-blush-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
            Why Mrake?
          </h2>
          <p className="font-body text-lg md:text-xl text-navy-light max-w-3xl mx-auto">
            We understand that military love stories aren't just relationships—they're 
            journeys of sacrifice, commitment, and unwavering devotion that deserve 
            the highest honor in their telling.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={reason.icon} className="text-blush text-xl" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-navy mb-3">{reason.title}</h3>
                  <p className="font-body text-navy-light leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-navy rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <SafeIcon icon={FiAward} className="text-gold text-4xl mr-3" />
            <h3 className="font-serif text-3xl text-bone">Our Promise</h3>
          </div>
          <p className="font-body text-xl text-blush-light mb-8 max-w-3xl mx-auto italic">
            "We don't just build websites. We craft digital monuments to love that 
            endured the ultimate tests of time, distance, and duty."
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-3">
                <SafeIcon icon={FiLock} className="text-navy text-2xl" />
              </div>
              <h4 className="font-sans font-semibold text-bone mb-2">Lifetime Guarantee</h4>
              <p className="font-body text-blush-light text-sm">Your story, preserved forever</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-3">
                <SafeIcon icon={FiHeart} className="text-navy text-2xl" />
              </div>
              <h4 className="font-sans font-semibold text-bone mb-2">Made with Love</h4>
              <p className="font-body text-blush-light text-sm">Every detail crafted with care</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-3">
                <SafeIcon icon={FiShield} className="text-navy text-2xl" />
              </div>
              <h4 className="font-sans font-semibold text-bone mb-2">Military Trusted</h4>
              <p className="font-body text-blush-light text-sm">Built by those who understand</p>
            </div>
          </div>
          
          <button className="bg-gold hover:bg-yellow-500 text-navy font-sans font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
            Trust Us with Their Story →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMrakeSection;