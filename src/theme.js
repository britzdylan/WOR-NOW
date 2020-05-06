import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D52626',
    },
    secondary: {
      main: '#00C2CA',
    },
    error: {
      main: '#FF0000',
    },
    background: {
      default: '#fffff',
    },
  },
  typography: {
    h1: {
        fontSize: "67.34px",
        fontWeight: '700',
    },
    h2: {
        fontSize: "50.5px",
        fontWeight: '500',
    },
    h3: {
      fontSize: "37.9px",
      fontWeight: '300',
    },
    h4: {
        fontSize: "28.43px",
        fontWeight: '400',
    },
    h5: {
        fontSize: "21.33px",
        fontWeight: '400',
    },
    h6: {
      fontSize: "21.33px",
      fontWeight: '300',
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: '700',
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: '300',
    },
    body1: {
      fontSize: "16px",
      fontWeight: '400',
    },
    body2: {
      fontSize: "14px",
      fontWeight: '500',
    },
    button: {
      fontSize: "14px",
      fontWeight: '600',
    },
    caption: {
      fontSize: "12px",
      fontWeight: '400',
    },
    overline: {
      fontSize: "10px",
      fontWeight: '400',
    },
    fontFamily: [
      'Oswald'
    ].join(','),
  },
 });

export default theme;