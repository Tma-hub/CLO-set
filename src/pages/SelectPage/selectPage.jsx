import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Categories } from './Categories';
import data from '../../../api/data.json';
import './selectPage.css';
import { ImageLink } from '../../components/ImageLink/imageLink';

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

const filterKeyMap = {
  typ: 'typ',
  styl: 'styl',
  sezona: 'sezona',
  material: 'material',
  barva: 'barva',
  odstin: 'odstin',
  vzor: 'vzor',
  strih: 'strih',
  delka: 'delka',
};

export const SelectPage = () => {
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
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredData = data.filter((item) => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true;
      const dataKey = filterKeyMap[key];
      const itemValue = item[dataKey];

      if (Array.isArray(itemValue)) {
        return itemValue.includes(value);
      }
      return itemValue === value;
    });
  });

  const [expanded, setExpanded] = useState({});
  const toggleCategory = (category) => {
    setExpanded((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <>
      <Header />
      <div className="filters">
        {Object.entries(Categories).map(([category, options]) => (
          <div
            className={`filter__button ${expanded[category] ? 'expanded' : ''}`}
            key={category}
          >
            <h4
              onClick={() => toggleCategory(category)}
              className="filter__title"
            >
              <span>{categoryLabels[category]}</span>
              <span className="arrow">{expanded[category] ? '▲' : '▼'}</span>
            </h4>
            <div
              className={`filter__options ${
                expanded[category] ? 'expanded' : 'collapsed'
              }`}
            >
              <label>
                <input
                  type="radio"
                  name={category}
                  value=""
                  checked={filters[category] === ''}
                  onChange={handleChange}
                />
                vše
              </label>
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
          </div>
        ))}
      </div>

      <div className="get_data">
        {filteredData.map((item) =>
          item.img ? <ImageLink key={item.id} item={item} /> : null,
        )}
      </div>
    </>
  );
};
