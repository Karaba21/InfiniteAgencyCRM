"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Benefits() {
    const { t } = useLanguage();

    return (
        <section id="beneficios" className="section section-dark">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">{t.benefits.tag}</span>
                    <h2 className="section-title">{t.benefits.title}</h2>
                    <p className="section-description">
                        {t.benefits.description}
                    </p>
                </div>
                <div className="benefits-grid">
                    {t.benefits.items.map((benefit) => (
                        <div className="benefit-card" key={benefit.number}>
                            <div className="benefit-number">{benefit.number}</div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
