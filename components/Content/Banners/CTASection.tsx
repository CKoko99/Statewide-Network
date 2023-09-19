import { Box, Button, LinearProgress, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/legacy/image";
import { CustomFonts } from "../../../providers/theme";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { useState } from "react";
import Link from "next/link";
import PATHCONSTANTS from "../../../constants/sitemap";
import { useRouter } from 'next/router';

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
        border: "2px solid #b1b1b1",
        flex: 1,
        alignItems: "center",
        padding: "1rem",
        margin: { xs: ".7rem", sm: ".7rem", md: "0 .7rem .7rem 0" },
        minWidth: { xs: "", md: "18vw", xl: "25rem" },
        cursor: "pointer",
        transition: 'transform 0.2s',

        "&:hover": {
            transform: 'scale(1.01)', // Increase the scale factor for a larger image on hover
            border: "2px solid #5c5c5c",

        },
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
        transition: 'transform 0.2s',

        "&:hover": {
            transform: 'scale(1.01)', // Increase the scale factor for a larger image on hover
            border: "2px solid #5c5c5c",

        },
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
    const router = useRouter()

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
            sx={props.isBanner ? { ...itemStyles.ctaButtonBanner, } : { ...itemStyles.ctaButtonOutside }}
            onClick={() => {
                router.push(props.link)
            }}

        >
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
                <Typography variant="h6" fontWeight={400} fontFamily={CustomFonts.Poppin} >{props.subText}</Typography>
            </Box>

        </Box>
    )
}

interface CTASubLinkProps {
    children: React.ReactNode;
}
function CTASubLink(props: CTASubLinkProps) {
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
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: 'transform 0.2s',

                "&:hover": {
                    transform: 'scale(1.05)', // Increase the scale factor for a larger image on hover
                },
            }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "1rem",
                }}
            >
                {props.children}
            </Box>
            <Box
                sx={{
                    width: "100%",
                }}
            >
                {
                    isHovered ? <LinearProgress /> : <Box sx={{ height: "4px" }} />
                }
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
                    flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
                    alignItems: "center",
                    justifyContent: "space-around",
                    width: "100%",
                }}
            >
                <CTASubLink>
                    <Box
                        sx={{
                            cursor: "pointer",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "1rem",
                        }}
                    >
                        <GridViewOutlinedIcon />
                        <Typography variant="h6">
                            View More Products
                        </Typography>
                    </Box>
                </CTASubLink>
                <CTASubLink>
                    <Box
                        sx={{
                            gap: ".5rem",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant="h6">
                            Or Call Us at
                        </Typography>
                        <Typography variant="h6" fontWeight={700}
                            sx={{ textDecoration: "underline", cursor: "pointer" }}
                        >
                            <Link href={PATHCONSTANTS.PHONE} color="primary">
                                (555)-555-5555
                            </Link>
                        </Typography>
                    </Box>
                </CTASubLink>
            </Box >
        </Box >
    )
}