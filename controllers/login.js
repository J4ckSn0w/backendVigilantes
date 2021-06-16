'use strict'
var con = require('../db/CLUSTER.js');
var sql = require('mssql');
const { password } = require('../db/CLUSTER.js');


//Metodo de prueba
function home(req, res) {
    res.status(200).send({
        message: "Home en backendVigilantes",
    });
}

function login(req,res) {
    var mensaje = req;
    //console.log(mensaje);

    var usuario = req.body.email;
    var pass = req.body.password;
    /*
    return res.status(200).send({
        message:"Login: " + usuario + " Pass: " + pass
    });*/
    
    sql.connect(con).then(pool => {
        sql.on('error', err => {
            // ... error handler  TG20149
            console.log("Sql database connection error ", err);
        });
        return pool.request()
            .input('usuario', sql.VarChar(30), usuario)
            .input('pass', sql.VarChar(30), pass)
            .execute('spruser');
    })
    .catch(err => {
        console.log("Error en consulta SQL");
        console.log(err);
    })
    .then(result => {
        res.json(result);
    }).then(() => {
        return sql.close()
    });
}

module.exports = {
    home,
    login
}