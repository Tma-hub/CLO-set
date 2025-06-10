// src/components/AddProductForm/AddProductForm.jsx
import React, { useState, useEffect } from 'react';
import './AddProductForm.css';
import { Categories } from '../../pages/SelectPage/Categories';

export const AddProductForm = ({ onAddProduct, initialTyp = '', onClose }) => {
  const [productData, setProductData] = useState({
    typ: initialTyp,
    barva: [], // Checkboxes
    odstin: '', // Select
    vzor: '', // Select
    material: '', // Select
    styl: [], // Checkboxes
    sezona: [], // Checkboxes
    delka: '', // Select
    strih: '', // Select
  });
  const [productImage, setProductImage] = useState(null);
  const [previewImageUrl, setPreviewImageUrl] = useState('');

  useEffect(() => {
    setProductData((prevData) => ({ ...prevData, typ: initialTyp }));
  }, [initialTyp]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setProductData((prevData) => {
      const currentValues = prevData[name] || [];
      if (checked) {
        return { ...prevData, [name]: [...currentValues, value] };
      } else {
        return {
          ...prevData,
          [name]: currentValues.filter((val) => val !== value),
        };
      }
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductImage(file);
      setPreviewImageUrl(URL.createObjectURL(file));
    } else {
      setProductImage(null);
      setPreviewImageUrl('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = Date.now().toString();

    const newProduct = {
      id: newId,
      typ: productData.typ,
      barva: productData.barva,
      odstin: productData.odstin || null,
      vzor: productData.vzor || null,
      material: productData.material || null,
      styl: productData.styl,
      sezona: productData.sezona,
      delka: productData.delka || null,
      strih: productData.strih || null,
      img: previewImageUrl,
    };

    onAddProduct(newProduct);
    onClose();
  };

  return (
    <div className="add-product-modal-overlay">
      <div className="add-product-modal-content">
        <h3>Přidej nový kousek do svého šatníku</h3>
        <form onSubmit={handleSubmit} className="add-product-form">
          {/* Typ (Select Box) */}
          <div className="form-group">
            <label htmlFor="typ">Typ:</label>
            <select
              id="typ"
              name="typ"
              value={productData.typ}
              onChange={handleChange}
              required
            >
              <option value="">Vyberte typ</option>
              {Categories.typ.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.text}
                </option>
              ))}
            </select>
          </div>

          {/* Barva (Checkboxes) */}
          <div className="form-group">
            <label>Barva:</label>
            <div className="checkbox-group">
              {Categories.barva.map((cat) => (
                <label key={cat.id}>
                  <input
                    type="checkbox"
                    name="barva"
                    value={cat.name}
                    checked={productData.barva.includes(cat.name)}
                    onChange={handleCheckboxChange}
                  />
                  {cat.text}
                </label>
              ))}
            </div>
          </div>

          {/* Odstín (Select Box) */}
          <div className="form-group">
            <label htmlFor="odstin">Odstín:</label>
            <select
              id="odstin"
              name="odstin"
              value={productData.odstin}
              onChange={handleChange}
            >
              <option value="">Vyberte odstín</option>
              {Categories.odstin.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.text}
                </option>
              ))}
            </select>
          </div>

          {/* Vzor (Select Box) */}
          <div className="form-group">
            <label htmlFor="vzor">Vzor:</label>
            <select
              id="vzor"
              name="vzor"
              value={productData.vzor}
              onChange={handleChange}
            >
              <option value="">Vyberte vzor</option>
              {Categories.vzor.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.text}
                </option>
              ))}
            </select>
          </div>

          {/* Materiál*/}
          <div className="form-group">
            <label htmlFor="material">Materiál:</label>
            <select
              id="material"
              name="material"
              value={productData.material}
              onChange={handleChange}
            >
              <option value="">Vyberte materiál</option>
              {Categories.material.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.text}
                </option>
              ))}
            </select>
          </div>

          {/* Styl (Checkboxes) */}
          <div className="form-group">
            <label>Styl:</label>
            <div className="checkbox-group">
              {Categories.styl.map((cat) => (
                <label key={cat.id}>
                  <input
                    type="checkbox"
                    name="styl"
                    value={cat.name}
                    checked={productData.styl.includes(cat.name)}
                    onChange={handleCheckboxChange}
                  />
                  {cat.text}
                </label>
              ))}
            </div>
          </div>

          {/* Sezóna (Checkboxes) */}
          <div className="form-group">
            <label>Sezóna:</label>
            <div className="checkbox-group">
              {Categories.sezona.map((cat) => (
                <label key={cat.id}>
                  <input
                    type="checkbox"
                    name="sezona"
                    value={cat.name}
                    checked={productData.sezona.includes(cat.name)}
                    onChange={handleCheckboxChange}
                  />
                  {cat.text}
                </label>
              ))}
            </div>
          </div>

          {/* Délka (Select Box) */}
          <div className="form-group">
            <label htmlFor="delka">Délka:</label>
            <select
              id="delka"
              name="delka"
              value={productData.delka}
              onChange={handleChange}
            >
              <option value="">Vyberte délku</option>
              {Categories.delka.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.text}
                </option>
              ))}
            </select>
          </div>

          {/* Střih (Select Box) */}
          <div className="form-group">
            <label htmlFor="strih">Střih:</label>
            <select
              id="strih"
              name="strih"
              value={productData.strih}
              onChange={handleChange}
            >
              <option value="">Vyberte střih</option>
              {Categories.strih.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.text}
                </option>
              ))}
            </select>
          </div>

          {/* Vstup pro obrázek */}
          <div className="form-group">
            <label htmlFor="productImage">Obrázek produktu:</label>
            <input
              type="file"
              id="productImage"
              name="productImage"
              accept="image/jpeg,image/png"
              onChange={handleImageChange}
              required
            />
            {previewImageUrl && (
              <div className="image-preview-container">
                <img
                  src={previewImageUrl}
                  alt="Náhled obrázku"
                  className="image-preview"
                />
              </div>
            )}
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">
              Přidat produkt
            </button>
            <button type="button" className="cancel-button" onClick={onClose}>
              Zrušit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
