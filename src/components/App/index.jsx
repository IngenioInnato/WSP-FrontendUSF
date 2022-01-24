import React from "react";
import { hot } from "react-hot-loader/root";
// import { ThemeProvider, createTheme } from '@mui/material/styles';

// let theme = createTheme({
//   palette: {
//     primary: {
//       main: '#F07000',
//     },
//     secondary: {
//       main: '#606060',
//     },
//   },
// });

// theme = createTheme(theme, {
//   palette: {
//     info: {
//       main: theme.palette.secondary.main,
//     },
//   },
// });

// const App = () => <ThemeProvider theme={theme}><Button variant="contained">Contained</Button></ThemeProvider>;
const App = () => <h1>Hello World</h1>

export default hot(App);