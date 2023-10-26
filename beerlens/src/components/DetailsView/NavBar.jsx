import React from "react";
import "./styles/NavBar.css";
import { beerData } from "../../beerData";

const NavBar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <hr />
      <div className="navbarContainer">
        <span
          className="navbarItem"
          onClick={() => scrollToSection("tasteDescription")}
        >
          Taste Description
        </span>

        <span
          className="navbarItem"
          onClick={() => scrollToSection("pairings")}
        >
          Pairings
        </span>
        <span className="navbarItem" onClick={() => scrollToSection("about")}>
          About the Beer
        </span>
        <span className="navbarItem">Reviews</span>
        <span className="navbarItem">You may also like</span>
      </div>
      <hr />
    </div>
  );
};

export default NavBar;
