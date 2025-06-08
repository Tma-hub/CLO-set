import './FavoritePicks.css';
import { ImageLink } from '../ImageLink/imageLink';
import { findData } from '../../lib/match';

export const FavoritePicks = () => {
  const favourites = [
    findData({ id: 153 }),
    findData({ id: 113 }),
    findData({ id: 94 }),
    findData({ id: 125 }),
  ];

  return (
    <div className="favorite__picks">
      {favourites.map((item) => (
        <ImageLink key={item.id} item={item} />
      ))}
    </div>
  );
};
