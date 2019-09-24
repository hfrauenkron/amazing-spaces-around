import React from "react";
import FilterList from "../components/FilterList";
import PlaceList from "../components/PlaceList";
import Title from "../components/Title";
import styled from "styled-components";

const AppDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 90%;
  height: 90%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default function Home() {
  const [filters, setFilters] = React.useState({
    // distance: "< 20min",
    // price: "$$"
  });

  function handleFilterChange(name, value) {
    // create a copy of filters object
    const newFilters = { ...filters };
    if (value) {
      newFilters[name] = value;
    } else {
      delete newFilters[name];
    }

    setFilters(newFilters);
  }

  /*function handleFilterChange(filterName, filterValue) {
    const newFilters = Object.assign({}, filters);
    newsFilters[filterName] = filterValue;
    // setFilter(event.target.value);
  
  }
  */
  return (
    <>
      <AppDiv>
        <WrapperDiv>
          <Title />
          <Main>
            <FilterList
              selectedFilters={filters}
              onFilterChange={handleFilterChange}
            />
            <PlaceList selectedFilters={filters} />
          </Main>
        </WrapperDiv>
      </AppDiv>
    </>
  );
}
