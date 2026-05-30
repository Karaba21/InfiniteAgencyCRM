"use client";

export default function Footer() {
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
                        <p>Transformando tecnologías en soluciones personalizadas para tu éxito.</p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Empresa</h4>
                            <ul>
                                <li><a href="#que-hacemos" onClick={(e) => handleLinkClick(e, "#que-hacemos")}>Qué Hacemos</a></li>
                                <li><a href="#beneficios" onClick={(e) => handleLinkClick(e, "#beneficios")}>Beneficios</a></li>
                                <li><a href="#planes" onClick={(e) => handleLinkClick(e, "#planes")}>Planes</a></li>
                                <li><a href="#quienes-somos" onClick={(e) => handleLinkClick(e, "#quienes-somos")}>Quiénes Somos</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Legal</h4>
                            <ul>
                                <li><a href="/terminosdeservicio.html">Términos de Servicio</a></li>
                                <li><a href="/politicaprivacidad.html">Política de Privacidad</a></li>
                                <li><a href="#">Cookies</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Contacto</h4>
                            <ul>
                                <li><a href="mailto:infiniteagencycrm@gmail.com">Email</a></li>
                                <li><a href="#contacto" onClick={(e) => handleLinkClick(e, "#contacto")}>Solicitar Demo</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Diseñado y desarrollado por <a href="https://savsolutionsuy.com"> Sav Solutions</a></p>
                    <p>&copy; 2026 Ananta IA. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
