import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { CustomFonts } from "../../../providers/theme";
import QuotePage from "./QuotePage";


export default function QuoteForm(props) {
    const [pageIndex, setPageIndex] = useState(0);

    return (
        <>
            <Box sx={{ minHeight: "60vh", padding: "1rem" }}>

                <QuotePage {...props.quotePages[pageIndex]} />
            </Box>
        </>
    )
}