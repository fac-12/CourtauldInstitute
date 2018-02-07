BEGIN;
  DROP TABLE IF EXISTS users, feeds, updates, tags, feeds_tags, updates_tags;
  CREATE TABLE users
  (
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
  CREATE TABLE updates
  (
    id serial PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    datetime BIGINT NOT NULL,
    image_url VARCHAR(50),
    title VARCHAR(200),
    content TEXT
  );
  CREATE TABLE discoveries
  (
    id serial PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    datetime BIGINT NOT NULL,
    image_url VARCHAR(50),
    title VARCHAR(200),
    content TEXT
  );
  CREATE TABLE tags
  (
    id serial PRIMARY KEY,
    tag VARCHAR(50)
  );
  CREATE TABLE updates_tags
  (
    update_id INTEGER REFERENCES updates(id),
    tag_id INTEGER REFERENCES tags(id)
  );
  INSERT INTO users
    (first_name, last_name, email, type)
  VALUES
    ('Shannon', 'Wedgwood', 'shannonjensen@gmail.com', 'volunteer' ),
    ('Jem', 'Abulhawa', 'jemila.abulhawa@gmail.com', 'staff'),
    ('Fatimat', 'Gbaja', 'gbajaf@yahoo.co.uk', 'volunteer');
  INSERT INTO updates
    (user_id, datetime, title, content)
  VALUES
    (2, 1517864152865, 'Postal Museum next Thurs 16th 10am', 'Just a reminder that we have a group trip to visit the new digitisation studio at the Postal Museum next week. Faye will meet you out the front just before 10am. If you''re late please go to reception and they will contact someone to take you up.'),
    (2, 1517864152865, 'Black and White thinking at the National Gallery', 'In a world of Instagram filters, this exhibition takes you back to the tradition of painting in black and white- it''s had some really good reviews so far, do let me know what you think. http://bit.ly/2hvmEAx');
  INSERT INTO tags
    (tag)
  VALUES
    ('project'),
    ('opportunities'),
    ('events/exhibitions'),
    ('discoveries'),
    ('questions')
  ;
  INSERT INTO updates_tags
    (update_id, tag_id)
  VALUES
    (1, 1),
    (1, 2),
    (2, 1);
  COMMIT;
