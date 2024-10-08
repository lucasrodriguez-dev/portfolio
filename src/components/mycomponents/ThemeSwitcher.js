import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <a onClick={toggleTheme} style={buttonStyle}>
      {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
    </a>
  );
};

const buttonStyle = {
  padding: "0",
  background: "none",
  cursor: "pointer",
  color: "var(--text)"
};

export default ThemeSwitcher;