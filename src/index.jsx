import './global.css';
import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage/index.jsx';

createRoot(document.querySelector('#app')).render(<HomePage />);
