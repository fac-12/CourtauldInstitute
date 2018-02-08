const path = require("path");
const { QueryFile } = require("pg-promise");
const db = require("./db_connection");

const sql = file => QueryFile(path.join(__dirname, file), { minify: true });

const build = sql("./db_build.sql");

const runDbBuild = () => {
  db
    .query(build)
    .then(res => console.log("res", res))
    .catch(err => console.error("error", err));
};

runDbBuild();

module.exports = runDbBuild;
