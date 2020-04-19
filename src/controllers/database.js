const { Pool } = require("pg");
const { promisify } = require("util");
const { database } = require("./keys");

const db = new Pool(database);

db.connect((err, connection) => {
    if (err){
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAVE MANY CONNECTIONS');
        }
        if (err.code === 'ECONNREFUSED'){
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }

    if (connection) connection.release();
    console.log('DB IN LINE');
    return;
});
db.query = promisify(db.query);

module.exports = db;
