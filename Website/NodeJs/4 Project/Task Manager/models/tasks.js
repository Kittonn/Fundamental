const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String, // ชนิดข้อมูล
    required: [true, "must have name"], // ต้องกรอกค่า
    trim: true, // ลบช่องว่างที่ไม่จำเป็นจากค่าที่กรอก
    maxlength: [20, "name cannot more than 20 char"], // จำกัดตัวอักษร
  },
  completed: {
    type: Boolean,
    default: false, // ค่า default
  },
});

// model(name collection, schema)
// name is Task but change to tasks in mongodb
module.exports = mongoose.model("Task", TaskSchema);
