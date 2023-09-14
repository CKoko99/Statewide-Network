import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import localFont from '@next/font/local'
import Gustavo from '../fonts/Gustavo/GustavoFont'
import Poppins from '../fonts/Poppins/PoppinsFont'
const myFont = localFont({ src: '../fonts/Gustavo/Gustavo-Bold.ttf' })


// do a for loop of Gustavo and push all font.style to an array
// then pass that array to the theme
const GustavoFonts = []
for (let i = 0; i < Gustavo.length; i++) {
  GustavoFonts.push(Gustavo[i].style.fontFamily)
}
const PoppinFonts = []
for (let i = 0; i < Poppins.length; i++) {
  PoppinFonts.push(Poppins[i].style.fontFamily)
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

export default theme;
