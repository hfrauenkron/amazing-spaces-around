import React from "react";
import Filter from "./Filter";
import { filters } from "../api/filters";

function FilterList({ selectedFilter, onFilterChange }) {
  //function handleFilterChange(event);
  return (
    <section className="filterList">
      {filters.map(filter => {
        return (
          <Filter key={filter.name} filter={filter} onChange={onFilterChange} />
        );
      })}
    </section>
  );
}

export default FilterList;
