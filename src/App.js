import React from "react";
import "./App.css";
import Header from "./components/Header";
import FilterList from "./components/FilterList";
import PlaceList from "./components/PlaceList";

function App() {
  const [filters, setFilters] = React.useState([]);

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
    <div className="app">
      <div className="wrapper">
        <Header />
        <main className="main">
          <FilterList
            selectedFilters={filters}
            onFilterChange={handleFilterChange}
          />
          <PlaceList selectedFilters={filters} />
        </main>
      </div>
    </div>
  );
}

export default App;

//           <FilterList onFilterChange={handleFilterChange} />
