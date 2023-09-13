import { Typography } from "@mui/material";
import Base from "./Base";

const styles = {
    title: {
        textAlign: "center",
    }
}
export default function GetAQuote() {
    return (
        <Base>
            <Typography sx={{ ...styles.title }} variant="h4">Get a FREE Quote Today</Typography>
        </Base>
    )
}