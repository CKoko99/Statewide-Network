import { Box } from "@mui/material"
import { forwardRef } from "react"

const styles = {
    modal: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 1002,
        width: { xs: "90%", sm: "80%", md: "70%", lg: "50%" },
        minHeight: "20%",
        backgroundColor: "white",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: { xs: "1rem", sm: " 2rem  " },
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        maxHeight: "90vh",
    },
}

function Base(props, ref) {
    console.log(props)

    return (

        <Box sx={{ ...styles.modal }}>

            {props.children}</Box>

    )
}

export default forwardRef(Base)