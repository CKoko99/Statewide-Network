import { Box, TextField } from "@mui/material"
import { useEffect, useState } from "react";

export default function Input(props) {
    useEffect(() => {
        console.log(props)
    }, [])
    const [isError, setIsError] = useState(false);
    const [errorText, setErrorText] = useState("")
    const [value, setValue] = useState("")
    const [onceValid, setOnceValid] = useState(false)

    //handle initial answer
    useEffect(() => {
        console.log(props)
        if (props.initialAnswer) {
            setValue(props.initialAnswer[props.level])
        }
    }, [])

    const handleValueChange = (targetValue) => {
        if (props.validation?.toLowerCase() === "zipcode") {
            //remove all non numbers from string
            targetValue = targetValue.replace(/\D/g, '')
            setValue(targetValue)
        } else {
            setValue(targetValue)

        }
    }
    useEffect(() => {
        if (props.validation?.toLowerCase() === "zipcode") {
            if (value?.length === 5) {
                setOnceValid(true)
                setIsError(false)
                setErrorText("")
                props.setAnswer([value, props.questionIndex,])
            } else if (value?.length !== 5 && onceValid) {
                setIsError(true)
                setErrorText("Please enter a valid zipcode")
                props.setAnswer([null, props.questionIndex,])
            }
        }
    }, [value])
    return <>
        <Box sx={{ margin: "1rem" }}>

            <TextField
                error={isError}
                id="outlined-error-helper-text"
                label={props.label}
                //type={props.inputType}
                value={value}
                onChange={(e) => {
                    handleValueChange(e.target.value)
                }}
                helperText={errorText}
            />
        </Box>

    </>
}