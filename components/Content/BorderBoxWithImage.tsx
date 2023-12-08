import { blogText } from "@/functions/functions";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { CustomFonts } from "providers/theme";

export default function (props) {
    return <>
        <Box
            sx={{
                display: "flex",
                width: { xs: "90%", sm: "80%", md: "80%", lg: "80%" },
                margin: "auto",
                padding: "1rem 0",
                flexDirection: { xs: "column", md: "row" },
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
                    border: "1px solid black", padding: "1rem",
                    flex: 1, alignSelf: "stretch"
                }}
            >
                <Typography variant="h4"
                    textAlign={"center"}
                    fontFamily={CustomFonts.Gustavo} fontWeight={"Bold"}>{props.title}</Typography>
                {props.body && <>

                    {blogText(props.body).map((item, index) => (<Typography key={index} variant={props.bodyVariant ? props.bodyVariant : "h5"}
                        sx={{
                            textAlign: props.alignBody ? props.alignBody : "center",
                            lineHeight: "1.7rem"
                        }}
                        dangerouslySetInnerHTML={{ __html: item }} />))}
                </>}            </Box>
            <Box
                sx={{
                    position: "relative", maxWidth: "80vw",
                    minHeight: "20rem", width: "40rem",
                    flex: 1
                }}
            >
                <Image fill style={{ objectFit: "cover" }} src={props.img.src} alt={props.img.alt} />
            </Box>
        </Box>
    </>
}