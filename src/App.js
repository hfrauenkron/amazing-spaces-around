import React from "react";
import "./App.css";
import Header from "./components/Header";
import FilterList from "./components/FilterList";
import PlaceList from "./components/PlaceList";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <FilterList />
        <PlaceList />
      </main>
    </div>
  );
}

export default App;
