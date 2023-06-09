const express = require('express');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(express.json());


app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`the port is running on ${PORT}`);
});
