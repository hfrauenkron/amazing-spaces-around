import React from "react";
import "./App.css";
import Header from "./components/Header";
import FilterList from "./components/FilterList";
import PlaceList from "./components/PlaceList";

function App() {
  const [filters, setFilters] = React.useState([null]);

  function handleFilterChange(name, value) {
    // console.log(`${name}: ${value}`);
    setFilters({
      name: name,
      value: value
    });
  }

  /*function handleFilterChange(filterName, filterValue) {
    const newFilters = Object.assign({}, filters);
    newsFilters[filterName] = filterValue;
    // setFilter(event.target.value);
  
  }
  */
  return (
    <body className="app">
      <div className="wrapper">
        <Header />
        <main className="main">
          <FilterList onFilterChange={handleFilterChange} />
          <PlaceList selectedFilter={filters} />
        </main>
      </div>
    </body>
  );
}

export default App;

//           <FilterList onFilterChange={handleFilterChange} />
