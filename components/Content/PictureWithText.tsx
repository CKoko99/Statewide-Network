import { Box, Typography } from "@mui/material";
import { CustomFonts } from "../../providers/theme";
import Image, { StaticImageData } from "next/image";

interface PictureWithTextProps {
    title?: string;
    body?: string;
    image: {
        src: StaticImageData;
        alt: string;
    };
    align?: "left" | "center" | "right";
    reverse?: boolean;
}
const styles = {
    root: {
        margin: "2rem auto",
        maxWidth: "2000px"

    },
    sections: {
        display: "flex",


    },
    section1: {
        width: { xs: "100%", md: "50%" },
        padding: { xs: "1.5rem 2rem", md: "1.5rem 3rem" },
        margin: "auto 0",
    },
    imageContainer: {
        position: "relative",
        minWidth: "100%",
        height: { xs: "20rem", md: "30rem" },
    },
    section2: {
        width: { xs: "100%", md: "40%" },
        padding: { xs: "1rem", sm: "2rem" },
        textAlign: "center",
        display: "flex",
        gap: "1.5rem",
        flexDirection: "column",
    },
}
export default function PicturesWithText(props: PictureWithTextProps) {
    return (<>
        <Box
            sx={styles.root}
        >
            <Box
                sx={{
                    ...styles.sections,
                    flexDirection: {
                        xs: "column", sm: props.reverse ? "row-reverse" : "row"
                    },
                }}
            >
                <Box
                    sx={{ ...styles.section1 }}
                >
                    <Box
                        sx={{ ...styles.imageContainer }}
                    >
                        <Image fill style={{ objectFit: "contain" }} src={props.image.src} alt={props.image.alt} />
                    </Box>
                </Box>
                <Box
                    sx={styles.section2}
                >
                    {props.title ? <Typography variant="h3" fontWeight={800} fontFamily={CustomFonts.Gustavo}>
                        {props.title}
                    </Typography> : null}
                    {props.body ?
                        <Typography variant="h5" align="left" fontFamily={CustomFonts.Poppin}>
                            {props.body}
                        </Typography> : null}
                </Box>
            </Box>
        </Box>
    </>);
}