import { FavoritePicks } from '../FavoritePicks/FavoritePicks';
import { Title } from '../Title/Title';
import './Favorites.css';

export const Favorites = () => {
  return (
    <div className="favorites__container">
      <section className="favorites">
        <div className="title-row">
          <Title sectionTitle="Oblíbené outfity" />
          <img
            src="/img/srdce_clicked.png"
            alt="srdce"
            className="title-icon"
          />
        </div>

        <FavoritePicks />
      </section>
    </div>
  );
};
