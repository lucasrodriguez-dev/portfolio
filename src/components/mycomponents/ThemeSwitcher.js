import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={buttonStyle}>
      {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
    </button>
  );
};

const buttonStyle = {
  padding: "0",
  background: "none",
  cursor: "pointer",
  color: "var(--text)"
};

export default ThemeSwitcher;