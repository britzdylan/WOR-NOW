import { createMuiTheme,ThemeProvider  } from '@material-ui/core/styles';


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
    grey: {
      main: '#E8E8E8'
    },
  },
  typography: {
    h1: {
       fontFamily: 'oswald',
        fontSize: "55px",
        fontWeight: '700',
        color: "#0a0a0a"
    },
    h2: {
      fontFamily: 'oswald',
        fontSize: "50.5px",
        fontWeight: '500',
        color: "#6b6b6b",
    },
    h3: {
      fontSize: "37.9px",
      fontFamily: 'oswald',
      fontWeight: '300',
      color: "#0a0a0a"
    },
    h4: {
      fontFamily: 'oswald',
        fontSize: "28.43px",
        fontWeight: '400',
        color: "#6b6b6b",
    },
    h5: {
      fontFamily: 'oswald',
        fontSize: "21.33px",
        fontWeight: '400',
        color: "#0a0a0a"
    },
    h6: {
      fontFamily: 'oswald',
      fontSize: "21.33px",
      fontWeight: '300',
      color: "#6b6b6b",
    },
    subtitle1: {
      fontFamily: 'roboto',
      fontSize: "16px",
      fontWeight: '700',
      color: "#0a0a0a"
    },
    subtitle2: {
      fontFamily: 'roboto',
      fontSize: "14px",
      fontWeight: '300',
      color: "#6b6b6b",
    },
    body1: {
      fontFamily: 'roboto',
      fontSize: "16px",
      fontWeight: '400',
      color: "#0a0a0a"
    },
    body2: {
      fontFamily: 'roboto',
      fontSize: "14px",
      fontWeight: '500',
      color: "#6b6b6b",
    },
    button: {
      fontFamily: 'roboto',
      fontSize: "14px",
      fontWeight: '600',
      color: "#0a0a0a"
    },
    caption: {
      fontFamily: 'roboto',
      fontSize: "12px",
      fontWeight: '400',
      color: "#0a0a0a"
    },
    overline: {
      fontFamily: 'roboto',
      fontSize: "10px",
      fontWeight: '400',
      color: "#6b6b6b",
    },
    fontFamily: [
      'Oswald',
      'Roboto'
    ].join(','),
  }
  });

export default theme;