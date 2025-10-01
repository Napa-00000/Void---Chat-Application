import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: "#f0f7f4",
      100: "#d9ede3",
      200: "#b8dcc9",
      300: "#8dc9ac",
      400: "#5fb490",
      500: "#3d9970",
      600: "#2d7a5a",
      700: "#1f5c44",
      800: "#14412f",
      900: "#0a271c",
    },
  },
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#f5f9f7",
        color: "#2d3748",
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "brand",
      },
      variants: {
        solid: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
          },
        },
      },
    },
    Input: {
      defaultProps: {
        focusBorderColor: "brand.400",
      },
    },
  },
});

export default theme;
