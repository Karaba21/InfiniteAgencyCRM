"use client";

export default function Savings() {
    const services = [
        { name: "CRM & Pipeline Management", competitors: "HubSpot, Salesforce", cost: "$99/mes" },
        { name: "Unlimited Sales Funnels", competitors: "ClickFunnels, Leadpages", cost: "$297/mes" },
        { name: "Website Builder", competitors: "WordPress, Wix, Squarespace", cost: "$29/mes" },
        { name: "Surveys & Forms", competitors: "Typeform, JotForm", cost: "$49/mes" },
        { name: "Email Marketing", competitors: "Mailchimp, ActiveCampaign", cost: "$99/mes" },
        { name: "2-Way SMS Marketing", competitors: "Podium, Twilio", cost: "$99/mes" },
        { name: "Booking & Appointments", competitors: "Calendly, Acuity", cost: "$29/mes" },
        { name: "Workflow Automations", competitors: "Zapier, Make", cost: "$169/mes" },
        { name: "Courses/Products", competitors: "Kajabi, Teachable", cost: "$99/mes" },
        { name: "Call Tracking", competitors: "CallRail", cost: "$49/mes" },
        { name: "Reputation Management", competitors: "BirdEye, Yext", cost: "$159/mes" },
        { name: "Tracking & Analytics", competitors: "Google Analytics, Mixpanel", cost: "$299/mes" },
        { name: "Communities", competitors: "Skool, Circle", cost: "$89/mes" },
        { name: "Document Signing", competitors: "DocuSign, PandaDoc", cost: "$47/mes" },
    ];

    return (
        <section id="savings" className="section services-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Todo en Uno</span>
                    <h2 className="section-title">Sustituye Múltiples Herramientas</h2>
                    <p className="section-description">
                        Deja de pagar cientos de dólares mensuales en diferentes suscripciones.
                        Con InfiniteAgencyCRM tienes todo lo que necesitas en una sola plataforma.
                    </p>
                </div>

                <div className="services-table-container">
                    <table className="services-table">
                        <thead>
                            <tr>
                                <th>Funcionalidad</th>
                                <th className="center-align">Herramientas Tradicionales</th>
                                <th className="center-align">Otras Herramientas</th>
                                <th className="center-align" style={{ color: 'var(--color-gold)' }}>Ananta IA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service, index) => (
                                <tr key={index}>
                                    <td className="service-name" data-label="Funcionalidad">{service.name}</td>
                                    <td className="competitors-list center-align" data-label="Herramientas Tradicionales">{service.competitors}</td>
                                    <td className="cost-list center-align" data-label="Otras Herramientas" style={{ fontWeight: 'bold' }}>{service.cost}</td>
                                    <td data-label="Ananta IA">
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
                    <p className="savings-text">
                        * Ahorra más de <span className="savings-amount">$1,500/mes</span> consolidando tus herramientas.
                    </p>
                </div>
            </div>
        </section>
    );
}
