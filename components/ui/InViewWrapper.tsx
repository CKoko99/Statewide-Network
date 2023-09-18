import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/material";


export default function InViewWrapper(props) {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: .2
    });

    useEffect(() => {
        if (!isVisible && inView) {
            setIsVisible(true);
        }
    }, [isVisible, inView]);

    //if there's a hash in the url, set everything to visible
    useEffect(() => {
        if (window.location.hash) {
            setIsVisible(true);
        }
    }, [])
    return (
        <>
            {isVisible ? props.children : <Box ref={ref} sx={{ opacity: 0 }} >{props.children}</Box>}
        </>
    );
}