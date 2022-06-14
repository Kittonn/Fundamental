const express = require("express");
const Transaction = require("../model/Transaction");
const Router = express.Router();

Router.get("/", async (req, res) => {
  try {
    const transaction = await Transaction.find();
    if (!transaction) {
      throw new Error("No transactions");
    }
    res.status(200).json(transaction);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

Router.post("/", async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    if (!transaction) {
      throw new Error("error naja");
    }
    res.status(200).json(transaction);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

Router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const transaction = await Transaction.findOneAndDelete(id);
    if (!transaction) {
      throw new Error("no id!!!");
    }
    res.status(200).json(transaction);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

Router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const transaction = await Transaction.findOneAndUpdate(id, req.body, {
      new: true,
      runValidators:true
    });
    if (!transaction) {
      throw new Error("error update");
    }
    res.status(200).json(transaction);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
module.exports = Router;
