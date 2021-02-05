import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fab629',
      dark: '#b47901',
      transparent: 'rgba(250, 180, 41, 0.1)'
    },
    secondary: {
      main: '#5791e7',
    },
    error: {
      main: red.A400,
    },
    info:{
      main: '#fa522b'
    },
    background: {
      default: '#252126',
    },
    text:{
      primary: '#FFF',
      secondary: '#c4c4c4',
    }
  },
  typography: {
    fontFamily: 'Asap',
    button: {
      fontSize: 16,
      textTransform: 'none',
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    }
  }
});

export default theme;
