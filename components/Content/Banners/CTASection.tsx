import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/legacy/image";
import { CustomFonts } from "../../../providers/theme";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { useState } from "react";

interface Props {
    ctaItems?: {
        mainText: string;
        subText: string;
        link: string;
        icon: StaticImageData;
    }[];
    isBanner?: boolean;
}
const sectionStyles = {
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

}

const itemStyles = {
    ctaButtonBanner: {
        display: "flex",
        flexDirection: "row",
        border: "1px solid black",
        flex: 1,
        alignItems: "center",
        padding: "1rem",
        margin: { xs: ".7rem", sm: ".7rem", md: "0 .7rem .7rem 0" },
        minWidth: { xs: "", md: "18vw" },
        cursor: "pointer",
    },
    ctaButtonOutside: {
        cursor: "pointer",
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
        marginLeft: "1.2rem",
        transition: 'transform 0.3s',
    },
    ctaTextHover: {
        transform: 'scale(1.05)', // Increase the scale factor for a larger image on hover
    },
    iconContainer: {
        transition: 'transform 0.3s',

        width: "6rem",
    },
    imageHover: {
        //tilt will add a slight rotation
        transform: 'scale(1.1) rotate(5deg)',
    },
    parentBoxHover: {
        transition: 'transform 0.3s',
        '&:hover': {
            transform: 'scale(1.1)', // Increase the scale factor for a larger image on hover
        },
    },
}
function CTAItem(props) {

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);

    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Box
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            sx={props.isBanner ? { ...itemStyles.ctaButtonBanner, } : { ...itemStyles.ctaButtonOutside }}>
            <Box sx={isHovered ?
                { ...itemStyles.iconContainer, ...itemStyles.imageHover } :
                {
                    ...itemStyles.iconContainer,
                }
            }>
                < Image alt={props.mainText} src={props.icon} />
            </Box>
            <Box sx={
                isHovered ?
                    { ...itemStyles.ctaText, ...itemStyles.ctaTextHover } :
                    { ...itemStyles.ctaText }
            }>
                <Typography variant="h5" fontFamily={CustomFonts.Gustavo} >{props.mainText}</Typography>
                <Typography variant="subtitle1">{props.subText}</Typography>
            </Box>
        </Box>
    )
}

export default function CTASection(props: Props) {

    return (
        <Box sx={props.isBanner ? {
            ...sectionStyles.ctaButtonContainerBanner, "@media (max-width: 1283px)": {
                display: "none",
            }
        } : {
            "@media (min-width: 1283px)": {
                display: "none",
            },
            ...sectionStyles.ctaButtonContainerOutside
        }}>
            {props.ctaItems?.map((item, index) => (
                <CTAItem isBanner={props.isBanner} key={index} {...item} />
            ))}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                    width: "100%",
                    marginTop: "rem",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "1rem",
                        cursor: "pointer",
                    }}
                >
                    <GridViewOutlinedIcon />
                    <Typography variant="h6">
                        View More Products
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h6">Or Call Us at 555-555-5555 </Typography>
                </Box>
            </Box>
        </Box>
    )
}