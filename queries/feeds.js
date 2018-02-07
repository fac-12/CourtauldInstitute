const db = require("../database/db_connection");

const getUpdates = (count, skip) =>
  db
    .query(
      `SELECT updates.id, updates.user_id, updates.datetime, updates.image_url, updates.title, updates.content, string_agg(tags.tag, ',') AS tags FROM updates, updates_tags, tags WHERE updates.id = updates_tags.update_id AND updates_tags.tag_id = tags.id GROUP BY updates.id`
    )
    .then(res => res.slice(skip, count + skip))
    .catch(err => console.log(err));

const addUpdate = data =>
  db
    .query(
      `INSERT INTO updates (user_id, datetime, image_url, title, content) VALUES ($1, $2, $3, $4, $5) RETURNING id`,
      [data.user_id, data.datetime, data.image_url, data.title, data.content]
    )
    .then(res =>
      Promise.all(
        data.tags.map(tag =>
          db.query(
            `INSERT INTO updates_tags (update_id, tag_id) VALUES (${
              res[0].id
            }, (SELECT id FROM tags WHERE tag = $1)) RETURNING update_id`,
            [tag]
          )
        )
      )
    )
    .then(res => res[0][0])
    .catch(err => console.log(err));

module.exports = { getUpdates, addUpdate };
