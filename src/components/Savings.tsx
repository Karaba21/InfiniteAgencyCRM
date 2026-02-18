"use client";

export default function Savings() {
    const services = [
        { name: "CRM & Pipeline Management", competitors: "HubSpot, Salesforce" },
        { name: "Unlimited Sales Funnels", competitors: "ClickFunnels, Leadpages" },
        { name: "Website Builder", competitors: "WordPress, Wix, Squarespace" },
        { name: "Surveys & Forms", competitors: "Typeform, JotForm" },
        { name: "Email Marketing", competitors: "Mailchimp, ActiveCampaign" },
        { name: "2-Way SMS Marketing", competitors: "Podium, Twilio" },
        { name: "Booking & Appointments", competitors: "Calendly, Acuity" },
        { name: "Workflow Automations", competitors: "Zapier, Make" },
        { name: "Courses/Products", competitors: "Kajabi, Teachable" },
        { name: "Call Tracking", competitors: "CallRail" },
        { name: "Reputation Management", competitors: "BirdEye, Yext" },
        { name: "Tracking & Analytics", competitors: "Google Analytics, Mixpanel" },
        { name: "Communities", competitors: "Skool, Circle" },
        { name: "Document Signing", competitors: "DocuSign, PandaDoc" },
        { name: "Gray-Labeled Mobile App", competitors: "Custom Development" },
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
                                <th className="center-align" style={{ color: 'var(--color-gold)' }}>Infinite Agency CRM</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service, index) => (
                                <tr key={index}>
                                    <td className="service-name" data-label="Funcionalidad">{service.name}</td>
                                    <td className="competitors-list" data-label="Herramientas Tradicionales">{service.competitors}</td>
                                    <td data-label="Infinite Agency CRM">
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
                        * Ahorra más de <span className="savings-amount">$1,000/mes</span> consolidando tus herramientas.
                    </p>
                </div>
            </div>
        </section>
    );
}
