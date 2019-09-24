import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import New from "./Pages/New";
import defaultTheme from "./themes/default.js";
import darkTheme from "./themes/dark.js";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.main};
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <GlobalStyles />
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/new" exact component={New} />
        </Router>
      </Container>
    </ThemeProvider>
  );
}
export default App;
