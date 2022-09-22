import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {

  const btnText = isDarkMode ? "Light" : "Dark";
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {btnText} Mode
      </button>
    </header>
  );
}

export default Header;
