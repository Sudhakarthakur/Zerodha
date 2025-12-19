import React from "react";
function Pricing() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-5 col-mid-12 col-sm-12 mb-4">
          <h1 className="mb-5 font-weight-normal" style={{ color: "#424242" }}>
            Unbeatable pricing
          </h1>
          <p className="fs-5 mb-5 text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="/" className="fs-5 mt-5">
            See pricing <i class="fa-solid fa-arrow-right-long"></i>{" "}
          </a>
        </div>
        <div className="col-1"></div>
        <div
          className="col-lg-6 col-mid-12 col-sm-12 mb-4 "
          style={{
            display: "flex",
            // gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            // width: "100%",
            padding: "40px 0",
          }}
        >
          <img
            src="media/images/pricing0.svg"
            alt=""
            style={{ width: "30%" }}
          ></img>
          <p className="mt-3">Free account opening</p>
          <img
            src="media/images/pricingEquity.svg"
            alt=""
            style={{ width: "30%" }}
          ></img>
          <p className="mt-3">Free equity delivery and direct mutual funds</p>
          <img
            src="media/images/intradayTrades.svg"
            alt=""
            style={{ width: "30%" }}
          ></img>
          <p>Intraday and F&O</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
