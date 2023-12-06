import { Box, Typography, TypographyPropsVariantOverrides, TypographyVariants } from "@mui/material";
import { CustomFonts } from "../../providers/theme";
import CTAButtons from "./CTA/CTAButtons";
import { blogText } from "functions/functions";
import { TypographyVariant } from "../../providers/theme";


type TextSectionProps = {
    title?: string;
    subtitle?: string;
    largeText?: boolean;
    alignTitle?: string;
    alignSubtitle?: string;
    titleVariant?: TypographyVariant;
    subtitleVariant?: TypographyVariant;
    noPadding?: boolean;
    CTAButtons?: {
        Buttons: {
            text: string;
            link: string;
            variant?: "contained" | "outlined" | "text";
            color?: "primary" | "secondary" | "inherit";
            size?: "small" | "medium" | "large";
            fullWidth?: boolean;
        }[];
        align?: string;
        variant?: "contained" | "outlined" | "text";
        color?: "primary" | "secondary" | "inherit";
        size?: "small" | "medium" | "large";
        fullWidth?: boolean;
    }
}
const styles = {
    root: {
        margin: "auto",
        //padding: "1rem 0",
        width: { xs: "90%", sm: "80%", md: "80%", lg: "80%" },
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    }
}
export default function TextSection(props: TextSectionProps) {
    return (<>
        <Box sx={{
            ...styles.root, padding: props.noPadding ? "0" : "1rem 0",
        }}>
            {props.title && <Typography variant={props.titleVariant ? props.titleVariant : "h2"} sx={{
                textAlign: props.alignTitle ? props.alignTitle : "center",
                fontFamily: CustomFonts.Gustavo, fontWeight: "800"
            }}>{props.title}</Typography>}
            {props.subtitle && <>

                {blogText(props.subtitle).map((item, index) => (<Typography key={index} variant={props.subtitleVariant ? props.subtitleVariant : "h5"}
                    sx={{ textAlign: props.alignSubtitle ? props.alignSubtitle : "center" }}
                    dangerouslySetInnerHTML={{ __html: item }} />))}
            </>}
            {props.CTAButtons && <CTAButtons {...props.CTAButtons} CTAButtons={props.CTAButtons.Buttons} />}
        </Box>
    </>)
}