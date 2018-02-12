const { addUpdate } = require("../queries/feeds");
const { addDiscovery } = require("../queries/discoveries");

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
      console.log("request body: ", req.body);
      const discoveryAdded = await addDiscovery(req.body);
      res.send(discoveryAdded);
    } catch (err) {
      console.log("Add discovery error ", err);
    }
  });
};
