import Hero from "../../../components/Content/Banners/Hero";
import SubNavBar from "../../../components/Navbar/SubNavBar";
import HomeSubNav from "./HomeSubNav";

const heroContent = {
    title: "Home Insurance",
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
        <HomeSubNav />
    </>);
}