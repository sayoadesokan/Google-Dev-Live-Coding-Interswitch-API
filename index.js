const express = require('express');
const router = require('./routes/routes');
const app = express();

const port = process.env.PORT || 8080;

app.use('/api/v1', router);

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});