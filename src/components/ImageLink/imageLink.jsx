// src/components/ImageLink/imageLink.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FavoriteOnes from '../FavoriteOnes/FavoriteOnes';
import './imageLink.css';

export const ImageLink = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const imageRef = useRef(null);
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    const savedFavorite = localStorage.getItem(`favorite_${item.id}`);
    if (savedFavorite !== null) {
      setIsFavorite(JSON.parse(savedFavorite));
    }
  }, [item.id]);

  const handleToggleFavorite = (newState) => {
    setIsFavorite(newState);
    localStorage.setItem(`favorite_${item.id}`, JSON.stringify(newState));
    console.log(
      `Obrázek "${item.title || item.id}" je nyní oblíbený: ${newState}`,
    );
  };

  const handleImageLoad = () => {
    if (imageRef.current) {
      setImageWidth(imageRef.current.offsetWidth);
    }
  };

  return (
    <div className="image-link-wrapper">
      <Link to={'/selected-item/' + item.id} className="image-link-content">
        <img
          // ZDE JE OPRAVA! CESTA NA /fotky/ PRO HLAVNÍ OBRÁZKY
          src={`/fotky/${item.img}`}
          alt={item.title || `Obrázek ${item.id}`}
          ref={imageRef}
          onLoad={handleImageLoad}
        />
      </Link>
      {imageWidth > 0 && (
        <FavoriteOnes
          isFavorite={isFavorite}
          onToggleFavorite={handleToggleFavorite}
          imageWidth={imageWidth}
        />
      )}
      {item.title && <h3 className="image-item-title">{item.title}</h3>}
    </div>
  );
};
