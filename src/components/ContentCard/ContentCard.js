import React, { useEffect, useState } from "react";
import "./ContentCard.css";
// import { data } from "../../data/data";

const ContentCard = () => {
  //   console.log(data);

  const [contentData, setContentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://54.162.229.172:3001/api/content`);
        const json = await response.json();
        if (!response.ok) throw new Error(json.message);
        setContentData(json);
      } catch (err) {
        console.log("Failed to fetch content data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        // Loading or skeleton UI while waiting for data
        <div className="Content_Card_skimmer">Loading.....</div>
      ) : (
        // Render your actual content when data is available
        <div>
          {contentData?.map((item) => (
            <div className="Content_Card">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <button>{item.buttonContent}</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ContentCard;
