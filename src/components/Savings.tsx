"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Savings() {
    const { t } = useLanguage();
    const services = t.savings.rows;

    return (
        <section id="savings" className="section services-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">{t.savings.tag}</span>
                    <h2 className="section-title">{t.savings.title}</h2>
                    <p className="section-description">
                        {t.savings.description}
                    </p>
                </div>

                <div className="services-table-container">
                    <table className="services-table">
                        <thead>
                            <tr>
                                <th>{t.savings.tableHeaders.feature}</th>
                                <th className="center-align">{t.savings.tableHeaders.traditional}</th>
                                <th className="center-align">{t.savings.tableHeaders.others}</th>
                                <th className="center-align" style={{ color: 'var(--color-gold)' }}>{t.savings.tableHeaders.brand}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service, index) => (
                                <tr key={index}>
                                    <td className="service-name" data-label={t.savings.tableHeaders.feature}>{service.name}</td>
                                    <td className="competitors-list center-align" data-label={t.savings.tableHeaders.traditional}>{service.competitors}</td>
                                    <td className="cost-list center-align" data-label={t.savings.tableHeaders.others} style={{ fontWeight: 'bold' }}>{service.cost}</td>
                                    <td data-label={t.savings.tableHeaders.brand}>
                                        <div className="infinite-check">
                                            <div className="check-circle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="savings-highlight">
                    <div className="savings-highlight-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="1" x2="12" y2="23"></line>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                    </div>
                    <p className="savings-text">
                        {t.savings.highlightPrefix}<span className="savings-amount">{t.savings.highlightAmount}</span>{t.savings.highlightSuffix}
                    </p>
                </div>
            </div>
        </section>
    );
}
