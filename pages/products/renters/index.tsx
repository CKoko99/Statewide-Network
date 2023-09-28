import Hero from "../../../components/Content/Banners/Hero";
import SubNavBar from "../../../components/Navbar/SubNavBar";
import RentersSubNav from "./RentersSubNav";

const heroContent = {
    title: "Renters Insurance",
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
        <RentersSubNav />
    </>);
}