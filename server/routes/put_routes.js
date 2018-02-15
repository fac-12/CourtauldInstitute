const { updateUser } = require("../queries/users");

module.exports = app => {
  app.put("/api/updateProfile", async (req, res) => {
    try {
      const profileData = await updateUser(req.body);
      res.send({ ...profileData, password: null });
    } catch (e) {
      console.log("Update profile error", e);
    }
  });
};
