"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function ImpactStats() {
    const { t } = useLanguage();

    return (
        <section className="impact-section">
            <div className="container">
                <h2 className="section-header impact-header">
                    {t.impactStats.title}
                </h2>
                <div className="impact-grid">
                    {t.impactStats.stats.map((stat, index) => (
                        <div
                            key={index}
                            className="impact-stat"
                        >
                            <span className="impact-value">
                                {stat.value}
                                {stat.unit && (
                                    <span className="text-2xl md:text-3xl font-bold ml-2 relative -top-4">{stat.unit}</span>
                                )}
                            </span>
                            <p className="impact-label">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
