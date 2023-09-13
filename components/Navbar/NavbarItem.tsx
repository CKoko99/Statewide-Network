import React, { useRef } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//import { useHistory } from "react-router-dom";
import { Transition } from "react-transition-group";
import { CssBaseline, Typography } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import Link from "next/link";

const defaultStyle = {
    transition: "opacity 300ms ease-in-out",
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

function SimpleMenu(props) {
    let currentlyHovering = false;
    //const history = useHistory();

    const menuRef = useRef(null);

    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    function handleHover() {
        currentlyHovering = true;
    }

    function handleClose() {
        setAnchorEl(null);
    }

    function handleCloseHover() {
        currentlyHovering = false;
        setTimeout(() => {
            if (!currentlyHovering) {
                handleClose();
            }
        }, 50);
    }

    function handleMenuClick(link) {
        handleClose();
        // history.push(link);
        window.scrollTo(0, 0);
    }

    return (
        <div>
            <CssBaseline />

            <Button
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={() => {
                    handleMenuClick(props.item.link);
                }}
                onMouseOver={handleClick}
                onMouseLeave={handleCloseHover}
                variant={props.item.main ? "contained" : "text"}
                sx={{

                    color: props.item.main ? "white" : "primary.main",
                }}
            >
                <Link href={props.item.link || ""} style={{ color: "inherit", textDecoration: "none" }}>
                    <Typography variant="h6"
                        style={{ fontSize: "1.1rem", fontWeight: props.item.bold ? "bold" : "normal" }}
                    >
                        {props.item.label}
                    </Typography>
                </Link>
                {props.item.menuItems?.length > 0 ? <KeyboardArrowDownSharpIcon /> : ""}
            </Button>
            <Transition in={Boolean(anchorEl)} timeout={0} unmountOnExit nodeRef={menuRef}>
                {(state) => (
                    <div ref={menuRef}>
                        {props.item.menuItems && props.item.menuItems.length > 0 ? (
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                MenuListProps={{
                                    onMouseEnter: handleHover,
                                    onMouseLeave: handleCloseHover,
                                    style: { pointerEvents: "auto" },
                                }}
                                getContentAnchorEl={null}
                                anchorOrigin={{ horizontal: "left", vertical: "bottom" }}

                                style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state],
                                    pointerEvents: "none",

                                }}
                            >
                                {props.item.menuItems.map((item, index) => (
                                    <Link href={item.link || ""} style={{ color: "inherit", textDecoration: "none" }}
                                    >

                                        <MenuItem
                                            key={index}
                                            onClick={() => {
                                                handleMenuClick(item.link);
                                            }}
                                            style={{
                                                color: "black",
                                            }}
                                        >
                                            {item.title} {item.link}
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        ) : null}
                    </div>
                )
                }
            </Transition >
        </div >
    );
}

export default SimpleMenu;
