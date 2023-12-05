import { Box, Typography } from "@mui/material";
import CTAButtons from "./CTAButtons";
import Image from "next/image";
import { CustomFonts } from "providers/theme";

interface ComponentProps {

}

export default function (props: ComponentProps) {
    return <>
        <Box
            sx={{
                display: "flex",
                width: { xs: "90%", sm: "80%", md: "80%", lg: "80%" },
                margin: "auto",
                padding: "1rem 0",
                flexDirection: { xs: "column", md: "row-reverse" },
                alignItems: "center",
                gap: { xs: "1rem", md: "4rem" },
            }}
        >
            <Box
                sx={{
                    // padding: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: ".75rem",
                    textAlign: { xs: "center", md: "left" },
                }}
            >
                <Typography
                    variant="h2" fontFamily={CustomFonts.Gustavo}
                    fontWeight={"Bold"}
                >{props.title}</Typography>
                <Typography
                    variant="h4"
                >{props.subtitle}</Typography>
                <CTAButtons CTAButtons={props.CTAButtons} />
            </Box>
            <Box
                sx={{
                    position: "relative", maxWidth: "90vw",
                    minHeight: "20rem", width: "40rem",
                }}
            >
                <Image fill style={{ objectFit: "contain" }} src={props.img.src} alt={props.img.alt} />
            </Box>
        </Box >
    </>
}