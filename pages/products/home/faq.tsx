import Hero from "@/components/Content/Banners/Hero";
import HomeSubNav from './HomeSubNav';
import BannerImage from "@/public/assets/images/products/auto/indexbanner.png";
import TextSection from "@/components/Content/TextSection";
import PATHCONSTANTS from "constants/sitemap";
import FAQSection from "@/components/Content/FAQSection";

const heroContent = {
    title: "Home Insurance",
    subtitle: "Get a free quote today",
    image: {
        src: BannerImage,
        alt: "City"
    },
    align: "left",
}

const contentSection1 = {
    title: `Frequently Asked Home Insurance Questions`,
    subtitle: `We're here to help you understand every aspect of home insurance. If your question isn't 
    answered below, don't hesitate to LINK: [contact us!](${PATHCONSTANTS.ABOUT.CONTACT})`,
}
const contentSection2 = {
    content: [
        {
            title: 'What does home insurance cover?',
            body: `Home insurance typically covers your dwelling, personal property, liability, and additional living expenses in case of covered perils.`
        },
        {
            title: `How much home insurance coverage do I need?`,
            body: `The ideal coverage varies, but it should be enough to rebuild your home, replace personal belongings, and protect against liability. We can help you assess your needs.`
        },
        {
            title: `Are natural disasters covered by home insurance?`,
            body: `It depends on the policy. Most standard policies cover perils like fire, windstorms, and hail. Additional coverage may be needed for floods, earthquakes, or other natural disasters.`
        },
        {
            title: `What is the difference between actual cash value and replacement cost?`,
            body: `Actual cash value considers depreciation, while replacement cost covers the current cost to replace or repair without factoring in depreciation.`
        },
        {
            title: `How can I lower my home insurance premium?`,
            body: `Bundling policies, installing security systems, and maintaining good credit are ways to potentially lower your premium. Ask us about available discounts.`
        },
        {
            title: `Is personal property coverage only applicable inside the home?`,
            body: `No, personal property coverage often extends beyond the home and can cover belongings anywhere in the world. Check your policy for specific details.`
        },
        {
            title: `Does home insurance cover home office equipment?`,
            body: `Standard policies may have limited coverage for home office equipment. You might need additional coverage based on your specific needs.`
        },
        {
            title: `What is liability insurance, and why do I need it?`,
            body: `Liability insurance protects against legal claims if you or a family member is responsible for injuries or damages to others. It's crucial for financial protection.`
        },
        {
            title: `Are home improvements covered by insurance?`,
            body: `Major home improvements can impact your coverage needs. Inform us about renovations so we can adjust your policy accordingly.`
        },
        {
            title: `Can I get insurance for valuable items like jewelry or art?`,
            body: `Yes, you can add a rider or endorsement to your policy to cover high-value items that may exceed standard limits.`
        },
        {
            title: `What is Loss of Use coverage?`,
            body: `Loss of Use coverage helps with additional living expenses if your home becomes temporarily uninhabitable due to a covered event, like repairs after a fire.`
        },
        {
            title: `How quickly can I expect a claim to be processed?`,
            body: `Claim processing times vary, but we strive for a quick and efficient process. Contact our claims department for specific information on your case.`
        },
        {
            title: `Can I change my coverage during the policy period?`,
            body: `Yes, you can typically make adjustments to your coverage during the policy period. Contact us to discuss any changes you'd like to make.`
        },
        {
            title: `Does home insurance cover damage from pests?`,
            body: `Generally, home insurance does not cover damage from pests. Prevention and maintenance are key to avoiding such issues.`
        },
        {
            title: `What should I do if I want to file a claim?`,
            body: `Contact our claims department as soon as possible to report the incident. They will guide you through the necessary steps.`
        },
        {
            title: `How does the claims process work?`,
            body: `The claims process typically involves reporting the incident, documenting the damage, and working with an adjuster to assess and settle the claim.`
        },
        {
            title: `Are home businesses covered by home insurance?`,
            body: `Home insurance may offer limited coverage for home-based businesses. If you run a business from home, discuss your needs with us for appropriate coverage.`
        },
        {
            title: `Is renters insurance the same as homeowners insurance?`,
            body: `No, renters insurance covers personal belongings and liability for renters but does not include coverage for the dwelling itself.`
        },
        {
            title: `Do I need insurance for a vacation home or rental property?`,
            body: `Yes, vacation homes and rental properties require specialized insurance. Discuss your specific needs with us to ensure proper coverage.`
        },
        {
            title: `Can I get a discount for home security features?`,
            body: `Yes, many insurance companies offer discounts for security features such as alarm systems, deadbolts, and smoke detectors. Ask us about available discounts.`
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
export default function () {
    return (<>
        <Hero {...heroContent} />
        <HomeSubNav />
        <TextSection {...contentSection1} />
        <FAQSection {...contentSection2} />
        <TextSection {...contentSection15} />
    </>);
}