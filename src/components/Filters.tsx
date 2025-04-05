import { Listbox } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import { FilterState } from '../types';
import { locations, eventTypes } from '../data/services';

interface FiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
}

export function Filters({ filters, onChange }: FiltersProps) {
  const priceRanges = [
    { label: 'All Prices', value: '0-1000000' },
    { label: 'Under ₹50,000', value: '0-50000' },
    { label: '₹50,000 - ₹1,00,000', value: '50000-100000' },
    { label: '₹1,00,000 - ₹3,00,000', value: '100000-300000' },
    { label: '₹3,00,000+', value: '300000-1000000' },
  ];

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <div className="w-48">
        <Listbox
          value={filters.location}
          onChange={(location) => onChange({ ...filters, location })}
        >
          <div className="relative">
            <Listbox.Button className="w-full px-4 py-2 text-left bg-white rounded-lg shadow flex items-center justify-between">
              <span>{filters.location || 'All Locations'}</span>
              <ChevronDown className="w-4 h-4" />
            </Listbox.Button>
            <Listbox.Options className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg max-h-60 overflow-auto">
              <Listbox.Option
                value=""
                className={({ active }) =>
                  `px-4 py-2 cursor-pointer ${active ? 'bg-purple-50 text-purple-700' : ''}`
                }
              >
                All Locations
              </Listbox.Option>
              {locations.map((location) => (
                <Listbox.Option
                  key={location}
                  value={location}
                  className={({ active }) =>
                    `px-4 py-2 cursor-pointer ${active ? 'bg-purple-50 text-purple-700' : ''}`
                  }
                >
                  {location}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>

      <div className="w-48">
        <Listbox
          value={filters.eventType}
          onChange={(eventType) => onChange({ ...filters, eventType })}
        >
          <div className="relative">
            <Listbox.Button className="w-full px-4 py-2 text-left bg-white rounded-lg shadow flex items-center justify-between">
              <span>{filters.eventType || 'All Event Types'}</span>
              <ChevronDown className="w-4 h-4" />
            </Listbox.Button>
            <Listbox.Options className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg max-h-60 overflow-auto">
              <Listbox.Option
                value=""
                className={({ active }) =>
                  `px-4 py-2 cursor-pointer ${active ? 'bg-purple-50 text-purple-700' : ''}`
                }
              >
                All Event Types
              </Listbox.Option>
              {eventTypes.map((type) => (
                <Listbox.Option
                  key={type}
                  value={type}
                  className={({ active }) =>
                    `px-4 py-2 cursor-pointer ${active ? 'bg-purple-50 text-purple-700' : ''}`
                  }
                >
                  {type}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>

      <div className="w-48">
        <select
          value={`${filters.priceRange[0]}-${filters.priceRange[1]}`}
          onChange={(e) => {
            const [min, max] = e.target.value.split('-').map(Number);
            onChange({ ...filters, priceRange: [min, max] });
          }}
          className="w-full px-4 py-2 bg-white rounded-lg shadow"
        >
          {priceRanges.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}