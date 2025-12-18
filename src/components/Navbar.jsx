import { useContext, useState } from "react";
import FavoritesContext from "../context/FavoritesContext";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const { favoriteCount, openFavorites } = useContext(FavoritesContext);
  const { theme, toggleTheme, isDark } = useTheme();
  const { langCode, switchLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">MyShop</div>
        <div className={`navbar__menus ${isMenuOpen ? "is-open" : ""}`}>
          <span className="navbar__menuItem">{t("ui.nav.newArrivals")}</span>
          <span className="navbar__menuItem">{t("ui.nav.categories")}</span>
          <span className="navbar__menuItem">{t("ui.nav.deals")}</span>
          <span className="navbar__menuItem">{t("ui.nav.gifts")}</span>
        </div>
      </div>
      <div className="navbar__right">
        <button className="btn" onClick={openFavorites}>
          {t("ui.favorites")} ({favoriteCount})
        </button>
        <button className="btn btn--ghost" onClick={switchLanguage}>
          {langCode === "tr" ? "EN" : "TR"}
        </button>
        <button className="btn btn--icon" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        <button
          className="btn btn--icon navbar__hamburger"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Menüyü aç/kapat"
          aria-expanded={isMenuOpen}
          type="button"
        >
          ☰
        </button>
      </div>
    </div>
  );
};

export default Navbar;
