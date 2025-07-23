import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiStar, FiCrown, FiCheck, FiGift } = FiIcons;

const PricingSection = () => {
  const packages = [
    {
      name: "Sweetheart Tribute",
      price: "$149",
      icon: FiHeart,
      color: "bg-blush",
      textColor: "text-navy",
      popular: false,
      features: [
        "Pre-designed beautiful template",
        "Photo upload & organization",
        "Basic timeline creation",
        "Mobile & desktop responsive",
        "Lifetime hosting included",
        "Admin dashboard access"
      ]
    },
    {
      name: "Cinematic Love Story",
      price: "$599",
      icon: FiStar,
      color: "bg-gold",
      textColor: "text-navy",
      popular: true,
      features: [
        "Fully customized story timeline",
        "Professional photo gallery",
        "Love letters digitization",
        "Custom animations & effects",
        "Message wall for family/friends",
        "Lifetime hosting & support",
        "Admin dashboard with analytics"
      ]
    },
    {
      name: "Forever After Package",
      price: "$1,199",
      icon: FiCrown,
      color: "bg-navy",
      textColor: "text-bone",
      popular: false,
      features: [
        "Full white-glove design & build",
        "Love letters vault with voiceover",
        "Interactive message wall",
        "Professional voiceover narration",
        "Custom domain included",
        "Priority support & updates",
        "Anniversary milestone updates",
        "Family sharing & privacy controls"
      ]
    }
  ];

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
            Choose Their Perfect Tribute
          </h2>
          <p className="font-body text-lg md:text-xl text-navy-light max-w-3xl mx-auto">
            Every love story deserves to be told beautifully. Choose the package 
            that honors their journey with the depth and elegance it deserves.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 shadow-xl ${
                pkg.popular ? 'ring-4 ring-gold transform scale-105' : ''
              }`}
              style={{ backgroundColor: pkg.color === 'bg-blush' ? '#fcd5ce' : pkg.color === 'bg-gold' ? '#fbbf24' : '#0a192f' }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-navy text-bone px-4 py-2 rounded-full font-sans font-semibold text-sm">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  pkg.color === 'bg-navy' ? 'bg-gold' : 'bg-navy'
                }`}>
                  <SafeIcon icon={pkg.icon} className={`text-2xl ${
                    pkg.color === 'bg-navy' ? 'text-navy' : 'text-bone'
                  }`} />
                </div>
                <h3 className={`font-serif text-2xl mb-2 ${pkg.textColor}`}>
                  {pkg.name}
                </h3>
                <div className={`${pkg.textColor} mb-4`}>
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-lg opacity-75"> one-time</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={`flex items-start space-x-3 ${pkg.textColor}`}>
                    <SafeIcon icon={FiCheck} className="text-lg mt-0.5 flex-shrink-0" />
                    <span className="font-body text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full font-sans font-semibold transition-all duration-300 transform hover:scale-105 ${
                pkg.color === 'bg-navy' 
                  ? 'bg-gold hover:bg-yellow-500 text-navy' 
                  : 'bg-navy hover:bg-navy-light text-bone'
              }`}>
                Choose This Package →
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-blush-light rounded-2xl p-8 inline-block">
            <div className="flex items-center justify-center mb-4">
              <SafeIcon icon={FiGift} className="text-navy text-3xl mr-3" />
              <h3 className="font-serif text-2xl text-navy">All Packages Include</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="font-body text-navy font-semibold">Lifetime Hosting</p>
                <p className="font-body text-navy-light text-sm">Forever preserved</p>
              </div>
              <div>
                <p className="font-body text-navy font-semibold">Mobile & Desktop</p>
                <p className="font-body text-navy-light text-sm">Responsive design</p>
              </div>
              <div>
                <p className="font-body text-navy font-semibold">Admin Dashboard</p>
                <p className="font-body text-navy-light text-sm">Full control</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;