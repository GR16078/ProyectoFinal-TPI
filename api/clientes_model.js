/*
Conexión y modelado de la base de datos a la hora de registrar los productos
*/
const conexion = require("./conexion")
module.exports = {
  insertar(nombre, telefono, direccion, tarjeta) {
    return new Promise((resolve, reject) => {
      conexion.query(`insert into clientes
            (nombre, telefono, direccion, tarjeta)
            values
            (?, ?, ?, ?)`,
        [nombre, telefono, direccion, tarjeta], (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados.insertId);
        });
    });
  },
}
