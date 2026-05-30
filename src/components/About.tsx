"use client";

import { useEffect } from "react";

export default function About() {
    useEffect(() => {
        const animateCounter = (element: HTMLElement, target: number, duration = 2000) => {
            let start = 0;
            const increment = target / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    element.textContent = target + "%";
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(start) + "%";
                }
            }, 16);
        };

        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const statNumber = entry.target.querySelector(".stat-number");
                    if (statNumber) {
                        const text = statNumber.textContent || "";
                        if (text.includes("%")) {
                            const target = parseInt(text.replace("%", ""));
                            animateCounter(statNumber as HTMLElement, target);
                        }
                    }
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll(".stat-item").forEach((stat) => {
            statsObserver.observe(stat);
        });

        return () => statsObserver.disconnect();
    }, []);

    return (
        <section id="quienes-somos" className="section section-dark">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <span className="section-tag">Nuestra Historia</span>
                        <h2 className="section-title">Quiénes Somos</h2>
                        <div className="about-description">
                            <p>
                                En <strong>Ananta IA</strong>, somos especialistas en transformar
                                soluciones tecnológicas existentes en productos completamente personalizados
                                bajo tu marca.
                            </p>
                            <p>
                                Nuestra misión es democratizar el acceso a tecnologías CRM avanzadas,
                                permitiendo que empresas de todos los tamaños puedan ofrecer soluciones
                                de clase mundial sin la necesidad de desarrollar desde cero.
                            </p>
                        </div>
                        <div className="about-stats">
                            <div className="stat-item">
                                <div className="stat-number">100%</div>
                                <div className="stat-label">Personalizado</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">24/7</div>
                                <div className="stat-label">Soporte</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">∞</div>
                                <div className="stat-label">Posibilidades</div>
                            </div>
                        </div>
                    </div>
                    <div className="about-visual">
                        <div className="visual-card">
                            <div className="card-glow"></div>
                            <div className="card-content">
                                <h4>Nuestra Promesa</h4>
                                <p>Tu marca, tu experiencia, tu éxito</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
