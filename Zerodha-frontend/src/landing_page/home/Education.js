import React from "react";
function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div
          className="col-lg-6 col-mid-12 col-sm-12 "
          style={{ marginTop: "9rem" }}
        >
          <img
            src="media/images/education.svg"
            alt=""
            style={{ width: "90%" }}
            className="mx-auto"
          ></img>
        </div>
        <div className="col-lg-5 col-mid-12 col-sm-12 mb-4 p-5">
          <h1 className="mt-5 mb-5" style={{ color: "#424242" }}>
            Free and open market education
          </h1>
          <p className="fs-5 text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="/" className="fs-5 ">
            Varsity <i class="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className="mt-5 fs-5 text-muted">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="/" className="fs-5 ">
            TradingQ&A <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
