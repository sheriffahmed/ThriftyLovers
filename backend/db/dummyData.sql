--
-- PostgreSQL database dump
--

-- Dumped from database version 10.3
-- Dumped by pg_dump version 10.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying,
    password_digest character varying,
    first_name character varying,
    last_name character varying,
    dob date,
    bio character varying,
    gender character varying,
    gender_pref character varying,
    profile_pic_url character varying,
    budget_tier character varying
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY users (id, username, password_digest, first_name, last_name, dob, bio, gender, gender_pref, profile_pic_url, budget_tier) FROM stdin;
1	test	$2a$10$3WZIagWMiicl4qGebEQPVe4XYNEjvzIDQNITowZ.cfowl4QF48BN2	John	Doe	1993-01-08	This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test 	M	F	https://res.cloudinary.com/thiftylovers/image/upload/v1522832694/e1c9d0d1206fbc5a34773664153fe743_w4oon5.gif	Free
4	test2	$2a$10$CEuGGINkLJcxyFHAp7xvbObqiUbtri2IXNm9yM7ng4m54o5dm67xK	Jane	Doe	1996-02-04	I am Jane Doe I am Jane Doe I am Jane Doe I am Jane Doe I am Jane Doe I am Jane Doe I am Jane Doe I am Jane Doe I am Jane Doe I am Jane Doe I am Jane Doe I am Jane Doe I am Jane Doe I am Jane Doe I am Jane Doe I am Jane Doe I am Jane Doe I am Jane Doe I am Jane Doe I am Jane Doe I am Jane Doe I am Jane Doe I am Jane Doe 	F	M	https://res.cloudinary.com/thiftylovers/image/upload/v1522877244/cat-3089169_960_720_raeq1q.jpg	Free
6	test3	$2a$10$VZJV1cf3uj1Fq23GvhHGI.dtlq8zvo4BM/VflK.kTlWrH5StVUkQu	John	Doe	1997-06-08	This is test3 This is test3 This is test3 This is test3 This is test3 This is test3 This is test3 This is test3 This is test3 This is test3 This is test3 	M	ALL	https://res.cloudinary.com/thiftylovers/image/upload/v1522891022/23561409_1411449035626057_2354841275048199738_n_zgjglr.png	$
9	kate.edwards	$2a$10$tc6CU1PsN25BFZ/K/TDV1uM9cYw5kjPYHv5dy.o2lno7uO4LwrI1S	Kate	Edwards	1989-05-08	Living in my own world. I'm naive and honest, straightforward.	F	M	https://res.cloudinary.com/thiftylovers/image/upload/v1522907340/random-user_imageF33_yzcldz.jpg	Free
11	oliver.mitchell	$2a$10$LlUNlfB39mT8zXaVMMPaKOZAmdxYgvm8J6WAC3S887nfoaR0/Wh/C	Oliver	Mitchell	1988-05-08	Originally from Madrid, Spain. I love to get my hands dirty with new projects.	M	F	http://res.cloudinary.com/thiftylovers/image/upload/v1522907875/random-user_imageM3_fimai1.jpg	Free
14	katie.davis	$2a$10$a36nfcSWKUNyp54EH.PRT.xNxunvtpkWk7Ktr38znfcabVzJZZjsC	Katie	Davis	1991-10-11	Passionate tv nerd and lifelong web junkie. I love sleeping.	F	M	https://res.cloudinary.com/thiftylovers/image/upload/v1522908254/random-user_imageF1_fbxsgx.jpg	$
16	lucas.austin	$2a$10$UDGuzHKE4cmqtp8f5cUERexZs8wWz28qJXDAkLG4UBj9xo99JcztG	Lucas	Austin	1985-01-12	I'm a happy person that loves cats and climbing on mountains.	M	F	https://res.cloudinary.com/thiftylovers/image/upload/v1522908332/random-user_imageM45_nvpcl0.jpg	$
19	henrik.rice	$2a$10$9aZsSaoqwrfwaD9tq9j7CudmBQMcIUnqiNvT0lX4zrmYRyP70XOZG	Henrik	Rice	1985-10-11	Wannabe surfer. Sometimes I read books and watch movies at the same time.	M	F	https://res.cloudinary.com/thiftylovers/image/upload/v1522909241/random-user_imageM42_i8yz2l.jpg	$$
20	amanda.mccoy	$2a$10$5KSjVV1ZlyUKA0QYwq6txulQ/YdiSwDNM07ZWw8RbfrIX5ILVJNci	Amanda	McCoy	1986-10-11	I like movies, reading books and tea. I also listen to a lot of podcasts.	F	M	https://res.cloudinary.com/thiftylovers/image/upload/v1522909607/random-user_imageF6_bprivm.jpg	$$
21	monica.peterson	$2a$10$BdKm8aoA4dL7oYX/qERiwu7LAz3cELjfvgFYAu3EcMJSte7Uj7osG	Monica	Peterson	1985-05-06	Dreamer who loves tee shirts, traveling and meeting new people.	F	M	https://res.cloudinary.com/thiftylovers/image/upload/v1522909927/random-user_imageF46_vgyfca.jpg	$$
23	john.rogers	$2a$10$yQOXG9w.FybeWkVnIfmTOOVng7bgzuM.DBwK.GpS2Ohyu4OH0ACV6	John	Rogers	1990-02-03	I'm a happy person with a love for food. Originally from Michigan.	M	F	https://res.cloudinary.com/thiftylovers/image/upload/v1522910349/random-user_imageM4_n7ijlr.jpg	$$
24	anton.barnett	$2a$10$NFwYNKHrgc0fGSiaHc3n3u2VHZujkYOShcFUy2CPO/iHWq3OtHoEu	Anton	Barnett	1985-04-12	Extreme social media practitioner and web enthusiast. I love bacon.	M	F	https://res.cloudinary.com/thiftylovers/image/upload/v1522910785/random-user_imageM12_pd2qxj.jpg	$
25	samantha.allen	$2a$10$MpdP44inNjvIx8wVtEPkb.TqYapC7.2OQUZtusGP/GHDdBZLf4/U.	Samantha	Allen	1990-04-12	Deep thinker. Like talking about the world, religion and politics.	F	M	https://res.cloudinary.com/thiftylovers/image/upload/v1522910919/random-user_imageF37_eqci4n.jpg	$
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 25, true);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- PostgreSQL database dump complete
--

