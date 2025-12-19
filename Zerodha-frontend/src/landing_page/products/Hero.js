import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 mb-5 border-bottom">
        <h1 className="mt-5 p-3"> Zerodha Products</h1>
        <h4 className="p-3 fs-4" style={{ color: "#424242" }}>
          Sleek, modern, and intuitive trading platforms
        </h4>
        <p className="p-3 fs-5 p-5 mb-5" style={{ color: "#666666" }}>
          Check out our
          <a href="/" style={{ textDecoration: "none" }}>
            {" "}
            investment offerings →
          </a>
        </p>{" "}
      </div>
    </div>
  );
}

export default Hero;
