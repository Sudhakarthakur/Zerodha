require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { HoldingsModel } = require("./model/Holdingsmodel");
const { PositionsModel } = require("./model/PositionsModel");
const { UsersModel } = require("./model/Usersmodel");
const { OrdersModel } = require("./model/OrdersModel");
const bodyParser = require("body-parser");
const cors = require("cors");
const { errors } = require("passport-local-mongoose");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

app.use(bodyParser.json());
app.use(cors());

// app.get("/addholdings", async (req, res) => {
// let tempHolding = [
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ];

// tempHolding.forEach((item) => {
//   let newHolding = new HoldingsModel({
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//   });
//   newHolding.save();
// });
// res.send("done");
// // });

// app.get("/addpositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];
//   tempPositions.forEach((item) => {
//     let newPostion = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//     newPostion.save();
//   });
//   res.send("psotion data added");
// });

app.get("/addholdings", async (req, res) => {
  let Holdingadata = await HoldingsModel.find({});
  res.json(Holdingadata);
  res.send(Holdingadata);
});

app.get("/addpositions", async (req, res) => {
  let Positiondata = await PositionsModel.find({});
  res.json(Positiondata);
  res.send(Positiondata);
});

app.post("/neworder", async (req, res) => {
  let newOrder = await new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  res.send("find data");
  newOrder.save();
});

app.get("/availableshares/:stockname", async (req, res) => {
  try {
    const { stockname } = req.params;

    const buyOrder = await OrdersModel.find({
      name: stockname,
      mode: "Buy",
    });

    const sellOrder = await OrdersModel.find({
      name: stockname,
      mode: "Sell",
    });

    const totalBuy = buyOrder.reduce((sum, order) => sum + order.qty, 0);
    const totalSell = sellOrder.reduce((sum, order) => sum + order.qty, 0);
    const available = totalBuy - totalSell;

    res.json({
      stockName: stockname,
      totalBought: totalBuy,
      totalSold: totalSell,
      available: available > 0 ? available : 0,
    });
  } catch (err) {
    console.error("availableshares error:", err);
    res.status(500).json({ error: "Failed to fetch available shares" });
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password, firstName, lastName, phone } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    // Check if user exists
    const existingUser = await UsersModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let newUser = await UsersModel.create({
      username,
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phone,
    });
    res.status(201).json({
      success: true,
      message: "user signUp successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "SignUp failed" });
  }
});

app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UsersModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid password" });
    }

    res.json({
      success: true,
      message: "Login successful",
      user: { id: user._id, email: user.email },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Login failed" });
  }
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, async () => {
  console.log("app started;");
  await mongoose.connect(url);
  console.log("MONGO CONNECTED");
});
