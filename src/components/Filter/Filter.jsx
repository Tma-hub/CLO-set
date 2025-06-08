import { Categories } from './Categories';
import { useState } from 'react';

export const Filter = ({ data }) => {
  const [filters, setFilters] = useState({
    barva: '',
    odstin: '',
    typ: '',
    vzor: '',
    material: '',
    styl: '',
    sezona: '',
    delka: '',
    strih: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredData = data.filter((item) => {
    if (filters.typ && item.typ !== filters.typ) return false;
    if (filters.barva && !item.barva?.includes(filters.barva)) return false;
    if (filters.material && item.material !== filters.material) return false;
    if (filters.vzor && item.vzor !== filters.vzor) return false;
    if (filters.styl && item.styl !== filters.styl) return false;
    if (filters.sezona && !item.sezona?.includes(filters.sezona)) return false;
    if (filters.delka && item.delka !== filters.delka) return false;
    return true;
  });

  return (
    <div className="filters">
      {Object.entries(Categories).map(([category, options]) => (
        <div className="filter__button" key={category}>
          <h4>{category}</h4>
          {options.map((option) => (
            <label key={option.name}>
              <input
                type="radio"
                name={option.name}
                value={option.name}
                /*                checked={filters[category] === option.name} */
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
