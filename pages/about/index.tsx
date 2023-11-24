import Hero from "../../components/Content/Banners/Hero";
import CityImg from "../../public/assets/images/about/city.png";
import UmbrellaImg from "../../public/assets/images/about/umbrellas.png";
import HandshakeImg from "../../public/assets/images/about/handshake.png";
import PictureWithText from "../../components/Content/PictureWithText";
import TextSection from "../../components/Content/TextSection";
import ScreenshotTool from "../../components/Screenshot/ScreenshotTool";
import Cards from "../../components/Content/Cards/Cards";
import PATHCONSTANTS from "../../constants/sitemap";
import ContactImg from "../../public/assets/images/about/cards/contact.png";
import CareersImg from "../../public/assets/images/about/cards/careers.png";
import ReviewsImg from "../../public/assets/images/about/cards/reviews.png";
import { useEffect } from "react";
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
     rate to our clients. Our compregensive coverage options span a wide spectrum, including but not limited to auto, home, renters, and recreational insurance, among others.
      We are committed to safeguarding your assets and providing you with the peace of mind you deserve. 
    `,
    image: {
        src: HandshakeImg,
        alt: "Handshake"
    }
}
const cardsSection = {
    title: "Learn more",
    subtitle: "Insights, Information, and Beyond",
    content: [
        {
            title: "Contact Us",
            link: PATHCONSTANTS.ABOUT.CONTACT,
            img: {
                src: ContactImg,
                alt: "Phone"
            }
        },
        {
            title: "Careers",
            link: PATHCONSTANTS.ABOUT.CONTACT,
            img: {
                src: CareersImg,
                alt: "Careers"
            }
        },
        {
            title: "Reviews",
            link: PATHCONSTANTS.ABOUT.CONTACT,
            img: {
                src: ReviewsImg,
                alt: "Reviews"
            }
        },
    ]
}
export default function Index() {

    useEffect(() => {
        //calculate with compound interest at 10% per year

        function calculateMoney(dollarsPerYear, years) {
            let total = 0;
            for (let i = 0; i < years; i++) {
                total += dollarsPerYear;
                total += total * 0.1;
            }
            return total;
        }
        console.log(calculateMoney(20000, 35));
    }, [])
    return (<>

        <Hero {...heroContent} />
        <PictureWithText {...contentSection1} />
        <TextSection largeText {...contentSection2} />
        <PictureWithText reverse {...contentSection3} />
        <Cards  {...cardsSection} />
    </>)
}