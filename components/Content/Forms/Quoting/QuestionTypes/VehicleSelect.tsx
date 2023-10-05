import { Box, Button, FormControl, Input, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CustomFonts } from "../../../../../providers/theme";
import { Edit as EditIcon } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
const styles = {
    root: {
        width: { xs: "80%", md: "50%" },
        margin: "1.5rem auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
    },
    input: {
        minWidth: "15rem"
    }
}
export default function VehicleSelect(props) {
    const [year, setYear] = useState("");
    const [showMake, setShowMake] = useState(false);
    const [make, setMake] = useState("");
    const [showModel, setShowModel] = useState(false);
    const [model, setModel] = useState("");
    const [validVehicle, setValidVehicle] = useState(false);
    const [vehicleComplete, setVehicleComplete] = useState(false);
    const [completeAnswer, setCompleteAnswer] = useState(null);
    const [submittedVehicle, setSubmittedVehicle] = useState(false);
    const [completedVehicle, setCompletedVehicle] = useState({
        year: "",
        make: "",
        model: ""
    });

    useEffect(() => {
        //loop through the answers and see if props.initialAnswer is one of them

        if (!props.initialAnswer[props.level]) return;
        if (!props.initialAnswer[props.level].year) return;

        //console.log("initial answer found")
        setTimeout(() => {
            setCompletedVehicle(props.initialAnswer[props.level])
            setSubmittedVehicle(true)
            setVehicleComplete(true)
            setYear(props.initialAnswer[props.level].year)
            setMake(props.initialAnswer[props.level].make)
            setModel(props.initialAnswer[props.level].model)
            props.setAnswer([props.initialAnswer[props.level], props.questionIndex])
        }, 250)

    }, [])
    function resetHandler() {
        setYear("")
        setMake("")
        setModel("")
        setValidVehicle(false)
        setVehicleComplete(false)
        setCompleteAnswer(null)
        setSubmittedVehicle(false)
        setCompletedVehicle({
            year: "",
            make: "",
            model: ""
        })
        props.setAnswer([null, props.questionIndex])
    }
    function submitVehicle() {
        //submit vehicle to the form
        const vehicle = {
            year: year,
            make: make,
            model: model
        }
        setCompletedVehicle(vehicle)
        props.setAnswer([vehicle, props.questionIndex])
        setSubmittedVehicle(true)
        setVehicleComplete(true)
    }
    function setYearHandler(event) {
        setYear(event.target.value);
    }
    function setMakeHandler(event) {
        setMake(event.target.value);
    }
    function setModelHandler(event) {
        setModel(event.target.value);
        console.log(event.target.value)
    }
    useEffect(() => {
        if (year && year !== "") {
            setShowMake(true)
        } else {
            setShowMake(false)
            setMake("")
        }
    }, [year])
    useEffect(() => {
        if (make && make !== "") {
            setShowModel(true)
        } else {
            setShowModel(false)
            setModel("")
        }
    }, [make])

    useEffect(() => {
        //if model is greater than 2 characters, then set vehicleComplete to true
        console.log(model)
        if (model && model.length > 1) {
            setValidVehicle(true)
        } else {
            setValidVehicle(false)
        }
    }, [model])


    return <>
        <Box
            sx={{
                ...styles.root
            }}
        >
            {!submittedVehicle ? <>
                <FormControl >
                    <InputLabel id="year-select-label">Year</InputLabel>
                    <Select
                        style={{ ...styles.input }}
                        labelId="year-select-label" id="year-select" value={year} label="Year" onChange={setYearHandler}>
                        {Array.from(Array(2024 - 1960), (e, i) => {
                            return <MenuItem value={2024 - i}>{2024 - i}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                {showMake ? <>
                    <FormControl>
                        <InputLabel id="make-select-label">Make</InputLabel>
                        <Select
                            style={{ ...styles.input }}
                            labelId="make-select-label" id="make-select" value={make} label="Make" onChange={setMakeHandler}>
                            <MenuItem value="ACURA">ACURA</MenuItem>
                            <MenuItem value="ASTON MARTIN">ASTON MARTIN</MenuItem>
                            <MenuItem value="AUDI">AUDI</MenuItem>
                            <MenuItem value="BENTLEY">BENTLEY</MenuItem>
                            <MenuItem value="BMW">BMW</MenuItem>
                            <MenuItem value="BUICK">BUICK</MenuItem>
                            <MenuItem value="CADILLAC">CADILLAC</MenuItem>
                            <MenuItem value="CHEVROLET">CHEVROLET</MenuItem>
                            <MenuItem value="CHRYSLER">CHRYSLER</MenuItem>
                            <MenuItem value="DODGE">DODGE</MenuItem>
                            <MenuItem value="FERRARI">FERRARI</MenuItem>
                            <MenuItem value="FORD">FORD</MenuItem>
                            <MenuItem value="GMC">GMC</MenuItem>
                            <MenuItem value="HONDA">HONDA</MenuItem>
                            <MenuItem value="HUMMER">HUMMER</MenuItem>
                            <MenuItem value="HYUNDAI">HYUNDAI</MenuItem>
                            <MenuItem value="INFINITI">INFINITI</MenuItem>
                            <MenuItem value="ISUZU">ISUZU</MenuItem>
                            <MenuItem value="JAGUAR">JAGUAR</MenuItem>
                            <MenuItem value="JEEP">JEEP</MenuItem>
                            <MenuItem value="KIA">KIA</MenuItem>
                            <MenuItem value="LAMBORGHINI">LAMBORGHINI</MenuItem>
                            <MenuItem value="LAND ROVER">LAND ROVER</MenuItem>
                            <MenuItem value="LEXUS">LEXUS</MenuItem>
                            <MenuItem value="LINCOLN">LINCOLN</MenuItem>
                            <MenuItem value="LOTUS">LOTUS</MenuItem>
                            <MenuItem value="MASERATI">MASERATI</MenuItem>
                            <MenuItem value="MAYBACH">MAYBACH</MenuItem>
                            <MenuItem value="MAZDA">MAZDA</MenuItem>
                            <MenuItem value="MERCEDES-BENZ">MERCEDES-BENZ</MenuItem>
                            <MenuItem value="MERCURY">MERCURY</MenuItem>
                            <MenuItem value="MINI">MINI</MenuItem>
                            <MenuItem value="MITSUBISHI">MITSUBISHI</MenuItem>
                            <MenuItem value="NISSAN">NISSAN</MenuItem>
                            <MenuItem value="PONTIAC">PONTIAC</MenuItem>
                            <MenuItem value="PORSCHE">PORSCHE</MenuItem>
                            <MenuItem value="ROLLS-ROYCE">ROLLS-ROYCE</MenuItem>
                            <MenuItem value="SAAB">SAAB</MenuItem>
                            <MenuItem value="SATURN">SATURN</MenuItem>
                            <MenuItem value="SUBARU">SUBARU</MenuItem>
                            <MenuItem value="SUZUKI">SUZUKI</MenuItem>
                            <MenuItem value="TESLA">Tesla</MenuItem>
                            <MenuItem value="TOYOTA">TOYOTA</MenuItem>
                            <MenuItem value="VOLKSWAGEN">VOLKSWAGEN</MenuItem>
                            <MenuItem value="VOLVO">VOLVO</MenuItem>
                        </Select>
                    </FormControl>
                </>
                    : null}
                {showModel ? <>

                    <FormControl>
                        <InputLabel id="model-select-label">Model</InputLabel>
                        <Input style={{ ...styles.input }} value={model} onChange={setModelHandler} />
                    </FormControl>
                </> : null
                }

                {validVehicle ? <>
                    <Button onClick={submitVehicle}> Save</Button>
                </> : null}
            </> : <>
                <Box
                    sx={{ display: "flex", gap: "1rem" }}
                >
                    <Typography variant="subtitle1">
                        {completedVehicle?.year} {completedVehicle?.make} {completedVehicle?.model}
                    </Typography>
                    <EditIcon onClick={() => {
                        setSubmittedVehicle(false)
                        setVehicleComplete(false)
                    }} />
                    {props.level > 0 && <DeleteIcon onClick={() => {
                        resetHandler()
                    }} />}
                </Box>
            </>}
        </Box >
    </>
}