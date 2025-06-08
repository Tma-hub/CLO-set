import { Link } from 'react-router-dom';
import './Slide.css';
const styleActive = {
  transform: 'none',
  zIndex: 1,
  filter: 'none',
  opacity: 1,
};

export const Slide = ({ slide, slideIndex, activeIndex }) => {
  let style = {};
  if (slideIndex === activeIndex) {
    style = styleActive;
  } else {
    const absDiff = Math.abs(slideIndex - activeIndex);
    style = {
      zIndex: -absDiff,
      filter: 'blur(5px)',
      opacity: absDiff > 2 ? 0 : 0.6,
    };

    if (slideIndex > activeIndex) {
      style.transform = `translateX(${120 * absDiff}px) scale(${
        1 - 0.2 * absDiff
      }) perspective(16px) rotateY(-1deg)`;
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
    ></div>
  );
};
