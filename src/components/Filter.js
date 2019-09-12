import React from "react";
import { filters } from "../api/filters";

function Filter(props) {
  return (
    <select className="filter">
      {props.filter.options.map(option => {
        return <option key={option}>{option}</option>;
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
