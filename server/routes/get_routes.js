const axios = require("axios");
const _ = require("lodash");
const { getUpdates } = require("../queries/feeds");
const { allUsers, oneUser } = require("../queries/users");
const { getDiscoveries } = require("../queries/discoveries");

module.exports = app => {
  app.get("/api/updates", async (req, res) => {
    try {
      const updatesData = await getUpdates(
        parseInt(req.query.count, 10),
        parseInt(req.query.skip, 10)
      );
      res.send(updatesData);
    } catch (err) {
      throw err;
    }
  });

  app.get("/api/directory", async (req, res) => {
    try {
      const usersData = await allUsers();
      res.send(usersData);
    } catch (err) {
      throw err;
    }
  });

  app.get("/api/profile", async (req, res) => {
    try {
      const userId = req.query.id
        ? req.query.id
        : req.session.user ? req.session.user.id : null;
      if (userId) {
        const profileData = await oneUser(userId);
        res.send({ ...profileData, password: null });
      } else {
        res.send({ error: "Please log in" });
      }
    } catch (err) {
      throw err;
    }
  });

  app.get("/api/discoveries", async (req, res) => {
    try {
      const discoveriesData = await getDiscoveries(
        parseInt(req.query.count, 10),
        parseInt(req.query.skip, 10)
      );
      res.send(discoveriesData);
    } catch (err) {
      throw err;
    }
  });
  app.get("/api/googlesheet", async (req, res) => {
    try {
      const getData = await axios.get(process.env.GOOGLE_API_1);
      const updateData = _.mapKeys(
        getData.data.values.map(([updateType, info]) => ({
          updateType,
          info
        })),
        "updateType"
      );
      res.send(updateData);
    } catch (err) {
      throw err;
    }
  });
  app.get("/api/logout", (req, res) => {
    req.session = null;
    res.send(true);
  });
};
