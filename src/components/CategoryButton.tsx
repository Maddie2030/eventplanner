import { motion } from 'framer-motion';
import { CategoryButtonProps } from '../types';

export function CategoryButton({ category, isSelected, onClick }: CategoryButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${
        isSelected
          ? 'bg-purple-600 text-white'
          : 'bg-white text-gray-700 hover:bg-purple-100'
      }`}
    >
      {category}
    </motion.button>
  );
}