import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import New from "./Pages/New";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/new" exact component={New} />
      </Router>
    </Container>
  );
}
export default App;

//           <FilterList onFilterChange={handleFilterChange} />
