const jwt = require('jsonwebtoken')



async function index(req, res){
    try{
        res.send({
            message: "controler index cliente"
        })
    }catch(e){
       console.error(e);
        res.status(500);
        res.end("Error al ejecutar la consulta");
    }
   
}
const config = require('../config.js');
async function verifyToken(req, res, next){
    try{
        const token = req.headers.authorization.replace('Bearer ', '');
        console.log("\n******************* AUTORIZACION PARA INGRESAR PORTAL CLIENTE *******************\n")
        try{
            if (token) {
                jwt.verify(token, config.SECRET_CLIENT, function(err, decoded) {
                    
                    if(err){
                        
                        res.send({ statuscode: 401, ok: false, message: 'Token inválido0', data: {} });
                    }else{
                        next();
                    }
                });
            }
        }
          catch {
            res.send({ statuscode: 400, ok: false, message: 'Token no proveído.', data: {} });
        }
    }catch(e){
       console.error(e);
        res.status(500);
        res.end("Error al ejecutar la consulta");
    }
   
}
require('dotenv').config(); 
const fetch = require('node-fetch');

async function pedido(req, res, next){
    try{
        //ACCESO DE EL CLIENTE (LOGIN)
        verifyToken(req,res,next)
        
        var {pedido}  = req.body;
        var menu= pedido
        let optionsmenu={
            menu:Object
        }
        optionsmenu=menu

        let data={
            pedido: {
                no: Math.round(Math.random() * (900 - 100) + 100),
                menu: optionsmenu.menu,
                preparado: "pending",
                entregado: "pending"
            }
        }

        res.send({
            statuscode: 200,
            ok: true,
            message: "Pedido realizado correctamente",
            data,
          });
          // ENVIA DATOS AL RESTAURANTE
          await fetch('http://localhost:8082/restaurant/receive-order', 
          {
              method: 'POST',
              body: JSON.stringify({data}),
              headers: {'Content-Type': 'application/json'}
          });

        console.log("> Pedido realizado correctamente enviado \n")
    }catch(e){
        res.status(500)
        res.send({
            statuscode: 500,
            ok: false,
            message: "Ha ocurrido un error inesperado.",
            data: {},
          });
    }
}

async function getpedido(req, res){
    
}

async function viewPedido(req, res, next){
    try{
        //ACCESO DE EL CLIENTE (LOGIN)

        console.log("\n*********************** VERIFICAR ESTADO DEL PEDIDO AL RESTAURANTE *********************\n")
        console.log(req.body.data)
        res.send(JSON.stringify(req.body.data));

    }catch(e){
        res.status(500)
        res.send({
            statuscode: 500,
            ok: false,
            message: "Ha ocurrido un error inesperado.",
            data: {},
          });
    }
    
}


async function viewEntrega(req, res, next){
    try{
        //ACCESO DE EL CLIENTE (LOGIN)
        
        console.log("\n*********************** VERIFICAR ESTADO DEL PEDIDO AL REPARTIDOR *********************\n")
        console.log(req.body.data)
        res.send(JSON.stringify(req.body.data));

    }catch(e){
        res.status(500)
        res.send({
            statuscode: 500,
            ok: false,
            message: "Ha ocurrido un error inesperado.",
            data: {},
          });
    }
    
}
module.exports.index = index;
module.exports.pedido = pedido;
module.exports.viewPedido = viewPedido;
module.exports.viewEntrega = viewEntrega;
module.exports.getpedido = getpedido;