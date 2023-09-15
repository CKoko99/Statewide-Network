import { Box, Typography } from "@mui/material";
import { StaticImageData } from "next/image";
import { Poppin } from "../../../providers/theme";
interface BannerProps {
    mainHeading: string;
    subHeading: string;
    image: StaticImageData;
    ctaItems?: {
        mainText: string;
        subText: string;
        link: string;
        icon: StaticImageData;
    }[];
}
const styles = {
    root: {
    },
    mainHeading: {
    },
    subHeading: {
    }
}
export default function MainBanner(props: BannerProps) {
    console.log(typeof props.image)
    console.log(Poppin)
    return (<>
        <Box sx={{ ...styles.root }}>
            <Typography variant="h2" sx={{ ...styles.subHeading }}>{props.subHeading}</Typography>
            <Typography variant="h1" sx={{ ...styles.mainHeading }}>{props.mainHeading}</Typography>
            <h1 style={{ fontFamily: Poppin }}>Test</h1>
            <img src={props.image.src} />
        </Box>
    </>)
}