'use strict'
var con = require('../db/CLUSTER.js');
var sql = require('mssql');
const { password } = require('../db/CLUSTER.js');

function getInfoTrackto(req,res) {
    let trackto = req.body.trackto;

    sql.connect(con).then(pool => {
        sql.on('error', err => {
            // ... error handler  TG20149
            console.log("Sql database connection error ", err);
        });
        return pool.request()
            .execute('spr_obten_directorio');
            
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
    getInfoTrackto
}