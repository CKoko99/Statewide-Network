const PATHCONSTANTS = {
    PHONE: "tel:555555555",
    PHONETEXT: "555-555-555",
    BACKEND: process.env.NODE_ENV === "development" ? "http://localhost:8080" : "https://insurancehubbackend-uc3v53rceq-ue.a.run.app",
    HOME: '/',
    QUOTES: {
        //INDEX: '/quotes',
        AUTO: '/quotes/auto',
        HOME: '/quotes/home',
        MOTORCYCLE: '/quotes/motorcycle',
        RENTERS: '/quotes/renter',
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
        MOTORCYCLE: {
            INDEX: '/products/motorcycle',
            FAQ: '/products/motorcycle/faq',
        },
        RENTERS: {
            INDEX: '/products/renters',
            FAQ: '/products/renters/faq',
        },
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