import React from "react";
import Place from "./Place";
import { places } from "../api/places.js";

function PlaceList() {
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
