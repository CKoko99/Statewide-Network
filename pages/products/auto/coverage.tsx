import Hero from "../../../components/Content/Banners/Hero";
import SubNavBar from "../../../components/Navbar/SubNavBar";
import AutoSubNav from "./AutoSubNav";

const heroContent = {
    title: "Auto Coverage",
    subtitle: "Get a free quote today",
    image: {
        src: null,
        alt: "City"
    },
    align: "left",
}

export default function Auto() {
    return (<>
        <Hero {...heroContent} />
        <AutoSubNav />
    </>);
}