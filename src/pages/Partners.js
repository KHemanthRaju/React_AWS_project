import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Partners = () => {
  const { theme, ThemeClick } = useContext(ThemeContext);
  return (
    <div
      className={`${theme}`}
      style={{
        margin: "80px",
      }}
    >
      This is Partners page
      <button onClick={ThemeClick}>Theme Change</button>
    </div>
  );
};

export default Partners;
