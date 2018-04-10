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
  profile_pic_url VARCHAR,
  budget_tier VARCHAR
   
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

CREATE TABLE message_log(
  id SERIAL PRIMARY KEY,
  to_user_id INTEGER,
  from_user_id INTEGER,
  message VARCHAR
  
);


INSERT INTO users (username, password_digest, first_name, last_name, dob, bio, gender, gender_pref, profile_pic_url, budget_tier) VALUES
('bobby',	'$2a$10$FgxWxQlmwDrO3Beb.3gTxePGJAm6txJTTby1hwiYkjcorAEqevq56',	'Bobby',	'Longface',	'1993-01-08',	'I''m a grad student who loves hot Cheetos. And I took two slices of pizza on free pizza Friday. I volunteer at the senior home on the weekends.', 	'M',	'F',	'https://images.unsplash.com/photo-1522609946836-c85cba8eb943?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=917cb3c845bb6aaffa27be9efa07e147&auto=format&fit=crop&w=334&q=80',	'Free'),
('jane',	'$2a$10$zKP8CryblIxMICvyZlOHquvJbyZXmCRl3o6imUr85XkTtQMumlGZK',	'Jane',	'Henry',	'1996-02-04',	'Friend of animals everywhere. Hardcore internet enthusiast and avid reader.', 	'F',	'M',	'https://slack-imgs.com/?c=1&url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1508330640077-ede7a6e8fd2f%3Fixlib%3Drb-0.3.5%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26s%3D8cce2c0f1010418b251b59ada36cbf4e%26auto%3Dformat%26fit%3Dcrop%26w%3D967%26q%3D80',	'Free'),
('test3',	'$2a$10$VZJV1cf3uj1Fq23GvhHGI.dtlq8zvo4BM/VflK.kTlWrH5StVUkQu',	'John',	'Doe',	'1997-06-08',	'This is test3 This is test3 This is test3 This is test3 This is test3 This is test3 This is test3 This is test3 This is test3 This is test3 This is test3', 	'M',	'ALL',	'https://res.cloudinary.com/thiftylovers/image/upload/v1522891022/23561409_1411449035626057_2354841275048199738_n_zgjglr.png',	'$'),
('kate.edwards',	'$2a$10$tc6CU1PsN25BFZ/K/TDV1uM9cYw5kjPYHv5dy.o2lno7uO4LwrI1S',	'Kate',	'Edwards',	'1989-05-08',	'Living in my own world. I''m naive and honest, straightforward.',	'F',	'M',	'https://res.cloudinary.com/thiftylovers/image/upload/v1522907340/random-user_imageF33_yzcldz.jpg',	'Free'),
('oliver.mitchell',	'$2a$10$LlUNlfB39mT8zXaVMMPaKOZAmdxYgvm8J6WAC3S887nfoaR0/Wh/C',	'Oliver',	'Mitchell',	'1988-05-08',	'Originally from Madrid, Spain. I love to get my hands dirty with new projects.',	'M',	'F',	'http://res.cloudinary.com/thiftylovers/image/upload/v1522907875/random-user_imageM3_fimai1.jpg',	'Free'),
('katie.davis',	'$2a$10$a36nfcSWKUNyp54EH.PRT.xNxunvtpkWk7Ktr38znfcabVzJZZjsC',	'Katie',	'Davis',	'1991-10-11',	'Passionate tv nerd and lifelong web junkie. I love sleeping.',	'F',	'M',	'https://res.cloudinary.com/thiftylovers/image/upload/v1522908254/random-user_imageF1_fbxsgx.jpg',	'$'),
('lucas.austin',	'$2a$10$UDGuzHKE4cmqtp8f5cUERexZs8wWz28qJXDAkLG4UBj9xo99JcztG',	'Lucas',	'Austin',	'1985-01-12',	'I''m a happy person that loves cats and climbing on mountains.',	'M',	'F',	'https://res.cloudinary.com/thiftylovers/image/upload/v1522908332/random-user_imageM45_nvpcl0.jpg',	'$'),
('henrik.rice',	'$2a$10$9aZsSaoqwrfwaD9tq9j7CudmBQMcIUnqiNvT0lX4zrmYRyP70XOZG',	'Henrik',	'Rice',	'1985-10-11',	'Wannabe surfer. Sometimes I read books and watch movies at the same time.',	'M',	'F',	'https://res.cloudinary.com/thiftylovers/image/upload/v1522909241/random-user_imageM42_i8yz2l.jpg',	'$$'),
('amanda.mccoy',	'$2a$10$5KSjVV1ZlyUKA0QYwq6txulQ/YdiSwDNM07ZWw8RbfrIX5ILVJNci',	'Amanda',	'McCoy',	'1986-10-11',	'I like movies, reading books and tea. I also listen to a lot of podcasts.',	'F',	'M',	'https://res.cloudinary.com/thiftylovers/image/upload/v1522909607/random-user_imageF6_bprivm.jpg',	'$$'),
('monica.peterson',	'$2a$10$BdKm8aoA4dL7oYX/qERiwu7LAz3cELjfvgFYAu3EcMJSte7Uj7osG',	'Monica',	'Peterson',	'1985-05-06',	'Dreamer who loves tee shirts, traveling and meeting new people.',	'F',	'M',	'https://res.cloudinary.com/thiftylovers/image/upload/v1522909927/random-user_imageF46_vgyfca.jpg',	'$$'),
('john.rogers',	'$2a$10$yQOXG9w.FybeWkVnIfmTOOVng7bgzuM.DBwK.GpS2Ohyu4OH0ACV6',	'John',	'Rogers',	'1990-02-03',	'I''m a happy person with a love for food. Originally from Michigan.',	'M',	'F',	'https://res.cloudinary.com/thiftylovers/image/upload/v1522910349/random-user_imageM4_n7ijlr.jpg',	'$$'),
('anton.barnett',	'$2a$10$NFwYNKHrgc0fGSiaHc3n3u2VHZujkYOShcFUy2CPO/iHWq3OtHoEu',	'Anton',	'Barnett',	'1985-04-12',	'Extreme social media practitioner and web enthusiast. I love bacon.',	'M',	'F',	'https://res.cloudinary.com/thiftylovers/image/upload/v1522910785/random-user_imageM12_pd2qxj.jpg',	'$'),
('samantha.allen',	'$2a$10$MpdP44inNjvIx8wVtEPkb.TqYapC7.2OQUZtusGP/GHDdBZLf4/U.',	'Samantha',	'Allen',	'1990-04-12',	'Deep thinker. Like talking about the world, religion and politics.',	'F',	'M',	'https://res.cloudinary.com/thiftylovers/image/upload/v1522910919/random-user_imageF37_eqci4n.jpg',	'$')