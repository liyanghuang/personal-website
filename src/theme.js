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
      primary: '#a0a0a0',
      secondary: '#808080',
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
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: {
          color: '#fab629',
          transition: '0.3s',
          textDecoration: 'none',
        },
        'a:hover': {
          color: '#5791e7',
        }
      },
    },
  },
});

export default theme;
