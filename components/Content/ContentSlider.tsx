import { Box, Typography } from "@mui/material";
import { CustomFonts } from "../../providers/theme";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
interface ContentSliderProps {
    menuContent: {
        title: string;
        body: string;
        img: {
            src: StaticImageData;
            alt: string;
        }
    }[]
}
const styles = {
    root: {
        textAlign: "center",
        margin: "3rem auto 2rem",
    },
    NonSlideContentContainer: {
        display: { xs: "none", md: "flex" },
        flexDirection: "row",
        width: {
            md: "85%", lg: "85%", xl: "75%"
        },
        margin: "0 auto",
        justifyContent: "space-between",
        gap: "3rem",
    },
    SlideContentContainer: {
        display: { xs: "flex", md: "none" },
        flexDirection: "row",
        width: "85%",
        margin: "0 auto",
        justifyContent: "space-between",
    },
    contentItem: {
        maxWidth: { md: "25vw" }
    },
    contentImage: {
        height: "5rem",
        position: "relative",
        transition: 'transform 0.3s',

    },
    contentImageHover: {
        //make the image move up 10px
        transform: 'translateY(-1rem)',
    },
    contentTitle: {
        fontFamily: CustomFonts.Gustavo,
        color: "primary.main",
    },
}
function NonSlideContentItem(props) {
    const [isHovered, setIsHovered] = useState(false);

    return <Box
        onMouseEnter={() => { setIsHovered(true) }}
        onMouseLeave={() => { setIsHovered(false) }}
        sx={{ ...styles.contentItem }}
    >
        <Box
            sx={
                isHovered ?
                    { ...styles.contentImage, ...styles.contentImageHover } :
                    { ...styles.contentImage }
            }
        >
            <Image fill style={{ objectFit: "contain" }} src={props.img.src} alt={props.img.alt} />
        </Box>
        <Typography variant="h4"
            sx={{
                ...styles.contentTitle,
            }}
        >
            {props.title}
        </Typography>
        <Typography variant="h6">
            {props.body}
        </Typography>
    </Box >

}


function NonSlideContent(props) {
    return <>
        {
            props.menuContent.map((item, index) => {
                return <NonSlideContentItem key={index} {...item} />
            }
            )
        }
    </>
}
function SlideContent(props) {
    const [currentSlide, setCurrentSlide] = useState(0);

    return <>
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <Box>

                {
                    props.menuContent.map((item, index) => {
                        if (index !== currentSlide) {
                            return <React.Fragment key={index}></React.Fragment>
                        }
                        return <Box
                            sx={{ ...styles.contentItem }}
                            key={index}
                        >
                            <Box
                                sx={{
                                    ...styles.contentImage,
                                }}
                            >
                                <Image fill style={{ objectFit: "contain" }} src={item.img.src} alt={item.img.alt} />
                            </Box>
                            <Typography variant="h4"
                                sx={{
                                    ...styles.contentTitle,
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography variant="h6">
                                {item.body}
                            </Typography>
                        </Box>
                    })
                }
            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                gap: ".5rem",
                margin: "1rem"
            }}>
                <ArrowBackIosIcon onClick={() => {
                    if (currentSlide === 0) {
                        setCurrentSlide(props.menuContent.length - 1)
                    } else {
                        setCurrentSlide(currentSlide - 1)
                    }
                }} sx={{ fontSize: "2rem", cursor: "pointer", marginRight: "-1rem" }} />
                {
                    props.menuContent.map((item, index) => {
                        if (index === currentSlide) {
                            return <FiberManualRecordIcon key={index} onClick={
                                () => { setCurrentSlide(index) }
                            } sx={{ fontSize: "1.5rem", cursor: "pointer" }} />
                        } else {
                            return <TripOriginIcon
                                key={index}
                                onClick={
                                    () => { setCurrentSlide(index) }
                                } sx={{ fontSize: "1.25rem", cursor: "pointer" }} />
                        }
                    })
                }
                <ArrowForwardIosIcon onClick={() => {
                    if (currentSlide === props.menuContent.length - 1) {
                        setCurrentSlide(0)
                    } else {
                        setCurrentSlide(currentSlide + 1)
                    }
                }
                } sx={{ fontSize: "2rem", cursor: "pointer", marginLeft: "-.7rem" }} />
            </Box>
        </Box>
    </>
}

export default function ContentSlider(props: ContentSliderProps) {
    return (<>
        <Box sx={{
            ...styles.root,
        }}>
            <Box
                sx={{
                    ...styles.NonSlideContentContainer,
                }}
            >
                <NonSlideContent menuContent={props.menuContent} />
            </Box>
            <Box
                sx={{
                    ...styles.SlideContentContainer,
                }}
            >
                <SlideContent menuContent={props.menuContent} />
            </Box>
        </Box>
    </>)
}