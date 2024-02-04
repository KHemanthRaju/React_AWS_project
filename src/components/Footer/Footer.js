import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  console.log("Enters");
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
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
                <li>US Sales: +1.800.633.0738</li>
                <li>How can we help?</li>
                <li>Subscribe to emails</li>
                <li>Events</li>
                <li>News</li>
                <li>OCI Blog</li>
              </ul>
            </div>
          </div>
          <div className="row2">
            <div className="footer-col">
              <ul>
                <li>@2024 Oracle</li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <li>Do not Sell My Info</li>
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
                fontSize: "30px",
              }}
            />
            <FaSquareXTwitter style={{ color: "white", fontSize: "30px" }} />
            <FaLinkedinIn style={{ color: "white", fontSize: "30px" }} />
            <FaYoutube style={{ color: "white", fontSize: "30px" }} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
