import { Box, Typography } from "@mui/material";
import { CustomFonts } from "../../providers/theme";
interface TextSectionProps {
    heading?: string;
    subHeading?: string;
    largeText?: boolean;
}
const styles = {
    root: {
        margin: "auto",
        padding: "2rem 0 1rem",
        width: { xs: "90%", sm: "80%", md: "70%", lg: "70%" },
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    }
}
export default function TextSection(props: TextSectionProps) {
    return (<>
        <Box sx={{
            ...styles.root,
        }}>
            {props.heading && <Typography variant={props.largeText ? "h2" : "h5"} sx={{ textAlign: "center", fontFamily: CustomFonts.Gustavo, fontWeight: "800" }}>{props.heading}</Typography>}
            {props.subHeading && <Typography variant={props.largeText ? "h5" : "subtitle1"} sx={{ textAlign: "center" }}>{props.subHeading}</Typography>}
        </Box>
    </>)
}