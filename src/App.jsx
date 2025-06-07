import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/index';
import { AboutPage } from './pages/AboutPage/aboutPage';
import { SustainabilityPage } from './pages/SustainabilityPage/sustainabilityPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about-app" element={<AboutPage />} />
        <Route path="sustainability" element={<SustainabilityPage />} />
      </Routes>
    </BrowserRouter>
  );
};
