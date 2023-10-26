import React from "react";
import "./styles/Pairings.css";
import { beerData } from "../../beerData";

const Pairings = () => {
  return (
    <div id="pairings">
      <div className="pairings-grid-container">
        <h1 style={{ textAlign: "left" }}>Pairings</h1>

        <div className="pairings-grid-item">
          <h2>Food that go well with this beer</h2>
          <ul>
            {beerData.pairings.food.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="pairings-grid-item">
          <h2>Serving tips</h2>
          <p>{beerData.pairings.servingTips}</p>
        </div>
      </div>
    </div>
  );
};

export default Pairings;
