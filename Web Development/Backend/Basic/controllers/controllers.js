const db = require("../data/db.json");
const { v4: uuid } = require("uuid");
const saveToDb = require("../data/utils");
const getData = (req, res) => {
  res.send({ status: "ok", data: db.workouts });
};
const postData = (req, res) => {
  const { body } = req;
  let newData = {
    ...body,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  db.workouts.push(newData);
  saveToDb(db);
  res.send({ status: "ok", data: newData });
};
const deleteData = (req, res) => {
  const { id } = req.params;
  const newData = db.workouts.filter((item) => item.id !== id);
  saveToDb({ workouts: newData });
  res.send({ status: "ok", data: newData });
};
const patchData = (req, res) => {
  const { body } = req;
  const { id } = req.params;
  let dataIndex = db.workouts.findIndex((item) => item.id === id);
  const newData = {
    ...db.workouts[dataIndex],
    ...body,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  db.workouts[dataIndex] = newData;
  saveToDb({ workouts: db.workouts });
  res.send({ status: "ok", data: newData });
};

module.exports = { getData, postData, deleteData, patchData };
