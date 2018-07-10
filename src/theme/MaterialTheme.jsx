import { createMuiTheme } from "material-ui/styles";
import red from "material-ui/colors/red";
import "../App.css";

const blue = "#607d8b";
const dkGreen = "#33691e";
const ltGreen = "#b2ff59";
const mdGreen = "#339688";
const cream = "#fffffa";
const grey = "#404040";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue,
      main: blue,
      dark: blue
    },
    secondary: {
      light: dkGreen,
      main: dkGreen,
      dark: dkGreen
    },
    error: {
      light: red[300],
      main: red[500],
      dark: red[700]
    }
  },
  status: {
    blue: "#607d8b",
    dkGreen: "#33691e",
    ltGreen: "#b2ff59",
    mdGreen: "#339688",
    cream: "#fffffa",
    grey: "#404040"
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 16,
    color: grey,
    display1: {
      fontFamily: "'Marcellus SC'",
      letterSpacing: 5
    },
    display2: {
      fontFamily: "'Londrina Shadow'",
      color: ltGreen,
      letterSpacing: 5
    },
    display4: {
      fontFamily: "'Marcellus SC'",
      letterSpacing: 5
    },
    headline: {
      fontFamily: "'Marcellus SC'",
      letterSpacing: 0.7,
      fontSize: 20
    },
    title: {
      fontFamily: "'Marcellus SC'",
      letterSpacing: 5
    },
    body1: {
      letterSpacing: 0.7
    }
  },
  overrides: {
    MuiTypography: {
      colorPrimary: {
        color: grey
      },
      colorSecondary: { color: cream },
      colorTextSecondary: { color: "#000" },
      colorError: { color: dkGreen }
    }
  }
});

export default theme;
