import React from "react";
import Place from "./Place";
import { places } from "../api/places.js";
import styled from "styled-components";

const PlaceListSection = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  flex-flow: wrap;
  /* border: 5px solid rgb(216, 195, 176); */
  background-color: ${props => props.theme.card};
  border-radius: 10px;
  overflow: scroll;
`;

function PlaceList({ selectedFilters }) {
  console.log(selectedFilters);
  const filteredPlaces = places.filter(place => {
    let keepPlace = true;
    if (selectedFilters.distance) {
      switch (selectedFilters.distance) {
        case "< 5min":
          keepPlace = place.distance <= 5;
          break;
        case "< 10min":
          keepPlace = place.distance <= 10;
          break;
        case "< 20min":
          keepPlace = place.distance <= 20;
          break;
        default:
          break;
      }
    }
    if (keepPlace && selectedFilters.price) {
      keepPlace = place.price === selectedFilters.price.length;
    }
    if (keepPlace && selectedFilters.category) {
      keepPlace = place.category.includes(selectedFilters.category);
    }
    return keepPlace;
  });

  return (
    <PlaceListSection>
      {filteredPlaces.map((place, index) => {
        return <Place key={place.title} odd={index % 2} place={place} />;
      })}
    </PlaceListSection>
  );
}

export default PlaceList;

/* const newArray = places.map(place => {
  return places.title;
})
*/
// const isFiltered = filterByKeys.find(filterKey => {
//     if (filterKey === "distace") {
//       return place.distance < props.filters.distance;
//     }
//     return isFiltered;
//   });

// if (!selectedFilters) {
//   return true;
// }
// if (selectedFilters.name === "distance") {
//   let numbers = selectedFilters.value.match(/\d+/g).map(Number);
//   return place.distance <= numbers;
// }
// if (selectedFilters.name === "price") {
//   return place.price > selectedFilters.value.length;
// }
// if (selectedFilters.name === "category") {
//   return place.category === selectedFilters.value;
// }
// return true;

// const filteredPlaces = places.filter(place => {
//   if (selectedFilters.distance) {
//     return (place.distance = selectedFilters.distance);
//   }
//   if (selectedFilters.price) {
//     return place.price >= selectedFilters.price.length;
//   }
//   if (selectedFilters.category) {
//     return place.category.includes(selectedFilters.category);
//   }
