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

async function verifyToken(req, res){
    try{
        const secret = process.env.JWT_SECRET;
        const token = req.headers.authorization.replace('Bearer ', '');

        if (token) {
            verify(token, secret, (err, _) => {
                if (err) {
                    return setResponse(res, { statuscode: 401, ok: false, message: 'Token inválido0', data: {} });
                } else {
                    next();
                }
            });
        } else {
            return setResponse(res, { statuscode: 400, ok: false, message: 'Token no proveído.', data: {} });
        }
    }catch(e){
       console.error(e);
        res.status(500);
        res.end("Error al ejecutar la consulta");
    }
   
}
require('dotenv').config(); //configuracion dotenv
const fetch = require('node-fetch');
async function pedido(req, res, next){
    const config = require('../config.js');
    
    
    try{
        
        
        //console.log(datos)
        const token = req.headers.authorization.replace('Bearer ', '');
        console.log(token)
        try{
            if (token) {
                jwt.verify(token, config.SECRET_DELIVERYMAN, function(err, decoded) {
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

        

    
        /*try {
            var decoded = jwt.verify(token, config.SECRET_RESTAURANT);
          } catch(err) {
            // err
            console.log("ERROR DE CONTRASE;A")
          }*/

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
    }catch(e){
        res.status(500)
        res.send({
            statuscode: 500,
            ok: false,
            message: "Ha ocurrido un error inesperado.",
            data: {},
          });
    }
    
    function menus(){
      menu: String
    }
}

async function getpedido(req, res){

}


module.exports.index = index;
module.exports.pedido = pedido;
module.exports.getpedido = getpedido;