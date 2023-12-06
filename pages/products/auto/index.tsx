import Hero from "../../../components/Content/Banners/Hero";
import SubNavBar from "../../../components/Navbar/SubNavBar";
import AutoSubNav from "./AutoSubNav";
import BannerImage from "../../../public/assets/images/products/auto/indexbanner.png";
import AutoImg1 from "../../../public/assets/images/products/auto/driving1.png";
import AutoImg2 from "../../../public/assets/images/products/auto/car1.png";
import TextSection from "@/components/Content/TextSection";
import PATHCONSTANTS from "constants/sitemap";
import CTAPicWithText from "@/components/Content/CTA/CTAPicWithText";
import ContentSlider from "@/components/Content/ContentSlider";
import FlexDiagram from "@/components/Content/FlexDigrams/FlexDiagram";
import PicturesWithList from "@/components/Content/PicturesWithList";
const heroContent = {
    title: "Auto Insurance",
    subtitle: "Get a free quote today",
    image: {
        src: BannerImage,
        alt: "City"
    },
    align: "left",
}
const contentSection1 = {
    title: `Find the Best Auto Coverage`,
    subtitle: `Welcome to a journey towards secure and worry-free driving! Your safety on the road is our 
    top priority, and we believe that having the right auto insurance is the key yo a confident and 
    protected driving experience.`,
    alignSubtitle: "left"
}
const contentSection2 = {
    title: "Secure Your Journey with Confidence!",
    subtitle: `Take the Wheel of Safety - Get Your Auto Insurance Today!`,
    img: {
        src: AutoImg1,
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
const contentSection3 = {
    title: `The Reasons Our Customers Love Shopping Here`,
    noPadding: true,
}
const contentSection4 = {
    menuContent: [
        {
            title: "Personalized Coverage",
            body: `By getting a quote, you enable us to tailor a plan that suits your lifestyle, 
            driving habits, and budget.`,
        },
        {
            title: `Competitve Rates`,
            body: `Discover affordable options on coverage. Our commitment is to provide you 
            with competitve rates that align with your financial goals.`,
        },
        {
            title: `Quick and Hassle-Free`,
            body: `Our streamlined process ensures you get the information you need promptly, 
            allowing you to make an informed decision without unnecessary delays.`,
        }
    ]
}
const contentSection5 = {
    title: `Different Types of Coverages`,
    img: {
        src: AutoImg2,
        alt: "Car"
    },
    reverse: true,
    content: [
        {
            title: `Collision Coverage`,
            body: `Covers damages to your vehicle resulting from collisions with other vehicles or objects.`,
        },
        {
            title: `Comprehensive Coverage`,
            body: `Comprehensize coverage goes beyond collisions, offering protection gainst a wire array of non-collision 
            incidents.`,
        },
        {
            title: `Liability Coverage`,
            body: `Liability coverage is a legal requirement and is designed to protect you financially if you are found responsible 
            in an accident.`,
        }
    ]
}
const contentSection6 = {
    subtitle: `LINK: [Learn More About Auto Insurance Coverages](${PATHCONSTANTS.PRODUCTS.AUTO.COVERAGE})`,
    subtitleVariant: "body1" as const,
    noPadding: true
}
const contentSection7 = {
    title: `Drive Confidently with Complete Coverage`,
    subtitle: `Explore Your Options and Secure Your Journey with a Comprehensize Auto Insurance Plan Today!`,
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
export default function Auto() {
    return (<>
        <Hero {...heroContent} />
        <AutoSubNav />
        <TextSection {...contentSection1} />
        <CTAPicWithText {...contentSection2} />
        <TextSection {...contentSection3} />
        <FlexDiagram {...contentSection4} />
        <PicturesWithList {...contentSection5} />
        <TextSection {...contentSection6} />
        <TextSection {...contentSection7} />

    </>);
}