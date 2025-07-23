import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiHeart, FiLock, FiVolume2, FiCalendar } = FiIcons;

const LoveLettersSection = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);

  const letters = [
    {
      id: 1,
      date: "March 15, 2019",
      title: "First Week at Sea",
      preview: "My dearest love, the ocean stretches endlessly before us...",
      status: "unlocked"
    },
    {
      id: 2,
      date: "June 2, 2019",
      title: "Halfway Through",
      preview: "I count the days, the hours, the heartbeats until...",
      status: "unlocked"
    },
    {
      id: 3,
      date: "August 20, 2019",
      title: "Almost Home",
      preview: "The stars here remind me of the ones we wished upon...",
      status: "locked"
    }
  ];

  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-bone mb-6">
            Love Letters Vault
          </h2>
          <p className="font-body text-lg md:text-xl text-blush-light max-w-3xl mx-auto">
            Every word written in longing, every promise made across the miles. 
            These letters are the heartbeat of their story, preserved forever.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {letters.map((letter, index) => (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-bone rounded-2xl p-6 shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                letter.status === 'locked' ? 'opacity-70' : ''
              }`}
              onClick={() => letter.status === 'unlocked' && setSelectedLetter(letter)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiMail} className="text-navy text-xl" />
                  <span className="font-body text-sm text-navy-light">{letter.date}</span>
                </div>
                {letter.status === 'locked' && (
                  <SafeIcon icon={FiLock} className="text-navy-light text-lg" />
                )}
              </div>
              
              <h3 className="font-serif text-xl text-navy mb-3">{letter.title}</h3>
              <p className="font-body text-navy-light italic">
                {letter.preview}
              </p>
              
              {letter.status === 'unlocked' && (
                <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-blush-light">
                  <button className="flex items-center space-x-2 text-navy hover:text-navy-light transition-colors">
                    <SafeIcon icon={FiVolume2} className="text-lg" />
                    <span className="font-body text-sm">Listen</span>
                  </button>
                  <button className="flex items-center space-x-2 text-navy hover:text-navy-light transition-colors">
                    <SafeIcon icon={FiHeart} className="text-lg" />
                    <span className="font-body text-sm">Favorite</span>
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-blush rounded-2xl p-8"
          >
            <div className="flex items-center mb-4">
              <SafeIcon icon={FiMail} className="text-navy text-2xl mr-3" />
              <h3 className="font-serif text-2xl text-navy">Digitized Letters</h3>
            </div>
            <p className="font-body text-navy-light mb-6">
              Original handwritten letters carefully digitized and preserved, 
              complete with envelope animations and authentic presentation.
            </p>
            <ul className="space-y-2 font-body text-navy-light">
              <li>• High-resolution scanning</li>
              <li>• Envelope flip animations</li>
              <li>• Handwriting preservation</li>
              <li>• Timeline organization</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gold rounded-2xl p-8"
          >
            <div className="flex items-center mb-4">
              <SafeIcon icon={FiVolume2} className="text-navy text-2xl mr-3" />
              <h3 className="font-serif text-2xl text-navy">Voiceover Reading</h3>
            </div>
            <p className="font-body text-navy-light mb-6">
              Optional professional voiceover or personal recordings bring 
              the letters to life with emotional depth and authenticity.
            </p>
            <ul className="space-y-2 font-body text-navy-light">
              <li>• Professional narration</li>
              <li>• Personal voice recordings</li>
              <li>• Ambient background music</li>
              <li>• Emotional pacing</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-blush-light rounded-3xl p-8 md:p-12 inline-block">
            <div className="flex items-center justify-center mb-4">
              <SafeIcon icon={FiCalendar} className="text-navy text-3xl mr-3" />
              <h3 className="font-serif text-2xl text-navy">Privacy & Unlock Dates</h3>
            </div>
            <p className="font-body text-navy-light mb-6 max-w-2xl">
              Set special unlock dates for anniversary letters, or keep private messages 
              secure with password protection. Your love story, your privacy.
            </p>
            <button className="bg-navy hover:bg-navy-light text-bone font-sans font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
              Explore Letter Features →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLettersSection;