import React from "react";

function Filter() {
  return (
    <section className="filterList">
      <button className="filter">
        <span>OPEN</span>
        <i class="fa fa-caret-down"></i>
      </button>
      <button className="filter">
        <span>DISTANCE</span>
        <i class="fa fa-caret-down"></i>
      </button>
      <button className="filter">
        <span>PRICE</span>
        <i class="fa fa-caret-down"></i>
      </button>
    </section>
  );
}

export default Filter;

// <button className="filter">Filter</button>
