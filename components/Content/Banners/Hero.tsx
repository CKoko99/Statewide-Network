import { Box, Button, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { CustomFonts } from "../../../providers/theme";

interface HeroProps {
    title?: string;
    subtitle?: string;
    image: {
        src: StaticImageData;
        alt: string;
    };
    CTAButtons?: {
        text: string;
        link: string;
    }[];
    opacity?: number;
    align?: "left" | "center" | "right";
}
const styles = {
    imageContainer: {
        width: "100%",
        minHeight: { xs: "32rem", sm: "29rem", md: "24rem" },

        position: "relative",
    },
    textContainer: {
        top: "50%", position: "absolute",
        left: "50%", transform: "translate(-50%, -50%)",
        width: { xs: "80%", sm: "70%", md: "60%" },
        color: "white",
        textAlign: "center",
        fontFamily: CustomFonts.Gustavo,
    },
    glowText: {
        textShadow: " 0 0 10px #c1c1c1, 0 0 10px #a1a1a1, 0 0 30px #a8a8a8, 0 0 40px #a38d8f, 0 0 50px #b25e65, 0 0 60px #bb4a53, 0 0 70px #e27b83;"

    },
    glowTextSub: {
        textShadow: "0 0 10px #fff, 0 0 20px #000, 0 0 30px #a8a8a8, 0 0 40px #a38d8f, 0 0 50px #b25e65, 0 0 60px #bb4a53, 0 0 70px #e27b83;"
    },
    Buttons: {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-around",
        alignItems: "center",
        margin: "2rem 0 0",

        gap: "1rem",
    }
}
export default function Hero(props: HeroProps) {

    return (
        <>
            <Box
                sx={{
                    position: "relative",
                }}
            >

                <Box
                    sx={{
                        backgroundColor: "black",
                    }}
                >
                    <Box
                        sx={{
                            ...styles.imageContainer,
                            opacity: props.opacity ? props.opacity : .5,
                            backgroundColor: "black",
                            overflow: "hidden",
                        }}>
                        <Image {...props.image} fill style={{ objectFit: "cover" }} />
                    </Box>
                </Box>
                <Box
                    sx={{
                        ...styles.textContainer,
                        textAlign: props.align ? props.align : "center",
                    }}
                >
                    <Typography variant="h3"
                        sx={{
                            ...styles.glowText,
                            fontFamily: CustomFonts.Gustavo,

                        }}
                    >
                        {props.title}
                    </Typography>
                    <Typography variant="h4"

                        sx={{
                            ...styles.glowTextSub,
                            fontFamily: CustomFonts.Poppin,

                        }}
                    >
                        {props.subtitle}
                    </Typography>
                    <Box
                        sx={{
                            ...styles.Buttons
                        }}
                    >

                        {props.CTAButtons?.map((button, index) => {
                            return <Button
                                key={index}
                                variant="contained"
                                href={button.link}
                                color="secondary"
                                sx={{ minWidth: "10rem" }}
                            >
                                {button.text}
                            </Button>
                        }
                        )}
                    </Box>
                </Box>
            </Box>
        </>
    )
}