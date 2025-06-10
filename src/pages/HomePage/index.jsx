import { Link } from 'react-router-dom';
import { HeaderMainPage } from '../../components/HeaderMainPage/HeaderMainPage';
import { Weather } from '../../components/Weather/Weather';
import { RandomPicks } from '../../components/RandomPicks/RandomPicks';
import { AddNew } from '../../components/AddNew/AddNew';
import { Favorites } from '../../components/Favorites/Favorites';
import './style.css';

export const HomePage = () => {
  return (
    <div>
      <div className="homepage-container">
        <HeaderMainPage>
          <Link to="/about-app">
            <button className="about-app">
              <h2>O aplikaci</h2>
            </button>
          </Link>
        </HeaderMainPage>

        <div className="homepage">
          <Weather />
          <RandomPicks />
          <AddNew />
          <Link to="/select-page">
            <button className="what__to__wear_btn">
              <h1>Co si vezmeš dnes na sebe?</h1>
            </button>
          </Link>
          <Favorites />
          <Link to="/sustainability">
            <button className="sustainability_btn">
              <h3>Jak na udržitelný šatník?</h3>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
