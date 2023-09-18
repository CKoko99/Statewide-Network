import { Fade } from "@mui/material";
import { useEffect } from "react";


export default function FadeWrapper(props) {

    useEffect(() => {
        if (props.children.length > 1) {
            throw new Error("FadeWrapper can only have one child");
        }

    }, [props.children]);

    // Check if viewport is greater than xs using MUI's useMediaQuery

    return (

        <Fade in timeout={props.timeout || 1000}>
            {props.children}
        </Fade>

    );
}
