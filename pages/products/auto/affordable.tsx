import Hero from "../../../components/Content/Banners/Hero";
import SubNavBar from "../../../components/Navbar/SubNavBar";
import AutoSubNav from "./AutoSubNav";
import BannerImage from "../../../public/assets/images/products/auto/indexbanner.png";

const heroContent = {
    title: "Affordable Auto Coverage",
    subtitle: "Get a free quote today",
    image: {
        src: BannerImage,
        alt: "City"
    },
    align: "left",
}

export default function Affordable() {
    return (<>
        <Hero {...heroContent} />
        <AutoSubNav />
    </>);
}