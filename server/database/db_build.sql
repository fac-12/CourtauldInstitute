BEGIN;
  DROP TABLE IF EXISTS updates_tags, updates, discoveries, tags, users;
  CREATE TABLE users
  (
    id serial PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(50),
    password VARCHAR(100),
    type VARCHAR(50),
    why_volunteer TEXT,
    about_me TEXT,
    picture_url VARCHAR(50),
    pw_reset BOOLEAN
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
    (first_name, last_name, email, password, type, why_volunteer, about_me, picture_url, pw_reset)
  VALUES
    ('Staff', 'Demo', 'admin@gmail.com', '$2a$10$KvGtPMwZ.yo2Wd9m48zeGeGNWon74vbXqNjPr9IrQuavhGrPtsdVi', 'staff', 'This is a demo account for a Courtauld staff member.' , 'This is a demo account for a Courtauld staff member.', 'https://i.imgur.com/2k7ergJ.jpg', true),
    ('Volunteer', 'Demo', 'volunteer@gmail.com', '$2a$10$KvGtPMwZ.yo2Wd9m48zeGeGNWon74vbXqNjPr9IrQuavhGrPtsdVi', 'volunteer', 'This is a demo account for a Courtauld volunteer.' , 'This is a demo account for a Courtauld volunteer.', 'https://i.imgur.com/kVzhOoJ.jpg', false);
  INSERT INTO tags
    (tag)
  VALUES
    ('project'),
    ('opportunities'),
    ('events/exhibitions'),
    ('questions')
  ;
  COMMIT;
