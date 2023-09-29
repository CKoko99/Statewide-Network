import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CustomFonts } from "../../../../providers/theme";
import QuotePage from "./QuotePage";
import Image from "next/image";

function PageIcons(props) {

    return <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem", margin: "1rem auto", alignItems: "center" }}>
        {props.quotePages.map((page, index) => {
            return <>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        cursor: props.maxPageIndex >= index ? "pointer" : "default",
                    }}
                    onClick={() => {
                        if (props.maxPageIndex >= index) {
                            props.setPageIndex(index)
                        }
                    }}
                >

                    <Box
                        sx={{
                            position: "relative",
                            width: "3rem",
                            height: "3rem"
                        }}>
                        <Image alt={page.title} src={props.pageIndex >= index ? page.colorIcon : page.grayIcon} layout="fill" objectFit="contain" />
                    </Box>
                    <Typography textAlign={"center"} fontFamily={CustomFonts.Gustavo} variant="subtitle1">{page.title}</Typography>
                </Box>
            </>
        }
        )}
    </Box>
}

export default function QuoteForm(props) {
    const [pageIndex, setPageIndex] = useState(0);
    const [maxPageIndex, setMaxPageIndex] = useState(0);
    useEffect(() => {
        if (pageIndex > maxPageIndex) setMaxPageIndex(pageIndex)
    }, [pageIndex])

    function setPageIndexHandler(index) {
        if (index <= maxPageIndex) {
            setPageIndex(index);
        }
    }
    return (
        <>
            <Box sx={{ minHeight: "60vh", padding: "1rem" }}>
                <PageIcons setPageIndex={setPageIndexHandler} quotePages={props.quotePages} pageIndex={pageIndex} maxPageIndex={maxPageIndex} />
                {props.quotePages.map((page, index) => {
                    return <>
                        {pageIndex === index && <QuotePage
                            currentIndex={pageIndex}
                            decrementPage={() => { setPageIndex(pageIndex - 1) }}
                            incrementPage={() => { setPageIndex(pageIndex + 1) }}
                            key={index} {...page}
                        />}
                    </>
                }
                )}
            </Box>
        </>
    )
}