import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Categories } from './Categories';
import data from '../../../api/data.json';
import './selectPage.css';
import { ImageLink } from '../../components/ImageLink/imageLink';

export const SelectPage = () => {
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
          <div className="filter__button" key={category}>
            <h4
              onClick={() => toggleCategory(category)}
              className="filter__title"
            >
              <span>{category}</span>
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
