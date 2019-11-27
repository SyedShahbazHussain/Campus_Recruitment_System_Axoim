const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  email: {
    type: String,
    required: false,
    trim: true,
    unique: 1
  },

  password: {
    type: String,
    required: false,
    minlength: 4
  },

  name: {
    type: String,
    required: false,
    maxlength: 100
  },

  lastname: {
    type: String,
    required: false,
    maxlength: 100
  },
  contact: {
    type: Number,
    required: false,
    maxlength: 12
  },
  applied: {
    type: Object,
    required: false
  },

  role: {
    type: String,
    required: false
  }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = { Student };
