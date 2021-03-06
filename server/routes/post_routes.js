const { addUpdate } = require("../queries/feeds");
const { addDiscovery } = require("../queries/discoveries");
const { getUser, addUser, updatePassword } = require("../queries/users");
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
      await validate(req.body.password, userData);
      req.session.user = { id: userData.id };
      res.send({ ...userData, password: null });
    } catch (err) {
      res.send({ error: err });
    }
  });
  app.post("/api/resetPassword", async (req, res) => {
    try {
      const newPassword = await hashPassword(req.body.password);
      await updatePassword(req.body.id, newPassword);
      res.send(true);
    } catch (err) {
      console.log("password reset error", err);
    }
  });
};
