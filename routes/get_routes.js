const { getFeeds } = require("../queries/feeds");

module.exports = app => {
  app.get("/api/feeds", async (req, res) => {
    try {
      const feedsData = await getFeeds(req.query.filter, req.query.count);
      res.send(feedsData);
    } catch (err) {
      throw err;
    }
  });
};
