import SubNavBar from "../../../components/Navbar/SubNavBar";
import PATHCONSTANTS from "../../../constants/sitemap";
const SubNavBarContent = {
    shortTitle: "Learn More About Auto Insurance",
    content: [
        {

            link: PATHCONSTANTS.PRODUCTS.MOTORCYCLE.INDEX,
            text: "Motorcycle Insurance"
        },
        {
            text: "Frequently Asked Questions",
            link: PATHCONSTANTS.PRODUCTS.MOTORCYCLE.FAQ
        }
    ]
}
export default function MotoSubNav() {
    return (<>
        <SubNavBar {...SubNavBarContent} />
    </>);
}