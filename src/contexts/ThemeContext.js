import React, { createContext, useState, useEffect } from "react";

// Crear el contexto para el tema
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Detectar si el sistema tiene preferencia de modo oscuro
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Definir el estado inicial del tema: de `localStorage` o basado en la preferencia del sistema
  const [theme, setTheme] = useState(localStorage.getItem("theme") || (systemPrefersDark ? "dark" : "light"));

  useEffect(() => {
    // Actualizar las variables CSS globales en `:root` según el tema
    const root = document.documentElement;

    const lightTheme = {
      "--background": "#F2FAF5",
      "--primary": "#3F72AF",
      "--secondary": "#9fadc4",
      "--accent": "#112D4E",
      "--text": "#060E09",
      "--text-primary": "#eee",
      "--text-secondary": "#000",
      "--text-box-background": "#ddd"
    };

    const darkTheme = {
      "--background": "#232222",
      "--primary": "#700000",
      "--secondary": "#444444",
      "--accent": "#e22c7b",
      "--text": "#e0e0e0",
      "--text-primary": "",
      "--text-secondary": "#ccc",
      "--text-box-background": "var(--secondary)"
    };

    const themeVariables = theme === "light" ? lightTheme : darkTheme;

    // Cambiar las variables CSS en `:root`
    Object.keys(themeVariables).forEach((key) => {
      root.style.setProperty(key, themeVariables[key]);
    });

    // Guardar la preferencia del usuario en `localStorage`
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Alternar el tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};