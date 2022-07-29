import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey, pink } from "@mui/material/colors";
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "RaleWay",
      textTransform: "none", //when do we put text transfrom to none
      fontSize: 15,
    },
  },
  palette: {
    primary: {
      main: grey[700],
    },
    secondary: {
      main: pink[500],
    },
  },
  components: {
    MuiTypography: {
      sx: {
        px: 1,
      },
      variant: "subtitle2",
      textTransform: "capitalize",
    },
    MuiStack: {
      sx: {
        px: 2,
        py: 1,
      },
      spacing: 2,
      direction: "row",
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
    },
    MuiLink: {
      defaultProps: {
        sx: {
          color: (theme) => theme.palette.primary.main,
        },
        underline: "none",
      },
    },
    MuiButton: {
      styleOverrides: {},
      defaultProps: {
        size: "small",
        p: 0,
        disableRipple: true,
        variant: "text",
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
const AppThemeProvider = (props) => {
  return (
    <div>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </div>
  );
};

export default AppThemeProvider;
