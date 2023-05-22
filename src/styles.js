import { createTheme, ThemeProvider } from '@mui/material/styles';
 
export const themes = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundColor: "Red",
              color: "#fff",
            }),
        }),
      },
    },
  },
});
