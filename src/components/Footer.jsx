import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer__brand">
        <div className="footer__logo">MyShop</div>
        <p className="footer__tagline">{t("ui.footerTagline")}</p>
      </div>
      <div className="footer__links">
        <span className="footer__link">{t("ui.footerLinks.about")}</span>
        <span className="footer__link">{t("ui.footerLinks.shipping")}</span>
        <span className="footer__link">{t("ui.footerLinks.returns")}</span>
      </div>
      <div className="footer__meta">{t("ui.footerCopy")}</div>
    </footer>
  );
};

export default Footer;
