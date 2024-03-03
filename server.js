const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

const footerData = {
  resources: {
    title: "Resources for",
    items: [
      "Careers",
      "Developer",
      "Investors",
      "Partners",
      "Startups",
      "Students and Educators",
    ],
  },
  whyOracle: {
    title: "Why Oracle",
    items: [
      "Analyst Reports",
      "Cloud Economics",
      "with Microsoft Azure",
      "vs. AWS",
      "vs. Google Cloud",
      "vs. MongoDB",
    ],
  },
  learn: {
    title: "Learn",
    items: [
      "What is AI?",
      "What is Cloud Computing",
      "What is Cloud Storage",
      "What is HPC",
      "What is IaaS",
      "What is PaaS",
    ],
  },
  whatsNew: {
    title: "What's New",
    items: [
      "Oracle Supports Ukraine",
      "Pracle Cloud Free Tier",
      "Cloud Architecture Center",
      "Cloud Lift",
      "Oracle Support Rewards",
      "Oracle Red Bull Racing",
    ],
  },
  contactus: {
    title: "Contact Us",
    items: [
      "AU Sales: 1300 3666 386",
      "US Sales: +1.800.633.0738",
      "How can we help?",
      "Subscribe to emails",
      "Events",
      "News",
    ],
  },
};

const data = [
  {
    title: "Hearst Connects Oracle SaaS and Modern Data Platform",
    description:
      "Learn how Oracle INtegration Cloud and OCI Data Integration help simplify complex integration use cases in a distributed cloud environment to quickly automate data-driven experiences",
    buttonContent: "Watch the replay",
  },
  {
    title: "Gartner Strategic Cloud Platform Services report",
    description:
      "Oracle Cloud Infrastructure has been named a Leader in the 2023 Gartner Magic Quadrant for Strategic Cloud Platform Services",
    buttonContent: "Read the report",
  },
];

const navbarData1 = [
  "About",
  "Services",
  "Solutions",
  "Pricing",
  "Partners",
  "Resources",
];

app.get("/api/footer", (req, res) => {
  console.log(footerData);
  console.log(process.env.NODE_ENV);
  res.json(footerData);
});

app.get("/api/content", (req, res) => {
  console.log("Request received for content", data);
  res.json(data);
});

app.get("/api/navbar", (req, res) => {
  res.json(navbarData1);
});

app.listen(port, () => {
  console.log("Server is running on localhost:3001");
});
