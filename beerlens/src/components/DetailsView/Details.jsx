import React from "react";
import DetailsOverview from "./DetailsOverview";
import TasteDescription from "./TasteDescription";
import Pairings from "./Pairings";
import About from "./About";

const Details = () => {
  return (
    <div>
      <DetailsOverview />
      <TasteDescription />
      <hr />
      <Pairings />
      <hr />
      <About />
    </div>
  );
};

export default Details;
