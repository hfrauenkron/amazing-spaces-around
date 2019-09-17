import React from "react";
import Place from "./Place";
import { places } from "../api/places.js";

// if (props.selectedFilter.title === "Distance") {
//   let numbers = props.selectedFilter.value.match(/\d+/g).map(Number);
//   return restaurant.distance <= numbers;

function PlaceList({ selectedFilter }) {
  console.log(selectedFilter);
  // const filterByKeys = Object.keys(props.filter);
  const filteredPlaces = places.filter(place => {
    if (!selectedFilter) {
      return true;
    }
    if (selectedFilter.name === "distance") {
      let numbers = selectedFilter.value.match(/\d+/g).map(Number);
      return place.distance <= numbers;
      // switch (selectedFilter.value) {
      //   case "< 10min":
      //     return place.distance <= 10;
      //   case "< 20min":
      //     return place.distance > 10;
      //   default:
      //     break;
      // }
      // return place.distance < 5;
    }
    if (selectedFilter.name === "price") {
      return place.price > selectedFilter.value.length;
      // switch (selectedFilter.value) {
      //   case "$":
      //     return place.price === 1;
      //   case "$$":
      //     return place.price === 2;
      //   case "free":
      //     return place.price === 0;
      //   default:
      //     break;
      // }
      // return place.price.includes(selectedFilter.value);
    }
    if (selectedFilter.name === "category") {
      return place.category === selectedFilter.value;
      //   switch (selectedFilter.value) {
      //     case "#museum":
      //       return place.category === "#museum";
      //     case "#garden":
      //       return place.category === "#garden";
      //     case "#architecture":
      //       return place.category === "#architecture";
      //     default:
      //       break;
      //   }
      //   return place.category.includes(selectedFilter.value);
    }
    return true;
  });

  // const isFiltered = filterByKeys.find(filterKey => {
  //     if (filterKey === "distace") {
  //       return place.distance < props.filters.distance;
  //     }
  //     return isFiltered;
  //   });

  return (
    <section className="placeList">
      {filteredPlaces.map(place => {
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
