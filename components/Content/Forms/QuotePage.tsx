import { Box, Button, Fade, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CustomFonts } from "../../../providers/theme";
import MultipleChoice from "./QuestionTypes/MultipleChoice";

export default function QuotePage(props) {
    //set initial state to be an array of the same length as the number of questions
    const [answerIndex, setAnswerIndex] = useState(0);
    const [validatedAnswers, setValidatedAnswers] = useState(Array(props.questions.length).fill(false));
    const [validated, setValidated] = useState(false);
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
        console.log(newAnswerIndex)
    }, [validatedAnswers])

    const handleAnswer = (index, answer) => {
        console.log("Answered question " + index + " with " + answer);
        let newValidatedAnswers = [...validatedAnswers];
        newValidatedAnswers[index] = true;
        setValidatedAnswers(newValidatedAnswers);
    }

    return <>
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "inherit", justifyContent: "space-between" }}>
            <Box
            >

                {props.questions.map((question, index) => {
                    return <> {answerIndex >= index && <Fade in={true} timeout={1000}>
                        <Box textAlign={"center"} key={index} >
                            <Typography fontFamily={CustomFonts.Gustavo} fontWeight={800} variant="h3">
                                {question.question}
                            </Typography>
                            {question.helperText && <Typography variant="h5">{question.helperText}</Typography>}

                            {
                                question.type === "multipleChoice" && <>
                                    <MultipleChoice setAnswer={(answer) => handleAnswer(index, answer)} question={question} />
                                </>
                            }
                        </Box >
                    </Fade>

                    }</>
                }
                )
                }
            </Box>
            <Box
            >
                {validated && <Box
                    sx={{ width: "90%", textAlign: "right" }}
                >
                    <Button sx={{ minWidth: "10rem" }} variant="contained" color="primary">Submit</Button>
                </Box>
                }
            </Box>
        </Box>
    </>
}