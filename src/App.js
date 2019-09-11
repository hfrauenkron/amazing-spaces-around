import React from "react";
import "./App.css";
import Header from "./components/Header";
import FilterList from "./components/FilterList";
import PlaceList from "./components/PlaceList";

function App() {
  return (
    <body className="app">
      <div className="wrapper">
        <Header />
        <main className="main">
          <FilterList />
          <PlaceList />
        </main>
      </div>
    </body>
  );
}

export default App;
