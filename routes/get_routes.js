const { getUpdates } = require("../queries/feeds");
const { allUsers } = require("../queries/users");

module.exports = app => {
  app.get("/api/updates", async (req, res) => {
    try {
      const updatesData = await getUpdates(req.query.count, req.query.skip);
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
};
