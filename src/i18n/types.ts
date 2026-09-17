export type Language = "es" | "en";

export interface StatItem {
    value: string;
    unit?: string;
    label: string;
}

export interface ServiceItem {
    title: string;
    description: string;
}

export interface AIFeatureItem {
    title: string;
    description: string;
}

export interface BenefitItem {
    number: string;
    title: string;
    description: string;
}

export interface PricingFeatureGroup {
    title: string;
    items: string[];
}

export interface SavingsRow {
    name: string;
    competitors: string;
    cost: string;
}

export interface Translations {
    nav: {
        inicio: string;
        servicios: string;
        ia: string;
        beneficios: string;
        costos: string;
        ahorros: string;
        demo: string;
    };
    hero: {
        titlePrefix: string;
        titleWhatsapp: string;
        titleMiddle: string;
        titleHighlight: string;
        subtitleLine1: string;
        subtitleLine2: string;
        ctaPrimary: string;
        ctaSecondary: string;
    };
    impactStats: {
        title: string;
        stats: StatItem[];
    };
    services: {
        tag: string;
        title: string;
        description: string;
        items: ServiceItem[];
        cta: string;
    };
    aiFeatures: {
        tag: string;
        title: string;
        description: string;
        items: AIFeatureItem[];
    };
    benefits: {
        tag: string;
        title: string;
        description: string;
        items: BenefitItem[];
    };
    pricing: {
        tag: string;
        title: string;
        description: string;
        oldPrice: string;
        newPrice: string;
        pricingDescription: string;
        includesLabel: string;
        features: PricingFeatureGroup[];
        cta: string;
    };
    savings: {
        tag: string;
        title: string;
        description: string;
        tableHeaders: {
            feature: string;
            traditional: string;
            others: string;
            brand: string;
        };
        rows: SavingsRow[];
        highlightPrefix: string;
        highlightAmount: string;
        highlightSuffix: string;
    };
    contact: {
        tag: string;
        title: string;
        description: string;
        emailLabel: string;
        phoneLabel: string;
        namePlaceholder: string;
        emailPlaceholder: string;
        companyPlaceholder: string;
        messagePlaceholder: string;
        submitButton: string;
    };
    footer: {
        tagline: string;
        companyColumn: string;
        whatWeDo: string;
        benefits: string;
        plans: string;
        aboutUs: string;
        legalColumn: string;
        termsOfService: string;
        privacyPolicy: string;
        cookies: string;
        contactColumn: string;
        email: string;
        requestDemo: string;
        designedBy: string;
        rightsReserved: string;
    };
    whatsappButton: {
        ariaLabel: string;
    };
}
