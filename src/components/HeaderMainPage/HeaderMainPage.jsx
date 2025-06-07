import { Link } from 'react-router-dom';
import './HeaderMainPage.css';

export const HeaderMainPage = () => {
  return (
    <section className="main__page__header">
      <section className="header">
        <div className="about_app">
          <Link to="/about-app" className="about-app">
            <button>
              <h2>O aplikaci</h2>
            </button>
          </Link>
        </div>
        <div className="user">
          <button>
            <img src="/img/user.png" alt="uzivatel" width="24" height="24" />
          </button>
        </div>
        <div className="menu">
          <button>hamburger</button>
        </div>
      </section>
    </section>
  );
};
