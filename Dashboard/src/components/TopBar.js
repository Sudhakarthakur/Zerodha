import React from "react";
import Menu from "./Menu";
const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <div className="index-points">{100.2}</div>
          <p className="percentage"></p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <div className="index-points">{100.2}</div>
          <p className="percentage"></p>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default TopBar;
