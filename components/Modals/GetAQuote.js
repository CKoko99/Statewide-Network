import { Box, Typography } from "@mui/material";
import Base from "./Base";
import { forwardRef, useState } from "react";
import { CustomFonts } from "../../providers/theme";

import MotorcycleIcon from "../../public/assets/images/home/icons/motorcycle1.png"
import CarIcon from "../../public/assets/images/home/icons/car1.png"
import HomeIcon from "../../public/assets/images/home/icons/house1.png"
import RentersIcon from "../../public/assets/images/home/icons/rent1.png"
import MexicoIcon from "../../public/assets/images/home/icons/mexico.png"
import HandshakeIcon from "../../public/assets/images/home/icons/handshake1.png"
import CarkeyIcon from "../../public/assets/images/home/icons/carkey.png"
import Image from "next/image";
import { useRouter } from "next/router";
import PATHCONSTANTS from "../../constants/sitemap";

const quoteItems = [
    {
        title: "Auto",
        image: {
            src: CarIcon,
            alt: "Car"
        },
        link: PATHCONSTANTS.QUOTES.AUTO
    },
    {
        title: "Home",
        image: {
            src: HomeIcon,
            alt: "Home"
        },
        link: PATHCONSTANTS.QUOTES.HOME
    },
    {
        title: "Renters",
        image: {
            src: RentersIcon,
            alt: "Renters"
        },
        link: PATHCONSTANTS.QUOTES.RENTERS
    },
    {
        title: "Motorcycle",
        image: {
            src: MotorcycleIcon,
            alt: "Motorcycle"
        },
        link: PATHCONSTANTS.QUOTES.MOTORCYCLE
    },
    {
        title: "Mexico",
        link: PATHCONSTANTS.QUOTES.MEXICO,
        image: {
            src: MexicoIcon,
            alt: "Mexico"
        },
    },
    {
        title: "Surety Bonds",
        link: PATHCONSTANTS.QUOTES.SURETY,
        image: {
            src: HandshakeIcon,
            alt: "Surety Bonds"
        },
    },
    {
        title: "SR-22",
        link: PATHCONSTANTS.QUOTES.SR22,
        image: {
            src: CarkeyIcon,
            alt: "SR-22"
        },
    }
]

const styles = {
    title: {
        textAlign: "center",
        fontFamily: CustomFonts.Gustavo,
    },
    quoteItem: {
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: "center",
        margin: ".5rem",
        border: "1px solid #a1a1a1",
        padding: ".5rem",
        cursor: "pointer",
        transition: 'transform 0.3s',
        flex: "1",
        gap: ".5rem",
        minWidth: { xs: "45%" },
        maxWidth: { xs: "400px" },
        textAlign: "left",
    },
    quoteItemHovered: {
        border: "1px solid #000",
        transform: 'scale(1.05)',
    },
    imageContainer: {
        position: "relative",
        minWidth: { xs: "2rem", sm: "3rem", md: "4rem" },
        minHeight: { xs: "2rem", sm: "3rem", md: "3rem" },
        maxHeight: "50%",
        borderRadius: "50%",
        backgroundColor: "#F5F5F5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: 'transform 0.3s',
    },
    imageHover: {
        //tilt will add a slight rotation
        transform: 'scale(1.1)',
    },

}
function QuoteItem(props) {
    const router = useRouter()
    const [isHovered, setIsHovered] = useState(false)
    function handleMouseEnter() { setIsHovered(true) }
    function handleMouseLeave() { setIsHovered(false) }

    return (
        <Box onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => router.push(props.link)}
            sx={
                isHovered ? { ...styles.quoteItem, ...styles.quoteItemHovered } : { ...styles.quoteItem }}>
            <Typography variant="subtitle2">{props.title}</Typography>
            {props.image ? <Box
                sx={
                    !isHovered ? { ...styles.imageContainer } : {
                        ...styles.imageContainer, ...styles.imageHover
                    }}
            >
                <Image fill style={{ objectFit: "contain" }} src={props.image.src} alt={props.image.alt} />
            </Box> : null}
        </Box >
    )
}
function GetAQuote(props, ref) {
    return (
        <Base ref={ref}>
            <Typography sx={{ ...styles.title }} variant="h4">Unlock your savings today!</Typography>
            <Typography sx={{ ...styles.title }} variant="h6">Select a product below</Typography>
            <Box style={{
                display: "flex", justifyContent: "center", flexWrap: "wrap",
                overflowY: "scroll", padding: ".5rem", overflowX: "hidden"

            }}>
                {quoteItems.map((item, index) => (
                    <QuoteItem key={index} {...item} />
                ))
                }
            </Box>
        </Base>
    )
}

export default forwardRef(GetAQuote)