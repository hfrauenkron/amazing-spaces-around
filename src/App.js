import React from "react";
import "./App.css";
import Header from "./components/Header";
import FilterList from "./components/FilterList";
import PlaceList from "./components/PlaceList";

function App() {
  function handleFilterChange(name, value) {
    console.log(name, value);
    console.log(`${name}: ${value}`);
  }

  //const [filters, setFilters] = React.useState([]);

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
          <PlaceList />
        </main>
      </div>
    </body>
  );
}

export default App;

//           <FilterList onFilterChange={handleFilterChange} />
