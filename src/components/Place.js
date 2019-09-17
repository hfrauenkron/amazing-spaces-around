import React from "react";

function Place(props) {
  return (
    <section>
      <div className="place">
        <img
          className="image"
          alt="ImageOfPlace"
          src={props.place.imgSrc}
        ></img>
        <div className="placeText">
          <h3>{props.place.title}</h3>
          <p>{props.place.description}</p>
          <div className="placeFilters">
            <span>
              <b>Category: </b>
              {props.place.category}
            </span>
            <span>
              <b>Price: </b>
              {props.place.price}
            </span>
            <span>
              <b>Distance: </b>
              {props.place.distance}min
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Place;
