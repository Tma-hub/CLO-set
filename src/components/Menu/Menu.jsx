import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export const Menu = () => {
  const [open, setOpen] = useState(false);

  const toogleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div className="menu">
        <button onClick={toogleMenu}>
          <img src="/img/hamburger.png" alt="uzivatel" width="24" height="24" />
        </button>
      </div>

      {open && (
        <div className="menu-open">
          <Link to="/sustainability">
            <span>
              <h4>Udržitelnost</h4>
            </span>
          </Link>
          <Link to="/about-app">
            <span>
              <h4>O aplikaci</h4>
            </span>
          </Link>
          <Link to="/about-us">
            <span>
              <h4>O nás</h4>
            </span>
          </Link>
          <Link to="/fashion-tips">
            <span>
              <h4>Fashion tips</h4>
            </span>
          </Link>
        </div>
      )}
    </>
  );
};
