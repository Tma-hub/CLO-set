import { Title } from '../Title/Title';
import data from '../../../api/data.json';
import './RandomPicks.css';

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
          pick.img ? (
            <img key={pick.id} src={`/fotky/${pick.img}`}></img>
          ) : null,
        )}
      </div>
    </div>
  );
};
