import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 mb-5">
        <h2 className="">Charges</h2>
        <h3>List of all charges and texes</h3>
        <div className="col-lg-4 col-mid-6 col-sm-12 mb-4">
          <img
            src="media/images/pricing0.svg"
            alt=""
            // style={{ width: "30%" }}
          ></img>
          <p className="mt-3">Free account opening</p>

          <p className="mt-3">Free equity delivery and direct mutual funds</p>
        </div>
        <div className="col-lg-4 col-mid-6 col-sm-12 mb-4">
          {" "}
          <img
            src="media/images/pricingEquity.svg"
            alt=""
            // style={{ width: "30%" }}
          ></img>
        </div>
        <div className="col-lg-4 col-mid-6 col-sm-12 mb-4">
          <img
            src="media/images/intradayTrades.svg"
            alt=""
            // style={{ width: "30%" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Hero;
