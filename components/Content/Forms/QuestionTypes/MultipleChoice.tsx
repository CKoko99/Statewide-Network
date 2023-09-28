import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function MultipleChoice(props) {

    const [selectedAnswer, setSelectedAnswer] = useState("");

    function handleAnswer(answer) {
        console.log("Answered question " + props.question.question + " with " + answer);
        setSelectedAnswer(answer);
        props.setAnswer(answer)
    }

    return <>

        <Box
            sx={{
                display: "flex", justifyContent: "space-around", width: "50%", margin: "1rem auto",
                gap: "1rem",
                flexWrap: "wrap"
            }}
        >
            {props.question.answers.map((answer, index) => (
                <Button sx={{ minWidth: "12rem" }} key={index} variant="contained"
                    onClick={() => handleAnswer(answer.text)}
                    color={selectedAnswer === answer.text ? "primary" : "secondary"}>
                    {answer.text}
                </Button>
            ))}
        </Box>
    </>
}