import { Box } from "@mui/material";
import { StaticImageData } from "next/image";

interface MultipleContentWImagesProps {
    title?: string;
    menuContent?: {
        title: string;
        image: {
            src: StaticImageData;
            alt: string;
        };
        CTA: {
            text: string;
        };
    }[];
}

const styles = {
    root: {
        margin: "1rem 0"
    }
}
export default function MultipleContentWImages(props) {

    return <>
        <Box sx={{ ...styles.root }}>
        </Box>
    </>
}
