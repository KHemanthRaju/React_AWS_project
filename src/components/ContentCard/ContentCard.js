import React, { useEffect, useState } from "react";
import "./ContentCard.css";
// import { data } from "../../data/data";

const ContentCard = () => {
  //   console.log(data);

  const [contentData, setContentData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/content`);
        const json = await response.json();
        if (!response.ok) throw new Error(json.message);
        setContentData(json);
      } catch (err) {
        console.log("Failed to fetch content data");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {contentData?.map((item) => (
        <div className="Content_Card">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <button>{item.buttonContent}</button>
        </div>
      ))}
    </>
  );
};

export default ContentCard;
