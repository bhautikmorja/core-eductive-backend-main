// eslint-disable-next-line @typescript-eslint/no-var-requires
const donenv = require('dotenv');

donenv.config();

module.exports = {
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
};
