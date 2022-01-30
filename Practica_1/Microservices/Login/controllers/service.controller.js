const jwt = require('jsonwebtoken')



async function index(req, res){
    try{
        res.send({
            message: "controler index"
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
async function login(req, res){
    const config = require('../config.js');
    
    try{
        var {username, password}  = req.body;
        if ( username == 'deliveryman' && password == '123') {
            const token =jwt.sign({sub: config.SECRET_DELIVERYMAN }, username+password)
            res.send({
              statuscode: 200,
              ok: true,
              message: "Ha iniciado sesion correctamente",
              data: { token },
            });
        }else if ( username == 'client' && password == '456') {
            const token =jwt.sign({sub: config.SECRET_CLIENT }, username+password)
            
            res.send({
              statuscode: 200,
              ok: true,
              message: "Ha iniciado sesion correctamente",
              data: { token },
            });
        }else if ( username == 'restaurant' && password == '789') {
            const token =jwt.sign({sub: config.SECRET_RESTAURANT }, username+password)
            
            res.send({
              statuscode: 200,
              ok: true,
              message: "Ha iniciado sesion correctamente",
              data: { token },
            });
        } else {
            res.send(res, {
                statuscode: 501,
                ok: false,
                message: `Ha ocurrido un error inesperado.`,
                data: {},
            });
        }
        res.end()
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
module.exports.login = login;