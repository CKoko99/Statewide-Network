import Hero from "../../../components/Content/Banners/Hero";
import SubNavBar from "../../../components/Navbar/SubNavBar";
import AutoSubNav from "./AutoSubNav";
import BannerImage from "../../../public/assets/images/products/auto/indexbanner.png";
import TextSection from "components/Content/TextSection";

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
    key to financial security.`
}
const contentSection3 = {
    subtitle: `Your policy is more than just paperwork. We'll break down the elements, from coverage types to 
    policy limits and deductibles. Knowing what's in your policy is the first step to making informed decisions.`,
    alignSubtitle: "left"
}
const contentSection4 = {
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
const contentSection6 = {
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
export default function Auto() {
    return (<>
        <Hero {...heroContent} />
        <AutoSubNav />
        <TextSection  {...contentSection1} />
        <TextSection  {...contentSection3} />
        <TextSection  {...contentSection4} />
        <TextSection  {...contentSection5} />
        <TextSection  {...contentSection6} />
        <TextSection  {...contentSection7} />
        <TextSection  {...contentSection8} />
        <TextSection  {...contentSection9} />
    </>);
}