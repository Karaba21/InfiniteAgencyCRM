"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href) as HTMLElement;
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="brand-text">
                            <span>Ananta IA</span>
                        </div>
                        <p>{t.footer.tagline}</p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>{t.footer.companyColumn}</h4>
                            <ul>
                                <li><a href="#que-hacemos" onClick={(e) => handleLinkClick(e, "#que-hacemos")}>{t.footer.whatWeDo}</a></li>
                                <li><a href="#beneficios" onClick={(e) => handleLinkClick(e, "#beneficios")}>{t.footer.benefits}</a></li>
                                <li><a href="#planes" onClick={(e) => handleLinkClick(e, "#planes")}>{t.footer.plans}</a></li>
                                <li><a href="#quienes-somos" onClick={(e) => handleLinkClick(e, "#quienes-somos")}>{t.footer.aboutUs}</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>{t.footer.legalColumn}</h4>
                            <ul>
                                <li><a href="/terminosdeservicio.html">{t.footer.termsOfService}</a></li>
                                <li><a href="/politicaprivacidad.html">{t.footer.privacyPolicy}</a></li>
                                <li><a href="#">{t.footer.cookies}</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>{t.footer.contactColumn}</h4>
                            <ul>
                                <li><a href="mailto:infiniteagencycrm@gmail.com">{t.footer.email}</a></li>
                                <li><a href="#contacto" onClick={(e) => handleLinkClick(e, "#contacto")}>{t.footer.requestDemo}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>{t.footer.designedBy} <a href="https://savsolutionsuy.com"> Sav Solutions</a></p>
                    <p>&copy; 2026 Ananta IA. {t.footer.rightsReserved}</p>
                </div>
            </div>
        </footer>
    );
}
