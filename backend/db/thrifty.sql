DROP DATABASE IF EXISTS thrifty;
CREATE DATABASE thrifty;

\c thrifty;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE,
  password_digest VARCHAR,
  first_name VARCHAR,
  last_name VARCHAR,
  dob DATE,
  bio VARCHAR,
  gender VARCHAR,
  gender_pref VARCHAR,
  profile_pic_url VARCHAR
   
);
