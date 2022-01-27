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
        const token = jwt.sign({ sub: 'test' }, 'abc', { algorithm: 'none' })
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
async function pedido(req, res){
    const config = require('../config.js');
    
    try{
        
        var {delivery, preparation} = req.query
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
                preparado: preparation,
                entregado: delivery
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