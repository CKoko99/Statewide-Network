import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

const styles = {
    underline: {
        width: "0%",
        transition: 'width 0.5s', // Add opacity transition
    },
    underlineHover: {
        width: "100%",
        transition: 'width 0.5s', // Add opacity transition
    }
}
export default function SubNavBarButton(props) {
    const [selected, setSelected] = useState(false);
    const [hovered, setHovered] = useState(false);
    useEffect(() => {
        //check if the current path is the same as the link
        if (window.location.pathname === props.href) {
            setSelected(true);
        }
    }, []);
    return <Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
    >
        <Button {...props}>{props.text}</Button>
        <Box sx={{ width: selected ? "100%" : hovered ? styles.underlineHover : styles.underline, height: "2px", backgroundColor: "black", margin: "auto" }} />
    </Box>
}