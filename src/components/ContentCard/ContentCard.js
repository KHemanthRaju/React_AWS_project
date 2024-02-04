import React from "react";
import "./ContentCard.css";

const ContentCard = ({ data }) => {
  //   console.log(data);
  const { title, description, buttonContent } = data;
  return (
    <>
      <div className="Content_Card">
        <h2>{title}</h2>
        <p>{description}</p>
        <button>{buttonContent}</button>
      </div>
    </>
  );
};

export default ContentCard;
