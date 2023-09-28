import { Box, Button, } from "@mui/material";
import { Typography } from "@mui/material";
import PATHCONSTANTS from '../../constants/sitemap';


import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from "next/link";
import LogoImg from '../../public/assets/images/statewide_logo.png';
import Image from "next/image";

const section2content = [

  {
    title: "About Us",
    link: PATHCONSTANTS.ABOUT.INDEX
  },
  {
    title: "Contact Us",
    link: PATHCONSTANTS.ABOUT.CONTACT
  },
  {
    title: "Careers",
    link: PATHCONSTANTS.ABOUT.CAREERS
  }
]
const section3content = {
  title: "Statewide Insurance Products",
  links: [
    { text: "Auto Insurance", link: PATHCONSTANTS.PRODUCTS.AUTO.INDEX },
    { text: "Motorcycle Insurance", link: PATHCONSTANTS.PRODUCTS.MOTORCYCLE.INDEX },
    { text: "Home Insurance", link: PATHCONSTANTS.PRODUCTS.HOME.INDEX },
    { text: "Renters Insurance", link: PATHCONSTANTS.PRODUCTS.RENTERS.INDEX },
  ]
}

const classes = {
  root: {
    backgroundColor: "secondary.main",

    padding: "1rem",
    textAlign: "center",
    fontSize: "1.5rem",
    "& a": { color: "black" },
  },
  footer: {
    display: "flex",
    width: {
      xs: "95%", sm: "95%", md: "90%", lg: "90%",
    },
    margin: "auto",
    flexDirection: "column"
  },
  section1: {
    display: "flex", justifyContent: "space-between"
    , flexDirection: { xs: "column", sm: "row" },
    alignItems: "center",

  },
  section2: {
    display: "flex", flexDirection: "row",
    flexWrap: "wrap",
  },
  logoImg: {
    maxWidth: '16rem', // Set the maximum width for the image
    minHeight: '5rem',   // Automatically adjust height to maintain aspect ratio
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    marginTop: "-.5rem"
  },
  section1content: {
    textAlign: { xs: "center", sm: "right" },
  },
  socialIcon: {
    fontSize: "2.5rem",
  },
  link: {
    cursor: "pointer",
    fontWeight: "600",
    marginRight: ".3rem",
    whiteSpace: "nowrap",
    fontSize: "1.3rem",
  },
  linkbar: {
    fontWeight: "600",
    marginRight: ".3rem",
    whiteSpace: "nowrap",
    fontSize: "1.3rem",
  },
  section3: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  section3content: {
    display: "flex",
    flexWrap: "wrap",
    gap: ".5rem",
  },
  copyright: {
    marginTop: "1rem",
  }
}

export default function Footer() {
  return (
    <Box sx={{ ...classes.root }}
    >
      <Box sx={{
        ...classes.footer
      }}>
        <Box sx={{ ...classes.section1 }}>
          <Box sx={{ ...classes.logoImg }}>
            <Image src={LogoImg} alt="Ai United Insurance Logo" />
          </Box>
          <Box
            sx={{ ...classes.section1content }}
          >
            <Button
              href={PATHCONSTANTS.PHONE}
              sx={{ fontSize: "1.3rem" }}
            >
              {`(555)-555-5555`}
            </Button>
            <Box
            >
              <Link
                href="https://www.linkedin.com/company/ai-united-insurance"
                target="_blank" rel="noopener noreferrer"
              >
                <LinkedInIcon
                  sx={{ ...classes.socialIcon }}
                />
              </Link>
              <Link href="https://twitter.com/aiunited?lang=en"
                target="_blank" rel="noopener noreferrer"
              >
                <TwitterIcon
                  sx={{ ...classes.socialIcon }}
                />
              </Link>
              <Link href="https://twitter.com/aiunited?lang=en"
                target="_blank" rel="noopener noreferrer"
              >
                <FacebookIcon
                  sx={{ ...classes.socialIcon }}
                />
              </Link>
            </Box>
          </Box>
        </Box>
        <Box sx={{ ...classes.section2 }}>
          {section2content.map((item, index) => {
            return <Box key={index} style={{ display: "flex", gap: ".3rem" }}
            >
              <Link href={item.link}>
                <Typography variant="body1" sx={{ ...classes.link }}>
                  {item.title}
                </Typography>
              </Link>
              <Typography variant="body1" sx={{ ...classes.linkbar }}>
                {index !== section2content.length - 1 && "|"}
              </Typography>
            </Box>
          })}
        </Box>
        <Box sx={{ ...classes.section3 }}>
          <Typography variant="body1">
            {section3content.title}
          </Typography>
          <Box sx={{ ...classes.section3content }}>
            {section3content.links.map((item, index) => {
              return <Box key={index} style={{ display: "flex", gap: ".3rem" }}
              >
                <Link href={item.link}>
                  <Typography variant="body1" sx={{ ...classes.link }}>
                    {item.text}
                  </Typography>
                </Link>
                <Typography variant="body1" sx={{
                  ...classes.linkbar
                }}>
                  {index !== section3content.links.length - 1 && "|"}
                </Typography>
              </Box>
            })}
          </Box>
        </Box>
        <Box sx={{ ...classes.copyright }}>
          <Typography variant="h6">Copyright © 2023 Statewide Insurance. All Rights Reserved.</Typography>
        </Box>
      </Box >
    </Box >
  )
}