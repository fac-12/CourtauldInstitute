const { addFeed } = require("../queries/feeds");

module.exports = app => {
  app.post("/api/addFeed", async (req, res) => {
    try {
      const feedAdded = await addFeed(req.body);
      res.send(feedAdded);
    } catch (err) {
      console.log("Add feed error ", err);
    }
  });
};
