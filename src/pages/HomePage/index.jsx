import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderMainPage } from '../../components/HeaderMainPage/HeaderMainPage';
import { Weather } from '../../components/Weather/Weather';
import { RandomPicks } from '../../components/RandomPicks/RandomPicks';
import { Carousel } from '../../components/Carousel/Carousel.jsx'; // NOVÝ IMPORT
import { Favorites } from '../../components/Favorites/Favorites';
import data from '../../../api/data.json';
import { ImageLink } from '../../components/ImageLink/imageLink';

import './style.css';

export const HomePage = () => {
  const [allProducts, setAllProducts] = useState(data);

  const handleAddProduct = (newProduct) => {
    setAllProducts((prevProducts) => [newProduct, ...prevProducts]);
    alert(
      'Nový produkt byl úspěšně přidán (pouze dočasně, po obnovení zmizí)!',
    );
  };

  return (
    <div>
      <div className="homepage-container">
        <HeaderMainPage>
          <Link to="/about-app">
            <button className="about-app">
              <h2>O aplikaci</h2>
            </button>
          </Link>
        </HeaderMainPage>

        <div className="homepage">
          <Weather />
          <RandomPicks />
          {}
          <Carousel onAddProduct={handleAddProduct} />

          <Link to="/select-page">
            <button className="what__to__wear_btn">
              <h1>Co si vezmeš dnes na sebe?</h1>
            </button>
          </Link>
          <Favorites />
        </div>
      </div>
    </div>
  );
};
