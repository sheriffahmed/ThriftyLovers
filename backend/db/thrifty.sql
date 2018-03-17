DROP DATABASE IF EXISTS thrifty;
CREATE DATABASE thrifty;

\c thrifty;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE,
  password_digest VARCHAR
);
