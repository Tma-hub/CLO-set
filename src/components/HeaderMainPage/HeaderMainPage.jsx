import { Link } from 'react-router-dom';
import './HeaderMainPage.css';
import { Menu } from '../Menu/Menu';

export const HeaderMainPage = () => {
  return (
    <section className="main__page__header">
      <div className="main__wrapper">
        <div className="app__logo">
          <img src="/img/app_logo.png" alt="logo" />
        </div>
        <div className="main__button__wrapper">
          <div className="main__user">
            <button>
              <img src="/img/user.png" alt="uživatel" width="24" height="24" />
            </button>
          </div>
          <Menu />
        </div>
      </div>
    </section>
  );
};
