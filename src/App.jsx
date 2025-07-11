import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage/index';
import { AboutPage } from './pages/AboutPage/aboutPage';
import { AboutUsPage } from './pages/AboutUsPage/aboutUsPage';
import { SustainabilityPage } from './pages/SustainabilityPage/sustainabilityPage';
import { SelectPage } from './pages/SelectPage/selectPage';
import { FavoritesPage } from './pages/FavoritesPage/favoritesPage';
import { SelectedItemPage } from './pages/SelectedItemPage/selectedItemPage';
import { useEffect } from 'react';
import { OpeningPage } from './pages/OpeningPage/openingPage';
import { FashionTipsPage } from './pages/FashionTipsPage/FashionTipsPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<OpeningPage />} />
        <Route path="home-page" element={<HomePage />} />
        <Route path="/about-app" element={<AboutPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/fashion-tips" element={<FashionTipsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/select-page" element={<SelectPage />} />
        <Route path="/sustainability" element={<SustainabilityPage />} />
        <Route path="/selected-item/:id" element={<SelectedItemPage />} />
      </Routes>
    </BrowserRouter>
  );
};
