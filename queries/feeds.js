const db = require("../database/db_connection");

const getFeeds = (filter, count) => {
  db.query(
    `SELECT feeds.id, feeds.user_id, feeds.datetime, feeds.image_url, feeds.title, feeds.content FROM feeds, feeds_tags WHERE feeds.id = feeds_tags.feed_id AND feeds_tags.tag_id = (SELECT id FROM tags WHERE tag = $1)`,
    [filter]
  );
  // .then(res => {
  //   console.log("res, ", res);
  //   return res.slice(0, count);
  // })
  // .catch(err => console.log(err));
};

const addFeed = data => {
  db
    .query(
      `INSERT INTO feeds (user_id, datetime, image_url, title, content) VALUES ($1, $2, $3, $4, $5) RETURNING id`,
      [data.user_id, data.datetime, data.image_url, data.title, data.content]
    )
    .then(id => {
      db.query(
        `INSERT INTO feeds_tags (feed_id, tag_id) VALUES (${id}, (SELECT id FROM tags WHERE tag =$1) RETURNING feed_id`,
        [data.tag]
      );
    })
    .catch(err => console.log(err));
};

module.exports = { getFeeds, addFeed };
