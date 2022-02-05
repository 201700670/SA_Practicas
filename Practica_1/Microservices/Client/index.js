const express = require('express')
app = express()
const cors = require("cors");
require('dotenv').config();
bodyParser = require('body-parser')
app.use(cors({
  "methods": "GET,PUT,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
  credentials: true
}));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

const loginRouter = require('./routes/service.router');

app.use(loginRouter)
// usar este puerto para el servidor
var server = {
    port: 8081
  };

app.listen(server.port,'localhost', () => console.log(`Server started, listening on port: ${server.port}`));