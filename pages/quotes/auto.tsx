import QuoteForm from "../../components/Content/Forms/QuoteForm";
const quoteForm = {
    title: "Auto Quote",
    quotePages: [
        {
            title: "Start",
            questions: [
                /* {
                     question: "Lets get started",
                     helperText: "Enter your zip code to find rates",
                     type: "input",
                     format: "attached",
                     label: "Zip Code",
                     submit: true,
                     submitText: "Unlock Savings",
                 },*/
                {
                    question: "Do you currently have auto insurance?",
                    type: "multipleChoice",
                    answers: [
                        {
                            text: "Yes",
                        },
                        {
                            text: "No",
                        },
                    ],
                },
                {
                    question: "Have you had an accident in the last 2 years?",
                    type: "multipleChoice",
                    answers: [
                        {
                            text: "Yes",
                        },
                        {
                            text: "No",
                        },
                    ],
                },
            ]
        }
    ]
}



export default function AutoQuoteForm(props) {
    return <>
        <QuoteForm {...quoteForm} />
    </>;
}
