import React from "react";
import "./styles/TasteDescription.css";

const TasteDescription = (beerData) => {

  return (
    <div id="tasteDescription">
      <div className="description-grid-container">
        <h1 style={{ textAlign: "left" }}>Taste Description</h1>
        <div className="description-grid-item">
          <h2>Flavor</h2>
          <p>{beerData.beerData.taste_description.flavor}</p>
        </div>
        <div className="description-grid-item">
          <h2>Scent</h2>
          <p>{beerData.beerData.taste_description.scent}</p>
        </div>
        <div className="description-grid-item">
          <h2>Color</h2>
          <p>{beerData.beerData.taste_description.color}</p>
        </div>
      </div>
    </div>
  );
};

export default TasteDescription;
