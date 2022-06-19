const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// const db = mysql.createConnection({
//   user: "root",
//   password: "password",
//   database: "lumitics_test",
// });

app.post("/company/create", (req, res) => {
  const nameCompany = req.body.nameCompany;
  const isAirline = req.body.isAirline;

  db.query(
    "INSERT INTO company (nameCompany, isAirline) VALUES (?,?)",
    [nameCompany, isAirline],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/company/find", (req, res) => {

  // const nameCompany = req.body.findCompany;

  db.query("SELECT (nameCompany) FROM company", [nameCompany], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(request.socket.remoteAddress)
    }
  });
});

app.put("/company/update", (req, res) => {
  const id = req.body.id;
  const wage = req.body.wage;
  db.query(
    "UPDATE company SET name = ? WHERE id = ?",
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// Delete company
// app.delete("/delete/:id", (req, res) => {
//   const id = req.params.id;
//   db.query("DELETE FROM company WHERE id = ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
