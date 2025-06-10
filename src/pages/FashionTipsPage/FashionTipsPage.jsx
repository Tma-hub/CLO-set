// src/pages/FashionTipsPage/FashionTipsPage.jsx
import React from 'react';
import './FashionTipsPage.css';
import fashionTipsData from '../../data/fashionTips.json';
import { Header } from '../../components/Header/Header';
import { Link } from 'react-router-dom';

export const FashionTipsPage = () => {
  return (
    <>
      <Header />
      <div className="fashion-tips-page">
        {/* Hlavička stránky s tlačítkem Zpět na hlavní stránku */}

        {/* Obsah stránky s tipy */}
        <div className="tips-content-wrapper">
          <h1 className="page-title">Módní tipy a inspirace</h1>
          <p className="page-description">
            Zde najdete výběr zajímavých článků a inspirace z oblasti udržitelné
            módy, péče o oblečení a obecných tipů pro váš šatník. Klikněte na
            "Více informací" a nechte se inspirovat!
          </p>

          {}
          <div className="tips-grid">
            {fashionTipsData.map((tip) => (
              <div key={tip.id} className="tip-card">
                {}
                {tip.imageUrl && (
                  <div className="tip-image-container">
                    <img
                      src={tip.imageUrl}
                      alt={tip.title}
                      className="tip-image"
                    />
                  </div>
                )}
                {}
                <div className="tip-info">
                  <span className="tip-category">{tip.category}</span> {}
                  <h2 className="tip-title">{tip.title}</h2> {}
                  <p className="tip-description">{tip.description}</p> {}
                  {}
                  <a
                    href={tip.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tip-link-btn"
                  >
                    Více informací
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
