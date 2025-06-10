// src/components/RandomPicks/RandomPicks.jsx
import { Title } from '../Title/Title';
import data from '../../../api/data.json';
import './RandomPicks.css';
import { ImageLink } from '../ImageLink/imageLink';

export const RandomPicks = () => {
  const getRandomPicks = (allData) => {
    const selectedPicks = [];
    const usedTypes = new Set();
    let attempts = 0;
    const maxAttempts = allData.length * 5;

    let shuffledData = [...allData].sort(() => 0.5 - Math.random());

    while (selectedPicks.length < 5 && attempts < maxAttempts) {
      if (shuffledData.length === 0) {
        shuffledData = [...allData].sort(() => 0.5 - Math.random());
      }

      const item = shuffledData.pop();
      attempts++;

      if (item) {
        if (item.typ) {
          if (!usedTypes.has(item.typ)) {
            selectedPicks.push(item);
            usedTypes.add(item.typ);
          }
        }
      }

      if (selectedPicks.length >= 5) {
        break;
      }
    }

    return selectedPicks;
  };

  const randomPicks = getRandomPicks(data);

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
