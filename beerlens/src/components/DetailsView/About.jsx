import React from "react";
import "./styles/About.css";
import { beerData } from "../../beerData";

const About = () => {
  return (
    <div className="about-grid-container">
      <h1>About the Beer</h1>
      <div className="about-grid-item">
        <h2>Ingredients</h2>
        <p>{beerData.about.ingredients}</p>
      </div>
      <div className="about-grid-item">
        <h2>Brewery</h2>
        <p>{beerData.about.brewery}</p>
      </div>
    </div>
  );
};

export default About;
