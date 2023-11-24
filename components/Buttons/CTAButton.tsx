import { Button, Modal } from "@mui/material";
import { CustomFonts } from "../../providers/theme";
import { useState } from "react";
import GetAQuote from "../Modals/GetAQuote";

interface CTAButtonProps {
    color?: any;
    link?: string;
    text: string;
    type?: string;
    modal?: string
}
export default function CTAButton(props: CTAButtonProps) {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <Button
                color={props.color ? props.color : "primary"}
                variant="contained"
                onClick={() => {
                    if (props.type?.toUpperCase() === "MODAL") {
                        setOpenModal(true);
                    }
                }}
                href={props.link ? props.link : ""}
                sx={{ fontSize: "1.1rem", fontFamily: CustomFonts.Gustavo, textAlign: "center", margin: "1rem" }}
            >
                {props.text}
            </Button>
            {props.type?.toUpperCase() === "MODAL" ? <>
                {props.modal?.toUpperCase() === "GETAQUOTE" ? <>
                    <Modal
                        open={openModal}
                        onClose={() => setOpenModal(false)}
                    >
                        <GetAQuote />
                    </Modal>
                </> : null}
            </> : null}
        </>
    )
}