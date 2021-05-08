const mysql = require("mysql2/promise");

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

async function connect() {
  const connection = await mysql.createConnection(config);
  return connection;
}

async function add(name) {
  const conn = await connect();
  const sql = `INSERT INTO people(name) values(?);`;
  const values = [name ?? "Gustavo"];
  const [rows] = await conn.query(sql, values);
  return rows;
}

async function list() {
  const conn = await connect();
  const [rows] = await conn.query(`SELECT * FROM people;`);
  return rows;
}

module.exports = { add, list };
