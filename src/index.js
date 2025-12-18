import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import { ThemeProvider } from './context/ThemeContext.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FavoritesProvider>
      <ThemeProvider>
        <LanguageProvider>
      <App />
      </LanguageProvider>
      </ThemeProvider>
    </FavoritesProvider>
  </React.StrictMode>
);


