import React, { useState } from "react";
import "./LoginCard.css";

const LoginCard = () => {
  const [cloudAccountName, setCloudAccountName] = useState("");
  const [error, setError] = useState("");
  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    // Check if each character is a letter
    const isValid = inputValue.split("").every((char) => {
      return (
        (char >= "a" && char <= "z") ||
        (char >= "A" && char <= "Z") ||
        char === " "
      );
    });

    if (isValid || inputValue === "") {
      // Value is valid or empty, update state
      setCloudAccountName(inputValue);
      setError("");
    } else {
      // Value is not valid, show error message
      setError("Only Alphabets are allowed");
    }
  };
  return (
    <>
      <div className="card">
        <div className="card_header">
          <h2>ORACLE</h2>
          Cloud
        </div>
        <div className="card_middle">
          <p>Cloud Account Name</p>
          <p>
            <input
              type="text"
              value={cloudAccountName}
              onChange={handleInputChange}
            />
            {error && <span style={{ color: "red" }}>{error}</span>}
          </p>
          <button>Next</button>
          <p>
            Forgot your cloud account name? <a href="#">Get help</a>
          </p>
          <p>
            Do you have a Traditional Cloud Account? <a href="#">Sign in</a>
          </p>
        </div>
        <hr />
        <div className="card_bottom">
          <p>Not an Oracle Cloud customer yet?</p>
          <button>Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default LoginCard;
