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
import HeroImg2 from "../public/assets/images/home/Hero2.png"
import LaptopImg from "../public/assets/images/home/Laptop.png"
import PhoneImg from "../public/assets/images/home/Phone.png"
import MultipleContentWImages from '../components/Content/MultipleContentWImages';
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
  image: {
    src: HeroImg2,
    alt: "Girl in a field of flowers"
  }
}
const DoubleMenu = {
  title: "Discover Savings",
  menuContent: [
    {
      title: "Shop Online",
      image: {
        src: LaptopImg,
        alt: "Laptop"
      },
      CTA: {
        text: "Get Started",
      },
      subHeading: "Getting a quote online is as easy as 1, 2, 3!",
      body: [
        `1. Tell us about yourself and your vehicle`,
        `2. Select the coverage that fits your needs`,
        `3. Review your policy and purchase!`
      ],
      CTAButtons: [
        {
          text: "Get Started",
        }
      ]
    },
    {
      title: "Contact Us",
      image: {
        src: PhoneImg,
        alt: "Phone"
      },
      subHeading: "Our agents are standing by to help you find the best coverage for your needs",
      body: [
        `Either fill out our contact form and we will reach out to you at your convenience`,
        `Or give us a call at (555)-555-5555`
      ],

      CTAButtons: [{
        text: "Contact Form",
        type: "LINK",
        link: PATHCONSTANTS.ABOUT.CONTACT,
        color: "secondary"
      }, {
        text: "Give Us a Call",
        type: "LINK",
        link: PATHCONSTANTS.PHONE,
        color: "primary"
      }]
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
      <Hero {...HeroContent} />
      <MultipleContentWImages {...DoubleMenu} />
      <Hero {...HeroContent2} />
    </>
  )
}

export default Home
