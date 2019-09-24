import React from "react";
import styled from "styled-components";
// import { filters } from "../api/filters";

const SelectFilter = styled.select`
  display: flex;
  justify-content: space-between;
  height: 30px;
  width: 150px;
  margin: 10px;
  border: ${props =>
    props.value
      ? "5px solid rgb(253, 249, 13)"
      : "5px solid rgb(224, 224, 183)"};
`;

function Filter({ filter, onChange, selectedValue }) {
  return (
    <SelectFilter
      onChange={event => onChange(filter.name, event.target.value)}
      value={selectedValue}
    >
      <option value="">Select {filter.name}</option>
      {filter.options.map(option => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </SelectFilter>
  );
}

export default Filter;
