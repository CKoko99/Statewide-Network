import { Box, Typography } from "@mui/material";
import { CustomFonts } from "providers/theme";

export default function (props) {
    return <>
        <Box
            sx={{
                display: "flex", flexDirection: { xs: "column", md: "row" }, gap: { xs: "1rem", md: "2rem" }, padding: "1rem",
                width: { xs: "90%", sm: "80%", md: "80%", lg: "80%" },
                margin: "auto",
            }}
        >
            {props.menuContent.map((item, index) => {
                return <Box key={index}
                    sx={{
                        display: "flex", flexDirection: "column", gap: "1rem", //padding: "1rem",
                        flex: 1, alignItems: "center", textAlign: "center",
                    }}
                >
                    <Typography
                        fontWeight={"Bold"} fontFamily={CustomFonts.Gustavo}
                        variant="h5">{item.title}</Typography>
                    <Typography variant="body1">{item.body}</Typography>
                </Box>
            })}
        </Box>
    </>
}