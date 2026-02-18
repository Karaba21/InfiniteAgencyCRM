"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector(".navbar") as HTMLElement;
            if (!navbar) return;

            if (window.scrollY > 100) {
                navbar.style.background = "rgba(0, 0, 0, 0.98)";
                navbar.style.boxShadow = "0 2px 20px rgba(212, 175, 55, 0.1)";
            } else {
                navbar.style.background = "rgba(0, 0, 0, 0.95)";
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
        <nav className="navbar">
            <div className="container">
                <div className="nav-brand">
                    <span className="brand-text">Infinite Agency</span>
                    <span className="brand-accent">CRM</span>
                </div>
                <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`} id="navMenu">
                    <li><a href="#inicio" className="nav-link" onClick={(e) => handleLinkClick(e, "#inicio")}>Inicio</a></li>
                    <li><a href="#servicios" className="nav-link" onClick={(e) => handleLinkClick(e, "#servicios")}>Servicios</a></li>
                    <li><a href="#que-hacemos" className="nav-link" onClick={(e) => handleLinkClick(e, "#que-hacemos")}>Qué Hacemos</a></li>
                    <li><a href="#beneficios" className="nav-link" onClick={(e) => handleLinkClick(e, "#beneficios")}>Beneficios</a></li>
                    <li><a href="#planes" className="nav-link" onClick={(e) => handleLinkClick(e, "#planes")}>Costos</a></li>
                    <li><a href="#quienes-somos" className="nav-link" onClick={(e) => handleLinkClick(e, "#quienes-somos")}>Quiénes Somos</a></li>
                    <li><a href="#contacto" className="nav-link cta-button" onClick={(e) => handleLinkClick(e, "#contacto")}>Contacto</a></li>
                </ul>
                <button className="menu-toggle" id="menuToggle" onClick={toggleMenu}>
                    <span style={{ transform: isMenuOpen ? "rotate(45deg) translateY(7px)" : "none" }}></span>
                    <span style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
                    <span style={{ transform: isMenuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }}></span>
                </button>
            </div>
        </nav>
    );
}
