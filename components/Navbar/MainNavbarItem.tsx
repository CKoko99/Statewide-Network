import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//import { useHistory } from "react-router-dom";
import { Transition } from "react-transition-group";
import { Box, CssBaseline, Modal, Typography } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import Link from "next/link";
import GetAQuote from "../Modals/GetAQuote";
const styles = {
    mainButton: {
        color: "white",
        fontWeight: "bold",
        fontSize: "1.1rem"
    },

}

export default function MainNavbarItem(props: any) {
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
                <GetAQuote />
            </Modal>
        </ >
    );
}