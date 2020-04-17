const { Pool } = require("pg");
const { promisify } = require("util");
const { database } = require("./keys");

const db = new Pool(database);

module.exports = db;
