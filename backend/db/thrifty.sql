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

CREATE TABLE event_pref(
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  user_gender VARCHAR,
  user_gender_pref VARCHAR,
  event_id VARCHAR

);

CREATE TABLE matches(
  id SERIAL PRIMARY KEY,
  user1 INTEGER,
  user2 INTEGER,
  approved BOOLEAN NOT NULL

);

CREATE TABLE likes(
  id SERIAL PRIMARY KEY,
  match_id INTEGER,
  user_id INTEGER  
);