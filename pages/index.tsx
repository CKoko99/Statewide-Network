import type { NextPage } from 'next'
import HeadComponent from "../components/Head";
import MainBanner from "../components/Content/Banners/MainBanner";
import BannerImage from "../public/assets/images/home/CarHug.png";
import PATHCONSTANTS from '../constants/sitemap';
import MotorcycleIcon from "../public/assets/images/home/icons/motorcycle.png"
import CarIcon from "../public/assets/images/home/icons/car.png"
import HomeIcon from "../public/assets/images/home/icons/house.png"
import RentersIcon from "../public/assets/images/home/icons/rent.png"
import TextSection from '../components/Content/TextSection';
import CompetitveIcon from "../public/assets/images/home/icons/competitive.png"
import QuickIcon from "../public/assets/images/home/icons/quick.png"
import TailoredIcon from "../public/assets/images/home/icons/tailored.png"
import ContentSlider from '../components/Content/ContentSlider';
import NumbersSection from '../components/Content/NumbersSection';
import { Box } from '@mui/material';
import Hero from '../components/Content/Banners/Hero';
import HeroImg from "../public/assets/images/home/Hero.png"
const bannerContent = {
  mainHeading: "Insurance Savings the Size of Texas",
  subHeading: "A Better Tomorrow Starts Today",
  image: {
    src: BannerImage,
    alt: "Car Hug"
  },
  ctaItems: [
    {
      mainText: "Auto",
      subText: "Switch and save an average of $247",
      link: PATHCONSTANTS.QUOTES.AUTO,
      icon: CarIcon
    },
    {
      mainText: "Home",
      subText: "Save up to 40% on home insurance",
      link: PATHCONSTANTS.QUOTES.HOME,
      icon: HomeIcon
    },
    {
      mainText: "Renters",
      subText: "Get renters insurance for as low as $5/month",
      link: PATHCONSTANTS.QUOTES.RENTERS,
      icon: RentersIcon
    },
    {
      mainText: "Motorcycle",
      subText: "Get motorcycle insurance for as low as $75/year",
      link: PATHCONSTANTS.QUOTES.MOTORCYCLE,
      icon: MotorcycleIcon
    }
  ],
  ctaButton: {
    text: "Get a Quote!",
    link: "/quote"
  },
}
const sliderContent = {
  menuContent: [
    {
      title: "Competitive Rates",
      body: "We are dedicated to securing the best rates for you by offering exclusive discounts and flexible coverage options.",
      img: {
        src: CompetitveIcon,
        alt: "Competitive Rates"
      }
    },
    {
      title: "Quick Quoting",
      body: "With Statewide Insurance the quoting process is easy. Ether get a quote online or call (555)-555-555 today!",
      img: {
        src: QuickIcon,
        alt: "Quick Quoting"
      }
    },
    {
      title: "Tailored Coverage",
      body: "Say goodbye to one-size-fits-all policies. Choose exactly how uch coverage you need, or have our experts help",
      img: {
        src: TailoredIcon,
        alt: "Tailored Coverage"
      }
    }
  ]
}
const textSectionContent = {
  heading: "Switching Made Simple: Embrace YOUR Savings Today!",
  subHeading: "Our people and our technology are here to help our fellow Texans stop overpaying to cover their loved belongings",
}
const numberSection = {
  title: "By the Numbers",
  menuContent: [
    {
      beforeNumber: "",
      beforeNumberGap: false,
      number: 17,
      afterNumber: "K+",
      afterNumberGap: false,
      body: "Texans Insured"
    },
    {
      beforeNumber: "$",
      beforeNumberGap: false,
      number: 247,
      afterNumber: "",
      afterNumberGap: false,
      body: "Saved on Average"
    },
    {
      beforeNumber: "",
      beforeNumberGap: false,
      number: 4,
      afterNumber: "Minutes",
      afterNumberGap: true,
      body: "Average Quoting Process"
    },
    {
      beforeNumber: "",
      beforeNumberGap: false,
      number: 97,
      afterNumber: "%",
      afterNumberGap: false,
      body: "Renewal Rate"
    },
  ]
}
const HeroContent = {
  title: `"Statewide Insurance makes it easy to find affordable coverage, so you can quickly get back to doing what you enjoy."`,
  CTAButtons: [{
    text: "Explore Reviews",
    link: "/"
  }],
}
const DoubleMenu = {
  title: "Discover Savings",
  menuContent: [
    {
      title: "Shop Online",
      img: null,
      CTA: {
        text: "Get Started",
      }
    },
    {
      title: "Contact Us",
      img: null,
      CTA: {
        text: "Give Us a Call",
        type: "LINK",
        link: PATHCONSTANTS.PHONE
      }
    }
  ]
}
const HeroContent2 = {
  title: "Learn More About Statewide Insurance",
  subtitle: "Founded in 2021 we have helped over 17,00 Texans protect their loved belongings",
  CTAButtons: [
    {
      text: "About Us",
      link: PATHCONSTANTS.ABOUT.INDEX
    },
    {
      text: "Careers",
      link: PATHCONSTANTS.ABOUT.CAREERS
    },
    {
      text: "Contact Us",
      link: PATHCONSTANTS.ABOUT.CONTACT
    }
  ],
  image: {
    src: HeroImg,
    alt: "Hero Image"
  }
}
const Home: NextPage = () => {
  return (
    <>
      <HeadComponent title={'Statewide Insurance'} metaData={'Statewide Insurance'} />
      <MainBanner {...bannerContent} />
      <TextSection {...textSectionContent} />
      <ContentSlider {...sliderContent} />
      <NumbersSection {...numberSection} />
      <Hero {...HeroContent2} />
    </>
  )
}

export default Home
