import { createContext, useState } from "react";
import products from "../data/products";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [isFavOpen, setIsFavOpen] = useState(false);

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const isFavorite = (productId) => favorites.includes(productId);

  const openFavorites = () => setIsFavOpen(true);
  const closeFavorites = () => setIsFavOpen(false);

  const favoriteCount = favorites.length;

  const favoriteProducts = () => {
    return products.filter((p) => favorites.includes(p.id));
  };

  const value = {
    products: products,
    favorites,
    favoriteCount,
    favoriteProducts,
    isFavorite,
    toggleFavorite,
    isFavOpen,
    openFavorites,
    closeFavorites,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
