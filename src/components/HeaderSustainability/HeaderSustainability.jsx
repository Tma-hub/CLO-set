import './HeaderSustainability.css';
import { Link, useNavigate } from 'react-router-dom';

export const HeaderSustainability = () => {
  const navigate = useNavigate();
  const handleClickBack = () => {
    navigate(-1);
  };
  return (
    <section className="header_sustainability">
      <div className="content_wrapper">
        <button className="back" onClick={handleClickBack}>
          <img src="/img/zpet.png" alt="zpet" width="24" height="24" />
        </button>
        <div className="button_wrapper">
          <Link to="/home-page">
            <button className="home">
              <img src="/img/home.png" alt="domu" width="24" height="24" />
            </button>
          </Link>
          <button className="user">
            <img src="/img/user.png" alt="uzivatel" width="24" height="24" />
          </button>
        </div>
      </div>
    </section>
  );
};
