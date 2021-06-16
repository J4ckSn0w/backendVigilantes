var sql = require('mssql') // libreria que nos permite conectarnos a la base de datos

module.exports = config = {   // variable que sera exportada 
    "user": "paginas.47",  // usuario de la base de datos 
    "password": "C0ntrOl2015abc", // password de la base de datos 
    "server": "192.168.10.246",  // la direcion ip de donde esta la base de datos 
    "database": "CLUSTER",  // ala base de datos que te vas a conectar 
    "options": {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true,   // encrypt los datos o las peticiones haci como nuestros datos por ejemplo como el user, password
    }
};
sql.connect(config).then(pool => {
    if (pool.connected) {
      console.log('conexion exitosa')
    }

  })
// sql.connect(err => {  // verificacion de si se conecto correctamente ala base de datos 

//     if (err) {
//         throw err; // si no se conecto o hubo un erro entonces nos imprimira un error
//     }
//     console.log("Connection Successful !");  // si todo sale bien y se conecta ala base de datos nos imprimira este mensaje
// });

  // variable que vamos a exportar para poderla usar en otros archivos