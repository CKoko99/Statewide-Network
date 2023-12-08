import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function (props) {
    return <>
        <Box
            sx={{
                width: { xs: "90%", sm: "80%", md: "80%", lg: "80%" },
                margin: "auto",
            }}
        >
            <Box
                sx={{ textAlign: "center", }}
            >
                <Box
                    sx={{
                        position: "relative", maxWidth: "90vw",
                        minHeight: { xs: "15rem", md: "20rem" },
                    }}
                >
                    <Image fill style={{ objectFit: "contain" }} src={props.img.src} alt={props.img.alt} />
                </Box>
                <Typography
                    sx={{ width: { xs: "90vw", sm: "75%", md: "60%", lg: "50%" }, margin: "auto" }}
                    variant="subtitle1"
                    textAlign={"left"}
                >
                    {props.subtitle}
                </Typography>
            </Box>
        </Box >
    </>
}