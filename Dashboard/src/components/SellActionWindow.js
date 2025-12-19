import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GerneralContex from "./GeneralContex";
import "./BuyActionWindow.css";
import axios from "axios";

const SellActionWindow = ({ uid }) => {
  const { closeSellWindow } = useContext(GerneralContex);
  const [stockQuntity, setStockQuntity] = useState(1);
  const [stockPrice, setStockPrice] = useState(1);
  const [available, setAvailable] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:3002/availableshares/${uid}`)
      .then((res) => setAvailable(res.data.available))
      .catch((err) => console.error(err));
  }, [uid]);

  const handleSellClick = () => {
    if (stockQuntity > available) {
      alert(`Cannot sell more than ${available} shares`);
      return;
    }
    axios.post("http://localhost:3002/neworder", {
      name: uid,
      qty: stockQuntity,
      price: stockPrice,
      mode: "Sell",
    });
    closeSellWindow();
  };

  const handCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuntity(Number(e.target.value))}
              value={stockQuntity}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
