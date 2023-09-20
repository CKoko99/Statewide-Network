import Hero from "../../components/Content/Banners/Hero";
import CityImg from "../../public/assets/images/about/city.png";
import UmbrellaImg from "../../public/assets/images/about/umbrellas.png";
import HandshakeImg from "../../public/assets/images/about/handshake.png";
import PictureWithText from "../../components/Content/PictureWithText";
import TextSection from "../../components/Content/TextSection";
const heroContent = {
    title: "About Us",
    subtitle: "As a part of the OSIX Insurance family we are experts in providing coverage to families all over Texas",
    image: {
        src: CityImg,
        alt: "City"
    },
    align: "left",
}
const contentSection1 = {
    title: "We got you covered",
    body: `
    Our team at Statewide Insurance is composed of seasoned professionals fluent in both English and Spanish, boasting decades
    of experience in the insurance industry. With their extensive knowledge and expertise, they are well-equipped to tailor insurance solutions to your unique situation and requirements.
    `,
    image: {
        src: UmbrellaImg,
        alt: "Umbrella"
    }
}
const contentSection2 = {
    heading: "Our Mission",
    subHeading: `Founded in 2020 Statewide aims to become Texans go to source for affordable car insurance`
}
const contentSection3 = {
    body: `
    At Statewide Insurance, our professionals are dedicated to ongoing research, forging valuable connections, and expanding our array of offerings to deliver exclusive discounts and unparalleled
     rate ti our clients. Our compregensive coverage options span a wide spectrum, including but not limited to auto, home, renters, and recreational insurance, among others.
      We are committed to safeguarding your assets and providing you with the peace of mind you deserve. 
    `,
    image: {
        src: HandshakeImg,
        alt: "Handshake"
    }
}
export default function Index() {
    return (<>
        <Hero {...heroContent} />
        <PictureWithText {...contentSection1} />
        <TextSection largeText {...contentSection2} />
        <PictureWithText reverse {...contentSection3} />
    </>)
}