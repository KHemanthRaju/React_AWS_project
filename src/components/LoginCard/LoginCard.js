import React from "react";
import "./LoginCard.css";

const LoginCard = () => {
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
            <input type="text" />
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
