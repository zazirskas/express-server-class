const dotenv = require("dotenv")
dotenv.config({path: "src/.env"});

const {
  PORT,
  DB_URL,
  DB_PASS,
} = process.env;

module.exports = {
  PORT,
  DB_URL,
  DB_PASS,
};