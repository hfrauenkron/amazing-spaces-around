import React from "react";
import Filter from "./Filter";
import { filters } from "../api/filters";

function FilterList() {
  return (
    <section className="filterList">
      {filters.map(filter => {
        return <Filter key={filter.name} filter={filter} />;
      })}
    </section>
  );
}

export default FilterList;
