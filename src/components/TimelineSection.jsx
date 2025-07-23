import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiMail, FiAnchor, FiHome, FiUsers, FiStar, FiArrowRight } = FiIcons;

const TimelineSection = () => {
  const timelineItems = [
    {
      icon: FiHeart,
      title: "Where They Met",
      description: "That first glance across the base, when everything changed forever",
      color: "bg-blush",
      textColor: "text-navy"
    },
    {
      icon: FiMail,
      title: "First Letter",
      description: "Words on paper that bridged the distance between hearts",
      color: "bg-gold",
      textColor: "text-navy"
    },
    {
      icon: FiAnchor,
      title: "First Deployment",
      description: "The separation that taught them love knows no boundaries",
      color: "bg-navy",
      textColor: "text-bone"
    },
    {
      icon: FiStar,
      title: "Homecoming Moment",
      description: "The embrace that made all the waiting worthwhile",
      color: "bg-blush-dark",
      textColor: "text-navy"
    },
    {
      icon: FiUsers,
      title: "Wedding Day",
      description: "Two hearts, one promise, witnessed by those who served alongside",
      color: "bg-gold",
      textColor: "text-navy"
    },
    {
      icon: FiHome,
      title: "First Home",
      description: "Creating a sanctuary where love could finally stay put",
      color: "bg-navy-light",
      textColor: "text-bone"
    },
    {
      icon: FiArrowRight,
      title: "Today & Forever",
      description: "The story continues, stronger with each passing day",
      color: "bg-blush",
      textColor: "text-navy"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blush-light to-bone">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
            From First Letters to Forever
          </h2>
          <p className="font-body text-lg md:text-xl text-navy-light max-w-3xl mx-auto">
            Every love story has chapters. Theirs was written across continents, 
            through deployments, and in the quiet moments between.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-navy-light opacity-20 hidden md:block"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:mb-0 mb-4`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
                      {item.title}
                    </h3>
                    <p className="font-body text-navy-light">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center shadow-xl`}>
                    <SafeIcon icon={item.icon} className={`text-2xl ${item.textColor}`} />
                  </div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-navy rounded-3xl p-8 md:p-12 inline-block">
            <p className="font-body text-xl md:text-2xl text-blush-light italic mb-6">
              "Every milestone becomes a chapter in their forever story"
            </p>
            <button className="bg-gold hover:bg-yellow-500 text-navy font-sans font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
              Start Building Their Timeline →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;