var mysql = require("mysql2");
var dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "reactjs!nodejs$ingenieurinformatique",
  database: "mydatabase",
  multipleStatements: true,
  port: "3306",
});
module.exports = dbConn;
