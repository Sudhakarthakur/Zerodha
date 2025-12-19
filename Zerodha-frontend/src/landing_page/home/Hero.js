import React from "react";
function Hero() {
  return (
    <div className="container mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Logo"
          className="mb-5 mx-auto"
          style={{ width: "80%" }}
        ></img>
        <h1
          className="text-center mt-5 mb-5 text-muted"
          style={{ color: "#424242" }}
        >
          {" "}
          Invest in everything
        </h1>
        <h3 className="text-center text-muted">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </h3>
        <button
          className="btn btn-primary btn-lg mx-auto mb-5 mt-5 fs-4 p-2"
          style={{ width: "20%", height: "30%" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
