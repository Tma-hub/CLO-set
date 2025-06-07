import { Link } from 'react-router-dom';
import { HeaderMainPage } from '../../components/HeaderMainPage/HeaderMainPage';

import './style.css';

export const HomePage = () => {
  return (
    <>
      <div>
        <HeaderMainPage>
          <Link to="/about-app">
            <button className="about-app">
              <h2>O aplikaci</h2>
            </button>
          </Link>
        </HeaderMainPage>

        <button className="what__to__wear_btn">
          <h1>Co dnes na sebe?</h1>
        </button>

        <Link to="/sustainability">
          <button className="sustainability_btn">
            <h3>Jak na udržitelný šatník?</h3>
          </button>
        </Link>
      </div>
    </>
  );
};
