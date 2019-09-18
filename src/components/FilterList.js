import React from "react";
import Filter from "./Filter";
import { filters } from "../api/filters";
import styled from "styled-components";

const FilterSection = styled.section`
  background: beige;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
`;

function FilterList({ selectedFilters, onFilterChange }) {
  //function handleFilterChange(event);
  return (
    <FilterSection>
      {filters.map(filter => {
        return (
          <Filter
            key={filter.name}
            filter={filter}
            onChange={onFilterChange}
            selectedValue={selectedFilters[filter.name]}
          />
        );
      })}
    </FilterSection>
  );
}

export default FilterList;
