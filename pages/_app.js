import "antd/dist/antd.min.css";
import { defaultTheme, ThemeProvider } from "evergreen-ui";
import "../styles/globals.css";

const theme = {
  ...defaultTheme,
  components: {
    ...defaultTheme.components,
    Link: {
      baseStyle: {
        color: "#FFBD59",
        textDecoration: "none",
      },
      appearances: {
        normal: {
          color: "#000000",
          textDecoration: "none",
        },
      },
    },
    Button: {
      baseStyle: {
        color: "#000000",
        paddingX: 25,
        paddingY: 8,
        borderRadius: 3,
        border: "1px solid transparent",
        backgroundColor: "transparent",
        minWidth: 150,
        transition: "all 0.3s ease 0s",
        _hover: {
          backgroundColor: "transparent",
          border: "1px solid #FFBD59",
        },
        _active: {
          backgroundColor: "transparent",
        },
        _focus: {
          boxShadow: "0 0 0 2px #FFBD59",
        },
      },
      appearances: {
        primary: {
          color: "black",
          fontWeight: "bold",
          paddingX: 25,
          paddingY: 8,
          borderRadius: 3,
          borderColor: "#FFBD59",
          backgroundColor: "#FFBD59",
          minWidth: 150,
          boxShadow: "0px 10px 26px 2px rgba(0,0,0,.3)",
          _hover: {
            backgroundColor: "#FFBD59",
            borderColor: "#FFBD59",
          },
          _active: {
            backgroundColor: "#FFBD59",
          },
          _focus: {
            boxShadow: "0 0 0 2px tint2",
          },
        },
      },
    },
  },
};
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider value={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
