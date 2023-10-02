import { Box, Button, Fade, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CustomFonts } from "../../../../providers/theme";
import MultipleChoice from "./QuestionTypes/MultipleChoice";
import Question from "./QuestionTypes/Question";
import React from "react";
import { init } from "next/dist/compiled/@vercel/og/satori";

function intializeAnswers(pageData) {
    const newAnswers = [];
    for (let i = 0; i < pageData.questions.length; i++) {
        newAnswers.push(pageData.questions[i].answerChoice || "")
    }
    return newAnswers;
}
export default function QuotePage(props) {

    //set initial state to be an array of the same length as the number of questions
    const [pageQuestions, setPageQuestions] = useState(props.questions)
    const [answerIndex, setAnswerIndex] = useState(0);
    const [validatedAnswers, setValidatedAnswers] = useState(Array(props.questions?.length).fill(false));
    const [validated, setValidated] = useState(false);
    const [initialAnswers, setInitialAnswers] = useState(() => intializeAnswers(props.pageData));

    useEffect(() => {
        //if all answers are validated, then submit
        let newAnswerIndex = 0
        let allValidated = true;
        for (let i = 0; i < validatedAnswers.length; i++) {
            if (!validatedAnswers[i]) {
                allValidated = false;
                break
            }
            newAnswerIndex++;
        }
        if (allValidated) setValidated(true);
        setAnswerIndex(newAnswerIndex);
    }, [validatedAnswers])

    useEffect(() => {
        setValidated(false);
        setValidatedAnswers(Array(pageQuestions?.length).fill(false));
    }, [props.currentIndex])

    const handleAnswer = (questionData, index) => {
        // console.log(questionData, index)

        if (questionData.level === 0 && !questionData.hasSubQuestion) {

            let newValidatedAnswers = [...validatedAnswers];
            newValidatedAnswers[index] = true;
            setValidatedAnswers(newValidatedAnswers);
            props.setAnswer(questionData)

        } else {
            let newValidatedAnswers = [...validatedAnswers];

            newValidatedAnswers[index] = !questionData.hasSubQuestion;
            setValidatedAnswers(newValidatedAnswers);
            props.setAnswer(questionData)
        }
    }

    //console.log(props.questions[0])
    return <>
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "inherit", justifyContent: "space-between" }}>
            <Box textAlign={"center"}
            >

                {pageQuestions?.map((question, index) => {
                    return <React.Fragment key={index} > {answerIndex >= index &&

                        <Question level={0}
                            setAnswer={(answer) => handleAnswer(answer, index)}
                            questionIndex={index}
                            question={question}
                            pageIndex={props.pageIndex}
                            initialAnswer={initialAnswers[index]}
                        />

                    }</React.Fragment>
                })}
            </Box>
            <Box
                sx={{
                    width: "90%",
                    display: "flex", justifyContent: "space-between", margin: "1rem auto",
                    flexDirection: props.currentIndex < 1 ? "row-reverse" : "row",
                }}
            >
                {props.currentIndex > 0 && <Box

                >
                    <Button onClick={props.decrementPage} sx={{ minWidth: "10rem" }} variant="contained" color="primary">Back</Button>
                </Box>
                }
                {validated && <Box

                >
                    <Button onClick={props.incrementPage} sx={{ minWidth: "10rem", textAlign: "right" }} variant="contained" color="primary">Submit</Button>
                </Box>
                }
            </Box>
        </Box>
    </>
}