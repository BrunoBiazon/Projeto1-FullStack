import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import App from './App.jsx';
import Footer from './footer.jsx';
import Header from './Header.jsx';
import MenuHeader from './MenuHeader.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <MenuHeader />
    <App />
    <Footer />
  </StrictMode>
);
