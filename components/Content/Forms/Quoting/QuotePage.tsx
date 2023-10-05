import { Box, Button, Fade, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CustomFonts } from "../../../../providers/theme";
import MultipleChoice from "./QuestionTypes/MultipleChoice";
import Question from "./QuestionTypes/Question";
import React from "react";
import { init } from "next/dist/compiled/@vercel/og/satori";
function initialPageQuestions(questions) {
    const newPageData = [];
    for (let i = 0; i < questions.length; i++) {
        const newQuestionsData = {
            question: questions[i].question,
            type: questions[i].type,
            level: questions[i].level,
            answers: questions[i].answers,
            pageIndex: questions[i].pageIndex,
            questionIndex: questions[i].questionIndex,
            hasSubQuestion: questions[i].hasSubQuestion,
            subQuestion: questions[i].subQuestion,
            answerChoice: questions[i].answerChoice,
            answerIndex: questions[i].answerIndex,
        }
        newPageData.push(newQuestionsData)
    }
    console.log("newPageData")
    console.log(newPageData)
}

function intializeAnswers(pageData) {
    const newInitialAnswers = [];
    // console.log("pageData")
    //console.log(pageData)
    for (let i = 0; i < pageData.questions?.length; i++) {
        //check to see if the question has a subquestion
        const questionAnswers = [];
        //if answer choice is a string
        if (typeof pageData?.questions[i].answerChoice === "string") {
            questionAnswers.push(pageData?.questions[i].answerChoice)
            let question = pageData?.questions[i]

            //if so, set the answer to the subquestion
            while (question.hasSubQuestion) {
                //if so, set the answer to the subquestion
                question = question.subQuestion;
                questionAnswers.push(question.answerChoice)
            }

        } else if (typeof pageData?.questions[i].answerChoice === "object") {
            //if answer choice is an array
            console.log("else object")
            if (pageData?.questions[i].answerChoice[0]) {
                questionAnswers.push(pageData?.questions[i].answerChoice[0])
            } else {
                questionAnswers.push(pageData?.questions[i].answerChoice)
            }

        } else if (typeof pageData?.questions[i].answerChoice === undefined) {
        } else {
            console.log("else summen")
            console.log(typeof pageData?.questions[i].answerChoice)
            console.log(pageData?.questions[i].answerChoice)
            //  questionAnswers.push(pageData?.questions[i].answerChoice)

        }

        newInitialAnswers.push(questionAnswers)
    }
    return newInitialAnswers;
}
export default function QuotePage(props) {

    //set initial state to be an array of the same length as the number of questions
    const [pageQuestions, setPageQuestions] = useState(props.questions)
    const [answerIndex, setAnswerIndex] = useState(0);
    const [levelArray, setLevelArray] = useState(Array(props.questions?.length).fill(0));
    const [validatedAnswers, setValidatedAnswers] = useState(Array(props.questions?.length).fill(false));
    const [initialAnswers, setInitialAnswers] = useState(() => intializeAnswers(props.getFormData()));
    useEffect(() => {
        console.log("new page")
        console.log(props)
    }, [])
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

        } else {

            let newValidatedAnswers = [...validatedAnswers];
            newValidatedAnswers[index] = !questionData.hasSubQuestion;
            setValidatedAnswers(newValidatedAnswers);
            props.setAnswer(questionData)
        }
    }
    useEffect(() => {
        console.log("pageQuestions")
        console.log(pageQuestions)
        console.log(pageQuestions[0].answers)
        //console.log(pageQuestions[0].answers[0].subQuestions)
        initialPageQuestions(pageQuestions)
    }, [])
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
                        </>
                    }</React.Fragment>
                })}
            </Box>

        </Box>
    </>
}