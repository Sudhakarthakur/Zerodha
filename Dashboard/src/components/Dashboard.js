import React from "react";
import { Route, Routes } from "react-router-dom";
import Summary from "./Summary";
import Apps from "./Apps";
import Funds from "./Funds";
import Positions from "./Positions";

import Holdings from "./Holdings";
import Orders from "./Orders";
import WatchList from "./WatchList";
import { GeneralContexProvider } from "./GeneralContex";
const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        {/* <div> */}
        <GeneralContexProvider>
          <WatchList />
        </GeneralContexProvider>
        {/* </div> */}
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Summary />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="/holdings" element={<Holdings />}></Route>
            <Route path="/positions" element={<Positions />}></Route>
            <Route path="/funds" element={<Funds />}></Route>
            <Route path="/apps" element={<Apps />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
