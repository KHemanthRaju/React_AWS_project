import React from "react";
import LoginCard from "../LoginCard/LoginCard";
import "./Layout.css";
import ContentCard from "../ContentCard/ContentCard";
import { data } from "../../data/data";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <div className="left-side">
          <LoginCard />
        </div>
        <div className="right-side">
          <ContentCard />
          {/* <ContentCard data={data[0]} />
          <ContentCard data={data[1]} /> */}
        </div>
      </div>
    </>
  );
};

export default Layout;
