import { Button } from "@mui/material";
import { CustomFonts } from "../../providers/theme";

export default function CTAButton(props) {
    return (
        <Button
            color={props.color ? props.color : "primary"}
            variant="contained"
            href={props.link ? props.link : null}
            sx={{ fontSize: "1.1rem", fontFamily: CustomFonts.Gustavo, textAlign: "center", margin: "1rem" }}
        >
            {props.text}
        </Button>
    )
}