const { model } = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchem");

const OrdersModel = new model("Order", OrdersSchema);

module.exports = { OrdersModel };
