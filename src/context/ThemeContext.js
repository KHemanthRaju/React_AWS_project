import React, { useContext, useEffect, useState } from "react";

const ThemeContext = React.createContext();

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    localStorage.setItem("theme", "dark-theme");
    return "dark-theme";
  } else {
    return theme;
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);

  const ThemeClick = () => {
    setTheme((theme) =>
      theme == "light-theme" ? "dark-theme" : "light-theme"
    );
  };

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("theme", theme);
    };
    refreshTheme();
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, ThemeClick, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
