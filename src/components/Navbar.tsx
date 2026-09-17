"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const tapHighlightStyle = { WebkitTapHighlightColor: "transparent" } as React.CSSProperties;

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector(".navbar") as HTMLElement;
            if (!navbar) return;

            if (window.scrollY > 100) {
                navbar.style.background = "white";
                navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.08)";
            } else {
                navbar.style.background = "white";
                navbar.style.boxShadow = "none";
            }

            // Active link highlighting
            const sections = document.querySelectorAll("section[id]");
            const navLinks = document.querySelectorAll(".nav-link");

            sections.forEach((section) => {
                const sectionEl = section as HTMLElement;
                const sectionHeight = sectionEl.offsetHeight;
                const sectionTop = sectionEl.offsetTop - 100;
                const sectionId = sectionEl.getAttribute("id");

                if (window.scrollY > sectionTop && window.scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach((link) => {
                        link.classList.remove("active");
                        if (link.getAttribute("href") === `#${sectionId}`) {
                            link.classList.add("active");
                        }
                    });
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMenuOpen(false);
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
        <nav className="navbar" style={{ background: "white" }}>
            <div className="container">
                <div className="nav-brand">
                    <span className="brand-text">ANANTA</span>
                    <span className="brand-accent">IA</span>
                </div>
                <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`} id="navMenu">
                    <li><a href="#inicio" className="nav-link" style={tapHighlightStyle} onClick={(e) => handleLinkClick(e, "#inicio")}>{t.nav.inicio}</a></li>
                    <li><a href="#servicios" className="nav-link" style={tapHighlightStyle} onClick={(e) => handleLinkClick(e, "#servicios")}>{t.nav.servicios}</a></li>
                    <li><a href="#ia-features" className="nav-link" style={tapHighlightStyle} onClick={(e) => handleLinkClick(e, "#ia-features")}>{t.nav.ia}</a></li>
                    <li><a href="#beneficios" className="nav-link" style={tapHighlightStyle} onClick={(e) => handleLinkClick(e, "#beneficios")}>{t.nav.beneficios}</a></li>
                    <li><a href="#planes" className="nav-link" style={tapHighlightStyle} onClick={(e) => handleLinkClick(e, "#planes")}>{t.nav.costos}</a></li>
                    <li><a href="#savings" className="nav-link" style={tapHighlightStyle} onClick={(e) => handleLinkClick(e, "#savings")}>{t.nav.ahorros}</a></li>
                    <li><a href="#contacto" className="nav-link cta-button" style={tapHighlightStyle} onClick={(e) => handleLinkClick(e, "#contacto")}>{t.nav.demo}</a></li>
                    <li className="lang-switch" role="group" aria-label="Language switcher">
                        <button
                            type="button"
                            className={`lang-switch-btn ${language === "es" ? "active" : ""}`}
                            style={tapHighlightStyle}
                            aria-pressed={language === "es"}
                            onClick={() => setLanguage("es")}
                        >
                            ES
                        </button>
                        <span className="lang-switch-divider">/</span>
                        <button
                            type="button"
                            className={`lang-switch-btn ${language === "en" ? "active" : ""}`}
                            style={tapHighlightStyle}
                            aria-pressed={language === "en"}
                            onClick={() => setLanguage("en")}
                        >
                            EN
                        </button>
                    </li>
                </ul>
                <button className="menu-toggle" id="menuToggle" style={tapHighlightStyle} onClick={toggleMenu}>
                    <span style={{ transform: isMenuOpen ? "rotate(45deg) translateY(7px)" : "none" }}></span>
                    <span style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
                    <span style={{ transform: isMenuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }}></span>
                </button>
            </div>
        </nav>
    );
}
