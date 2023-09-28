import Hero from "../../../components/Content/Banners/Hero";
import SubNavBar from "../../../components/Navbar/SubNavBar";
import AutoSubNav from "./AutoSubNav";
import BannerImage from "../../../public/assets/images/products/auto/indexbanner.png";
const heroContent = {
    title: "Auto Insurance",
    subtitle: "Get a free quote today",
    image: {
        src: BannerImage,
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