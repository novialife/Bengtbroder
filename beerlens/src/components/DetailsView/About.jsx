import React from "react";
import "./styles/About.css";

const About = () => {
  return (
    <div className="about-grid-container">
      <h1>About the Beer</h1>
      <div className="about-grid-item">
        <h2>Ingredients</h2>
        <p>Barley malt, wheat, hops and apple juice. </p>
      </div>
      <div className="about-grid-item">
        <h2>Brewery</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam
          turpis nec accumsan imperdiet. Curabitur rutrum facilisis ultricies.
          Sed feugiat auctor neque non porta. Maecenas risus dui, rhoncus ornare
          mauris id, lacinia varius nisl. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Duis sem libero,
          cursus sit amet rutrum non, egestas nec lectus. Cras tempor metus ut
          arcu auctor, et malesuada ipsum interdum.
        </p>
      </div>
    </div>
  );
};

export default About;
