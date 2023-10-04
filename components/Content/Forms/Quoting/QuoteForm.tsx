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

        const newPageData = {
            currentQuestionIndex: 0,
            questionCount: quotePages[i]?.questions?.length,
            subPages: Array(quotePages[i]?.subPages?.length).fill({}),
        }
        //fill every sub page with empty questions
        for (let j = 0; j < quotePages[i]?.subPages?.length; j++) {
            newPageData.subPages[j] = {
                currentQuestionIndex: 0,
                questionCount: quotePages[i]?.subPages[j]?.questions?.length,
                questions: Array(quotePages[i]?.subPages[j]?.questions?.length).fill({}),
            }
        }
        newFormData.push(newPageData)
    }

    return newFormData;
}
export default function QuoteForm(props) {
    const [pageIndex, setPageIndex] = useState(0);
    const [subPageIndex, setSubPageIndex] = useState(0);
    //fill max Page index with an array of 0 to the length of the quote pages
    const [maxPageIndex, setMaxPageIndex] = useState(0);
    const [maxQuestionIndex, setMaxQuestionIndex] = useState(Array(props.quotePages.length).fill(0));
    const [formData, setFormData] = useState(() => (initializeFormData(props.quotePages)));
    const [pageValidated, setPageValidated] = useState(false);
    useEffect(() => {
        if (pageIndex > maxPageIndex) setMaxPageIndex(pageIndex)
    }, [pageIndex])

    function setPageIndexHandler(index) {
        if (index <= maxPageIndex) {
            setPageIndex(index);
            setSubPageIndex(0);
        }
    }
    function setAnswerHandler(answer) {
        const newFormData = [...formData];
        let replace = false;
        if (answer.level === 0) {
            //check to see if the old formData answerchoice is the same as the new one
            console.log("Page index " + answer.pageIndex)
            console.log("Sub Page index " + subPageIndex)

            if (newFormData[answer.pageIndex].subPages[subPageIndex].questions[answer.questionIndex].answerChoice !== answer.answerChoice) {
                replace = true;
            }
            newFormData[answer.pageIndex].subPages[subPageIndex].questions[answer.questionIndex] = answer;
            // console.log(answer)
        } else {
            let question = newFormData[answer.pageIndex].subPages[subPageIndex].questions[answer.questionIndex];
            for (let i = 1; i < answer.level; i++) {
                question = question.subQuestion;
            }
            console.log(" parent")
            console.log(question)
            //check to see if the old formData answerchoice is the same as the new one
            if (question.answerChoice !== answer.answerChoice) {
                replace = true;
            }
            question.subQuestion = answer;
        }
        //go deeper into the object based on the level
        // console.log(newFormData[0])ƒ

        if (replace) {
            setFormData(newFormData);
        }
    }
    useEffect(() => {
        //everytime formData changes, check to see if the page is validated
        //loop through the questions and see if there is an answer, if so, set the validated to true
        //also check to see if the question has a subquestion, if so, check to see if the subquestion is answered
        let allValidated = true;
        for (let i = 0; i < formData[pageIndex].subPages[subPageIndex].questions.length; i++) {
            if (formData[pageIndex].subPages[subPageIndex].questions[i].answerChoice) {
                if (formData[pageIndex].subPages[subPageIndex].questions[i].hasSubQuestion) {
                    if (!formData[pageIndex].subPages[subPageIndex].questions[i].subQuestion.answerChoice) {
                        allValidated = false;
                        break;
                    }
                }
            } else {
                allValidated = false;
                break;
            }
        }
        allValidated = true;
        //go through the questions and see if they are validated

        //see if current subpage is validated
        //if not, set pageValidated to false
        for (let i = 0; i < formData[pageIndex].subPages[subPageIndex].questions.length; i++) {
            if (!formData[pageIndex].subPages[subPageIndex].questions[i].answerChoice) {
                allValidated = false;
                break;
            }
        }

        setPageValidated(allValidated);

    }, [formData, pageIndex, subPageIndex])
    useEffect(() => {
        if (!pageValidated) {
            setMaxPageIndex(pageIndex)
        }
    }, [pageValidated])
    // when subpage changes log all data for that subpage
    useEffect(() => {
        console.log("subpage changed")
        console.log(formData[pageIndex].subPages[subPageIndex])
    }, [subPageIndex])
    //when page changes log all data for that page
    useEffect(() => {
        console.log("page changed")
        console.log(formData[pageIndex].subPages[subPageIndex])
    }, [pageIndex])
    function incrementPage() {
        //if subpage index is less than the max subpage index, increment the subpage index
        if (subPageIndex < props.quotePages[pageIndex].subPages.length - 1) {
            console.log("Now on page " + pageIndex + " and subpage " + (subPageIndex + 1))
            setSubPageIndex(subPageIndex + 1)
        } else {
            //if not, increment the page index
            console.log("Now on page " + (pageIndex + 1) + " and subpage " + subPageIndex)
            setPageIndex(pageIndex + 1);
            setSubPageIndex(0);
        }
    }
    function decrementPage() {
        //if subpage index is greater than 0, decrement the subpage index
        if (subPageIndex > 0) {
            setSubPageIndex(subPageIndex - 1)
        } else {
            //if not, decrement the page index
            setPageIndex(pageIndex - 1);
            setSubPageIndex(props.quotePages[pageIndex - 1].subPages.length - 1);
        }
    }

    return (
        <>
            <Box sx={{ minHeight: "60vh", padding: "1rem" }}>
                <PageIcons setPageIndex={setPageIndexHandler} quotePages={props.quotePages} pageIndex={pageIndex} maxPageIndex={maxPageIndex} />
                <>
                    {props.quotePages.map((page, mapPageIndex) => (
                        <>
                            {
                                pageIndex === mapPageIndex ? <>
                                    {page.subPages?.map((subPage, mapSubPageIndex) => {
                                        return <React.Fragment key={mapSubPageIndex}>
                                            {subPageIndex === mapSubPageIndex ? <QuotePage
                                                currentIndex={pageIndex}
                                                key={subPageIndex} {...subPage}
                                                setAnswer={setAnswerHandler}
                                                pageData={formData[pageIndex]}
                                                pageIndex={pageIndex}
                                                getFormData={() => {
                                                    console.log("get form data")
                                                    console.log(formData)
                                                    console.log(formData[pageIndex])
                                                    console.log(formData[pageIndex].subPages)
                                                    console.log(subPageIndex)
                                                    console.log(formData[pageIndex].subPages[subPageIndex])
                                                    return formData[pageIndex].subPages[subPageIndex]
                                                }}
                                            /> : null}
                                        </React.Fragment>
                                    }
                                    )}
                                </> : null
                            }
                        </>
                    )
                    )}
                </>

                <Box
                    sx={{
                        width: "90%",
                        display: "flex", justifyContent: "space-between", margin: "1rem auto",
                        flexDirection: "row"
                    }}
                >
                    <Box

                        sx={{ opacity: (pageIndex < 1 && subPageIndex < 1) ? "0%" : "100%", }}
                    >
                        <Button
                            disabled={(pageIndex < 1 && subPageIndex < 1) ? true : false}
                            onClick={() => { decrementPage() }} sx={{ minWidth: "10rem" }} variant="contained" color="primary">Back</Button>
                    </Box>

                    <Box
                        sx={{ opacity: pageValidated ? "100%" : "0%", }}
                    >
                        <Button
                            onClick={() => {
                                incrementPage()
                            }} disabled={pageValidated ? false : true}
                            sx={{ minWidth: "10rem", textAlign: "right" }} variant="contained" color="primary">Submit</Button>
                    </Box>

                </Box>
            </Box >
        </>
    )
}