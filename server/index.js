const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cookieSession = require("cookie-session");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cookieSession({
    name: "session",
    secret: "process.env.SECRET",
    maxAge: 24 * 60 * 60 * 1000
  })
);

require("./routes/get_routes")(app);
require("./routes/post_routes")(app);
require("./routes/put_routes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "client", "build", "index.html"));
  });
}

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(_dirname, "client", "build", "index.html"));
//   });
// }

app.disabled("x-powered-by");

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = { app };
