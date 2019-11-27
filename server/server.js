const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

const url = "mongodb://localhost:27017/campus";
mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());



// Adding data to master 

// Models
const { Admin } = require("./models/admin");
const { Student } = require("./models/student");
const { Company } = require("./models/company");
const { Jobs } = require("./models/jobs");

// ==============================
//           STUDENTS
// ==============================

// Get all users Data
app.get("/api/student/", (req, res) => {
  const student = Student.find((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    }
    res.status(200).json({
      success: true,
      userData: doc
    });
  });
});

app.delete("/api/student", (req, res) => {
  const data = req.body;
  Student.remove(data, (err, doc) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json({
      success: true,
      userData: doc
    });
  });
});

// Post Student Data
app.post("/api/student/register", (req, res) => {
  const student = new Student(req.body);
  student.save((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    }
    res.status(200).json({
      success: true,
      userData: doc
    });
  });
});

// ==============================
//           ADMINS
// ==============================

app.get("/api/admin/", (req, res) => {
  const admin = Admin.find((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    }
    res.status(200).json({
      success: true,
      userData: doc
    });
  });
});

// Post Admin Data
app.post("/api/admin/register", (req, res) => {
  const admin = new Admin(req.body);
  admin.save((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    }
    res.status(200).json({
      success: true,
      userData: doc
    });
  });
});

// ==============================
//           COMPANY
// ==============================

// Get company Details
app.get("/api/company/", (req, res) => {
  const company = Company.find((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    }
    res.status(200).json({
      success: true,
      userData: doc
    });
  });
});

// Post Company Details
app.post("/api/company/register", (req, res) => {
  const company = new Company(req.body);
  company.save((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    }
    res.status(200).json({
      success: true,
      userData: doc
    });
  });
});

//Delete company data
app.delete("/api/company", (req, res) => {
  const data = req.body;
  Company.remove(data, (err, doc) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json({
      success: true,
      userData: doc
    });
  });
});

// Get request for Jobs
app.get("/api/company/jobs", (req, res) => {
  Jobs.find((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    }
    res.status(200).json({ success: true, userData: doc });
  });
});

// Post request for jobs
app.post("/api/company/jobs", (req, res) => {
  const jobs = new Jobs(req.body);
  jobs.save((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    }
    res.status(200).json({
      success: true,
      userData: doc
    });
  });
});

// delete jobs api
app.delete("/api/company/jobs", (req, res) => {
  const data = req.body;
  Jobs.remove(data, (err, doc) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json({
      success: true,
      userData: doc
    });
  });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log("Server listening at " + PORT);
});
