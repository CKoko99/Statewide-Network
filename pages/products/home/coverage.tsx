import Hero from "@/components/Content/Banners/Hero";
import HomeSubNav from './HomeSubNav';
import BannerImage from "@/public/assets/images/products/auto/indexbanner.png";
import PATHCONSTANTS from "constants/sitemap";
import TextSection from "@/components/Content/TextSection";
import BorderBoxWithImage from "@/components/Content/BorderBoxWithImage";
import HomeImg1 from "@/public/assets/images/products/home/home3.png";
import HomeImg2 from "@/public/assets/images/products/home/home4.png";
import HomeImg3 from "@/public/assets/images/products/home/home1.png";
import CTAPicWithText from "@/components/Content/CTA/CTAPicWithText";
import CenterImage from "@/components/Content/CenterImage";

const pageLinks = {
    dwelling: {
        id: "dwelling",
        link: `${PATHCONSTANTS.PRODUCTS.HOME.COVERAGE}#dwelling`,
    },
    otherStructures: {
        id: "other-structures",
        link: `${PATHCONSTANTS.PRODUCTS.HOME.COVERAGE}#other-structures`,
    },
    personalProperty: {
        id: "personal-property",
        link: `${PATHCONSTANTS.PRODUCTS.HOME.COVERAGE}#personal-property`,
    },
    lossOfUse: {
        id: "loss-of-use",
        link: `${PATHCONSTANTS.PRODUCTS.HOME.COVERAGE}#loss-of-use`,
    },
    liability: {
        id: "liability",
        link: `${PATHCONSTANTS.PRODUCTS.HOME.COVERAGE}#liability`,
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
    title: `Home Insurance Coverage Explained`,
    subtitle: `Every home is unique, and so are its insurance needs. At Statewide Insurance, we offer 
    customizable coverage options to ensure that your policy aligns perfectly with your requirements. 
    Whether you own a house, condominium, or rent an apartment, our policies are designed to adapt to your lifestyle.`,
    alignSubtitle: "left"
}
const contentSection2 = {
    title: `Different Types of Home Insurance Coverage`,
    body: [
        `1. LINK: [Dwelling Coverage](${pageLinks.dwelling.link})`,
        `2. LINK: [Other Structures Coverage](${pageLinks.otherStructures.link})`,
        `3. LINK: [Personal Property Coverage](${pageLinks.personalProperty.link})`,
        `4. LINK: [Loss of Use Coverage](${pageLinks.lossOfUse.link})`,
        `5. LINK: [Liability Insurance](${pageLinks.liability.link})`,
    ],
    img: {
        src: HomeImg1,
        alt: "City"
    },
    alignBody: "left",
}
const contentSection3 = {
    subtitle: `Your policy is more than just paperwork. We'll break down the elements, from coverage types to 
    policy limits and deductibles. Knowing what's in your policy is the first step to making informed decisions.`,
    alignSubtitle: "left"
}
const contentSection4 = {
    id: pageLinks.dwelling.id,
    title: `Dwelling Coverage`,
    subtitle: `Dwelling coverage is the cornerstore of your home insurance policy, ensuring financial 
    protection for your residence. In the unfortunate event of damage caused by covered perils such as fire, 
    windstorms, or vandalism, this coverage steps in to pay for the repair or complete reconstruction of your home.`,
    alignTitle: "left",
    alignSubtitle: "left"
}
const contentSection5 = {
    subtitle: `From the foundation to the roof, it encompasses the essential components of your dwelling, 
    including electrical wiring, plumbing, and HVAC systems. It's crucial to secure sufficient dwelling 
    coverage that accurately reflects the cost of rebuilding your home, safeguarding your haven against unforeseen events.`,
    alignSubtitle: "left"
}
const imageSection1 = {
    subtitle: `Having home insurance is the best way to protect your home and belongings from unexpected events.`,
    img: {
        src: HomeImg2,
        alt: "City"
    },
}
const contentSection6 = {
    id: pageLinks.otherStructures.id,
    title: `Other Structures Coverage`,
    subtitle: [`Your Property is likely to feature more than just your home. Other Structures Coverage extends it's 
    protective embrace to detached structures on your premises, such as garages, fences, sheds, and cottages.`,
        ``, `Whether it's a standalone workshop or a quaint garden shed, this coverage ensures that damages to 
    these structures are included in your insurance policy.`
    ],
    alignTitle: "left",
    alignSubtitle: "left"
}
const contentSection7 = {
    id: pageLinks.personalProperty.id,
    title: `Personal Property Coverage`,
    subtitle: [`Your home is a treasure trove of personal belongings, each item holding sentimental 
    or financial value. Personal Property Coverage shields your furniture, clothing, electronics, and other 
    cherished possessions from the impact of covered events.`, ``,
        `Whether it's a burst pipe damaging your electronics or a fire affecting your wardrobe, this coverage 
    helps you recover the cost of repairing or replacing your damaged belongings. Statewide Insurance understands 
    the importance of these personal items and offers a robust solution to ensure that your valuables are protected.`,
    ],
    alignTitle: "left",
    alignSubtitle: "left"
}
const contentSection8 = {
    title: "Secure Your Home with Confidence!",
    subtitle: `Your Home Deserves the Best -  Get a Home Insurance Quote Today!`,
    img: {
        src: HomeImg3,
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
const contentSection9 = {
    id: pageLinks.lossOfUse.id,
    title: `Loss of Use Coverage`,
    subtitle: [`In the wake of a covered event, Loss of Use Coverage befores your safety net, covering additional 
    living expenses if you must temporarily move out of your home during restoration.`, ``,
        `Whether it's the cost of renting a temporary residence or additional commuting expenses, this coverage 
    ensures that the disruption to your life is minimized.`],
    alignTitle: "left",
    alignSubtitle: "left"
}
const contentSection10 = {
    id: pageLinks.liability.id,
    title: `Liability Insurance`,
    subtitle: [`Beyond protecting your physical space, Statewide Insurance is dedicated to safeguarding your financial 
    well-being with Liability Insurance. This coverage is designed to shield your assets and cover legal defense 
    costs in case you or your family members are held responsible for causing injuries or property damage to others.`,
        ``,
        `With Liability Insurance, you can navigate unexpected legal challenges with confidence, knowing that you have 
a robust layer of protection in place.`
    ],
    alignTitle: "left",
    alignSubtitle: "left"
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
        <CenterImage {...imageSection1} />
        <TextSection {...contentSection6} />
        <TextSection {...contentSection7} />
        <CTAPicWithText {...contentSection8} />
        <TextSection {...contentSection9} />
        <TextSection {...contentSection10} />
    </>);
}