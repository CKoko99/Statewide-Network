import Hero from "../../../components/Content/Banners/Hero";
import SubNavBar from "../../../components/Navbar/SubNavBar";
import AutoSubNav from "./AutoSubNav";
import BannerImage from "../../../public/assets/images/products/auto/indexbanner.png";
import PATHCONSTANTS from "constants/sitemap";
import TextSection from "@/components/Content/TextSection";
import FAQSection from "@/components/Content/FAQSection";

const heroContent = {
    title: "Frequently Asked Auto Insurance Questions",
    subtitle: "Get a free quote today",
    image: {
        src: BannerImage,
        alt: "City"
    },
    align: "left",
}
const contentSection1 = {
    title: `Frequently Asked Auto Insurance Questions`,
    subtitle: `We're here to help you understand every aspect of auto insurance. If your question isn't 
    answered below, don't hesitate to LINK: [contact us!](${PATHCONSTANTS.ABOUT.CONTACT})`,
}
const contentSection2 = {
    content: [
        {
            title: `What factors influence my auto insurance premium?`,
            body: `Your premium is influenced by factors like your driving record, age, location, type of coverage, and the make/model of your vehicle.`
        },
        {
            title: `How much auto insurance do I need?`,
            body: `The amount of coverage you need depends on factors such as your assets, the value of your vehicle, and your risk tolerance. It's recommended to have coverage that exceeds state minimums.`
        },
        {
            title: `What is liability insurance, and why is it important?`,
            body: `Liability insurance covers bodily injury and property damage you may cause in an accident. It's crucial because it fulfills legal requirements and protects you financially.`
        },
        {
            title: `What is the difference between collision and comprehensive coverage?`,
            body: `Collision covers damage to your vehicle in accidents, while comprehensive covers non-collision incidents like theft, vandalism, or natural disasters.`
        },
        {
            title: `What is Personal Injury Protection (PIP)?`,
            body: `PIP covers medical expenses and lost wages for you and your passengers, regardless of fault. It is optional in some states and mandatory in others.`
        },
        {
            title: `Do I need uninsured/underinsured motorist coverage?`,
            body: `Yes, it's recommended. This coverage protects you if you're in an accident with a driver who doesn't have insurance or has insufficient coverage.`
        },
        {
            title: `Are there discounts available for auto insurance?`,
            body: `Yes, discounts are often available for safe driving, bundling policies, completing defensive driving courses, and more.`
        },
        {
            title: `How can I lower my auto insurance premium?`,
            body: `You can lower your premium by maintaining a clean driving record, bundling policies, raising your deductible, and taking advantage of available discounts.`
        },
        {
            title: `Does my credit score affect my auto insurance premium?`,
            body: `In some states, yes. Many insurance companies use credit scores as a factor in determining premiums.`
        },
        {
            title: `What happens if I let my auto insurance lapse?`,
            body: `Letting your insurance lapse can lead to higher premiums, potential fines, and legal consequences. It's important to maintain continuous coverage.`
        },
        {
            title: `How does filing a claim affect my premium?`,
            body: `Filing a claim can lead to an increase in your premium, especially for at-fault accidents. Some insurers offer accident forgiveness programs.`
        },
        {
            title: `Do I need insurance for a leased or financed car?`,
            body: `Yes, most lenders and leasing companies require comprehensive and collision coverage to protect their investment.`
        },
        {
            title: `Can I add someone to my auto insurance policy temporarily?`,
            body: `Yes, you can typically add someone temporarily, but they may need to be a resident of your household.`
        },
        {
            title: `Does auto insurance cover rental cars?`,
            body: `Your auto insurance may provide coverage for rental cars, but it's essential to check your policy and consider additional coverage offered by the rental agency.`
        },
        {
            title: `What is gap insurance, and do I need it?`,
            body: `Gap insurance covers the difference between the actual cash value of your vehicle and the amount you owe on a lease or loan. It's recommended for new cars and significant loans.`
        },
        {
            title: `Can I change my auto insurance coverage at any time?`,
            body: `In most cases, yes. However, it's advisable to review your policy at renewal to avoid potential penalties.`
        },
        {
            title: `Is my personal property inside the car covered by auto insurance?`,
            body: `No, personal property is usually not covered by auto insurance. It falls under renters or homeowners insurance.`
        },
        {
            title: `How does my deductible affect my premium?`,
            body: `A higher deductible typically results in a lower premium, but it means you'll pay more out of pocket if you file a claim.`
        },
        {
            title: `Can I get auto insurance without a license?`,
            body: `It's challenging but not impossible. Some insurers offer coverage for unlicensed drivers, but premiums may be higher.`
        },
        {
            title: `Do I need insurance for a parked car?`,
            body: `Yes, liability insurance is often required even if your car is parked, especially if it's on public property.
            `
        },
        {
            title: `Does auto insurance cover aftermarket modifications?`,
            body: `Aftermarket modifications may not be automatically covered. You may need additional coverage for custom parts and equipment.`
        },
        {
            title: `How long does an accident stay on my insurance record?`,
            body: `Accidents typically stay on your record for three to five years, depending on the severity and state regulations.`
        },
        {
            title: `Can I get auto insurance if I have a bad driving record?`,
            body: `Yes, but your options may be limited, and premiums may be higher. Shopping around is crucial in this case.`
        },
        {
            title: `What is a deductible, and how does it work?`,
            body: `A deductible is the amount you pay out of pocket before your insurance kicks in. Higher deductibles often result in lower premiums.`
        },
        {
            title: `Does auto insurance cover a friend driving my car?`,
            body: `Coverage varies, but generally, if your friend has your permission to drive, they may be covered by your insurance. It's essential to check your policy.`
        },
        {
            title: `What is the difference between an insurance broker and an agent?`,
            body: `An insurance broker works with multiple companies to find you the best coverage, while an agent represents one specific insurance company.`
        },
        {
            title: `Can I get auto insurance with a foreign driver's license?`,
            body: `Yes, many insurers accept foreign driver's licenses. It's crucial to inform them of your unique situation.`
        },
        {
            title: `What is non-owner car insurance, and do I need it?`,
            body: `Non-owner insurance provides liability coverage for drivers who don't own a car but frequently rent or borrow. It's often a good option for those without a personal vehicle.`
        },
        {
            title: `Do I need insurance for a classic or vintage car?`,
            body: `Yes, but classic car insurance may offer specialized coverage tailored to the unique needs of vintage vehicles.`
        },
        {
            title: `How often should I review my auto insurance policy?`,
            body: `It's advisable to review your policy annually or when significant life changes occur, such as moving, buying a new car, or getting married. Regular reviews help ensure your coverage aligns with your current needs.`
        },
    ]
}

const contentSection15 = {
    title: `Drive Confidently with Complete Coverage`,
    subtitle: `Explore Your Options and Secure Your Journey with a Comprehensize Auto Insurance Plan Today!`,
    CTAButtons: {
        align: "center",
        Buttons: [
            {
                text: "Get a Quote",
                link: PATHCONSTANTS.QUOTES.AUTO,
                color: "primary" as const,
                variant: "contained" as const
            },
            {
                text: `Contact Us`,
                link: PATHCONSTANTS.ABOUT.CONTACT,
                color: "secondary" as const,
            }
        ]
    }
}
export default function Auto() {
    return (<>
        <Hero {...heroContent} />
        <AutoSubNav />
        <TextSection {...contentSection1} />
        <FAQSection {...contentSection2} />
        <TextSection {...contentSection15} />
    </>);
}