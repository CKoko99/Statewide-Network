import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
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
