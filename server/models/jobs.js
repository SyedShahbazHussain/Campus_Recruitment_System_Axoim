const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  title: {
    type: String,
    required: false,
    trim: true
  },

  description: {
    type: String,
    required: true
  },

  companyName: {
    type: String,
    required: false,
    maxlength: 20
  },

  salary: {
    type: Number,
    required: false,
    trim: true,
    maxlength: 10
  },
  date: {
    type: "String",
    required: false,
    trim: true
  },
  role: {
    type: String,
    required: false
  }
});

const Jobs = mongoose.model("Jobs", jobSchema);

module.exports = { Jobs };
