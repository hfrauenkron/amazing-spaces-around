import React from "react";
import styled from "styled-components";

const PlaceDiv = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: row;
  background: ${props =>
    props.odd ? "rgb(218, 204, 233)" : "rgb(240, 232, 248)"};
  height: 250px;
  width: 420px;
  margin: 10px;
  border: 5px solid rgb(216, 195, 176);
  &:hover {
    background: peachpuff;
  }
`;

const Img = styled.img`
  z-index: 0;
  position: relative;
  display: flex;
  justify-content: center;
  background: white;
  height: 100%;
  max-width: 50%;
  padding: 5px;
  object-fit: cover;
  object-position: top center;
`;

const PlaceTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  width: 50%;
  justify-content: flex-start;
  padding: 5px;
`;

const PlaceFiltersDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

function Place(props) {
  return (
    <section>
      <PlaceDiv odd={props.odd}>
        <Img alt="ImageOfPlace" src={props.place.imgSrc}></Img>
        <PlaceTextDiv>
          <h3>{props.place.title}</h3>
          <p>{props.place.description}</p>
          <PlaceFiltersDiv>
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
          </PlaceFiltersDiv>
        </PlaceTextDiv>
      </PlaceDiv>
    </section>
  );
}

export default Place;
