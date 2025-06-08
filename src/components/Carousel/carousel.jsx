import { useState } from 'react';
import './Carousel.css';
import { Slide } from '../Slide/Slide';

const clothes = [
  { id: 1, name: 'bunda', image: '/img/bunda_grey.png' },
  { id: 2, name: 'bota', image: '/img/bota_grey.png' },
  { id: 3, name: 'doplnky', image: '/img/doplnky_grey.png' },
  { id: 4, name: 'halenka', image: '/img/halenka_grey.png' },
  { id: 5, name: 'kabat', image: '/img/kabat_grey.png' },
  { id: 6, name: 'kabelka', image: '/img/kabelka_grey.png' },
  { id: 7, name: 'kalhoty', image: '/img/kalhoty_grey.png' },
  { id: 8, name: 'kosile', image: '/img/kosile_grey.png' },
  { id: 9, name: 'kratasy', image: '/img/kratasy_grey.png' },
  { id: 10, name: 'sako', image: '/img/sako_grey.png' },
  { id: 11, name: 'saty', image: '/img/saty_grey.png' },
  { id: 12, name: 'sukne', image: '/img/sukne_grey.png' },
  { id: 13, name: 'svetr', image: '/img/svetr_grey.png' },
  { id: 14, name: 'top', image: '/img/top_grey.png' },
  { id: 15, name: 'triko', image: '/img/triko_grey.png' },
];

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClickNext = () => {
    if (activeIndex === clothes.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };
  const handleClickPrev = () => {
    if (activeIndex === 0) {
      setActiveIndex(clothes.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="slider">
      {clothes.map((cloth, index) => {
        return (
          <Slide
            key={cloth.id}
            slide={cloth}
            slideIndex={index}
            activeIndex={activeIndex}
          />
        );
      })}
      <button onClick={handleClickNext} id="next">
        {' '}
        {'>'}
      </button>
      <button onClick={handleClickPrev} id="prev">
        {'<'}
      </button>
    </div>
  );
};
