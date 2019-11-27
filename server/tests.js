const axios = require("axios");

const baseUrl = "http://localhost:3002";

// GET REQUEST FOR STUDENT DATA [WORKS]
axios.get("http://localhost:3002/api/student").then(res => {
  console.log(res.data);
});

// ====================================================

// POST REQUEST FOR STUDENT DATA [WORKS]
// axios
//   .post(`${baseUrl}/api/student/register`, {
//     name: "syed shahbaz",
//     lastname: "hussain",
//     email: "asfn@saf.com",
//     contact:'03412986912',
//     password: "1234567",
//     role: 'student',
//     applied: ['panacloud']
//   })
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// =======================================================

// GET REQUEST FOR ADMINS [WORKS]
// axios.get(`${baseUrl}/api/admin`).then(res => console.log(res.data));

// =======================================================

// POST REQUEST FOR ADMINS [WORKS]
// axios
//   .post(`${baseUrl}/api/admin/register`, {
//     email: "admin@admin.com",
//     password: "admin",
//   })
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// =======================================================

// GET REQUEST FOR COMPANIES [WORKS]
// axios.get(`${baseUrl}/api/company`).then(res => {
//   console.log(res.data);
// });

// =======================================================

// POST REQUEST FOR COMPANIES [WORKS]
// axios
//   .post(`${baseUrl}/api/company/register`, {
//     email: "zia@zia.com",
//     password: "1234560",
//     CompanyName: "panacloud",
//     role: "company",
//     CompanyCeo: 'Zia khan'
//   })
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// =======================================================

// GET REQUEST FOR JOBS [WORKS]
// axios.get(`${baseUrl}/api/company/jobs`).then(res => {
//     console.log(res)
// })

// =======================================================

// POST REQUEST FOR JOBS
// axios
//   .post(`${baseUrl}/api/company/jobs`, {
//     title: "MEAn Developer",
//     description: "A job for reacr stack developer",
//     companyName : "Panacloud",
//     salary:'1878000',
//     date: "10/12/2019",
//     applied: "panacloud"

//   })
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// axios.delete("http://localhost:3002/api/student",{data: {email: "daniyal@daniyal.com"}})
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
