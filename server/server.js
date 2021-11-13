const cors = require("cors");
const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypy");
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/view"));

app.post("/loginUser", (req, response) => {
  const session = req.session;
  const username = req.body.username;
  const plainPassword = req.body.password;

  con.query(`SELETE * FROM datauser WHERE username=${username}`, (err, res) => {
    const data = res.json();
    const hash = data.password;
    if (!!err) {
      console.error(err);
    } else {
      bcrypt.compare(plainPassword, hash, (err, isTrue) => {
        response.send(isTrue);
      });
    }
  });
});

app.post("/registerUser", (req, res) => {
  const name = req.body.name;
  const sername = req.body.sername;
  const username = req.body.username;
  const password = req.body.password;
  const salt = Math.random();

  bcrypt.hash(password, salt, (err, hash) => {
    if (!!err) {
      console.error(err);
    } else {
      con.query(
        `INSERT INTO datauser (name,sername,username,password,) values ('${name}','${sername}','${username}','${hash}')`,
        (err, res) => {
          !!err ? console.error(err) : console.log("inserted");
        }
      );
    }
  });
});
