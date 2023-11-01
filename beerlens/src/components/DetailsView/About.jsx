import React from "react";
import "./styles/About.css";

const About = (beerData) => {
  return (
    <div className="about-grid-container" id="about">
      <h1>About the Beer</h1>
      <div className="about-grid-item">
        <h2>Ingredients</h2>
        <p>{beerData.beerData.about.ingredients}</p>
      </div>
      <div className="about-grid-item">
        <h2>Brewery</h2>
        <p>{beerData.beerData.about.brewery}</p>
      </div>
    </div>
  );
};

export default About;
