import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

export let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#353537",
    },
    text: {
      text1: "#393b3e",
      text2: "#544837",
    },
    heading: {
      hd1: "#77838f",
      hd2: "#2F281E",
    },
    logo: "#173a56",
  },
  typography: {
      fontFamily: 'Airbnb Cereal App'
  }
});

theme = responsiveFontSizes(theme);
