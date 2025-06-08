import { AppLogo } from '../../components/AppLogo/AppLogo.jsx';
import { Link } from 'react-router-dom';

export const OpeningPage = () => {
  return (
    <Link to="home-page">
      <AppLogo />
    </Link>
  );
};
