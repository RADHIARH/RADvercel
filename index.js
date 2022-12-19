// Add packages
const express = require("express");
// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});
// import cors
var cors = require("cors");
app.use(cors());
// import database
let dbConn = require("./db");
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
