import React from "react";
function OpenAccount() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h2 style={{ color: "#424242" }}>Open a Zerodha account</h2>
        <p className="fs-4 mt-5  text-muted">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="btn btn-primary btn-lg mx-auto mb-5 mt-5 fs-4 p-2"
          style={{ width: "30%", height: "30%" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
