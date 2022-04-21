const express= require('express');
const cors = require("cors");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8000;
const app= express();
let contador;

app.use(cors({
    "methods": "GET,PUT,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    credentials: true
}));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.listen(PORT, ()=> console.log(`Server running on port ${PORT} `));

/////PRIMERA PETICION HEADER

app.get('/',  function(req, res){
    if(contador==undefined){
        contador=0;
    }
    res.send({data:contador});
});

app.post('/',  function(req, res){
    if(contador==undefined){
        contador=0;
    }
    contador=contador+1;
    res.send({status: 200, data: contador})
});
