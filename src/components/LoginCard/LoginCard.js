import React from "react";

const LoginCard = () => {
  return (
    <>
      <div className="card">
        <h2>ORACLE</h2>
        <p>Cloud</p>
        <p>Cloud Account Name</p>
        <input type="text" />
        <button>Next</button>
        <p>
          Forgot your cloud account name? <a href="#">Get help</a>
        </p>
        <p>
          Do you have a Traditional Cloud Account? <a href="#">Sign in</a>
        </p>
        <hr />
        <p>Not an Oracle Cloud customer yet?</p>
        <button>Sign Up</button>
      </div>
    </>
  );
};

export default LoginCard;
