import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  'All',
  'Venues',
  'Catering',
  'Photography',
  'Entertainment',
  'Decoration',
];

const services = [
  {
    id: 1,
    category: 'Venues',
    name: 'Grand Plaza Hotel',
    description: 'Luxurious ballroom with panoramic city views',
    price: 5000,
    rating: 4.8,
    address: '123 Luxury Lane',
    location: 'Downtown Manhattan',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    category: 'Venues',
    name: 'Riverside Gardens',
    description: 'Beautiful outdoor venue by the river',
    price: 3500,
    rating: 4.6,
    address: '456 River Road',
    location: 'Brooklyn',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    category: 'Catering',
    name: 'Gourmet Delights',
    description: 'Premium catering service with international cuisine',
    price: 75,
    rating: 4.9,
    address: '789 Culinary Ave',
    location: 'Queens',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    category: 'Photography',
    name: 'Capture Moments',
    description: 'Award-winning photography team',
    price: 2500,
    rating: 4.7,
    address: '321 Studio Street',
    location: 'Manhattan',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    category: 'Entertainment',
    name: 'Rhythm Band',
    description: 'Live band performing various genres',
    price: 1500,
    rating: 4.5,
    address: '654 Music Row',
    location: 'Brooklyn',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    category: 'Decoration',
    name: 'Elegant Events',
    description: 'Luxury event decoration service',
    price: 2000,
    rating: 4.8,
    address: '987 Design District',
    location: 'Manhattan',
    image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80',
  },
];

function ServicesPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center mb-8"
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-purple-600 hover:text-purple-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-8"
        >
          Available Services
        </motion.h1>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-purple-100'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-purple-600">{service.category}</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-600">{service.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-start gap-2 text-gray-500 mb-4">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <div>
                    <p className="text-sm">{service.address}</p>
                    <p className="text-sm">{service.location}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-600">
                    ${service.price}
                    {service.category === 'Catering' && <span className="text-sm">/person</span>}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;