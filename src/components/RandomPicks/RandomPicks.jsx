import { Title } from '../Title/Title';
import data from '../../../api/data.json';
import './RandomPicks.css';
import { ImageLink } from '../ImageLink/imageLink';

export const RandomPicks = () => {
  const getRandomPicks = (data) => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };
  const randomPicks = getRandomPicks(data);

  return (
    <div className="random__picks">
      <Title sectionTitle={'Náhodný výběr'} />
      <div className="picks">
        {randomPicks.map((pick) =>
          pick.img ? <ImageLink key={pick.id} item={pick} /> : null,
        )}
      </div>
    </div>
  );
};
