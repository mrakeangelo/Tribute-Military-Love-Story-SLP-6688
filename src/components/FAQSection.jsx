import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlus, FiMinus, FiHelpCircle } = FiIcons;

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "Can I write the story myself?",
      answer: "Absolutely! You can write your own story, or we can help craft it based on your photos, letters, and memories. Our Cinematic and Forever After packages include professional storytelling assistance to help bring your journey to life with the perfect words."
    },
    {
      question: "Can I upload letters from past years?",
      answer: "Yes! We can digitize and beautifully present letters from any time period. Our Love Letters Vault feature preserves handwritten letters with high-resolution scanning, envelope animations, and optional voiceover reading to bring them to life."
    },
    {
      question: "Is it private?",
      answer: "Your privacy is our priority. You control exactly who can see your story - make it completely private, share with family only, or open it to friends. We also offer password protection and unlock date features for special occasions."
    },
    {
      question: "Can I gift this to my spouse?",
      answer: "This makes an incredibly meaningful gift! Many of our clients surprise their partners with a completed love story tribute. We can work with you discreetly to gather materials and create the perfect anniversary, homecoming, or milestone surprise."
    },
    {
      question: "Do you offer military discounts?",
      answer: "Yes! We offer a 15% discount for active duty military, veterans, and military chaplains. We also have special pricing for Gold Star families. Contact us with your military ID for discount verification."
    },
    {
      question: "How long does it take to complete?",
      answer: "Timeline depends on your package: Sweetheart Tribute (1-2 weeks), Cinematic Love Story (3-4 weeks), Forever After Package (6-8 weeks). We'll provide a detailed timeline and keep you updated throughout the process."
    },
    {
      question: "What if I want to add more content later?",
      answer: "Your love story continues to grow! All packages include admin dashboard access so you can add new photos and memories. Our higher-tier packages include anniversary updates and ongoing support for major milestones."
    },
    {
      question: "Is the hosting really lifetime?",
      answer: "Yes, completely. Your love story tribute will be hosted and maintained for life at no additional cost. We believe love stories should be preserved forever, and we stand behind that promise with enterprise-grade hosting and security."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-bone">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <SafeIcon icon={FiHelpCircle} className="text-navy text-4xl mr-3" />
            <h2 className="font-serif text-4xl md:text-5xl text-navy">
              Questions About Their Story?
            </h2>
          </div>
          <p className="font-body text-lg md:text-xl text-navy-light max-w-3xl mx-auto">
            We understand this is more than a website—it's their legacy. 
            Here are answers to the questions military families ask most.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="mb-4"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-blush-light transition-colors duration-200"
                >
                  <h3 className="font-serif text-lg md:text-xl text-navy pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <SafeIcon 
                      icon={openFAQ === index ? FiMinus : FiPlus} 
                      className="text-navy text-xl" 
                    />
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="font-body text-navy-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-blush-light rounded-2xl p-8 inline-block">
            <h3 className="font-serif text-2xl text-navy mb-4">Still Have Questions?</h3>
            <p className="font-body text-navy-light mb-6">
              We're here to help you create the perfect tribute to their love story.
            </p>
            <button className="bg-navy hover:bg-navy-light text-bone font-sans font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
              Talk to Our Team →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;