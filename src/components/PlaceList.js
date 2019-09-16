import React from "react";
import Place from "./Place";
import { places } from "../api/places.js";

function PlaceList(props) {
  /*const filterByKeys = Object.keys(props.filter);
  const filteredPlaces = places.filter(place => {
    const isFiltered = filterByKeys.find(filterKey => {
      if (filterKey === "distace") {
        return place.distance < props.filters.distance;
      }
      return isFiltered;
    });
  });
  */
  return (
    <section className="placeList">
      {places.map(place => {
        return <Place key={place.title} place={place} />;
      })}
    </section>
  );
}

export default PlaceList;

/* const newArray = places.map(place => {
  return places.title;
})
*/
