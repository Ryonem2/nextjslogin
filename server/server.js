const cors = require("cors");
const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const PORT = 8080;
const aDay = 3600;

const app = express();

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "app",
});

con.connect((err) => {
  !!err ? console.log(err) : console.log("connected");
});

app.use(cors());

app.use(
  sessions({
    secret: "bananakey",
    saveUninitialized: true,
    cookie: { maxAge: aDay },
    resave: false,
  })
);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/loginUser", (req, response) => {
  // const session = req.session;
  const username = req.body.username;
  const plainPassword = req.body.password;

  // console.log(username + "aa");
  // console.log(req.body);

  con.query(
    `SELECT * FROM datauser WHERE USERNAME='${username}'`,
    (err, res) => {
      const data = res[0];
      console.log(`res = ${res[0]}`);

      if (!!err) {
        console.log(`Error`);
      } else {
        if (data == undefined) {
          response.send({ statusLogin: false });
        } else {
          const hash = data.password;
          const username2 = data.username;
          let isUsernameTrue;
          if (username === username2) {
            isUsernameTrue = true;
          } else {
            isUsernameTrue = false;
          }
          bcrypt.compare(plainPassword, hash, (err, isPasswordTrue) => {
            console.log(isPasswordTrue);
            if (isPasswordTrue && isUsernameTrue) {
              response.send({
                statusLogin: true,
                id: data.id,
                name: data.name,
                sername: data.sername,
              });
            } else {
              response.send(false);
            }
          });
        }
      }
    }
  );
});

app.get("/testapi/", (req, response) => {
  const param = req.params.param;

  con.query(`SELECT * FROM datauser`, (err, res) => {
    // const data = res.json();
    // const hash = data.password;
    if (!!err) {
      console.error(err);
    } else {
      console.log(res);
      response.send(res[0].name);
    }
  });
});

app.post("/registerUser", (req, ress) => {
  const name = req.body.name;
  const sername = req.body.sername;
  const username = req.body.username;
  const password = req.body.password;
  const salt = 10;

  bcrypt.hash(password, salt, (err, hash) => {
    if (!!err) {
      console.error(err);
    } else {
      con.query(
        `INSERT INTO datauser (name,sername,username,password) VALUES ('${name}','${sername}','${username}','${hash}')`,
        (err, res) => {
          if (!!err) {
            console.log(err);
          } else {
            ress.send({ data: true });
            console.log("Inserted datauser");
          }
        }
      );
    }
  });
});

app.listen(PORT, (err, ress) => {
  !!err ? console.error(err) : console.log("Connected");
});
