import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header/Header.jsx';
import { ImageLink } from '../../components/ImageLink/imageLink.jsx';
import data from '../../../api/data.json';
import './favoritesPage.css';

export const FavoritesPage = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const loadFavorites = () => {
      const allItems = data;
      const loadedFavoriteIds = [];

      allItems.forEach((item) => {
        const isFavorite = localStorage.getItem(`favorite_${item.id}`);
        if (isFavorite === 'true') {
          loadedFavoriteIds.push(item.id);
        }
      });

      const filteredFavorites = allItems.filter((item) =>
        loadedFavoriteIds.includes(item.id),
      );
      setFavoriteItems(filteredFavorites);
    };

    loadFavorites();

    window.addEventListener('storage', loadFavorites);

    return () => {
      window.removeEventListener('storage', loadFavorites);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="favorites-page-content">
        <h2>Vaše oblíbené položky</h2>
        {favoriteItems.length > 0 ? (
          <div className="favorites-grid">
            {favoriteItems.map((item) => (
              <ImageLink key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p>
            Zatím nemáte žádné oblíbené položky. Začněte je lajkovat na hlavní
            stránce!
          </p>
        )}
      </div>
    </>
  );
};
