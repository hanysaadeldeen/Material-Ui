import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { ThemeProvider, createMuiTheme } from "@mui/material";
import { purple } from "@mui/material/colors";
// import { ThemeProvider, createMuiTheme } from "@emotion/react";



const Theme = createMuiTheme({
  palette: {

    secondary: purple
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  }
})
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Notes />} exact path="/" />
          <Route element={<Create />} path="/create" />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
