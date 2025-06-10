import { useEffect, useState } from 'react';
import { Title } from '../Title/Title';
import data from '../../../api/data.json';
import './RandomPicks.css';
import { ImageLink } from '../ImageLink/imageLink';

export const RandomPicks = () => {
  const [maxCount, setMaxCount] = useState(5);
  const [randomPicks, setRandomPicks] = useState([]);

  useEffect(() => {
    const updateMaxCount = () => {
      const isMobile = window.innerWidth <= 768;
      setMaxCount(isMobile ? 3 : 5);
    };

    updateMaxCount();
    window.addEventListener('resize', updateMaxCount);

    return () => window.removeEventListener('resize', updateMaxCount);
  }, []);

  useEffect(() => {
    const getRandomPicks = (allData, count) => {
      const selectedPicks = [];
      const usedTypes = new Set();
      let attempts = 0;
      const maxAttempts = allData.length * 5;

      let shuffledData = [...allData].sort(() => 0.5 - Math.random());

      while (selectedPicks.length < count && attempts < maxAttempts) {
        if (shuffledData.length === 0) {
          shuffledData = [...allData].sort(() => 0.5 - Math.random());
        }

        const item = shuffledData.pop();
        attempts++;

        if (item?.typ && !usedTypes.has(item.typ)) {
          selectedPicks.push(item);
          usedTypes.add(item.typ);
        }
      }

      return selectedPicks;
    };

    setRandomPicks(getRandomPicks(data, maxCount));
  }, [maxCount]);

  return (
    <div className="random__picks">
      <Title sectionTitle={'Náhodný výběr z tvého šatníku'} />
      <div className="picks">
        {randomPicks.length > 0 ? (
          randomPicks.map((pick) =>
            pick.img ? <ImageLink key={pick.id} item={pick} /> : null,
          )
        ) : (
          <p>
            Nebyly nalezeny žádné vhodné položky pro náhodný výběr s unikátními
            typy.
          </p>
        )}
      </div>
    </div>
  );
};
