import SubNavBar from "../../../components/Navbar/SubNavBar";
import PATHCONSTANTS from "../../../constants/sitemap";
const SubNavBarContent = {
    shortTitle: "Learn More About Auto Insurance",
    content: [
        {
            link: PATHCONSTANTS.PRODUCTS.AUTO.INDEX,
            text: "Auto Insurance"
        },
        {
            text: "Coverage Details",
            link: PATHCONSTANTS.PRODUCTS.AUTO.COVERAGE
        },
        {
            text: "Affordable Coverage",
            link: PATHCONSTANTS.PRODUCTS.AUTO.AFFORDABLE
        },
        {
            text: "Frequently Asked Questions",
            link: PATHCONSTANTS.PRODUCTS.AUTO.FAQ
        }
    ]
}
export default function AutoSubNav() {
    return (<>
        <SubNavBar {...SubNavBarContent} />
    </>);
}