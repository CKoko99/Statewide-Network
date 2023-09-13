import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//import { useHistory } from "react-router-dom";
import { Transition } from "react-transition-group";
import { Box, CssBaseline, Modal, Typography } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import Link from "next/link";

const styles = {
    mainButton: {
        color: "white",
        fontWeight: "bold",
        fontSize: "1.1rem"
    },
    modal: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 1002,
        width: "50%",
        height: "50%",
        backgroundColor: "white",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "2rem",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    },
}

export default function MainNavbarItem(props) {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <Button
                onClick={() => { setOpenModal(true); }}
                variant="contained"
                sx={{ ...styles.mainButton }}
            >
                {props.item.label}
            </Button>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
            >
                <Box sx={{ ...styles.modal }}>

                </Box>
            </Modal>
        </ >
    );
}