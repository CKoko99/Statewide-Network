import Hero from "../../../components/Content/Banners/Hero";
import SubNavBar from "../../../components/Navbar/SubNavBar";
import MotoSubNav from "./MotoSubNav";

const heroContent = {
    title: "Motorcycle Insurance",
    subtitle: "Get a free quote today",
    image: {
        src: "",
        alt: "City"
    },
    align: "left",
}

export default function Auto() {
    return (<>
        <Hero {...heroContent} />
        <MotoSubNav />
    </>);
}