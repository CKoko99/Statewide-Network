import { Box, Divider, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { CustomFonts } from "../../providers/theme";
import CTAButton from "../Buttons/CTAButton";

interface MultipleContentWImagesProps {
    title?: string;
    menuContent?: {
        title: string;
        image: {
            src: StaticImageData;
            alt: string;
        };
        subHeading?: string;
        body?: string[];
        CTAButtons: {
            text: string;
            action: string;
            link?: string;
        }[]
    }[];
}

const styles = {
    root: {
        margin: "1rem auto",
        maxWidth: "2000px"
    },
    sections: {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },

    },
    section1: {
        width: { xs: "100%", md: "50%" },
        padding: { xs: "1.5rem 2rem", md: "1.5rem 3rem" },
    },
    imageContainer: {
        position: "relative",
        minWidth: "100%",
        height: { xs: "20rem", md: "30rem" },
    },
    section2: {
        textAlign: "left",
        width: { xs: "100%", md: "40%" },
        padding: { xs: "1.5rem 2rem", md: "1.5rem 3rem" },
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
    },
    menuContentTitle: {
        cursor: "pointer",
        selected: {
            color: "primary.main",
            fontWeight: "900"
        },
        textAlign: "center",
    },
    bodySection: {
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
    }
}
export default function MultipleContentWImages(props) {
    const [contentIndex, setContentIndex] = useState(0);
    return <>
        <Box sx={{ ...styles.root }}>
            <Box>
                <Typography align="center" fontFamily={CustomFonts.Gustavo} variant="h4">{props.title}</Typography>
            </Box>
            <Box
                sx={{ ...styles.sections }}
            >
                <Box
                    sx={{ ...styles.section1 }}
                >
                    <Box
                        sx={{ ...styles.imageContainer }}
                    >
                        <Image fill style={{ objectFit: "contain" }} {...props.menuContent[contentIndex].image} />
                    </Box>
                </Box>
                <Box
                    sx={{ ...styles.section2 }}
                >
                    <Box
                        sx={{
                            display: "flex", gap: ".5rem",
                            justifyContent: "center", alignItems: "stretch"
                        }}
                    >
                        {props.menuContent?.map((item, index) => {
                            return <React.Fragment key={index}>
                                <Typography variant="h5" fontFamily={CustomFonts.Gustavo}
                                    sx={index === contentIndex ? { ...styles.menuContentTitle.selected, ...styles.menuContentTitle }
                                        : { ...styles.menuContentTitle }
                                    }
                                    onClick={
                                        () => {
                                            setContentIndex(index)
                                        }
                                    } >{item.title}</Typography>
                                {index === props.menuContent.length - 1 ? <></> : <Box sx={{ display: "block", }}>
                                    <Divider sx={{ border: "black solid 1px", height: "100%", minHeight: "1.3rem" }} orientation="vertical" />
                                </Box>}
                            </React.Fragment>
                        }
                        )}
                    </Box>
                    <Box>
                        <Typography variant="h4">{props.menuContent[contentIndex].subHeading}</Typography>
                    </Box>
                    <Box
                        sx={{ ...styles.bodySection }}
                    >
                        {props.menuContent[contentIndex].body?.map((item, index) => {
                            return <Typography fontWeight={"bold"} key={index} variant="h6">{item}</Typography>
                        }
                        )}
                    </Box>
                    <Box
                        sx={{ display: "flex", justifyContent: "space-around" }}
                    >
                        {
                            props.menuContent[contentIndex].CTAButtons?.map((item, index) => {
                                return <CTAButton key={index} {...item} />
                            }
                            )
                        }
                    </Box>
                </Box>
            </Box>
        </Box >
    </>
}
