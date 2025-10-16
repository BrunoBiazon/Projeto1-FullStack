import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import App from './App.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import MenuHeader from './MenuHeader.jsx';
import { FoodProvider } from "../contexts/FoodContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FoodProvider>
      <Header />
      <MenuHeader />
      <App />
      <Footer />
    </FoodProvider>
  </StrictMode>
);
