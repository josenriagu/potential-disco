import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "./styles/Theme";

import GlobalStyle from "./styles/GlobalStyles";
import Navbar from "./components/navbar";
import Container from "./components/container";

export default function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyle h1 />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Container />
      </>
    </ThemeProvider>
  );
}
