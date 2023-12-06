
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import GustavoFont from '../fonts/Gustavo/GustavoFont'
import PoppinsFont from '../fonts/Poppins/PoppinsFont'


// do a for loop of Gustavo and push all font.style to an array
// then pass that array to the theme
const GustavoFonts = [GustavoFont[0].style.fontFamily]

const PoppinFonts = [PoppinsFont[0].style.fontFamily]

const CustomFonts = {
  Gustavo: GustavoFonts[0],
  Poppin: PoppinFonts[0]
}

let theme = createTheme({
  palette: {
    primary: {
      main: '#223289' //'#BF2C38',
    },

    secondary: {
      //main: '#A05851'
      main: "#EDEDED", // Yellow color
    }

  },
  typography: {
    fontFamily: [GustavoFonts.join(','), PoppinFonts.join(',')].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: [PoppinFonts.join(',')].join(','),
      fontSize: '2.2rem',
    },
    h3: {
      fontFamily: [PoppinFonts.join(',')].join(','),
      fontSize: '2rem',
    },
    h4: {
      fontFamily: [PoppinFonts.join(',')].join(','),
      fontSize: '1.8rem',
    },
    h5: {
      fontFamily: [PoppinFonts.join(',')].join(','),
    },
    h6: {
      fontFamily: [PoppinFonts.join(',')].join(','),
    },
    subtitle1: {
      fontFamily: [PoppinFonts.join(',')].join(','),
    },
    body1: {
      fontSize: '1.2rem',
      fontFamily: [PoppinFonts.join(',')].join(','),
    }
  },

  components: {
    MuiButton: {
      styleOverrides: {
        outlinedSecondary: {
          color: '#474747',
          borderColor: '#474747',
          '&:hover': {
            borderColor: 'black',
            color: 'black',
            //fontWeight: 'bold',
          },
        },
        containedSecondary: {
          '&:hover': {

            color: 'black',
          },
        },
      },
    },
  },

});



export type TypographyVariant =
  | "button"
  | "caption"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "inherit"
  | "overline"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
export { CustomFonts }
export default theme;
