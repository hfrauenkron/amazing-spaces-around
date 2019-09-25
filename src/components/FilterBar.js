import React from "react";
import styled from "styled-components";
import IconButton from "./IconButton";
import Walk from "../icons/Walk";
import Euro from "../icons/Euro";
import Food from "../icons/Food";
import PropTypes from "prop-types";
import Favorite from "../icons/Favorite";

const FilterBarContainer = styled.nav`
  display: flex;
  width: 415px;
  height: 135px;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-around;
  background-color: #fe6f61;
`;

export default function FilterBar({ selected }) {
  return (
    <FilterBarContainer>
      <IconButton active={selected === "0"}>
        <Walk />
      </IconButton>
      <IconButton active={selected === "1"}>
        <Favorite />
      </IconButton>
      <IconButton active={selected === "2"}>
        <Euro />
      </IconButton>
      <IconButton active={selected === "3"}>
        <Food />
      </IconButton>
    </FilterBarContainer>
  );
}

FilterBar.propTypes = {
  selected: PropTypes.string
};
