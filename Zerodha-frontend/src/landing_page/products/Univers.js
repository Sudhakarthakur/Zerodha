import React from "react";
function Universe() {
  return (
    <div className="container">
      cc
      <div className="row text-center mt-5 mt-b">
        <h4 className="mt-5 mb-5 p-5" style={{ color: "#424242" }}>
          Want to know more about our technology stack? Check out the{" "}
          <a href="/"> Zerodha.tech </a>blog.
        </h4>
        <h2 className="p-5 mt-5 " style={{ color: "#424242" }}>
          The Zerodha Universe
        </h2>
        <p className="mt-0 fs-">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-5 p-5">
          <img
            className="mt-5"
            src="media/images/zerodhaFundhouse.png"
            alt=""
            style={{ width: "65%" }}
          ></img>
          <p className="mt-5 mb-5 text-center text-muted fs-6 fw-600">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
          <img
            className="mt-5"
            src="media/images/streakLogo.png"
            alt=""
            style={{ width: "65%" }}
          ></img>
          <p className="mt-5 mb-5 text-center text-muted fs-6 fw-600">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-5 p-5">
          <img
            className="mt-5 "
            src="media/images/sensibullLogo.svg"
            alt=""
            style={{ width: "70%" }}
          ></img>{" "}
          <p className="mt-5 mb-5 text-center text-muted fs-6 fw-600 p-2">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>{" "}
          <img
            className="mt-5 "
            src="media/images/smallcaseLogo.png"
            alt=""
            style={{ width: "70%" }}
          ></img>
          <p className="mt-5 mb-5 text-center text-muted fs-6 fw-600">
            7 Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-5 p-5">
          <img
            className="mt-5"
            src="media/images/goldenpiLogo.png"
            alt=""
            style={{ width: "70%" }}
          ></img>{" "}
          <p className="mt-5 mb-5 text-center text-muted fs-6 fw-600">
            nvestment research platform that offers detailed insights on stocks,
            sectors, supply chains, and more.
          </p>
          <img
            className="mt-5"
            src="media/images/dittoLogo.png"
            alt=""
            style={{ width: "50%" }}
          ></img>
          <p className="mt-5 mb-5 text-center text-muted fs-6 fw-600">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
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

export default Universe;
