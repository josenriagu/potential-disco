import React from "react";

import { NavbarDiv } from "./index.styled";

export default function Navbar(props) {
  const { theme, toggleTheme } = props;
  return (
    <NavbarDiv>
      <div>
        <h4>Where in the world?</h4>
        <p onClick={() => toggleTheme()}>
          {theme === "light" ? (
            <span>
              <i className="fas fa-moon"></i> Dark Mode
            </span>
          ) : (
            <span>
              <i className="fas fa-sun"></i> Light Mode
            </span>
          )}
        </p>
      </div>
    </NavbarDiv>
  );
}
