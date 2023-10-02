import { Box, Button, Typography } from "@mui/material";
import Base from "./Base";
import { CustomFonts } from "../../providers/theme";
import PATHCONSTANTS from "../../constants/sitemap";
const styles = {
    title: {
        textAlign: "center",
        fontFamily: CustomFonts.Gustavo,
    },
}
export default function ReturnHome(props, ref) {
    return (
        <Base ref={ref}>
            <Typography sx={{ ...styles.title }} variant="h4">Exit Free Quote?</Typography>
            <Typography sx={{ ...styles.title }} variant="h6">You are about to exit the quoting process and return to the home page are you sure you want to continue?</Typography>
            <Box
                sx={{
                    width: { xs: "90%", md: "50%" },
                    margin: "1rem auto",
                    display: "flex",
                    justifyContent: "space-around",
                }}
            >
                <Button
                    onClick={props.onClose}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    href={PATHCONSTANTS.HOME}
                >
                    Return Home
                </Button>
            </Box>
        </Base>
    )
}