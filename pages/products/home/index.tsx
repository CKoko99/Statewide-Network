import Hero from "../../../components/Content/Banners/Hero";
import SubNavBar from "../../../components/Navbar/SubNavBar";
import HomeSubNav from "./HomeSubNav";
import BannerImage from "../../../public/assets/images/products/auto/indexbanner.png";
import PATHCONSTANTS from "constants/sitemap";
import HomeImg1 from "../../../public/assets/images/products/home/home1.png";
import HomeImg2 from "../../../public/assets/images/products/home/home2.png";
import CTAPicWithText from "@/components/Content/CTA/CTAPicWithText";
import TextSection from "@/components/Content/TextSection";
import PicturesWithList from "@/components/Content/PicturesWithList";
import FlexDiagram from "@/components/Content/FlexDigrams/FlexDiagram";


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
    title: "Find the Best Home Insurance",
    subtitle: `At Statewide Insurance, we understand the significance of your home. Your home is where
    memories are made, and it deserves the utmost protection. That's why we're here to introduce you 
    to your comprehensive home insurance solutions tailored to safeguard your home.`,
    alignSubtitle: "left"
}
const contentSection2 = {
    title: "Secure Your Home with Confidence!",
    subtitle: `Your Home Deserves the Best -  Get a Home Insurance Quote Today!`,
    img: {
        src: HomeImg1,
        alt: "Home"
    },
    CTAButtons: [
        {
            text: "Get a Quote",
            link: PATHCONSTANTS.QUOTES.HOME,
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
const contentSection3 = {
    title: "Elevate Your Expectations: What Sets Statewide Apart",

}
const contentSection4 = {
    menuContent: [
        {
            title: "Personalized Coverage",
            body: `By getting a quote, you enable us to tailor a plan specific to your home and lifestyle`,
        },
        {
            title: `Discount Opportunities`,
            body: `We pffer varopis discount opportunities to help you save on your premium, rewarding factors such as
             home security features, bundled policies, and more.`,
        },
        {
            title: `Transparent Policy Terms`,
            body: `We believe in transparency. Our quoting process and policy terms are straightforward, 
            ensuring you understand your coverage and what to expect.`,
        }
    ]
}
const contentSection5 = {
    title: `Different Types of Coverages`,
    img: {
        src: HomeImg2,
        alt: "Moving Boxes"
    },
    reverse: true,
    content: [
        {
            title: `Dwelling Coverage`,
            body: `Pays to repair or rebuild your home - including electrical wiring, plumbing, and 
            heating and air conditioning.`,
        },
        {
            title: `Personal Property Coverage`,
            body: `This coverage helps to insure personal items in your home that may be damaged or destroyed 
            by a covered cause of loss.`,
        },
        {
            title: `Liability Coverage`,
            body: `Liability homeowner's insurance is designed to protect your assets and cover your defense 
            costs in the event of a lawsuit.`,
        }
    ]
}
const contentSection6 = {
    subtitle: `LINK: [Discover More Coverage Options](${PATHCONSTANTS.PRODUCTS.HOME.COVERAGE})`,
    noPadding: true,
}
const contentSection7 = {
    title: `Live Confidently with Complete Coverage`,
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
export default function Auto() {
    return (<>
        <Hero {...heroContent} />
        <HomeSubNav />
        <TextSection {...contentSection1} />
        <CTAPicWithText {...contentSection2} />
        <TextSection {...contentSection3} />
        <FlexDiagram {...contentSection4} />
        <PicturesWithList {...contentSection5} />
        <TextSection {...contentSection6} />
        <TextSection {...contentSection7} />
    </>);
}