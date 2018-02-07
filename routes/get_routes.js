const { getUpdates } = require("../queries/feeds");

module.exports = app => {
  app.get("/api/updates", async (req, res) => {
    try {
      const updatesData = await getUpdates(req.query.count, req.query.skip);
      res.send(updatesData);
    } catch (err) {
      throw err;
    }
  });
};
