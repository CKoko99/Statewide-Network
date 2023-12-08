import Hero from "@/components/Content/Banners/Hero";
import HomeSubNav from './HomeSubNav';
import BannerImage from "@/public/assets/images/products/auto/indexbanner.png";



const heroContent = {
    title: "Home Insurance",
    subtitle: "Get a free quote today",
    image: {
        src: BannerImage,
        alt: "City"
    },
    align: "left",
}

export default function () {
    return (<>
        <Hero {...heroContent} />
        <HomeSubNav />
    </>);
}