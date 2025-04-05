import { motion } from 'framer-motion';
import { MapPin, Star, Edit } from 'lucide-react';
import { ServiceCardProps } from '../types';

export function ServiceCard({ service, onEdit }: ServiceCardProps) {
  // Format price in Indian format (e.g., 1,00,000)
  const formatPrice = (price: number) => {
    return price.toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden relative"
    >
      <button
        onClick={() => onEdit(service)}
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 z-10"
      >
        <Edit className="w-4 h-4 text-gray-600" />
      </button>

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
        <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {service.eventTypes.map((type) => (
            <span
              key={type}
              className="px-2 py-1 bg-purple-50 text-purple-600 rounded-full text-xs"
            >
              {type}
            </span>
          ))}
        </div>

        <div className="flex items-start gap-2 text-gray-500 mb-4">
          <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm">{service.address}</p>
            <p className="text-sm">{service.location}</p>
          </div>
        </div>

        {service.capacity && (
          <p className="text-sm text-gray-600 mb-4">
            Capacity: {service.capacity.toLocaleString()} guests
          </p>
        )}

        {service.amenities && (
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Amenities:</p>
            <div className="flex flex-wrap gap-2">
              {service.amenities.map((amenity) => (
                <span
                  key={amenity}
                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-6">
          <span className="text-2xl font-bold text-purple-600">
            {formatPrice(service.price)}
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
  );
}