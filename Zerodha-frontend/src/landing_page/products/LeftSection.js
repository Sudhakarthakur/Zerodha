import React from "react";
function LeftSection({
  imageUrl,
  heading,
  description,
  link1,
  link2,
  link3,
  link4,
}) {
  return (
    <div className="container mb-5">
      <div className="row mb-5 ">
        <div className="col-lg-5 col-md-12 col-sm-12 mb-5">
          <img
            src={imageUrl}
            alt=""
            style={{ width: "120%", height: "80%" }}
          ></img>
        </div>
        <div className="col"></div>
        <div className="col-lg-3 col-md-12 col-sm-12 mt-5 mb-5 ">
          <h1 className="mb-5" style={{ color: "#424242" }}>
            {heading}
          </h1>
          <p className="fs-6 fw-500 text-muted" style={{ lineHeight: "2" }}>
            {description}
          </p>
          <div className="mb-5">
            <a href="/" className="fs-5 me-4">
              {link1}
              <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href="/" className="fs-5">
              {" "}
              Learn More <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div>
            <img src={link3} alt="/" className="me-4"></img>
            <img src={link4} alt="/"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
