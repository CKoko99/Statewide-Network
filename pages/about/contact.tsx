import JotForm from "../../components/Content/Forms/JotForm";
import html2canvas from 'html2canvas';
import React, { useRef } from 'react';
import JotFormEmbed from 'react-jotform-embed';
import Hero from "../../components/Content/Banners/Hero";
import HeroImg from "../../public/assets/images/about/contact.png";
import Banner from "../../components/Content/Hero/Banner";
const heroContent = {
    title: "We are here to help",
    subtitle: "Whether you have a question about our services, need assistance with your policy, or just want to say hi, we would love to hear from you.",
    image: {
        src: HeroImg,
        alt: "City"
    },
    align: "left",
}
export default function Contact() {

    return (<>
        <Banner {...heroContent} />
        <JotFormEmbed src="https://form.jotform.com/91366903958167" />
    </>)
}