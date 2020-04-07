const mysql = require("mysql");
const { promisify } = require("util");
const { database } = require("./keys");

const db = mysql.createPool(database);

db.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("CONECCION CON LA BASE DE DATOS CERRADA");
    }
    if (err.code === "ER_CONT_COUNT_ERROR") {
      console.error("LA BASE DE DATOS TIENE DEMASIADAS CONECCIONES");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("CONECCION A BASE DE DATOS RECHAZADA");
    }
  }
  if (connection) connection.release();
  console.log("DB EN LINEA");
  return;
});

db.query = promisify(db.query);

module.exports = db;
