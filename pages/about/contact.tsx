import JotForm from "../../components/Content/Forms/JotForm";
import html2canvas from 'html2canvas';
import React, { useRef } from 'react';
import JotFormEmbed from 'react-jotform-embed';
export default function Contact() {

    return (<>
        <JotFormEmbed src="https://form.jotform.com/91366903958167" />
    </>)
}