const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'prod') {
  const configFile = `./.env`;
  dotenv.config({ path: configFile });
} else {
  dotenv.config();
}

module.exports = {
  MERCHANT_CODE: process.env.MERCHANT_CODE,
  PAY_ID: process.env.PAY_ID,
};
