import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center bg-dark text-light">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h1 className="display-4 fw-bold">
              React Calculator
            </h1>

            <p className="lead text-secondary mt-3">
              A simple and responsive calculator built with React JS and
              Bootstrap 5. Perform basic arithmetic operations instantly.
            </p>

            <ul className="list-unstyled mt-4">
              <li>✅ Addition</li>
              <li>✅ Subtraction</li>
              <li>✅ Multiplication</li>
              <li>✅ Division</li>
              <li>✅ Clean UI</li>
            </ul>

            <Link className="btn btn-primary btn-lg mt-4" to='/calculator'>
              Start Calculating
            </Link>
          </div>

          {/* Right Image */}
          <div className="col-md-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1006/1006555.png"
              alt="Calculator"
              className="img-fluid"
              style={{ maxWidth: "320px" }}
            />
          </div>

        </div>

        {/* Footer */}
        <div className="text-center mt-5 text-secondary">
          <small>Built with using React & Bootstrap 5</small><br />
          <small>Design and Developed by H Nilsankar Singha</small>
        </div>
      </div>
    </div>
  );
};

export default Home;
