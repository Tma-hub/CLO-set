import { useState } from 'react';
import { Categories } from './Categories';

const categoryLabels = {
  typ: 'Typ',
  styl: 'Styl',
  sezona: 'Sezóna',
  material: 'Materiál',
  barva: 'Barva',
  odstin: 'Odstín',
  vzor: 'Vzor',
  strih: 'Střih',
  delka: 'Délka',
};

export const Filter = ({ data, onFilter }) => {
  const [filters, setFilters] = useState({
    typ: '',
    styl: '',
    sezona: '',
    material: '',
    barva: '',
    odstin: '',
    vzor: '',
    strih: '',
    delka: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    if (onFilter) {
      const filtered = filterData(data, newFilters);
      onFilter(filtered);
    }
  };

  const filterData = (data, filters) => {
    return data.filter((item) => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true;

        const itemValue = item[key];

        if (Array.isArray(itemValue)) {
          return itemValue.includes(value);
        }

        return itemValue === value;
      });
    });
  };

  return (
    <div className="filters">
      {Object.entries(Categories).map(([category, options]) => (
        <div className="filter__button" key={category}>
          <h4>{categoryLabels[category] || category}</h4>

          {/* Možnost vše */}
          <label>
            <input
              type="radio"
              name={category}
              value=""
              checked={filters[category] === ''}
              onChange={handleChange}
            />
            Vše
          </label>

          {/* Ostatní možnosti */}
          {options.map((option) => (
            <label key={option.name}>
              <input
                type="radio"
                name={category}
                value={option.name}
                checked={filters[category] === option.name}
                onChange={handleChange}
              />
              {option.text}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};
