const PATHCONSTANTS = {
    PHONE: "tel:555555555",
    HOME: '/',
    QUOTES: {
        INDEX: '/quotes',
        AUTO: '/quotes/auto',
        HOME: '/quotes/home',
        MEXICO: '/quotes/mexico',
        MOTORCYCLE: '/quotes/motorcycle',
        RENTERS: '/quotes/renter',
        SURETY: '/quotes/surety-bond',
        SR22: '/quotes/sr22',
        LIABILITY: '/quotes/liability',
    },
    PRODUCTS: {
        INDEX: '/products',
        AUTO: {
            INDEX: '/products/auto',
            COVERAGE: '/products/auto/coverage',
            AFFORDABLE: '/products/auto/affordable',
            FAQ: '/products/auto/faq',
        },
        HOME: {
            INDEX: '/products/home',
            COST: '/products/home/cost',
            CLAIMS: '/products/home/claims',
            FAQ: '/products/home/faq',
        },
        MEXICO: { INDEX: '/products/mexico', },
        MOTORCYCLE: {
            INDEX: '/products/motorcycle',
            FAQ: '/products/motorcycle/faq',
        },
        RENTERS: {
            INDEX: '/products/renters',
            FAQ: '/products/renters/faq',
        },
        SURETY: { INDEX: '/products/surety-bond', },
        SR22: { INDEX: '/products/sr22', },
    },
    LOCATIONS: {
        INDEX: '/locations',
        AUSTIN: '/locations/austin',
        HOUSTON: '/locations/houston',
        SAN_ANTONIO: '/locations/san-antonio',
        DALLAS: '/locations/dallas',
        CORPUS_CHRISTI: '/locations/corpus-christi',
        VICTORIA: '/locations/victoria',
    },
    ABOUT: {
        INDEX: '/about',
        CONTACT: '/about/contact',
        CAREERS: '/about/careers',
        REVIEWS: '/about/reviews',
    },
    PAYMENTS: '/payments',
};
export default PATHCONSTANTS