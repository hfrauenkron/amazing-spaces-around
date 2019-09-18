import React from "react";
import Filter from "./Filter";
import { filters } from "../api/filters";

function FilterList({ selectedFilters, onFilterChange }) {
  //function handleFilterChange(event);
  return (
    <section className="filterList">
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
    </section>
  );
}

export default FilterList;
