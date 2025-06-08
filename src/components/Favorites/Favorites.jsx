import { FavoritePicks } from '../FavoritePicks/FavoritePicks';
import { Title } from '../Title/Title';
import './Favorites.css';

export const Favorites = () => {
  return (
    <div className="favorites__container">
      <section className="favorites">
        <Title sectionTitle={'Oblíbené outfity'} />
        <FavoritePicks />
      </section>
    </div>
  );
};
