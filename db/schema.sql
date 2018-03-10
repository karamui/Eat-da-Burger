-- create burger database
DROP DATABASE IF EXISTS burgers_db; -- drop database if it exists (ONLY FOR USE IN HW)
CREATE DATABASE burgers_db;

-- select burger database
USE burgers_db;

-- create burger table
CREATE TABLE burgers (
id INTEGER(10) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(250) NOT NULL,
devoured BOOLEAN NOT NULL,
PRIMARY KEY (id)
);