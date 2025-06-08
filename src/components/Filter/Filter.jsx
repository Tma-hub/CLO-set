export const Filter = ({ name, options, labels = {}, onChange }) => {
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
