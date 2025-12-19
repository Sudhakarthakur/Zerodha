import React from "react";
import { Link } from "react-router-dom";
function Funds() {
  return (
    <>
      <div className="funds">
        <p>instant, Zero-cost fund transfer with upi</p>
        <Link className="btn btn-green">Add Funds</Link>
        <Link className="btn btn-blue">Withdraw</Link>
      </div>
      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>
          <div className="table"></div>
        </div>
      </div>
    </>
  );
}

export default Funds;
