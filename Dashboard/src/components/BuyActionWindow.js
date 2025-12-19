import React, { useState } from "react";
import { Link } from "react-router-dom";
import GerneralContex from "./GeneralContex";
import "./BuyActionWindow.css";
import axios from "axios";

const BuyActionWindow = ({ uid }) => {
  const [stockQuntity, setStockQuntity] = useState(1);
  const [stockPrice, setStockPrice] = useState(1);

  const handleBuyClick = () => {
    axios.post("http://localhost:3002/neworder", {
      name: uid,
      qty: stockQuntity,
      price: stockPrice,
      mode: "Buy",
    });
    GerneralContex.closeBuyWindow();
  };

  const handCancelClick = () => {
    GerneralContex.closeBuyWindow();
  };
  return (
    <div className="container" id="buy-window" draggable="true">
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
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;

// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import GeneralyContext from "./GeneralContext";
// import { axios } from "axios";

// const BuyActionWindow = ({ uid }) => {
//   const { closeBuyWindow } = useContext(GeneralContext);

//   return (
//     <div className="container" id="buy-window" draggable="true">
//       <div className="regular-order">
//         <div className="inputs">
//           <fieldset>
//             <legend>Qty.</legend>
//             <input type="number" />
//           </fieldset>

//           <fieldset>
//             <legend>Price</legend>
//             <input type="number" step="0.05" />
//           </fieldset>
//         </div>
//       </div>

//       <div className="buttons">
//         <span>Margin required ₹140.65</span>
//         <div>
//           <Link className="btn btn-blue">Buy</Link>
//           <Link className="btn btn-grey" onClick={closeBuyWindow}>
//             Cancel
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyActionWindow;
