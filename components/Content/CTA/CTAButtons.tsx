import { Box, Button } from "@mui/material"

export default function (props) {
    const align = props.align || "flex-start"
    return <>
        <Box sx={{ display: "flex", justifyContent: { xs: "center", md: align }, gap: "2.5rem" }}>
            {props.CTAButtons.map((button: any, index: number) => {
                return <Button key={index} color={button.color || "primary"}
                    variant={button.variant || "outlined"} href={button.link || '/'}
                >{button.text}</Button>
            })}
        </Box>
    </>
}