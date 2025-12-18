import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import { useLanguage } from "../context/LanguageContext";

const FavoritesPanel = () => {
  const { isFavOpen, closeFavorites, favoriteProducts, toggleFavorite } =
    useContext(FavoritesContext);
  const { t } = useLanguage();
  const favs = favoriteProducts();
  if (!isFavOpen) return null;

  return (
    <div className="overlay" onClick={closeFavorites}>
      <div className="panel" onClick={(e) => e.stopPropagation()}>
        <div className="panel__header">
          <div className="panel__title">{t("ui.favorites")}</div>
          <button className="btn" onClick={closeFavorites}>
            ✖
          </button>
        </div>

        {favs === 0 ? (
          <div className="panel__empty">{t("ui.emptyFavorites")}</div>
        ) : (
          <div className="favList">
            {favs.map((p) => (
              <div key={p.id} className="favItem">
                <div>
                  <div className="card_image_fav">
                    <img src={p.image} alt={t(`products.${p.id}.title`)} />
                  </div>
                  <div className="favItem__title">
                    {t(`products.${p.id}.title`)}
                  </div>
                  <div className="favItem__price">{p.price} €</div>
                </div>

                <button
                  className="btn btn--danger"
                  onClick={() => toggleFavorite(p.id)}
                >
                  💔 {t("ui.remove")}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPanel;
