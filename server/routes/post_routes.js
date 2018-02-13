const { addUpdate } = require("../queries/feeds");
const { addDiscovery } = require("../queries/discoveries");
const { getUser, addUser } = require("../queries/users");
const {
  hashPassword,
  generatePassword,
  validate
} = require("../authentication/bcrypt");
const newUserEmail = require("../authentication/email");

module.exports = app => {
  app.post("/api/addUpdate", async (req, res) => {
    try {
      const updateAdded = await addUpdate(req.body);
      res.send(updateAdded);
    } catch (err) {
      console.log("Add update error ", err);
    }
  });
  app.post("/api/addDiscovery", async (req, res) => {
    try {
      const discoveryAdded = await addDiscovery(req.body);
      res.send(discoveryAdded);
    } catch (err) {
      console.log("Add discovery error ", err);
    }
  });
  app.post("/api/addNewUser", async (req, res) => {
    try {
      const userExists = await getUser(req.body.email);
      if (!userExists) {
        const userPassword = generatePassword();
        req.body.password = await hashPassword(userPassword);
        const newUserData = await addUser(req.body);
        newUserEmail(newUserData[0], userPassword);
        res.send(newUserData);
      } else {
        res.send("User already exists!");
      }
    } catch (err) {
      console.log("Add new user error: ", err);
    }
  });
  app.post("/api/login", async (req, res) => {
    try {
      const userData = await getUser(req.body.email);
      console.log("here,", userData);
      const valid = await validate(req.body.password, userData);
      req.session.user = { id: userData.id };
      res.send(userData);
    } catch (err) {
      console.log("Login error: ", err);
    }
  });
};
