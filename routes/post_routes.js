const { addUpdate } = require("../queries/feeds");

module.exports = app => {
  app.post("/api/addUpdate", async (req, res) => {
    try {
      const updateAdded = await addUpdate(req.body);
      res.send(updateAdded);
    } catch (err) {
      console.log("Add update error ", err);
    }
  });
};
