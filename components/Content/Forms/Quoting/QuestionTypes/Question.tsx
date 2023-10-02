import { Box, Typography } from "@mui/material";
import { CustomFonts } from "../../../../../providers/theme";
import MultipleChoice from "./MultipleChoice";
import { useState } from "react";
import Fade from "@mui/material/Fade";

export default function Question(props) {

    const [validatedAnswers, setValidatedAnswers] = useState(Array(props.questions?.length).fill(false));
    const [validated, setValidated] = useState(false);
    const [subQuestion, setSubQuestion] = useState(null);
    const handleAnswer = (answer) => {
        //check to see if the selected answer has a subquestion
        let hasSubQuestion = false;
        // console.log(props.question.answers)
        if (props.question.answers[answer[1]].subQuestion) {
            //if so, set the answerIndex to the index of the subquestion
            setSubQuestion(props.question.answers[answer[1]].subQuestion)
            hasSubQuestion = true;
        } else {
            //if not, set the answerIndex to the next question
            setSubQuestion(null)
        }
        if (props.question.type?.toLowerCase() === "multiplechoice") {
            const QA = {
                question: props.question.question,
                pageIndex: props.pageIndex,
                questionIndex: props.questionIndex,
                answerChoice: answer[0],
                answerIndex: answer[1],
                level: props.level,
                hasSubQuestion: hasSubQuestion,
                subQuestion: hasSubQuestion ? props.question.answers[answer[1]].subQuestion : null
            }
            props.setAnswer(QA)
        }
    }
    return <>
        <Fade in={true} timeout={1500}>
            <Box

            >
                <Typography fontFamily={CustomFonts.Gustavo} fontWeight={800} variant="h3">
                    {props.question.question}
                </Typography>
                {props.question.helperText && <Typography variant="h5">{props.helperText}</Typography>}
                {props.question.type?.toLowerCase() === "multiplechoice" ? <>
                    <MultipleChoice level={props.level} initialAnswer={props.initialAnswer} setAnswer={(answer) => handleAnswer(answer)} question={...props.question} />
                </>
                    : null
                }
            </Box>
        </Fade>
        {
            false && <Question pageIndex={props.pageIndex}
                questionIndex={props.questionIndex}
                initialAnswer={props.initialAnswer}
                setAnswer={props.setAnswer} level={props.level + 1} question={subQuestion} />
        }
    </>
}