import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import { useLanguage } from "../context/LanguageContext";

const ProductCard = ({ product }) => {
  const { isFavorite, toggleFavorite } = useContext(FavoritesContext);
  const { t } = useLanguage();
  const fav = isFavorite(product.id);

  return (
    <div className="card">
      <div className="card__image">
        <img src={product.image} alt={t(`products.${product.id}.title`)} />
      </div>
      <div className="card__title">{t(`products.${product.id}.title`)}</div>
      <div className="card__price">{product.price} €</div>

      <button
        className={`btn ${fav ? "btn--favActive" : ""}`}
        onClick={() => toggleFavorite(product.id)}
      >
        {fav ? `💔 ${t("ui.removeFromFavorites")}` : `❤️ ${t("ui.addToFavorites")}`}
      </button>
    </div>
  );
};

export default ProductCard;
