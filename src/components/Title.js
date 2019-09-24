import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${props => props.theme.color};
  z-index: 1;
  position: relative;
  background: ${props => props.theme.background};
  border-radius: 10px;
  height: 80px;
  width: 100%;
  /* border: 5px solid rgb(218, 204, 233); */
  /* box-shadow: 0 2px 5px 0 rgb(165, 165, 167);
  text-shadow: 2px 2px 2px white; */
`;

const NavUl = styled.ul`
  list-style-type: none;
`;

function Title() {
  return (
    <Header>
      <h2>amazing SPACES around</h2>
      <NavUl>
        <Link to="/new">
          <li>NEW</li>
        </Link>
      </NavUl>
    </Header>
  );
}

export default Title;
