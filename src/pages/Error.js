import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1 style={{color: "red"}}>oopsie!</h1>
        <h1>You seem lost click the button to be found </h1>
        <Link to="/" className="btn btn-primary">
          back Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
