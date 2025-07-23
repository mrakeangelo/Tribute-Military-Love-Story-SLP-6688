import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiMail, FiUsers, FiStar, FiFlag, FiSmile } = FiIcons;

const MessageWallSection = () => {
  const [newMessage, setNewMessage] = useState('');
  const [senderName, setSenderName] = useState('');

  const messages = [
    {
      id: 1,
      message: "Watching you two navigate deployments with such grace and love has been inspiring. Your bond is unbreakable.",
      sender: "Sarah M.",
      relationship: "Navy Wife & Friend",
      hearts: 12,
      icon: FiHeart
    },
    {
      id: 2,
      message: "From shipmates to brothers, I've watched your love story unfold across the seven seas. Fair winds and following seas to you both.",
      sender: "Chief Petty Officer Johnson",
      relationship: "Shipmate",
      hearts: 8,
      icon: FiFlag
    },
    {
      id: 3,
      message: "The way you two light up when you're together... it's what true love looks like. Blessed to call you family.",
      sender: "Mom & Dad",
      relationship: "Family",
      hearts: 15,
      icon: FiSmile
    }
  ];

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    // Handle message submission
    console.log('New message:', { message: newMessage, sender: senderName });
    setNewMessage('');
    setSenderName('');
  };

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
            Write Them a Blessing
          </h2>
          <p className="font-body text-lg md:text-xl text-blush-light max-w-3xl mx-auto">
            Friends, family, and fellow service members can leave heartfelt messages 
            that become part of their eternal love story. Every word adds to their legacy.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-2xl text-bone mb-8 text-center">Messages of Love</h3>
            
            <div className="space-y-6">
              {messages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-blush-light rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                      <SafeIcon icon={msg.icon} className="text-blush text-lg" />
                    </div>
                    <div className="flex-1">
                      <p className="font-body text-navy-light italic mb-4 leading-relaxed">
                        "{msg.message}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-sans font-semibold text-navy">{msg.sender}</p>
                          <p className="font-body text-sm text-navy-light">{msg.relationship}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <SafeIcon icon={FiHeart} className="text-red-500 text-lg" />
                          <span className="font-body text-sm text-navy-light">{msg.hearts}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-2xl text-bone mb-8 text-center">Leave Your Message</h3>
            
            <form onSubmit={handleSubmitMessage} className="bg-blush-light rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <label className="block font-body text-navy mb-2">Your Name</label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-blush-dark focus:outline-none focus:ring-2 focus:ring-navy font-body"
                  placeholder="How should we sign your message?"
                />
              </div>
              
              <div className="mb-6">
                <label className="block font-body text-navy mb-2">Your Message</label>
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-blush-dark focus:outline-none focus:ring-2 focus:ring-navy font-body resize-none"
                  placeholder="Share your blessing, memory, or words of encouragement..."
                />
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="font-body text-sm text-navy-light">Anonymous</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="font-body text-sm text-navy-light">Private</span>
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiHeart} className="text-red-500 text-lg" />
                  <SafeIcon icon={FiMail} className="text-navy text-lg" />
                  <SafeIcon icon={FiFlag} className="text-navy text-lg" />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-navy hover:bg-navy-light text-bone font-sans font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Send Your Blessing →
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gold rounded-2xl p-8 inline-block">
            <div className="flex items-center justify-center mb-4">
              <SafeIcon icon={FiUsers} className="text-navy text-3xl mr-3" />
              <h3 className="font-serif text-2xl text-navy">Community of Love</h3>
            </div>
            <p className="font-body text-navy-light max-w-2xl">
              Every message becomes part of their permanent story, creating a community 
              of love and support that surrounds them forever.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MessageWallSection;