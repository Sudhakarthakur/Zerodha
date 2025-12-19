import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className=" mb-5 col-lg-5 col-mid-12 col-sm-12">
          <h2 className="" style={{ color: "#424242" }}>
            Trust with confidence
          </h2>
          <h3 className="mt-5 ">Customer-first always</h3>
          <h5
            className="text-muted "
            style={{ lineHeight: "2", fontSize: "21px" }}
          >
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </h5>

          <h3 className="mt-5 fs-3" style={{ color: "#424242" }}>
            No spam or gimmicks
          </h3>
          <h5
            className="text-muted "
            style={{ lineHeight: "2", fontSize: "21px" }}
          >
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.{" "}
            <a href="/">Our philosophies.</a>
          </h5>

          <h3 className="mt-5 fs-3" style={{ color: "#424242" }}>
            The Zerodha universe
          </h3>
          <h5
            className="text-muted "
            style={{ lineHeight: "2", fontSize: "21px" }}
          >
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </h5>

          <h3 className="mt-5 fs-3" style={{ color: "#424242" }}>
            Do better with money
          </h3>
          <h5
            className="text-muted "
            style={{ lineHeight: "2", fontSize: "21px" }}
          >
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </h5>
        </div>
        <div className="col-lg-7 col-mid-12 col-sm-12 mb-5">
          <img
            src="media/images/ecosystem.png"
            alt=""
            style={{ width: "95%" }}
            className="mx-auto p-2 mt-5 mx-5"
          ></img>
          <div className="mt-5 p-5 text-center ">
            <a href="/" className=" fs-5 p-5">
              Explore our products <i class="fa-solid fa-arrow-right-long"></i>{" "}
            </a>
            <a href="/" className="fs-5">
              Try Kite demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
        <img
          src="media/images//pressLogos.png"
          alt=""
          className="mt-5 mx-auto mb-5"
          style={{ width: "70%" }}
        ></img>
      </div>
    </div>
  );
}

export default Awards;
