CREATE DATABASE IF NOT EXISTS chat;

USE chat;

DROP TABLE IF EXISTS messages, users, rooms;

CREATE TABLE messages (
  id            INT AUTO_INCREMENT,
  text          VARCHAR(150),
  users_id       INT,
  rooms_id       INT,
  PRIMARY KEY   (id)
  -- FOREIGN KEY (users_id)
  --   REFERENCES users(id)
  --   ON UPDATE CASCADE
  --   ON DELETE CASCADE,
  -- FOREIGN KEY (rooms_id)
  --   REFERENCES rooms(id)
  --   ON UPDATE CASCADE
  --   ON DELETE CASCADE
);

CREATE TABLE users (
  id            INT AUTO_INCREMENT,
  name          VARCHAR(150),
  PRIMARY KEY   (id)
);

CREATE TABLE rooms (
  id            INT AUTO_INCREMENT,
  name          VARCHAR(150),
  PRIMARY KEY   (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

