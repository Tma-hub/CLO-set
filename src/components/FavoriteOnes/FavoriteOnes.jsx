// src/components/FavoriteOnes/FavoriteOnes.jsx
import React, { useState, useEffect } from 'react';
import './FavoriteOnes.css';

const FavoriteOnes = ({
  isFavorite: initialIsFavorite,
  onToggleFavorite,
  imageWidth,
}) => {
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);

  useEffect(() => {
    setIsFavorite(initialIsFavorite);
  }, [initialIsFavorite]);

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const newState = !isFavorite;
    setIsFavorite(newState);
    if (onToggleFavorite) {
      onToggleFavorite(newState);
    }
  };

  const buttonSize = imageWidth ? Math.max(24, imageWidth * 0.08) : 40;

  const iconSize = buttonSize * 0.6;

  return (
    <button
      className="favorite-button"
      onClick={handleClick}
      style={{
        width: `${buttonSize}px`,
        height: `${buttonSize}px`,
        top: '1px',
        right: '1px',
      }}
    >
      <img
        // ZDE JE OPRAVA! CESTA NA /img/ PRO IKONY SRDCE
        src={isFavorite ? '/img/srdce_clicked.png' : '/img/srdce_obrys.png'}
        alt="Oblíbené"
        className="favorite-icon"
        style={{
          width: `${iconSize}px`,
          height: `${iconSize}px`,
        }}
      />
    </button>
  );
};

export default FavoriteOnes;
