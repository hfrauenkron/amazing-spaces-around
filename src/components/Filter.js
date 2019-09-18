import React from "react";
// import { filters } from "../api/filters";

function Filter({ filter, onChange, selectedValue }) {
  // const [filter, setFilter] = React.useState(null);

  // function handleChange(event) {
  //   props.onChange(props.filter.name, event.target.value);
  // }
  return (
    <select
      className="filter"
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
    </select>
  );
}

export default Filter;

// <i class="fa fa-caret-down"></i>
/*
      <optgroup label={props.filter.name}>
        <option>
                </option>
      </optgroup>

            <option disabled value={props.filter.name}></option>
      */
