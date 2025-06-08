import { useState } from 'react';
import { Link } from 'react-router-dom';

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

      {open ? (
        <div>
          <Link to="/sustainability">
            {' '}
            <span>Udržitelnost</span>
          </Link>
        </div>
      ) : null}
    </>
  );
};
