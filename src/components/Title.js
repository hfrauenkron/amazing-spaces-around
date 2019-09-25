import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DarkmodeToggleButton from "./DarkmodeToggleButton";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: ${props => props.theme.color};
  z-index: 10;
  position: relative;
  background: ${props => props.theme.background};
  border-radius: 10px;
  height: 80px;
  width: 100%;
  /* border: 5px solid rgb(Headline, 204, 233); */
  /* box-shadow: 0 2px 5px 0 rgb(165, 165, 167);
  text-shadow: 2px 2px 2px white; */
`;

const Headline = styled.h2`
  font-style: italic;
`;

const NavUl = styled.ul`
  list-style-type: none;
`;

function Title({ toggleTheme }) {
  return (
    <Header>
      <Headline>amazing SPACES around</Headline>
      <NavUl>
        <Link to="/new">
          <li>NEW</li>
        </Link>
      </NavUl>
      <DarkmodeToggleButton toggleTheme={toggleTheme} />
    </Header>
  );
}

export default Title;
