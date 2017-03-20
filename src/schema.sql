/*  Execute this file from the command line by typing:
 *    mysql -u root < src/schema.sql
 *  to create the database and the tables.*/

CREATE DATABASE pretzel;

USE pretzel;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT, 
  googleid VARCHAR(25), 
  name VARCHAR(25), 
  email VARCHAR(25), 
  img TEXT, 
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT, 
  userid INT NOT NULL, 
  msgtext TEXT, 
  msgtime DATETIME, 
  PRIMARY KEY (id), 
  FOREIGN KEY (userid) REFERENCES users(id)
);


CREATE TABLE resultsItems (
  id INT NOT NULL AUTO_INCREMENT,
  maintitle TEXT,
  title TEXT,
  link TEXT,
  pubdate TEXT,
  description TEXT,
  PRIMARY KEY (id)
);

-- CREATE TABLE results (
--   id INT NOT NULL AUTO_INCREMENT, 
--   title TEXT, 
--   link TEXT, 
--   PRIMARY KEY (id), 
--   FOREIGN KEY (userid) REFERENCES users(id)
-- );

-- CREATE TABLE results_resultsItems (
--   results_id INT NOT NULL,
--   resultsItems_id INT NOT NULL,
--   PRIMARY KEY (results_id),
--   PRIMARY KEY (resultsItems_id)
-- );
