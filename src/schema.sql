/*  Execute this file from the command line by typing:
 *    mysql -u root < src/schema.sql
 *  to create the database and the tables.*/

CREATE DATABASE pretzel;

USE pretzel;

CREATE TABLE users (
  id int NOT NULL, 
  googleid VARCHAR(25), 
  name VARCHAR(25), 
  email VARCHAR(25), 
  img TEXT, 
  PRIMARY KEY (ID)
);

CREATE TABLE messages (
  id int NOT NULL, 
  userid int NOT NULL, 
  msgtext TEXT, 
  msgtime DATETIME, 
  PRIMARY KEY (ID), 
  FOREIGN KEY (userID) REFERENCES users(ID)
);
