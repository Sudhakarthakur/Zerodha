import axios from "axios";
import React, { useState, useEffect } from "react";
// import { positions } from "../data/data";
const Positions = () => {
  const [allPositions, setAllPositins] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/addpositions")
      .then((res) => {
        console.log(res.data);
        setAllPositins(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>
      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qut.</th>
            <th>Avg.Cost</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>chg.</th>
          </tr>
          {allPositions.map((stock, index) => {
            const currValue = stock.price * stock.qty;
            const isProfit = currValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td> {stock.product}</td>
                <td> {stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>

                <td className={profClass}>
                  {(currValue - stock.avg * stock.qty).toFixed(2)}
                </td>

                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
