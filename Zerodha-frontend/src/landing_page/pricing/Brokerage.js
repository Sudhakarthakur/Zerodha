import React, { useState } from "react";

function Brokerage() {
  const [activeTab, setActiveTab] = useState("Equity");

  return (
    <div className="container my-5">
      {/* ================= TOP HIGHLIGHTS ================= */}
      {/* <div className="row text-center mb-5">
        <div className="col-md-4">
          <h1 className="display-4 text-warning fw-bold">₹0</h1>
          <h6>Free equity delivery</h6>
          <p className="text-muted small">
            All equity delivery investments (NSE, BSE) are free.
          </p>
        </div>
        <div className="col-md-4">
          <h1 className="display-4 text-warning fw-bold">₹20</h1>
          <h6>Intraday and F&O trades</h6>
          <p className="text-muted small">
            Flat ₹20 or 0.03% per executed order.
          </p>
        </div>
        <div className="col-md-4">
          <h1 className="display-4 text-warning fw-bold">₹0</h1>
          <h6>Free direct MF</h6>
          <p className="text-muted small">
            All direct mutual fund investments are free.
          </p>
        </div>
      </div> */}

      {/* ================= TABS ================= */}
      <ul className="nav nav-tabs fs-4 mb-3">
        {["Equity", "Currency", "Commodity"].map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* ================= BROKERAGE TABLE ================= */}
      <div className="table-responsive mb-5">
        <table className="table table-bordered small">
          <thead className="table-light">
            <tr>
              <th>Charges</th>
              <th>Delivery</th>
              <th>Intraday</th>
              <th>F&O Futures</th>
              <th>F&O Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brokerage</td>
              <td>₹0</td>
              <td>₹20 or 0.03%</td>
              <td>₹20</td>
              <td>₹20</td>
            </tr>
            <tr>
              <td>STT / CTT</td>
              <td>0.1%</td>
              <td>0.025%</td>
              <td>0.01%</td>
              <td>0.05%</td>
            </tr>
            <tr>
              <td>Transaction charges</td>
              <td>0.00345%</td>
              <td>0.00345%</td>
              <td>0.002%</td>
              <td>0.053%</td>
            </tr>
            <tr>
              <td>GST</td>
              <td colSpan="4">18% on brokerage + transaction charges</td>
            </tr>
            <tr>
              <td>SEBI charges</td>
              <td colSpan="4">₹10 / crore</td>
            </tr>
            <tr>
              <td>Stamp duty</td>
              <td colSpan="4">As per state rules</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ================= ACCOUNT OPENING ================= */}
      <h4 className="mb-3">Charges for account opening</h4>
      <table className="table table-bordered small mb-5">
        <tbody>
          <tr>
            <td>Online account</td>
            <td className="text-success fw-bold">FREE</td>
          </tr>
          <tr>
            <td>Offline account</td>
            <td className="text-success fw-bold">FREE</td>
          </tr>
          <tr>
            <td>NRI account</td>
            <td>₹500</td>
          </tr>
        </tbody>
      </table>

      {/* ================= DEMAT AMC ================= */}
      <h4 className="mb-3">Demat AMC (Annual Maintenance Charges)</h4>
      <table className="table table-bordered small mb-5">
        <tbody>
          <tr>
            <td>Below ₹4 lakh holdings</td>
            <td className="text-success fw-bold">FREE</td>
          </tr>
          <tr>
            <td>Above ₹4 lakh holdings</td>
            <td>₹300 + GST / year</td>
          </tr>
        </tbody>
      </table>

      {/* ================= OPTIONAL SERVICES ================= */}
      <h4 className="mb-3">Charges for optional value added services</h4>
      <table className="table table-bordered small mb-5">
        <thead className="table-light">
          <tr>
            <th>Service</th>
            <th>Billing Frequency</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Transaction alerts</td>
            <td>Monthly</td>
            <td>FREE</td>
          </tr>
          <tr>
            <td>Demat debit SMS</td>
            <td>Per transaction</td>
            <td>₹3</td>
          </tr>
          <tr>
            <td>Call & Trade</td>
            <td>Per order</td>
            <td>₹50</td>
          </tr>
        </tbody>
      </table>

      {/* ================= CHARGES EXPLAINED ================= */}
      <h4 className="mb-3">Charges explained</h4>
      <div className="row small text-muted">
        <div className="col-md-6">
          <p>
            <strong>STT:</strong> Securities transaction tax as per government
            rules.
          </p>
          <p>
            <strong>Transaction charges:</strong> Charged by exchanges.
          </p>
          <p>
            <strong>Call & Trade:</strong> ₹50 per order via dealer.
          </p>
          <p>
            <strong>Stamp duty:</strong> State government levy.
          </p>
        </div>
        <div className="col-md-6">
          <p>
            <strong>NRI brokerage:</strong> Higher charges apply.
          </p>
          <p>
            <strong>Corporate actions:</strong> Charges for physical CMR.
          </p>
          <p>
            <strong>Delayed payment:</strong> Interest applicable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
