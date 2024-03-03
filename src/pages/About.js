import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "../App.css";
import FormValidation from "../components/FormValidation/FormValidation";

const About = () => {
  const { theme, ThemeClick } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className={`${theme}`} style={{ margin: "80px" }}>
      This is About Page
      <p>Hello World!!!!!</p>
      <FormValidation />
      {/* <button onClick={() => ThemeClick()}>Theme Change</button> */}
    </div>
  );
};

export default About;
