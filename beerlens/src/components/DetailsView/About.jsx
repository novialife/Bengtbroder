import React from "react";
import "./styles/About.css";

const About = (beerData) => {
  return (
    <div id='about'>
      <div className='about-grid-container'>
        <h1 style={{ textAlign: 'left' }}>About the beer</h1>

        <div className='about-grid-item'>
          <h2>Ingredients</h2>
          <ul>
            {beerData.beerData.about.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className='about-grid-item'>
          <h2>Brewery</h2>
          <p>{beerData.beerData.about.brewery}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
