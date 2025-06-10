import React from 'react';
import './ShareButtons.css';

const ShareButtons = ({ itemUrl, itemTitle, itemImageUrl }) => {
  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      itemUrl,
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const shareOnPinterest = () => {
    const url = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
      itemUrl,
    )}&media=${encodeURIComponent(
      itemImageUrl,
    )}&description=${encodeURIComponent(itemTitle)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const shareOnInstagram = () => {
    alert(
      'Pro sdílení na Instagramu doporučujeme uložit obrázek a sdílet jej z aplikace Instagram.',
    );
  };

  return (
    <div className="share-buttons-container">
      <button className="share-button facebook" onClick={shareOnFacebook}>
        <img src="/img/facebook.png" alt="Sdílet na Facebooku" />
      </button>
      <button className="share-button pinterest" onClick={shareOnPinterest}>
        <img src="/img/pinterest.png" alt="Sdílet na Pinterestu" />
      </button>
      {/* Instagram button - nemá přímé webové sdílení */}
      <button className="share-button instagram" onClick={shareOnInstagram}>
        <img src="/img/instagram.png" alt="Sdílet na Instagramu" />
      </button>
    </div>
  );
};

export default ShareButtons;
