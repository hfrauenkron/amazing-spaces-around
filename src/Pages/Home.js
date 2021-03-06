import React from "react";
import FilterList from "../components/FilterList";
import PlaceList from "../components/PlaceList";
import Title from "../components/Title";
import styled from "styled-components";

const AppDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 90vh;
  height: 100vh;
`;

// const Main = styled.main`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
// `;

export default function Home({ history, location, toggleTheme }) {
  const params = new URLSearchParams(location.search);
  const [filters, setFilters] = React.useState({
    category: params.get("category") || "",
    distance: params.get("distance") || "",
    price: params.get("price") || ""
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
    console.log(newFilters);
    history.push(
      // (`${location.pathname}?${params.toString()}`);
      `/?category=${newFilters.category}&?price=${newFilters.price}&?distance=${newFilters.distance}`
    );
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
          <Title toggleTheme={toggleTheme} />
          <main>
            <FilterList
              selectedFilters={filters}
              onFilterChange={handleFilterChange}
            />
            <PlaceList selectedFilters={filters} />
          </main>
        </WrapperDiv>
      </AppDiv>
    </>
  );
}
