import React from "react";
import "./App.css";
import Header from "./components/ExploreView/Header";
import Explore from "./components/ExploreView/Explore";
import { Route, Routes } from "react-router-dom";
import Details from "./components/DetailsView/Details";
import Reviews from "./components/DetailsView/Reviews";

function App() {
  return (
    <div className="App">
      <Header />
      <Reviews />

      <Details />
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
