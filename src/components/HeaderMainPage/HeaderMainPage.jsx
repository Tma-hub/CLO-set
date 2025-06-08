import { Link } from 'react-router-dom';
import './HeaderMainPage.css';
import { Menu } from '../Menu/Menu';

export const HeaderMainPage = () => {
  return (
    <section className="main__page__header">
      <div className="main__wrapper">
        <div className="about__app">
          <Link to="/about-app" className="about-app">
            <button>
              <h2>O aplikaci</h2>
            </button>
          </Link>
        </div>
        <div className="main__button__wrapper">
          <div className="main__user">
            <button>
              <img src="/img/user.png" alt="uzivatel" width="24" height="24" />
            </button>
          </div>
          <Menu></Menu>
        </div>
      </div>
    </section>
  );
};
