const Pool = require("pg").Pool;

const pool =  new Pool({
    user: "postgres",
    password: "Ticauris1991!",
    host: "localhost",
    port: "5432",
    database: "store_database"
});

module.exports = pool;

