import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "../App.css";

const About = () => {
  const { theme, ThemeClick } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className={`${theme}`} style={{ margin: "80px" }}>
      This is About Page
      <p>Hello World!!!!!</p>
      <button
        onClick={() => ThemeClick()}
        // style={{
        //   background: theme == "light" ? "white" : "black",
        //   color: theme == "light" ? "black" : "white",
        // }}
      >
        Theme Change
      </button>
    </div>
  );
};

export default About;
