import { Box, Typography } from "@mui/material";
import { CustomFonts } from "../../providers/theme";
interface TextSectionProps {
    heading: string;
    subHeading: string;
}
const styles = {
    root: {
        margin: "1rem auto",
        width: { xs: "90%", sm: "80%", md: "70%", lg: "50%" },
    }
}
export default function TextSection(props: TextSectionProps) {
    return (<>
        <Box sx={{
            ...styles.root,
        }}>
            <Typography variant="h5" sx={{ textAlign: "center", fontFamily: CustomFonts.Gustavo, fontWeight: "800" }}>{props.heading}</Typography>
            <Typography variant="subtitle1" sx={{ textAlign: "center" }}>{props.subHeading}</Typography>
        </Box>
    </>)
}