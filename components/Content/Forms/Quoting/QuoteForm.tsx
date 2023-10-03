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
            questions: Array(quotePages[i]?.questions?.length).fill({}),
        }
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
    const [pageValidated, setPageValidated] = useState(false);
    useEffect(() => {
        if (pageIndex > maxPageIndex) setMaxPageIndex(pageIndex)
    }, [pageIndex])

    function setPageIndexHandler(index) {
        if (index <= maxPageIndex) {
            setPageIndex(index);
        }
    }
    function setAnswerHandler(answer) {
        const newFormData = [...formData];
        let replace = false;
        if (answer.level === 0) {
            //check to see if the old formData answerchoice is the same as the new one
            if (newFormData[answer.pageIndex].questions[answer.questionIndex].answerChoice !== answer.answerChoice) {
                replace = true;
            }
            newFormData[answer.pageIndex].questions[answer.questionIndex] = answer;
            // console.log(answer)
        } else {
            let question = newFormData[answer.pageIndex].questions[answer.questionIndex];
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
        for (let i = 0; i < formData[pageIndex].questions.length; i++) {
            if (formData[pageIndex].questions[i].answerChoice) {
                if (formData[pageIndex].questions[i].hasSubQuestion) {
                    if (!formData[pageIndex].questions[i].subQuestion.answerChoice) {
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
        for (let i = 0; i < formData[pageIndex].questions.length; i++) {
            //we need to check to see if the question has a subquestion
            //and make sure it has an answer
            //use a while loop to keep checking if the question has a subquestion
            let questionValidated = false;
            let questionIndex = i;
            let level = 0;
            let max = 10
            let currentQuestion = formData[pageIndex].questions[questionIndex];
            if (!currentQuestion.hasSubQuestion && currentQuestion.answerChoice) {
                questionValidated = true;
            }
            else {
                while (currentQuestion.hasSubQuestion) {
                    //check to see if the subquestion has an answer
                    if (currentQuestion.subQuestion.answerChoice) {
                        questionValidated = true;
                    } else {
                        questionValidated = false;
                        break;
                    }
                    //set the questionIndex to the subquestion
                    questionIndex = formData[pageIndex].questions[questionIndex].subQuestion.questionIndex;
                    currentQuestion = currentQuestion.subQuestion;
                    level++;
                    if (level > max) {
                        console.log("max level reached")
                        break;
                    }
                }
            }
            //if the question is not validated, break
            if (!questionValidated) {
                allValidated = false;
                break;
            }
        }
        setPageValidated(allValidated);
    }, [formData, pageIndex])
    useEffect(() => {
        if (!pageValidated) {
            setMaxPageIndex(pageIndex)
        }
    }, [pageValidated])
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
                            pageData={formData[pageIndex]}
                            pageIndex={index}
                            getFormData={() => {
                                console.log("get form data")
                                console.log(formData[index])
                                return formData[index]
                            }}
                        />}
                    </React.Fragment>
                }
                )}
                <Box
                    sx={{
                        width: "90%",
                        display: "flex", justifyContent: "space-between", margin: "1rem auto",
                        flexDirection: "row"
                    }}
                >
                    <Box

                        sx={{ opacity: pageIndex > 0 ? "100%" : "0%", }}
                    >
                        <Button
                            disabled={pageIndex > 0 ? false : true}
                            onClick={() => { setPageIndex(pageIndex - 1) }} sx={{ minWidth: "10rem" }} variant="contained" color="primary">Back</Button>
                    </Box>

                    <Box
                        sx={{ opacity: pageValidated ? "100%" : "0%", }}
                    >
                        <Button
                            onClick={() => {
                                setPageIndex(pageIndex + 1);
                                setTimeout(() => {
                                    window.scrollTo({
                                        left: 0,
                                        top: 0,
                                        behavior: "smooth" // Smooth scrolling behavior
                                    });
                                }, 100);
                            }} disabled={pageValidated ? false : true}
                            sx={{ minWidth: "10rem", textAlign: "right" }} variant="contained" color="primary">Submit</Button>
                    </Box>

                </Box>
            </Box>
        </>
    )
}