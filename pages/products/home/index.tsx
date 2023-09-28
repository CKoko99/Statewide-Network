import Hero from "../../../components/Content/Banners/Hero";
import SubNavBar from "../../../components/Navbar/SubNavBar";
import HomeSubNav from "./HomeSubNav";
import BannerImage from "../../../public/assets/images/products/auto/indexbanner.png";

const heroContent = {
    title: "Home Insurance",
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
        <HomeSubNav />
    </>);
}