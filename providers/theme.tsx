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
    }
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
