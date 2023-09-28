import SubNavBar from "../../../components/Navbar/SubNavBar";
import PATHCONSTANTS from "../../../constants/sitemap";
const SubNavBarContent = {
    shortTitle: "Learn More About Auto Insurance",
    content: [
        {
            link: PATHCONSTANTS.PRODUCTS.RENTERS.INDEX,
            text: "Renters Insurance"
        },
        {
            text: "Frequently Asked Questions",
            link: PATHCONSTANTS.PRODUCTS.RENTERS.FAQ
        }
    ]
}
export default function AutoSubNav() {
    return (<>
        <SubNavBar {...SubNavBarContent} />
    </>);
}