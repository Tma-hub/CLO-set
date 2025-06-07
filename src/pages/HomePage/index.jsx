import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';

import './style.css';

export const HomePage = () => {
  return (
    <>
      <div className="container">
        <Header></Header>
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
