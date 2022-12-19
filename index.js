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
let dbConn = require("./db");
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Node app is running on port " + port);
});
// Export the Express API
//Creating GET Router to fetch all the employes  from the MySQL Database
app.get("/employes", (req, res) => {
  dbConn.query(
    'SELECT * FROM user_table where id_role=(select id from role where role="employeur") and deleted=false',
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});
module.exports = app;
