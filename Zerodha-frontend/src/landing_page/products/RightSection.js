import React from "react";
function RightSection({ heading, description, link1, imageUrl }) {
  return (
    <div className="container mb-5">
      <div
        className="row mt-5 mb-5"
        style={{ alignItems: "center", alignContent: "center" }}
      >
        <div
          className="col-lg-4 col-md-12 col-sm-12 mt-5 "
          style={{ marginTop: "5rem" }}
        >
          <h1 className="" style={{ color: "#424242" }}>
            {heading}
          </h1>
          <p className="fs-6 fw-500    text-muted" style={{ lineHeight: "2" }}>
            {description}
          </p>
          <a href="/" className="fs-5">
            {link1} <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-lg-7 col-md-12 col-sm-12 ">
          <img
            src={imageUrl}
            alt=""
            style={{ width: "100%", height: "80%" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
