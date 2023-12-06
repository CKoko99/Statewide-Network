import Hero from "../../../components/Content/Banners/Hero";
import SubNavBar from "../../../components/Navbar/SubNavBar";
import AutoSubNav from "./AutoSubNav";
import BannerImage from "../../../public/assets/images/products/auto/indexbanner.png";
import TextSection from "components/Content/TextSection";
import BorderBoxWithImage from "@/components/Content/BorderBoxWithImage";
import AutoImg1 from "../../../public/assets/images/products/auto/traffic1.png";
import AutoImg2 from "../../../public/assets/images/products/auto/traffic2.png";
import CenterImage from "@/components/Content/CenterImage";
import CTAPicWithText from "@/components/Content/CTA/CTAPicWithText";
import PATHCONSTANTS from "constants/sitemap";

const pageLinks = {
    liability: {
        link: "/products/auto/coverage#Liability-Coverage",
        id: "Liability-Coverage"
    },
    collision: { id: "Collision-Coverage", link: "/products/auto/coverage#Collision-Coverage" },
    comprehensive: { id: "Comprehensive-Coverage", link: "/products/auto/coverage#Comprehensive-Coverage" },
    personalInjury: { id: "Personal-Injury-Protection", link: "/products/auto/coverage#Personal-Injury-Protection" },
    uninsured: { id: "Uninsured-Underinsured-Motorist-Coverage", link: "/products/auto/coverage#Uninsured-Underinsured-Motorist-Coverage" },
}
const heroContent = {
    title: "Auto Coverage",
    subtitle: "Get a free quote today",
    image: {
        src: BannerImage,
        alt: "City"
    },
    align: "left",
}
const contentSection1 = {
    title: "Auto Insurance Coverage Explained",
    subtitle: `Auto insurance isn't just a bill; it's a safety net. It's there to catch you when life takes an 
    unexpected turn. Whether it's a fender bender or a major collision, understanding how insurance functions is 
    key to financial security.`,
    alignSubtitle: "left"
}
const contentSection2 = {
    title: `Different Types of Coverage`,
    body: [
        `1. LINK: [Liability Insurance](${pageLinks.liability.link})`,
        `2. LINK: [Collision Coverage](${pageLinks.collision.link})`,
        `3. LINK: [Comprehensize Coverage](${pageLinks.comprehensive.link})`,
        `4. LINK: [Personal Injury Protection](${pageLinks.personalInjury.link})`,
        `5. LINK: [Uninsured/Underinsured Motorist Coverage](${pageLinks.uninsured.link})`,
    ],
    img: {
        src: AutoImg1,
        alt: "Traffic"
    },
    alignBody: "left",
}
const contentSection3 = {
    subtitle: `Your policy is more than just paperwork. We'll break down the elements, from coverage types to 
    policy limits and deductibles. Knowing what's in your policy is the first step to making informed decisions.`,
    alignSubtitle: "left"
}
const contentSection4 = {
    id: pageLinks.liability.id,
    title: "Liability Coverage",
    subtitle: `Liability car insurance is designed to protect you financially if you are responsible for 
    injuring someone or damaging their property in a car accident.`,
    alignTitle: "left",
    alignSubtitle: "left"
}
const contentSection5 = {
    subtitle: `Liability insurance is a legal requirement for all drivers. It serves as a financial safety net, providing 
    coverage for bodily injury and property damage that may result from an accident where you are at fault.`,
    alignSubtitle: "left"
}
const imgContent1 = {
    img: {
        src: AutoImg2,
        alt: "Traffic"
    },
    subtitle: `Having liability insurance is a fundamental necessity for any responsible driver,
     serving as a crucial financial safety net in the unfortunate event of an accident.`
}
const contentSection6 = {
    id: pageLinks.collision.id,
    title: "Collision Coverage",
    subtitle: `Collision coverage is a type of coverage that helps pay for repairs to your own vehicle in the 
    event of an accident, regardless of who is at fault. Ensuring that you can get back on the road quickly after a 
    collision.`,
    alignTitle: "left",
    alignSubtitle: "left"
}
const contentSection7 = {
    subtitle: `Unlike liability coverage, which is contingent on determining fault, collision insurance 
    pays out regardless of who is responsible for the accident. `,
    alignTitle: "left",
    alignSubtitle: "left"
}
const contentSection8 = {
    id: pageLinks.comprehensive.id,
    title: "Comprehensive Coverage",
    subtitle: `Comprehensive coverage, often referred to as "comp" coverage, is designed to 
    cover damages to your vehcile that occur outside of a collision. `,
    alignTitle: "left",
    alignSubtitle: "left"
}
const contentSection9 = {
    subtitle: `Comprehensive insurance is a versatile shield for your vehicle, covering a specturm 
    of non-collision incidents, including natural disasters, theft, animal collisions, and damages 
    caused by falling objects.`,
    alignTitle: "left",
    alignSubtitle: "left"
}
const contentSection10 = {
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
const contentSection11 = {
    id: pageLinks.personalInjury.id,
    title: "Personal Injury Protection",
    subtitle: `Personal Injury Protection, commonly known as PIP, provides coverage for medical expenses and 
    related costs incurred by you and your passengers, regardless of who is at fault in an accident.`,
    alignTitle: "left",
    alignSubtitle: "left",
}
const contentSection12 = {
    subtitle: `Personal Injury Protection ensures financial support for medical expenses, lost wages, 
    funeral costs, and even survivor benefits for you, your passengers, and family members in an 
    unfortunate event of an accident.`,
    alignSubtitle: "left",
}
const contentSection13 = {
    id: pageLinks.uninsured.id,
    title: `Uninsured / Underinsured Motorist Coverage`,
    subtitle: `Uninsured/Underinsured Motorist Coverage is a type of insurance that steps in to 
    protect you when you're involved in an accident with a driver who either has no insurance or insufficient 
    coverage to pay for the damages incurred.`,
    alignSubtitle: "left",
    alignTitle: "left",
}
const contentSection14 = {
    subtitle: `Uninsured/Underinsured Motorist coverage helps with medical expenses, protection for
     property damage, hit-and-run incidents, and bodily injury compensation.`,
    alignSubtitle: "left",
}

const contentSection15 = {
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
        <TextSection  {...contentSection1} />
        <BorderBoxWithImage {...contentSection2} />
        <TextSection  {...contentSection3} />
        <TextSection  {...contentSection4} />
        <CenterImage    {...imgContent1} />
        <TextSection  {...contentSection5} />
        <TextSection  {...contentSection6} />
        <TextSection  {...contentSection7} />
        <TextSection  {...contentSection8} />
        <TextSection  {...contentSection9} />
        <CTAPicWithText {...contentSection10} />
        <TextSection  {...contentSection11} />
        <TextSection  {...contentSection12} />
        <TextSection  {...contentSection13} />
        <TextSection  {...contentSection14} />
        <TextSection  {...contentSection15} />
    </>);
}