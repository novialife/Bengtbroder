import React from "react";
import "./styles/TasteDescription.css";

const TasteDescription = () => {
  return (
    <div>
      <h1 style={{ textAlign: "left" }}>Taste Description</h1>
      <div className="grid-container">
        <div className="grid-item">
          <h2>Flavour</h2>
          <p>
            Malty taste with hints of rye bread, crackling, orange peel, spices
            and dried fruit.
          </p>
        </div>
        <div className="grid-item">
          <h2>Scent</h2>
          <p>
            Malty aroma with hints of rye bread, crackers, orange marmalade,
            spices and dried fruit.
          </p>
        </div>
        <div className="grid-item">
          <h2>Colour</h2>
          <p>Brownish yellow color.</p>
        </div>
      </div>
    </div>
  );
};

export default TasteDescription;
