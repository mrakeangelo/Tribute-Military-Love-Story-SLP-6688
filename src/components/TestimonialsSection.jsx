import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiMail, FiStar, FiQuote } = FiIcons;

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "She cried reading it. So did I. This wasn't just a website—it was our entire love story brought to life in the most beautiful way possible.",
      author: "Lieutenant Commander Sarah Johnson",
      relationship: "Navy Wife",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1f9?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      quote: "It made our anniversary unforgettable. Seeing our journey from deployment letters to family photos... there wasn't a dry eye in the room.",
      author: "Chief Petty Officer Mike Rodriguez",
      relationship: "20 Years Navy",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      quote: "Better than any gift I've ever given. The way it captured not just our photos, but our feelings... it's like having our love story in a museum.",
      author: "Emma Chen",
      relationship: "Marine Corps Spouse",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-navy to-navy-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-bone mb-6">
            Love Letters from Our Families
          </h2>
          <p className="font-body text-lg md:text-xl text-blush-light max-w-3xl mx-auto">
            These aren't just testimonials—they're love letters from military families 
            who trusted us with their most precious memories.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-blush-light rounded-2xl p-8 shadow-xl relative"
            >
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiQuote} className="text-navy text-lg" />
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="text-gold text-lg" />
                  ))}
                </div>
                <p className="font-body text-navy-light italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-sans font-semibold text-navy">{testimonial.author}</p>
                  <p className="font-body text-sm text-navy-light">{testimonial.relationship}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gold rounded-2xl p-8 inline-block">
            <div className="flex items-center justify-center mb-4">
              <SafeIcon icon={FiHeart} className="text-navy text-3xl mr-3" />
              <h3 className="font-serif text-2xl text-navy">Join Our Family</h3>
            </div>
            <p className="font-body text-navy-light max-w-2xl mb-6">
              Over 500 military families have trusted us with their love stories. 
              Each one unique, each one treasured, each one told with honor.
            </p>
            <button className="bg-navy hover:bg-navy-light text-bone font-sans font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
              Start Your Story →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;