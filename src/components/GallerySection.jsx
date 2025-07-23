import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCamera, FiHeart, FiMaximize2, FiCalendar } = FiIcons;

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Military Ball 2019",
      date: "September 15, 2019",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
      category: "formal"
    },
    {
      id: 2,
      title: "Homecoming Embrace",
      date: "December 20, 2019",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop",
      category: "reunion"
    },
    {
      id: 3,
      title: "First Anniversary",
      date: "March 10, 2020",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop",
      category: "anniversary"
    },
    {
      id: 4,
      title: "Weekend Together",
      date: "July 4, 2020",
      image: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=400&h=300&fit=crop",
      category: "everyday"
    },
    {
      id: 5,
      title: "Promotion Ceremony",
      date: "November 11, 2020",
      image: "https://images.unsplash.com/photo-1541890289-8d4e6c0e5f1b?w=400&h=300&fit=crop",
      category: "military"
    },
    {
      id: 6,
      title: "Quiet Morning",
      date: "February 14, 2021",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=300&fit=crop",
      category: "everyday"
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
            Gallery of Moments
          </h2>
          <p className="font-body text-lg md:text-xl text-navy-light max-w-3xl mx-auto mb-8">
            From military balls to quiet Sunday mornings, every photograph tells 
            a piece of their story. These are the moments that made it all worthwhile.
          </p>
          
          <div className="bg-navy rounded-2xl p-6 inline-block">
            <p className="font-body text-xl text-blush-light italic">
              "She waited. He wrote. Together, they endured."
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <SafeIcon icon={FiMaximize2} className="text-bone text-3xl" />
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 text-bone opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-serif text-lg mb-1">{item.title}</h3>
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiCalendar} className="text-sm" />
                    <span className="font-body text-sm">{item.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <SafeIcon icon={FiCamera} className="text-navy text-2xl mr-3" />
              <h3 className="font-serif text-2xl text-navy">Smart Organization</h3>
            </div>
            <p className="font-body text-navy-light mb-6">
              Photos are automatically organized by date, event type, and emotional significance. 
              Every image finds its perfect place in their story.
            </p>
            <ul className="space-y-2 font-body text-navy-light">
              <li>• Chronological timeline view</li>
              <li>• Event-based galleries</li>
              <li>• Emotional moment highlighting</li>
              <li>• High-resolution preservation</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-navy rounded-2xl p-8"
          >
            <div className="flex items-center mb-4">
              <SafeIcon icon={FiHeart} className="text-blush text-2xl mr-3" />
              <h3 className="font-serif text-2xl text-bone">Interactive Features</h3>
            </div>
            <p className="font-body text-blush-light mb-6">
              Each photo comes alive with gentle hover effects, detailed captions, 
              and the ability to share favorite moments with family and friends.
            </p>
            <ul className="space-y-2 font-body text-blush-light">
              <li>• Gentle animation effects</li>
              <li>• Detailed story captions</li>
              <li>• Social sharing options</li>
              <li>• Favorite moment collections</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <button className="bg-gold hover:bg-yellow-500 text-navy font-sans font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl">
            Upload Their Photos →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;