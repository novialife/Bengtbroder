import React from "react";
import "./styles/Pairings.css";

const Pairings = () => {
  return (
    <div>
      <div className="pairings-grid-container">
        <h1 style={{ textAlign: "left" }}>Pairings</h1>

        <div className="pairings-grid-item">
          <h2>Food that go well with this beer</h2>
          <ul>
            <li>Chocolate Mousse</li>
            <li>Chocolate Mousse</li>
            <li>Chocolate Mousse</li>
          </ul>
        </div>
        <div className="pairings-grid-item">
          <h2>Serving tips</h2>
          <p>
            Served at 6-8°C as a companion drink, or with not too sweet fruit
            and berry desserts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pairings;
