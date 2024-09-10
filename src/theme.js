import { cyan, deepOrange, orange, teal } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  trelloCustom: {
    // var css để gọi sử dụng bên view, lần sau thay đổi chỉ cần thay đổi ở đây
    appBarHeight: "58px",
    boardBarHeight: "60px",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal, // ghi đè mặc định của nó
        secondary: deepOrange,
      },
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#bdc3c7",
            borderRadius: "8px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#00b894",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // bỏ ghi đè mặc định in hoa trên button, menu
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: "0.875rem",
          };
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          // console.log(theme) // xem các giá trị mặc định có bên trong theme
          return {
            color: theme.palette.primary.main,
            fontSize: "0.875rem",
            // . thể hiện là class
            ".MuiOutlinedInput-notchedOutline": {
              // custom outline
              borderColor: theme.palette.primary.main,
            },
            // : đi theo hover
            "&:hover": {
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.main,
              },
            },
            // space đi theo với tag
            "& fieldset": {
              borderWidth: "1px !important",
            },
          };
        },
      },
    },
  },
});

export default theme;
