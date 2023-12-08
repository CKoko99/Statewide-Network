import Hero from "@/components/Content/Banners/Hero";
import HomeSubNav from './HomeSubNav';
import BannerImage from "@/public/assets/images/products/auto/indexbanner.png";
import PATHCONSTANTS from "constants/sitemap";
import TextSection from "@/components/Content/TextSection";
import BorderBoxWithImage from "@/components/Content/BorderBoxWithImage";
import CenterImage from "@/components/Content/CenterImage";
import HomeImg1 from "@/public/assets/images/products/home/home5.png";
import HomeImg2 from "@/public/assets/images/products/home/home6.png";


const pageLinks = {
    location: {
        id: "location",
        link: `${PATHCONSTANTS.PRODUCTS.HOME.COST}#location`,
    },
    homeImprovement: {
        id: "home-improvement",
        link: `${PATHCONSTANTS.PRODUCTS.HOME.COST}#home-improvement`,
    },
    bundling: {
        id: "bundling",
        link: `${PATHCONSTANTS.PRODUCTS.HOME.COST}#bundling`,
    },
}

const heroContent = {
    title: "Home Insurance",
    subtitle: "Get a free quote today",
    image: {
        src: BannerImage,
        alt: "City"
    },
    align: "left",
}
const contentSection1 = {
    title: "Find the Best Home Insurance Rates",
    subtitle: `Homeowners insurance is a crucial investment to protect your home and belongings, 
    but the cost of coverage can vary based on serveral key factors. We will explore the elements that insurance 
    providers consider when determing your home insurance premium.`,
    alignSubtitle: "left"
}
const contentSection2 = {
    title: "What Factors Affect Home Insurance Rates?",
    body: [
        `1. LINK: [Home Location](${pageLinks.location.link})`,
        `2. LINK: [Home Improvement Features](${pageLinks.homeImprovement.link})`,
        `3. LINK: [Bundling Discounts](${pageLinks.bundling.link})`,
    ],
    img: {
        src: HomeImg1,
        alt: "Woman at home"
    },
    alignBody: "left",
}
const contentSection3 = {
    subtitle: `We understand the importance of competitive pricing. Our rates are designed to be affordable 
    without compromising on the quality of coverage. Explore our options and see how we stand out.`,
    alignSubtitle: "left"
}
const contentSection4 = {
    id: pageLinks.location.id,
    title: `Location Matters`,
    subtitle: `One of the primary factors influencing home insurance rates is your home's location. Properties 
    in areas prone to natural disasters, such as hurricanes, earthquakes, or wildfires, often have higher premiums. 
    Additionally, proximity to fire stations and the local crime rate can impact your insurance costs.`,
    alignSubtitle: "left",
    alignTitle: "left"
}
const contentSection5 = {
    id: pageLinks.homeImprovement.id,
    title: `Home Characteristics and Value`,
    subtitle: [`The characteristics and value of your home play a significant role in determining your insurance rates. 
    Factors such as the age of your home, its construction materials, square footage, and the overall replacement 
    cost influence your premium.`, ``,
        `Newer homes and those built with sturdy, fire-resistant materials are often less expensive to insure.`
    ],
    alignSubtitle: "left",
    alignTitle: "left"
}
const imageContent1 = {
    img: {
        src: HomeImg2,
        alt: "Women using home security system"
    },
    subtitle: `There are a variety of home improvement features that can lead to decrease your home insurance 
    rates such as installing a security system.`
}
const contentSection6 = {
    title: `Home Improvements and Upgrades`,
    subtitle: [`Making certain improvements to your home, such as installing a new roof, updating 
    electrical systems, or reinforcing the structure, can positively impact your insurance rates. 
    These enhancements reduce the risk of damage and demonstrate your commitment to maintaining a secure property.`,
        ``, `Investing in home security systems, such as burglar alarms, smoke detectors, and surveillance cameras, can qualify 
    you for discounts on your home insurance. These systems reduce the risk of theft or damage, making your property 
    less risky for insurers. `
    ],
    alignSubtitle: "left",
    alignTitle: "left"
}
const contentSection7 = {
    id: pageLinks.bundling.id,
    title: `Bundling Discounts`,
    subtitle: `Consider bundling your home insurance with other policies, such as auto insurance, with 
    Statewide Insurance. We offer discounts for bundling, providing an opportunity to save an overall insurance costs.`,
    alignSubtitle: "left",
    alignTitle: "left"
}
const contentSection8 = {
    subtitle: `Explore Your Options and Secure Your Journey with a Comprehensize Home Insurance Plan Today!`,
    CTAButtons: {
        align: "center",
        Buttons: [
            {
                text: "Get a Quote",
                link: PATHCONSTANTS.QUOTES.HOME,
                color: "primary" as const,
                variant: "contained" as const
            },
            {
                text: `Contact Us`,
                link: PATHCONSTANTS.ABOUT.CONTACT,
                color: "secondary" as const,
            }
        ]
    }
}

export default function () {
    return (<>
        <Hero {...heroContent} />
        <HomeSubNav />
        <TextSection {...contentSection1} />
        <BorderBoxWithImage {...contentSection2} />
        <TextSection {...contentSection3} />
        <TextSection {...contentSection4} />
        <TextSection {...contentSection5} />
        <CenterImage {...imageContent1} />
        <TextSection {...contentSection6} />
        <TextSection {...contentSection7} />
        <TextSection {...contentSection8} />

    </>);
}