import { Roboto } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { purple, red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    /** Dark/Light mode config */
    mode: "dark",

    /** Palette default colors config */
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#11cb5f",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
