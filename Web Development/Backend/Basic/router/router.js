const express = require("express");
const router = express.Router();
const {
  getData,
  postData,
  deleteData,
  patchData,
} = require("../controllers/controllers");
router.route("/").get(getData).post(postData);
router.route("/:id").delete(deleteData).patch(patchData);
module.exports = router;
