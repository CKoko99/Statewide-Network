import Hero from "../../../components/Content/Banners/Hero";
import SubNavBar from "../../../components/Navbar/SubNavBar";
import AutoSubNav from "./AutoSubNav";
import BannerImage from "../../../public/assets/images/products/auto/indexbanner.png";
import AutoImg1 from "../../../public/assets/images/products/auto/driving2.png";
import TextSection from "@/components/Content/TextSection";
import CTAPicWithText from "@/components/Content/CTA/CTAPicWithText";
import BorderBoxWithImage from "@/components/Content/BorderBoxWithImage";
import PATHCONSTANTS from "constants/sitemap";
import AutoImg2 from "../../../public/assets/images/products/auto/accident1.png";
import AutoImg3 from "../../../public/assets/images/products/auto/driving1.png";
import CenterImage from "@/components/Content/CenterImage";
const pageLinks = {
    minimum: {
        link: `${PATHCONSTANTS.PRODUCTS.AUTO.AFFORDABLE}#Minimum-Coverage`,
        id: "Minimum-Coverage"
    },
    optional: { id: "Optional-Coverages", link: `${PATHCONSTANTS.PRODUCTS.AUTO.AFFORDABLE}#Optional-Coverages` },
    penalties: { id: "Penalties-for-Driving-Without-Insurance", link: `${PATHCONSTANTS.PRODUCTS.AUTO.AFFORDABLE}#Penalties-for-Driving-Without-Insurance` },
    discounts: { id: "Insurance-Discounts", link: `${PATHCONSTANTS.PRODUCTS.AUTO.AFFORDABLE}#Insurance-Discounts` },
}
const heroContent = {
    title: "Affordable Auto Coverage",
    subtitle: "Get a free quote today",
    image: {
        src: BannerImage,
        alt: "City"
    },
    align: "left",
}
const contentSection1 = {
    title: "Affordable Auto Insurance",
    subtitle: `We understand that finding quality coverage at a price that fits your budget is crucial. 
    Here, we're committed to providing you with the information you need to make informed decisions about your auto
     insurance.`,
    alignSubtitle: "left"
}
const contentSection2 = {
    title: "We're Here to Help You Save",
    body: [
        `1. LINK: [Minimum Requirements](${pageLinks.minimum.link})`,
        `2. LINK: [Optional Insurance Coverages](${pageLinks.optional.link})`,
        `3. LINK: [Penalties for Driving Without Insurance](${pageLinks.penalties.link})`,
        `4. LINK: [Insurance Discounts](${pageLinks.discounts.link})`,
    ],
    img: {
        src: AutoImg1,
        alt: "Woman driving"
    },
    alignBody: "left",
}
const contentSection3 = {
    subtitle: `We understand the importance of competitive pricing. Our rates are designed to be affordable 
    without compromising on the quality of coverage. Explore our options and see how we stand out.`,
    alignSubtitle: "left"
}
const contentSection4 = {
    id: pageLinks.minimum.id,
    title: `Minimum Requirements`,
    subtitle: `In the United States, auto insurance comes with a minimum requirement set by law. This is known 
    as liability insurance which typically includes bodily injury liability (BIL) and Property Damage Liability 
    (PDL) coverages.`,
    alignSubtitle: "left",
    alignTitle: "left",
}
const contentSection5 = {
    subtitle: `In the event of an unfortunate accident, liability insurance dies bit cover damages to your vehicles.`,
    alignSubtitle: "left",
}

const contentSection6 = {
    title: "Secure Your Journey with Confidence!",
    subtitle: `Take the Wheel of Safety - Get Your Auto Insurance Today!`,
    img: {
        src: AutoImg3,
        alt: "Auto"
    },
    CTAButtons: [
        {
            text: "Get a Quote",
            link: PATHCONSTANTS.QUOTES.AUTO,
            color: "primary",
            variant: "contained"
        },
        {
            text: `Contact Us`,
            link: PATHCONSTANTS.ABOUT.CONTACT,
            color: "secondary",
            variant: "contained"
        }
    ]
}
const contentSection7 = {
    id: pageLinks.optional.id,
    title: `Optional Insurance Coverages`,
    subtitle: `While meeting minimum requirements is essential, you have the flexibility to customize your coverage 
    with optional insurance. These include Collision coverage for damage to your vehicle, comprehensive 
    coverage for non-collision incidents, Personal Injury Protection (PIP) for medical expenses, and more.`,
    alignSubtitle: "left",
    alignTitle: "left",
}
const contentSection8 = {
    subtitle: `Whether you want extra protection for your vehicle or enhanced medical coverage, these options allow 
    you to tailor your insurance to your lifestyle.`,
    alignSubtitle: "left",
}
const contentSection9 = {
    id: pageLinks.penalties.id,
    title: `Penalties for Driving Without Insurance`,
    subtitle: `Driving without insurance is not only risky but also against the law. Penalties for being 
    caught without insurance can include fines, vehicle impoundment, and even suspension of your driver's 
    license. Understand and meeting the legal requirements is crucial for responsible and legal driving.`,
    alignSubtitle: "left",
    alignTitle: "left",
}
const contentSection10 = {
    subtitle: `In addition to the legal consequences, being at fault in an accident without insurance can 
    leave you financially vulnerable. You may be personally responsible for covering medical bills, property 
    damage, and other related costs.`,
    alignSubtitle: "left",
}
const ImgSection1 = {
    img: {
        src: AutoImg2,
        alt: "Car accident"
    },
    subtitle: `Having liability insurance is a fundamental necessity for any responsible driver, serving as 
    a crucial financial safety net in the unfortunate event of an accident.`,
}
const contentSection11 = {
    id: pageLinks.discounts.id,
    title: `Discover Insurance Discounts`,
    subtitle: `Consider bundling your auto insurance with other policies, such as home or renters insurance, 
    to unlock additional savings. Contact us today to learn more about our insurance discounts.`,
    CTAButtons: {
        align: "center",
        Buttons: [
            {
                text: "Get a Quote",
                link: PATHCONSTANTS.QUOTES.AUTO,
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
export default function Affordable() {
    return (<>
        <Hero {...heroContent} />
        <AutoSubNav />
        <TextSection {...contentSection1} />
        <BorderBoxWithImage {...contentSection2} />
        <TextSection {...contentSection3} />
        <TextSection {...contentSection4} />
        <TextSection {...contentSection5} />
        <CTAPicWithText {...contentSection6} />
        <TextSection {...contentSection7} />
        <TextSection {...contentSection8} />
        <TextSection {...contentSection9} />
        <TextSection {...contentSection10} />
        <CenterImage {...ImgSection1} />
        <TextSection {...contentSection11} />
    </>);
}