import { Box, Button, Fade } from "@mui/material";
import { useEffect, useState } from "react";
import Question from "./Question";

export default function MultipleChoice(props) {
    const [selectedAnswer, setSelectedAnswer] = useState(["", null]);
    function handleAnswer(answer, index) {
        //this is where question type validation should occur
        //console.log(answer, index)
        if (selectedAnswer[1] === index) { return }
        setSelectedAnswer([answer, index]);
        props.setAnswer([answer, index])
    }

    useEffect(() => {
        //loop through the answers and see if props.initialAnswer is one of them
        if (!props.initialAnswer) return;

        console.log(props.initialAnswer)
        for (let i = 0; i < props.question.answers.length; i++) {
            if (props.question.answers[i].text === props.initialAnswer[props.level]) {
                //console.log("initial answer found")
                setTimeout(() => {
                    //set the selected answer to the initial answer
                    handleAnswer(props.initialAnswer[props.level], i)
                }, 250)

            }
        }

    }, [])



    return <>

        <Box
            sx={{
                display: "flex", justifyContent: "space-around", width: { md: "50%" }, margin: "1rem auto",
                gap: "1rem",
                flexWrap: "wrap",
                flexDirection: "column",
            }}
        >
            <Question {...props.question} />
            <Box
                sx={{ display: "flex", gap: "1.5rem", justifyContent: "space-around", flexWrap: "wrap" }}
            >
                {props.question?.answers?.map((answer, index) => (
                    <Button sx={{ minWidth: "20rem" }} key={index} variant="contained"
                        onClick={() => handleAnswer(answer.text, index)}
                        color={selectedAnswer[1] === index ? "primary" : "secondary"}>
                        {answer.text}
                    </Button>
                ))}
            </Box>
        </Box>

        {/*
            selectedAnswer[0] && props.question.answers[selectedAnswer[1]].subQuestion &&
            <Box sx={{ width: "100%" }}>
                <MultipleChoice setAnswer={props.setAnswer} question={props.question.answers[selectedAnswer[1]].subQuestion} />
            </Box>
                */ }

    </>
}