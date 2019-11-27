const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
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
  }
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = { Admin };
