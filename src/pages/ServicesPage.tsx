import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CategoryButton } from '../components/CategoryButton';
import { ServiceCard } from '../components/ServiceCard';
import { EditServiceModal } from '../components/EditServiceModal';
import { Filters } from '../components/Filters';
import { services, categories } from '../data/services';
import { Service, FilterState } from '../types';

export default function ServicesPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    location: '',
    priceRange: [0, 1000000],
    eventType: '',
    category: 'All',
  });

  const filteredServices = services
    .filter(service => 
      (filters.category === 'All' || service.category === filters.category) &&
      (filters.location === '' || service.location === filters.location) &&
      (filters.eventType === '' || service.eventTypes.includes(filters.eventType)) &&
      service.price >= filters.priceRange[0] &&
      service.price <= filters.priceRange[1]
    );

  const handleEditService = (service: Service) => {
    setEditingService(service);
    setIsModalOpen(true);
  };

  const handleSaveService = (updatedService: Service) => {
    // In a real app, this would update the backend
    console.log('Saving service:', updatedService);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-4"
          >
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-purple-600 hover:text-purple-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleEditService({
                id: services.length + 1,
                category: 'Venues',
                name: '',
                description: '',
                price: 0,
                rating: 5.0,
                address: '',
                location: '',
                image: '',
                eventTypes: [],
              })}
              className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Service
            </motion.button>
          </motion.div>

          <Filters
            filters={filters}
            onChange={setFilters}
          />

          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <CategoryButton
                key={category}
                category={category}
                isSelected={selectedCategory === category}
                onClick={() => {
                  setSelectedCategory(category);
                  setFilters(prev => ({ ...prev, category }));
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onEdit={handleEditService}
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No services found matching your criteria.</p>
          </div>
        )}

        <EditServiceModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingService(null);
          }}
          service={editingService}
          onSave={handleSaveService}
        />
      </div>
    </div>
  );
}