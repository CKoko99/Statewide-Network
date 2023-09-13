import { Box } from "@mui/material"

const styles = {
    modal: {
        position: "fixed",
        top: "40%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 1002,
        width: "50%",
        minHeight: "20%",
        backgroundColor: "white",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "2rem",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    },
}

export default function Base({ children }) {
    return (
        <Box sx={{ ...styles.modal }}>{children}</Box>
    )
}
