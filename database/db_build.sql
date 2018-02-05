BEGIN;

DROP TABLE IF EXISTS users, feeds, tags, feeds_tags;

CREATE TABLE users (
  id serial PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  email VARCHAR(50),
  password VARCHAR(50),
  type VARCHAR(50),
  why_volunteer TEXT,
  about_me TEXT,
  picture_url VARCHAR(50)
);

CREATE TABLE feeds (
  id serial PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  datetime BIGINT NOT NULL,
  image_url VARCHAR(50),
  title VARCHAR(200),
  content TEXT
);

CREATE TABLE tags (
  id serial PRIMARY KEY,
  tag VARCHAR(50)
);

CREATE TABLE feeds_tags(
  feed_id INTEGER REFERENCES feeds(id),
  tag_id INTEGER REFERENCES tags(id)
);

COMMIT;
