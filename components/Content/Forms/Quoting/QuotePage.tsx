import { Box, Button, Fade, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CustomFonts } from "../../../../providers/theme";
import MultipleChoice from "./QuestionTypes/MultipleChoice";
import Question from "./QuestionTypes/Question";
import React from "react";
import { init } from "next/dist/compiled/@vercel/og/satori";

function intializeAnswers(pageData) {
    const newInitialAnswers = [];

    for (let i = 0; i < pageData.questions.length; i++) {
        //check to see if the question has a subquestion
        const questionAnswers = [];
        //if answer choice is a string
        if (typeof pageData?.questions[i].answerChoice === "string") {
            questionAnswers.push(pageData?.questions[i].answerChoice)
            if (pageData.questions[i].hasSubQuestion) {
                //if so, set the answer to the subquestion
                questionAnswers.push(pageData.questions[i].subQuestion.answerChoice)
            }
        } else if (typeof pageData?.questions[i].answerChoice === "object") {
            //if answer choice is an array
            questionAnswers.push(pageData?.questions[i].answerChoice[0])
        }

        newInitialAnswers.push(questionAnswers)
    }

    console.log("newInitialAnswers")
    console.log(newInitialAnswers)
    return newInitialAnswers;
}
export default function QuotePage(props) {

    //set initial state to be an array of the same length as the number of questions
    const [pageQuestions, setPageQuestions] = useState(props.questions)
    const [answerIndex, setAnswerIndex] = useState(0);
    const [levelArray, setLevelArray] = useState(Array(props.questions?.length).fill(0));
    const [validatedAnswers, setValidatedAnswers] = useState(Array(props.questions?.length).fill(false));
    const [initialAnswers, setInitialAnswers] = useState(() => intializeAnswers(props.pageData[props.pageIndex]));
    const [subQuestions, setSubQuestions] = useState(Array(props.questions?.length).fill(null));
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

        if (newAnswerIndex > answerIndex) {
            setAnswerIndex(newAnswerIndex);
        }
    }, [validatedAnswers])

    useEffect(() => {
        setValidatedAnswers(Array(pageQuestions?.length).fill(false));
    }, [props.currentIndex])

    const handleAnswer = (questionData, index) => {
        // console.log(questionData, index)

        if (questionData.level === 0 && !questionData.hasSubQuestion) {

            let newValidatedAnswers = [...validatedAnswers];
            newValidatedAnswers[index] = true;
            setValidatedAnswers(newValidatedAnswers);
            props.setAnswer(questionData)
            if (subQuestions[index]) {
                let newSubQuestions = [...subQuestions];
                newSubQuestions[index] = null;
                setSubQuestions(newSubQuestions);
            }
        } else {
            let newValidatedAnswers = [...validatedAnswers];
            newValidatedAnswers[index] = !questionData.hasSubQuestion;
            setValidatedAnswers(newValidatedAnswers);
            props.setAnswer(questionData)
            if (questionData.hasSubQuestion) {
                let newSubQuestions = [...subQuestions];
                newSubQuestions[index] = questionData.subQuestion;
                //wait ha;f a second before setting the subquestion
                setTimeout(() => {
                    setSubQuestions(newSubQuestions);
                }, 50)
            }
        }
    }

    //console.log(props.questions[0])
    return <>
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "inherit", justifyContent: "space-between" }}>
            <Box textAlign={"center"}
            >

                {pageQuestions?.map((question, index) => {
                    return <React.Fragment key={index} > {answerIndex >= index &&
                        <>
                            <Question level={0}
                                setAnswer={(answer) => handleAnswer(answer, index)}
                                questionIndex={index}
                                question={question}
                                pageIndex={props.pageIndex}
                                initialAnswer={initialAnswers[index]}
                            />
                            {
                                subQuestions[index] && <Question level={1}
                                    setAnswer={(answer) => handleAnswer(answer, index)}
                                    questionIndex={index}
                                    question={subQuestions[index]}
                                    pageIndex={props.pageIndex}
                                    initialAnswer={initialAnswers[index]}
                                />
                            }
                        </>
                    }</React.Fragment>
                })}
            </Box>

        </Box>
    </>
}