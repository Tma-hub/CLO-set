import { Categories } from './Categories';

export const FilterOption = ({ name, options, labels = {}, onChange }) => {
  return (
    <div className="product__name">
      <h4>{name}</h4>
      {options.map((option) => (
        <label key={option}>
          <input type="radio" name={name} value={option} onChange={onChange} />
          {labels[option] || option}
        </label>
      ))}
    </div>
  );
};

export const Filter = ({}) => {
  return (
    <div className="filters">
      {Object.entries(Categories).map(([category, options]) => (
        <div className="filter__button" key={category}>
          <h4>{category}</h4>
          {options.map((option) => (
            <label key={option}>
              <input type="radio" name={option.name} value={option.name} />
              {option.text}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};
