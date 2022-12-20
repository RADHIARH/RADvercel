// Add packages
const express = require("express");
// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// import cors
var cors = require("cors");
app.use(cors());
require("dotenv").config();
// import database
var mysql = require("mysql2");
const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "reactjs!nodejs$ingenieurinformatique",
  database: "mydatabase",
  // multipleStatements: true,
  port: "3306",
  waitForConnections: true,
});
const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log("Node app is running on port " + port);
});
// Export the Express API
//Creating GET Router to fetch all the employes  from the MySQL Database
app.get("/employes", (req, res) => {
  pool.query("SELECT * FROM user_table", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});
module.exports = app;
