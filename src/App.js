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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.main};
`;

export default function App() {
  const [darkmode, setDarkmode] = React.useState(false);

  function handleToggleTheme() {
    setDarkmode(!darkmode);
  }
  return (
    <ThemeProvider theme={darkmode ? darkTheme : defaultTheme}>
      <Container>
        <GlobalStyles />
        <Router>
          <Route
            path="/"
            exact
            component={props => (
              <Home toggleTheme={handleToggleTheme} {...props} />
            )}
          />
          <Route path="/new" exact component={New} />
        </Router>
      </Container>
    </ThemeProvider>
  );
}
