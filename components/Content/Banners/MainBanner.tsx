import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { CustomFonts } from "../../../providers/theme";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CTASection from "./CTASection";
interface BannerProps {
    mainHeading?: string;
    subHeading?: string;
    image: {
        src: StaticImageData;
        alt: string;
    };
    ctaItems?: {
        mainText: string;
        subText: string;
        link: string;
        icon: StaticImageData;
    }[];
}
const styles = {
    root: {
    },
    mainHeading: {
        // fontSize: "4rem",
    },
    subHeading: {
    },
    bannerContainer: {
        display: 'flex',
        width: '100%',
        justifyContent: "flex-end",
    },
    bannerLeft: {
        margin: { xs: "auto", md: "1rem  -0 2rem 4vw", },

        width: { xs: "90%", sm: "85%", md: "60%", lg: "60%" },
        textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        maxWidth: "1200px",
        gap: ".5rem"
    },
    mainText: {
        marginLeft: { xs: "auto", sm: "auto", md: "3rem", lg: "5rem", },
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
    },
    bannerRight: {
        width: '80%',
        textAlign: 'right',
        display: { xs: "none", md: "block" },
    },
    mainImageContainer: {
        //height: "60vh",
        zIndex: -1,
    },
    ctaButtonContainerBanner: {
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        flexWrap: "wrap",
        marginTop: ".8rem",

    },
    ctaButtonContainerOutside: {
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        flexWrap: "wrap",
        marginTop: ".8rem",
        width: { xs: "95%", sm: "80%" },
        margin: "auto",
    },
    ctaButtonBanner: {
        display: "flex",
        flexDirection: "row",
        border: "1px solid black",
        flex: 1,
        alignItems: "center",
        padding: "1rem",
        margin: { xs: ".7rem", sm: ".7rem", md: "0 .7rem .7rem 0" },
        minWidth: { xs: "", md: "18vw" },
    },
    ctaButtonOutside: {
        display: "flex",
        flexDirection: "row",
        border: "1px solid black",
        flex: 1,
        alignItems: "center",
        padding: "1rem",
        margin: ".7rem",
        minWidth: { xs: "", md: "33vw" },
    },
    ctaText: {
        textAlign: "left",
        marginLeft: "1rem",
    },
    iconContainer: {
        width: "6rem",
    },
}
export default function MainBanner(props: BannerProps) {

    return (<>
        <Box sx={{ ...styles.root }}>
            <Box sx={{ ...styles.bannerContainer }}>
                <Box sx={{ ...styles.bannerLeft }}>
                    <Box sx={{ ...styles.mainText }}>

                        <Typography variant="h4" style={{ ...styles.subHeading }}>{props.subHeading}</Typography>
                        <Typography variant="h1" style={{ ...styles.mainHeading }}>{props.mainHeading}</Typography>
                    </Box>
                    <CTASection isBanner={true} ctaItems={props.ctaItems} />

                </Box>
                <Box sx={{ ...styles.bannerRight }}>
                    <Box sx={{ ...styles.mainImageContainer }}>
                        <Image layout="responsive" style={{ objectFit: "contain" }} alt={props.image.alt} src={props.image.src} />
                    </Box>
                </Box>

            </Box>
            {// Media Query to show if screen is less than 1100px
            }
            <CTASection isBanner={false} ctaItems={props.ctaItems} />
        </Box>
    </>)
}