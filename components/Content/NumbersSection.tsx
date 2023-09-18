import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CustomFonts } from "../../providers/theme";
import InViewWrapper from "../ui/InViewWrapper";
interface NumbersSectionProps {
    title: string;
    menuContent: {
        beforeNumber: string;
        beforeNumberGap: boolean;
        number: number;
        afterNumber: string;
        afterNumberGap: boolean;
        body: string;
    }[];
}
function SectionItem(props) {
    const [displayedNumber, setDisplayedNumber] = useState(null);
    //end time will be a random number between 1 and 5 seconds
    const [endTime, setEndTime] = useState(Math.floor(Math.random() * 3000) + 1000)
    useEffect(() => {
        let startTime;
        let animationFrame;

        const updateNumber = (timestamp) => {
            if (!startTime) {
                startTime = timestamp;
            }

            const progress = (timestamp - startTime) / endTime; // 5000ms (5 seconds)
            const nextNumber = Math.min(props.number, Math.floor(props.number * progress));
            setDisplayedNumber(nextNumber);

            if (nextNumber < props.number) {
                animationFrame = requestAnimationFrame(updateNumber);
            }
        };

        if (props.number > 0) {
            animationFrame = requestAnimationFrame(updateNumber);
        }

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [props.number]);
    return <>


        <Box
            sx={{
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center",

                    color: "primary.main"
                }}
            >
                <Typography variant="h3"
                    fontWeight={"500"} sx={{
                        marginRight: props.beforeNumberGap ? ".3rem" : "0"
                    }}
                >{props.beforeNumber}</Typography>
                <Typography fontWeight={"500"} variant="h3">{displayedNumber}</Typography>
                <Typography fontWeight={"500"} variant="h3"
                    sx={{ marginLeft: props.afterNumberGap ? ".3rem" : "0" }}
                >{props.afterNumber}</Typography>
            </Box>
            <Typography variant="h6">{props.body}</Typography>
        </Box >

    </>
}
export default function NumbersSection(props) {

    return (<>
        <InViewWrapper>
            <Box
                sx={{ margin: "2rem auto", width: "90%", textAlign: "center" }}
            >
                <Typography variant="h2" gutterBottom fontFamily={CustomFonts.Gustavo}>{props.title}</Typography>
                <Box
                    sx={{
                        display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", justifyContent: "space-around",
                        margin: "1rem", gap: "1.5rem"
                    }}
                >
                    {props.menuContent.map((item, index) => {
                        return <InViewWrapper key={index}>
                            <SectionItem {...item} />
                        </InViewWrapper>
                    }
                    )}
                </Box>
            </Box >
        </InViewWrapper>

    </>)
}