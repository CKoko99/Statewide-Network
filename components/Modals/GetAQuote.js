import { Typography } from "@mui/material";
import Base from "./Base";
import { forwardRef } from "react";

const styles = {
    title: {
        textAlign: "center",
    }
}
function GetAQuote(props, ref) {
    return (
        <Base ref={ref}>
            <Typography sx={{ ...styles.title }} variant="h4">Get a FREE Quote Today</Typography>
        </Base>
    )
}

export default forwardRef(GetAQuote)