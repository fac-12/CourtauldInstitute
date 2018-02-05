const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.disabled("x-powered-by");

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = { app };
