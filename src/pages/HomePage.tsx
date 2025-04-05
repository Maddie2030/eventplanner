import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Users, Music, Camera, Utensils, MapPin, PartyPopper, Heart } from 'lucide-react';

const services = [
  {
    icon: <Calendar className="w-8 h-8" />,
    title: 'Event Planning',
    description: 'Comprehensive event planning and coordination services',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Venue Selection',
    description: 'Find the perfect location for your special event',
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: 'Entertainment',
    description: 'Live bands, DJs, and performers for any occasion',
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: 'Photography',
    description: 'Professional photography and videography services',
  },
  {
    icon: <Utensils className="w-8 h-8" />,
    title: 'Catering',
    description: 'Exquisite dining experiences and custom menus',
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: 'Decor & Design',
    description: 'Beautiful decorations and themed setups',
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-screen flex items-center justify-center text-center px-4"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80"
            alt="Event Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <PartyPopper className="w-16 h-16 mx-auto text-purple-600 mb-6" />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-purple-900 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Create Unforgettable Moments
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-700 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Professional event planning services for every special occasion
          </motion.p>
          <motion.button
            className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/services')}
          >
            Start Planning
          </motion.button>
        </div>
      </motion.header>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Heart className="w-12 h-12 mx-auto text-pink-500 mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg">Everything you need for your perfect event</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-purple-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="bg-purple-900 text-white py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Something Special?</h2>
          <p className="text-purple-200 text-lg mb-8">Let's work together to bring your vision to life</p>
          <motion.button
            className="bg-white text-purple-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}