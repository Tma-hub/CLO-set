// src/pages/SelectedItemPage/SelectedItemPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import './selectedItemPage.css';
import { Header } from '../../components/Header/Header';
import { useParams, useLocation } from 'react-router-dom';
import { findData, select } from '../../lib/match';
import FavoriteOnes from '../../components/FavoriteOnes/FavoriteOnes';
import { ImageLink } from '../../components/ImageLink/imageLink';
import ShareButtons from '../../components/ShareButtons/ShareButtons';

export const SelectedItemPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const selectedItem = findData({ id: Number(id) });
  const data = select(selectedItem);

  const [isFavorite, setIsFavorite] = useState(false);
  const mainImageRef = useRef(null);
  const [mainImageWidth, setMainImageWidth] = useState(0);

  useEffect(() => {
    if (selectedItem) {
      const savedFavorite = localStorage.getItem(`favorite_${selectedItem.id}`);
      if (savedFavorite !== null) {
        setIsFavorite(JSON.parse(savedFavorite));
      }
    }
  }, [selectedItem]);

  const handleToggleFavorite = (newState) => {
    setIsFavorite(newState);
    if (selectedItem) {
      localStorage.setItem(
        `favorite_${selectedItem.id}`,
        JSON.stringify(newState),
      );
      console.log(
        `Položka "${
          selectedItem.title || selectedItem.id
        }" je nyní oblíbená: ${newState}`,
      );
    }
  };

  const handleMainImageLoad = () => {
    if (mainImageRef.current) {
      setMainImageWidth(mainImageRef.current.offsetWidth);
    }
  };

  if (!selectedItem) {
    return (
      <>
        <Header />
        <div className="selectedItemWrapper">
          <p>Produkt nenalezen.</p>
        </div>
      </>
    );
  }

  // Sestavíme data pro sdílení
  // Používáme window.location.origin pro základní URL vaší aplikace
  const currentItemUrl = `${window.location.origin}${location.pathname}`;
  const currentItemTitle = selectedItem.title || `Položka ${selectedItem.id}`;
  const currentItemImageUrl = `${window.location.origin}/fotky/${selectedItem.img}`;

  return (
    <>
      <Header />
      <div className="selectedItemWrapper">
        <div className="main-item-image-container">
          <img
            className="selectedItem"
            src={`/fotky/${selectedItem.img}`}
            alt={selectedItem.title || `Položka ${selectedItem.id}`}
            ref={mainImageRef}
            onLoad={handleMainImageLoad}
          />
          {mainImageWidth > 0 && (
            <FavoriteOnes
              isFavorite={isFavorite}
              onToggleFavorite={handleToggleFavorite}
              imageWidth={mainImageWidth}
            />
          )}
        </div>

        {selectedItem.title && <h1>{selectedItem.title}</h1>}
        {selectedItem.description && <p>{selectedItem.description}</p>}

        {/* ZDE JE NOVÁ KOMPONENTA SHARE BUTTONS */}
        <ShareButtons
          itemUrl={currentItemUrl}
          itemTitle={currentItemTitle}
          itemImageUrl={currentItemImageUrl}
        />

        <h2 id="h2">Hodí se k sobě:</h2>
        <div className="get_data">
          {data.length > 0
            ? data.map((item) =>
                item.img ? <ImageLink key={item.id} item={item} /> : null,
              )
            : 'Nic tu neni'}
        </div>
      </div>
    </>
  );
};
