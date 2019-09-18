import React from "react";
import styled from "styled-components";

const Header = styled.header`
  z-index: 1;
  position: relative;
  background: rgb(240, 232, 248);
  height: 80px;
  width: 100%;
  border: 5px solid rgb(218, 204, 233);
  box-shadow: 0 2px 5px 0 rgb(165, 165, 167);
  text-shadow: 2px 2px 2px white;
`;

function Title() {
  return (
    <Header>
      <h2>amazing SPACES around</h2>
    </Header>
  );
}

export default Title;
