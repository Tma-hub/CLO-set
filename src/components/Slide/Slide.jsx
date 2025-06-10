import React from 'react';
import './Slide.css';

const styleActive = {
  transform: 'none',
  zIndex: 1,
  filter: 'none',
  opacity: 1,
};

export const Slide = ({ slide, slideIndex, activeIndex, onClick }) => {
  let style = {};
  if (slideIndex === activeIndex) {
    style = styleActive;
  } else {
    const absDiff = Math.abs(slideIndex - activeIndex);
    style = {
      zIndex: -absDiff,

      opacity: absDiff === 1 ? 0.8 : 0,
    };

    if (slideIndex > activeIndex) {
      style.transform = `translateX(${120 * absDiff}px) scale(${
        1 - 0.2 * absDiff
      }) perspective(16px) rotateY(1deg)`;
    } else {
      style.transform = `translateX(${-120 * absDiff}px) scale(${
        1 - 0.2 * absDiff
      }) perspective(16px) rotateY(-1deg)`;
    }
  }

  return (
    <div
      className="item"
      style={{
        ...style,
        backgroundImage: `url(${slide.image})`,
      }}
      onClick={onClick}
    >
      {/* ODSTRANĚN H3 ELEMENT S TEXTEM */}
    </div>
  );
};
