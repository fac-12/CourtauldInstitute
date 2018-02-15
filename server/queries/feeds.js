const db = require("../database/db_connection");

const getUpdates = (count, skip) =>
  db
    .query(
      `SELECT updates.id, updates.user_id, users.first_name, users.last_name, updates.datetime, updates.image_url, updates.title, updates.content, string_agg(tags.tag, ',') AS tags FROM updates, updates_tags, tags, users WHERE updates.id = updates_tags.update_id AND updates_tags.tag_id = tags.id AND users.id = updates.user_id GROUP BY updates.id, users.first_name, users.last_name ORDER BY updates.datetime DESC`
    )
    .then(res => res.slice(skip, count + skip))
    .catch(err => console.log(err));

const addUpdate = async data => {
  try {
    const update = await db.query(
      `INSERT INTO updates (user_id, datetime, image_url, title, content) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [data.user_id, data.datetime, data.image_url, data.title, data.content]
    );
    const update_id = await Promise.all(
      data.tags.map(tag =>
        db.query(
          `INSERT INTO updates_tags (update_id, tag_id) VALUES (${
            update[0].id
          }, (SELECT id FROM tags WHERE tag = $1)) RETURNING update_id`,
          [tag]
        )
      )
    );
    update[0].tags = data.tags.join();
    update[0].first_name = data.first_name;
    update[0].last_name = data.last_name;
    return update[0];
  } catch (e) {
    console.log("db error", e);
  }
};

module.exports = { getUpdates, addUpdate };
