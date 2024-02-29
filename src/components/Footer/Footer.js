import React, { useEffect, useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./Footer.css";
// const { footerData1 } = require("../../../server");

const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://54.162.229.172:3001/api/footer");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFooterData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  console.log("Enters");
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            {/* {footerData?.map((item) => {
              const sec = footerData[item];
              return (
                <div className="footer-col" key={item}>
                  <h4>{sec.title}</h4>
                  {console.log(sec)}
                  <ul>
                    {sec.items.map((item1, index) => (
                      <li key={index}>{item1}</li>
                    ))}
                  </ul>
                </div>
              );
            })} */}
            {footerData &&
              Object.keys(footerData).map((sectionKey) => {
                const section = footerData[sectionKey];
                return (
                  <div className="footer-col" key={sectionKey}>
                    <h4>{section.title}</h4>
                    {console.log(section)}
                    <ul>
                      {section.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            {/* <div className="footer-col">
              <h4>Resources for</h4>
              <ul>
                <li>Careers</li>
                <li>Developer</li>
                <li>Investors</li>
                <li>Partners</li>
                <li>Startups</li>
                <li>Students and Educators</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Why Oracle</h4>
              <ul>
                <li>Analyst Reports</li>
                <li>Cloud Economics</li>
                <li>with Microsoft Azure</li>
                <li>vs. AWS</li>
                <li>vs. Google Cloud</li>
                <li>vs. MongoDB</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Learn</h4>
              <ul>
                <li>What is AI?</li>
                <li>What is Cloud Computing?</li>
                <li>What is Cloud Storage?</li>
                <li>What is HPC?</li>
                <li>What is Iaas?</li>
                <li>What is Paas?</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>What's new</h4>
              <ul>
                <li>Oracle Supports Ukraine</li>
                <li>Oracle Cloud Free Tier</li>
                <li>Cloud Architecture Center</li>
                <li>Cloud Lift</li>
                <li>Oracle Support Rewards</li>
                <li>Oracle Red Bull Racing</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul>
                <li>AU Sales: 1300 3666 386</li>
                <li>US Sales: +1.800.633.0738</li>
                <li>How can we help?</li>
                <li>Subscribe to emails</li>
                <li>Events</li>
                <li>News</li>
                <li>OCI Blog</li>
              </ul>
            </div> */}
          </div>
          <div className="row2">
            <div className="footer-col">
              <ul>
                <li>@2024 Oracle</li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <li>
                  <span>Privacy / </span>Do not Sell My Info
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <li>Cookie Preferences</li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <li>Ad Choices</li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <li>Careers</li>
              </ul>
            </div>
            <AiFillFacebook
              style={{
                color: "white",
                fontSize: "27px",
                margin: "0 10px",
              }}
            />
            <FaSquareXTwitter
              style={{ color: "white", fontSize: "27px", margin: "0 10px" }}
            />
            <FaLinkedinIn
              style={{ color: "white", fontSize: "27px", margin: "0 10px" }}
            />
            <FaYoutube
              style={{ color: "white", fontSize: "27px", margin: "0 10px" }}
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
