export interface Service {
  id: number;
  category: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  address: string;
  location: string;
  image: string;
  eventTypes: string[];
  capacity?: number;
  amenities?: string[];
}

export interface ServiceCardProps {
  service: Service;
  onEdit: (service: Service) => void;
}

export interface CategoryButtonProps {
  category: string;
  isSelected: boolean;
  onClick: () => void;
}

export interface FilterState {
  location: string;
  priceRange: [number, number];
  eventType: string;
  category: string;
}

export interface EditServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
  onSave: (service: Service) => void;
}

export interface PriceRangeProps {
  value: [number, number];
  onChange: (value: [number, number]) => void;
  min: number;
  max: number;
}