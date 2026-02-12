export default function Features() {
    return (
        <section id="que-hacemos" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Nuestro Servicio</span>
                    <h2 className="section-title">Qué Hacemos</h2>
                    <p className="section-description">
                        Transformamos plataformas CRM existentes en soluciones completamente personalizadas bajo tu marca
                    </p>
                </div>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <h3>Personalización Total</h3>
                        <p>Modificamos cada aspecto de la interfaz y funcionalidad para que se adapte perfectamente a las necesidades de tu negocio y la experiencia que quieres ofrecer.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <path d="M9 9h6v6H9z" />
                            </svg>
                        </div>
                        <h3>Implementación Rápida</h3>
                        <p>Gracias a nuestra tecnología base probada, podemos implementar tu CRM personalizado en tiempo récord, sin comprometer la calidad o personalización.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3>Soporte Continuo</h3>
                        <p>Te acompañamos en cada paso con soporte técnico dedicado, actualizaciones y mejoras continuas para mantener tu CRM siempre al día.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
