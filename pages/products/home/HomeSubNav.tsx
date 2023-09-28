import SubNavBar from "../../../components/Navbar/SubNavBar";
import PATHCONSTANTS from "../../../constants/sitemap";
const SubNavBarContent = {
    shortTitle: "Learn More About Home Insurance",
    content: [
        {
            link: PATHCONSTANTS.PRODUCTS.HOME,
            text: "Home Insurance"
        },
        {
            text: "Cost / Bundle Discounts",
            link: PATHCONSTANTS.PRODUCTS.HOME.COST
        },
        {
            text: "Claims",
            link: PATHCONSTANTS.PRODUCTS.HOME.CLAIMS
        },
        {
            text: "Frequently Asked Questions",
            link: PATHCONSTANTS.PRODUCTS.HOME.FAQ
        }
    ]
}
export default function AutoSubNav() {
    return (<>
        <SubNavBar {...SubNavBarContent} />
    </>);
}