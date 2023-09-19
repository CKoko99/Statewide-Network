import { Box, Typography } from "@mui/material";
import { forwardRef, useEffect, useState } from "react";
import { CustomFonts } from "../../providers/theme";
import InViewWrapper from "../ui/InViewWrapper";
import FadeWrapper from "../ui/FadeWrapper";
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
interface SectionItemProps {
    beforeNumber: string;
    beforeNumberGap: boolean;
    number: number;
    afterNumber: string;
    afterNumberGap: boolean;
    body: string;
}
//forward ref
function returnRandomTime(number) {
    if (number < 5) return Math.floor(Math.random() * 1000) + 500;
    return Math.floor(Math.random() * 2000) + 1000;
}

const SectionItem = forwardRef((props: SectionItemProps, ref) => {
    const [displayedNumber, setDisplayedNumber] = useState(0);

    //end time will be a random number between 1 and 5 seconds
    const randomTime = Math.floor(Math.random() * 3000) + 1000;
    const [endTime, setEndTime] = useState(1);

    useEffect(() => {
        setEndTime(returnRandomTime(props.number));
    }, []);
    useEffect(() => {
        if (endTime < 100) {
            return
        }
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
    }, [props.number, endTime]);

    return <>
        <Box
            sx={{
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            }}
            ref={ref}
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
)
export default function NumbersSection(props) {

    return (<>
        <InViewWrapper>
            <Box
                sx={{ margin: "2rem auto", width: "90%", textAlign: "center" }}
            >
                <FadeWrapper>
                    <Typography variant="h2" gutterBottom fontFamily={CustomFonts.Gustavo}>{props.title}</Typography>
                </FadeWrapper>
                <Box
                    sx={{
                        display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", justifyContent: "space-around",
                        margin: "1rem", gap: "2rem"
                    }}
                >
                    {props.menuContent.map((item, index) => {
                        return <InViewWrapper key={index}>
                            <FadeWrapper>
                                <SectionItem {...item} />
                            </FadeWrapper>

                        </InViewWrapper>
                    }
                    )}
                </Box>
            </Box >
        </InViewWrapper>

    </>)
}