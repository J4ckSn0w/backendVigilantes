'use strict'
var con = require('../db/CLUSTER.js');
var sql = require('mssql');
const { password } = require('../db/CLUSTER.js');

//funcion ('/buscar/tractos_vigilantes/:unidad', (req, res) => { // ruta a consultar 
function getTracktoInfo(req,res){
    var unidad = req.params.unidad // parametro que recibe del frontend
    sql.connect(config).then(pool => {
        sql.on('error', err => { // ... error handler 
            console.log("Sql database connection error ", err);
        });
        return pool.request()
            .input('unidad', sql.VarChar(20), unidad) // peticion, datos de entrada hacia la basde de datos
            .execute('INTERCAMBIOS.dbo.spr_buscaOperadorInspeccion'); // ejecucion del procedimiento almacenado

    }).then(result => { // result variable donde se guardan los datos devueltos
        res.json(result); // imprimir respuesta para frontend
    }).catch(err => {
        // ... Imprimir alerta en caso de un error
        console.log(err);
    }).then(() => {
        return sql.close()
    });

};

module.exports = {
    getTracktoInfo
}