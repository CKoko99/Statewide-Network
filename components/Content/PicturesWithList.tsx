import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { Lang } from "../locale/LocaleSwitcher";
import { useState } from "react";
import { CustomFonts } from "../../providers/theme";

interface ParentProps {
    title?: {
        [lang: string]: string;
    };
    subtitle?: {
        [lang: string]: string;
    };
    hideMobileImg?: boolean;
    img?: {
        src: StaticImageData;
        alt: string;
    },
    content?: {
        title: {
            [lang: string]: string;
        },
        body: {
            [lang: string]: string;
        },
    }[]
}
const parentClasses = {
    root: {
        display: "flex",
        flexDirection: "column",
        gap: { xs: "0rem", md: "1rem" },
        padding: "1rem 0",
    },
    titles: {
        textAlign: "center",
        margin: "auto",
        width: "80%"
    },
    mainContainer: {
        margin: "auto",
        width: { xs: "90%", sm: "80%", md: "90%", lg: "80%" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
    },
    imageContainer: {
        width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
        padding: "1rem",
    },
    image: {
        position: "relative",
        minHeight: { xs: "20rem", md: "25rem" },
        width: "100%",
    },
    contentContainer: {
        width: { xs: "100%", sm: "100%", md: "45%", lg: "45%" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        gap: { xs: "1rem", md: ".5rem" },
        padding: "1rem"
    },
}
const itemClasses = {
    root: {
        textAlign: { xs: "center", md: "left" },
    },
    title: {},
    body: {},
}
function ContentItem(props) {
    const [isHovered, setIsHovered] = useState(false)
    return <>
        <Box
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
                ...itemClasses.root,
                transition: 'transform 0.5s',
                transform: isHovered ? 'scale(1.1)' : "",
            }}
        >
            {props.title && <Typography
                fontFamily={CustomFonts.Gustavo}
                sx={{ ...itemClasses.title }} fontWeight={"600"} variant="h5">{props.title}</Typography>}
            {props.body && <Typography sx={{ ...itemClasses.body }} variant="body1">{props.body}</Typography>}
        </Box>
    </>
}

export default function (props) {
    const currentLang = 'en'
    return <>
        <Box sx={parentClasses.root} >
            <Box sx={parentClasses.titles}>
                {props.title && <Typography
                    fontFamily={CustomFonts.Gustavo}
                    fontWeight={"bold"} variant="h2">{props.title}</Typography>}
                {props.subtitle && <Typography variant="h6">{props.subtitle}</Typography>}
            </Box>
            <Box sx={{
                ...parentClasses.mainContainer,
                flexDirection: props.reverse ? { xs: "column-reverse", md: "row-reverse" } : { xs: "column-reverse", md: "row" }
            }}>
                <Box
                    sx={{ ...parentClasses.imageContainer, display: props.hideMobileImg ? { xs: "none", md: "block" } : "block" }}
                >
                    {props.img &&
                        <Box sx={parentClasses.image}>
                            <Image fill style={{ objectFit: "contain" }} {...props.img} />
                        </Box>
                    }
                </Box>
                <Box sx={parentClasses.contentContainer}>
                    {props.content?.map((item: any, index: number) => {
                        return <ContentItem lang={currentLang} key={index} {...item} />
                    })}
                </Box>
            </Box>
        </Box>
    </>
}