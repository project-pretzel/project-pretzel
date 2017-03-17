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
  id int NOT NULL AUTO_INCREMENT, 
  userid int NOT NULL, 
  msgtext TEXT, 
  msgtime DATETIME, 
  PRIMARY KEY (id), 
  FOREIGN KEY (userid) REFERENCES users(id)
);
