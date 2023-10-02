import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CustomFonts } from "../../../../providers/theme";
import QuotePage from "./QuotePage";
import Image from "next/image";
import React from "react";

function PageIcons(props) {

    return <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem", margin: "1rem auto", alignItems: "center" }}>
        {props.quotePages.map((page, index) => {
            return <React.Fragment key={index}>
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
                        <Image alt={page.title}
                            src={props.pageIndex >= index ? page.colorIcon : page.grayIcon}
                            fill style={{ objectFit: "contain" }} />
                    </Box>
                    <Typography textAlign={"center"} fontFamily={CustomFonts.Gustavo} variant="subtitle1">{page.title}</Typography>
                </Box>
            </React.Fragment>
        }
        )}
    </Box>
}
function initializeFormData(quotePages) {
    const newFormData = [];
    for (let i = 0; i < quotePages.length; i++) {
        const newPageData = {}
        newPageData.currentQuestionIndex = 0;
        newPageData.questionCount = quotePages[i]?.questions?.length;
        newPageData.questions = Array(quotePages[i]?.questions?.length).fill({});
        newFormData.push(newPageData)
    }
    return newFormData;
}
export default function QuoteForm(props) {
    const [pageIndex, setPageIndex] = useState(0);
    //fill max Page index with an array of 0 to the length of the quote pages
    const [maxPageIndex, setMaxPageIndex] = useState(0);
    const [maxQuestionIndex, setMaxQuestionIndex] = useState(Array(props.quotePages.length).fill(0));
    const [formData, setFormData] = useState(initializeFormData(props.quotePages));
    useEffect(() => {
        if (pageIndex > maxPageIndex) setMaxPageIndex(pageIndex)
    }, [pageIndex])

    function setPageIndexHandler(index) {
        if (index <= maxPageIndex) {
            setPageIndex(index);
        }
    }
    function setAnswerHandler(answer) {
        console.log(answer)
        const newFormData = [...formData];
        if (answer.level === 0) {
            newFormData[answer.pageIndex].questions[answer.questionIndex] = answer;
        } else {
            newFormData[answer.pageIndex].questions[answer.questionIndex].subQuestion = answer;
        }
        //go deeper into the object based on the level

        setFormData(newFormData);
        console.log(newFormData[0])
    }

    return (
        <>
            <Box sx={{ minHeight: "60vh", padding: "1rem" }}>
                <PageIcons setPageIndex={setPageIndexHandler} quotePages={props.quotePages} pageIndex={pageIndex} maxPageIndex={maxPageIndex} />
                {props.quotePages.map((page, index) => {
                    return <React.Fragment key={index}>
                        {pageIndex === index && <QuotePage
                            currentIndex={pageIndex}
                            decrementPage={() => { setPageIndex(pageIndex - 1) }}
                            incrementPage={() => { setPageIndex(pageIndex + 1) }}
                            key={index} {...page}
                            setAnswer={setAnswerHandler}
                            pageData={formData[index]}
                            pageIndex={index}
                        />}
                    </React.Fragment>
                }
                )}
            </Box>
        </>
    )
}