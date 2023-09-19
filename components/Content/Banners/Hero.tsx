import { Box, Button, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { CustomFonts } from "../../../providers/theme";

interface HeroProps {
    title: string;
    subtitle: string;
    image: {
        src: StaticImageData;
        alt: string;
    };
    CTAButtons: {
        text: string;
        link: string;
    }[];
    opacity?: number;
}
const styles = {
    imageContainer: {
        width: "100%",
        minHeight: { xs: "32rem", sm: "28rem", md: "24rem" },
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
        textShadow: "0 0 200px #000, 0 0 200px #7a7a7a, 0 0 30px #EDEDED, 0 0 100px #EDEDED, 0 0 20px #EDEDED, 0 0 600px #EDEDED, 0 0 300px #EDEDED;"

    },
    glowTextSub: {
        textShadow: "0 0 200px #000, 0 0 30px #ff4da6, 0 0 40px #EDEDED, 0 0 50px #EDEDED, 0 0 60px #EDEDED, 0 0 70px #EDEDED, 0 0 80px #EDEDED;        "
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
                            backgroundColor: "black"
                        }}>
                        <Image {...props.image} fill objectFit="cover" />
                    </Box>
                </Box>
                <Box
                    sx={{
                        ...styles.textContainer,
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

                        {props.CTAButtons.map((button, index) => {
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