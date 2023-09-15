import type { NextPage } from 'next'
import HeadComponent from "../components/Head";
import MainBanner from "../components/Content/Banners/MainBanner";
import BannerImage from "../public/assets/images/home/CarHug.png";
import PATHCONSTANTS from '../constants/sitemap';

const bannerContent = {
  mainHeading: "Insurance Savings the Size of Texas",
  subHeading: "Your One-Stop Insurance Destination: Fast, Easy, and Affordable Coverages for All Your Needs",
  image: BannerImage,
  ctaItems: [
    {
      mainText: "Auto",
      subText: "Switch and save an average of $247",
      link: PATHCONSTANTS.QUOTES.AUTO,
      icon: null
    },
    {
      mainText: "Home",
      subText: "Save up to 40% on home insurance",
      link: PATHCONSTANTS.QUOTES.HOME,
      icon: null
    },
    {
      mainText: "Renters",
      subText: "Get renters insurance for as low as $5/month",
      link: PATHCONSTANTS.QUOTES.RENTERS,
      icon: null
    },
    {
      mainText: "Motorcycle",
      subText: "Get motorcycle insurance for as low as $75/year",
      link: PATHCONSTANTS.QUOTES.MOTORCYCLE,
      icon: null
    }
  ],
  ctaButton: {
    text: "Get a Quote!",
    link: "/quote"
  },
}
const Home: NextPage = () => {
  return (
    <>
      <HeadComponent title={'Statewide Insurance'} metaData={'Statewide Insurance'} />
      <MainBanner {...bannerContent} />
    </>

  )
}

export default Home
