import QuoteForm from "../../components/Content/Forms/Quoting/QuoteForm";
import GrayStartImg from "../../public/assets/images/quotes/auto/startgray.png";
import ColorStartImg from "../../public/assets/images/quotes/auto/startcolor.png";
import GrayVehiclesImg from "../../public/assets/images/quotes/auto/vehiclesgray.png";
import ColorVehiclesImg from "../../public/assets/images/quotes/auto/vehiclescolor.png";
import GrayDriversImg from "../../public/assets/images/quotes/auto/driversgray.png";
import ColorDriversImg from "../../public/assets/images/quotes/auto/driverscolor.png";
import GrayCoverageImg from "../../public/assets/images/quotes/auto/coveragegray.png";
import ColorCoverageImg from "../../public/assets/images/quotes/auto/coveragecolor.png";
import GrayFinishImg from "../../public/assets/images/quotes/auto/finishgray.png";
import ColorFinishImg from "../../public/assets/images/quotes/auto/finishcolor.png";
const quoteForm = {
    title: "Auto Quote",
    quotePages: [
        {
            title: "Start",
            grayIcon: GrayStartImg,
            colorIcon: ColorStartImg,
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
                            subQuestion: {
                                question: "That's Awesome!",
                                type: "multipleChoice",
                                answers: [
                                    {
                                        text: "I'm looking for a better rate",

                                    },
                                    {
                                        text: "I'm looking for better coverage",
                                    },
                                    {
                                        text: "I'm looking for both",
                                        /*  subQuestion: {
                                              question: "That's Awesome part2!",
                                              type: "multipleChoice",
                                              answers: [
                                                  {
                                                      text: "I'm looking for a lil better rate",
                                                  },
                                                  {
                                                      text: "I'm looking for better coverage",
                                                  },
                                                  {
                                                      text: "I'm looking for both sub",
                                                  },
                                              ]
                                          }*/
                                    },
                                ]
                            }
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
        },
        {
            title: "Vehicles",
            grayIcon: GrayVehiclesImg,
            colorIcon: ColorVehiclesImg,
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
                    question: "Do you currently own the vehicle?",
                    type: "multipleChoice",
                    answers: [
                        {
                            text: "Yes, I own the vehicle",
                        },
                        {
                            text: "Yes, I am financing the vehicle",
                        },
                        {
                            text: "No, I am leasing the vehicle",
                        }
                    ],
                },
            ]
        },
        {
            title: "Drivers",
            grayIcon: GrayDriversImg,
            colorIcon: ColorDriversImg,
        },
        {
            title: "Coverage",
            grayIcon: GrayCoverageImg,
            colorIcon: ColorCoverageImg,
        },
        {
            title: "Finish",
            grayIcon: GrayFinishImg,
            colorIcon: ColorFinishImg,
        }
    ]
}



export default function AutoQuoteForm(props) {
    return <>
        <QuoteForm {...quoteForm} />
    </>;
}
