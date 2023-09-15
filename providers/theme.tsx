import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import localFont from '@next/font/local'
import GustavoFont from '../fonts/Gustavo/GustavoFont'
import PoppinsFont from '../fonts/Poppins/PoppinsFont'
const myFont = localFont({ src: '../fonts/Gustavo/Gustavo-Bold.ttf' })


// do a for loop of Gustavo and push all font.style to an array
// then pass that array to the theme
const GustavoFonts = []
for (let i = 0; i < GustavoFont.length; i++) {
  console.log(GustavoFont[i])
  GustavoFonts.push(GustavoFont[i].style.fontFamily)
}
const PoppinFonts = []
for (let i = 0; i < PoppinsFont.length; i++) {
  console.log(PoppinsFont[i])
  PoppinFonts.push(PoppinsFont[i].style.fontFamily)
}
console.log(GustavoFonts)
const CustomFonts = {
  Gustavo: GustavoFonts[0],
  Poppin: PoppinFonts[0]
}

let theme = createTheme({
  palette: {
    primary: {
      main: '#BF2C38',
    },

    secondary: {
      //main: '#A05851'
      main: "#EDEDED", // Yellow color
    }

  },
  typography: {
    fontFamily: [GustavoFonts.join(','), PoppinFonts.join(',')].join(','),
    h1: {
      fontSize: '3.1rem',
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: [PoppinFonts.join(',')].join(','),
    },
    h3: {
      fontFamily: [PoppinFonts.join(',')].join(','),
    },
    h4: {
      fontFamily: [PoppinFonts.join(',')].join(','),
    },
    subtitle1: {
      fontFamily: [PoppinFonts.join(',')].join(','),
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        outlinedSecondary: {
          color: 'black',
          borderColor: 'black',
          '&:hover': {
            borderColor: 'black',
            color: 'black',
            fontWeight: 'bold',
          },
        },
        containedSecondary: {
          '&:hover': {

            fontWeight: 'bold',
          },
        },
      },
    },
  },

});
theme = responsiveFontSizes(theme);
export { CustomFonts }
export default theme;
