import "./App.css";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import { gobalStyles } from "./Constants";
import { HomePage } from "./HomePage";
import { Apple } from "./Apple";
import Logo from "./logo.svg";
import { ThemeProvider } from "@emotion/react";
import { themes } from "./styles";
function App() {
  return (
    <ThemeProvider theme={themes} >
      <BrowserRouter>
        <div style={{ ...gobalStyles.navbar }}>
          <img src={Logo} style={{width:100}} alt="logo" />
            <Link style={{paddingTop:"20px"}}  to="/">HomePage</Link>
            <Link style={{paddingTop:"20px"}} to="/apple">Apple</Link>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apple" element={<Apple />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
