import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    cssVarPrefix: "ghostnote",
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#6e2c27",
    },
    ghosty: {
      100: "red",
      900: "purple",
    },
  },
});

export default theme;
