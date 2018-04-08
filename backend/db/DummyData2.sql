--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE admin;
ALTER ROLE admin WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN NOREPLICATION NOBYPASSRLS;
CREATE ROLE c4q;
ALTER ROLE c4q WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'md58147cfae39b502ce7d17de306c06ed04';
CREATE ROLE cc4q1;
ALTER ROLE cc4q1 WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN NOREPLICATION NOBYPASSRLS;
CREATE ROLE patrick;
ALTER ROLE patrick WITH NOSUPERUSER INHERIT NOCREATEROLE CREATEDB LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'md555f99ba06095c26c49da030ce42aac4f';
CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'md500e2cf72c3b28072ff50123391480feb';
CREATE ROLE thriftylovers;
ALTER ROLE thriftylovers WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN NOREPLICATION NOBYPASSRLS;






--
-- Database creation
--

CREATE DATABASE c4q WITH TEMPLATE = template0 OWNER = c4q;
CREATE DATABASE "final-exam" WITH TEMPLATE = template0 OWNER = c4q;
CREATE DATABASE practice WITH TEMPLATE = template0 OWNER = c4q;
CREATE DATABASE puppies WITH TEMPLATE = template0 OWNER = c4q;
REVOKE CONNECT,TEMPORARY ON DATABASE template1 FROM PUBLIC;
GRANT CONNECT ON DATABASE template1 TO PUBLIC;
CREATE DATABASE thrifty WITH TEMPLATE = template0 OWNER = c4q;
CREATE DATABASE userlist WITH TEMPLATE = template0 OWNER = c4q;


\connect c4q

SET default_transaction_read_only = off;

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

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: schools; Type: TABLE; Schema: public; Owner: c4q
--

CREATE TABLE public.schools (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.schools OWNER TO c4q;

--
-- Name: schools_id_seq; Type: SEQUENCE; Schema: public; Owner: c4q
--

CREATE SEQUENCE public.schools_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.schools_id_seq OWNER TO c4q;

--
-- Name: schools_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: c4q
--

ALTER SEQUENCE public.schools_id_seq OWNED BY public.schools.id;


--
-- Name: teachers; Type: TABLE; Schema: public; Owner: c4q
--

CREATE TABLE public.teachers (
    id integer NOT NULL,
    name character varying NOT NULL,
    subject character varying,
    schoolid integer
);


ALTER TABLE public.teachers OWNER TO c4q;

--
-- Name: teachers_id_seq; Type: SEQUENCE; Schema: public; Owner: c4q
--

CREATE SEQUENCE public.teachers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teachers_id_seq OWNER TO c4q;

--
-- Name: teachers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: c4q
--

ALTER SEQUENCE public.teachers_id_seq OWNED BY public.teachers.id;


--
-- Name: schools id; Type: DEFAULT; Schema: public; Owner: c4q
--

ALTER TABLE ONLY public.schools ALTER COLUMN id SET DEFAULT nextval('public.schools_id_seq'::regclass);


--
-- Name: teachers id; Type: DEFAULT; Schema: public; Owner: c4q
--

ALTER TABLE ONLY public.teachers ALTER COLUMN id SET DEFAULT nextval('public.teachers_id_seq'::regclass);


--
-- Data for Name: schools; Type: TABLE DATA; Schema: public; Owner: c4q
--

COPY public.schools (id, name) FROM stdin;
1	East High School
2	West High School
3	Central High School
\.


--
-- Data for Name: teachers; Type: TABLE DATA; Schema: public; Owner: c4q
--

COPY public.teachers (id, name, subject, schoolid) FROM stdin;
1	Herman Miller	Biology	2
2	Frank Gehry	English	1
3	Ai Weiwei	History	2
4	Cindy Sherman	Math	3
5	Yayoi Kusama	Gym	1
6	Marina Abramovic	History	1
7	Richard Serra	Art	3
8	Louise Bourgeois	English	2
9	Kara Walker	Chemistry	3
10	Anish Kapoor	Physics	1
11	Yoko Ono	Music	2
12	Agnes Martin	Math	3
13	Helio Oticica	Gym	2
14	Carl Pope	Biology	1
15	David Hockney	Gym	3
16	William Leavitt	Math	2
17	Eduardo Kac	English	3
18	Steve McQueen	History	3
19	Takashi Murakami	Physics	2
20	Nam June Paik	Music	1
21	Gerhard Richter	Art	\N
22	Andy Warhol	Chemistry	\N
23	Jenny Holtzer	Math	\N
\.


--
-- Name: schools_id_seq; Type: SEQUENCE SET; Schema: public; Owner: c4q
--

SELECT pg_catalog.setval('public.schools_id_seq', 1, false);


--
-- Name: teachers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: c4q
--

SELECT pg_catalog.setval('public.teachers_id_seq', 1, false);


--
-- Name: schools schools_pkey; Type: CONSTRAINT; Schema: public; Owner: c4q
--

ALTER TABLE ONLY public.schools
    ADD CONSTRAINT schools_pkey PRIMARY KEY (id);


--
-- Name: teachers teachers_pkey; Type: CONSTRAINT; Schema: public; Owner: c4q
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\connect -reuse-previous=on "dbname='final-exam'"

SET default_transaction_read_only = off;

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

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: schools; Type: TABLE; Schema: public; Owner: c4q
--

CREATE TABLE public.schools (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.schools OWNER TO c4q;

--
-- Name: schools_id_seq; Type: SEQUENCE; Schema: public; Owner: c4q
--

CREATE SEQUENCE public.schools_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.schools_id_seq OWNER TO c4q;

--
-- Name: schools_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: c4q
--

ALTER SEQUENCE public.schools_id_seq OWNED BY public.schools.id;


--
-- Name: teachers; Type: TABLE; Schema: public; Owner: c4q
--

CREATE TABLE public.teachers (
    id integer NOT NULL,
    name character varying NOT NULL,
    subject character varying,
    schoolid integer
);


ALTER TABLE public.teachers OWNER TO c4q;

--
-- Name: teachers_id_seq; Type: SEQUENCE; Schema: public; Owner: c4q
--

CREATE SEQUENCE public.teachers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teachers_id_seq OWNER TO c4q;

--
-- Name: teachers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: c4q
--

ALTER SEQUENCE public.teachers_id_seq OWNED BY public.teachers.id;


--
-- Name: schools id; Type: DEFAULT; Schema: public; Owner: c4q
--

ALTER TABLE ONLY public.schools ALTER COLUMN id SET DEFAULT nextval('public.schools_id_seq'::regclass);


--
-- Name: teachers id; Type: DEFAULT; Schema: public; Owner: c4q
--

ALTER TABLE ONLY public.teachers ALTER COLUMN id SET DEFAULT nextval('public.teachers_id_seq'::regclass);


--
-- Data for Name: schools; Type: TABLE DATA; Schema: public; Owner: c4q
--

COPY public.schools (id, name) FROM stdin;
1	East High School
2	West High School
3	Central High School
\.


--
-- Data for Name: teachers; Type: TABLE DATA; Schema: public; Owner: c4q
--

COPY public.teachers (id, name, subject, schoolid) FROM stdin;
1	Herman Miller	Biology	2
2	Frank Gehry	English	1
3	Ai Weiwei	History	2
4	Cindy Sherman	Math	3
5	Yayoi Kusama	Gym	1
6	Marina Abramovic	History	1
7	Richard Serra	Art	3
8	Louise Bourgeois	English	2
9	Kara Walker	Chemistry	3
10	Anish Kapoor	Physics	1
11	Yoko Ono	Music	2
12	Agnes Martin	Math	3
13	Helio Oticica	Gym	2
14	Carl Pope	Biology	1
15	David Hockney	Gym	3
16	William Leavitt	Math	2
17	Eduardo Kac	English	3
18	Steve McQueen	History	3
19	Takashi Murakami	Physics	2
20	Nam June Paik	Music	1
21	Gerhard Richter	Art	\N
22	Andy Warhol	Chemistry	\N
23	Jenny Holtzer	Math	\N
\.


--
-- Name: schools_id_seq; Type: SEQUENCE SET; Schema: public; Owner: c4q
--

SELECT pg_catalog.setval('public.schools_id_seq', 1, false);


--
-- Name: teachers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: c4q
--

SELECT pg_catalog.setval('public.teachers_id_seq', 1, false);


--
-- Name: schools schools_pkey; Type: CONSTRAINT; Schema: public; Owner: c4q
--

ALTER TABLE ONLY public.schools
    ADD CONSTRAINT schools_pkey PRIMARY KEY (id);


--
-- Name: teachers teachers_pkey; Type: CONSTRAINT; Schema: public; Owner: c4q
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\connect postgres

SET default_transaction_read_only = off;

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

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- PostgreSQL database dump complete
--

\connect practice

SET default_transaction_read_only = off;

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

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: tv_show; Type: TABLE; Schema: public; Owner: c4q
--

CREATE TABLE public.tv_show (
    title character varying(100),
    genre character varying(50)
);


ALTER TABLE public.tv_show OWNER TO c4q;

--
-- Data for Name: tv_show; Type: TABLE DATA; Schema: public; Owner: c4q
--

COPY public.tv_show (title, genre) FROM stdin;
Avatar: The Last Airbender	Cartoon
Seinfeld	Comedy
\.


--
-- PostgreSQL database dump complete
--

\connect puppies

SET default_transaction_read_only = off;

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

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: pups; Type: TABLE; Schema: public; Owner: c4q
--

CREATE TABLE public.pups (
    id integer NOT NULL,
    name character varying,
    breed character varying,
    age integer,
    sex character varying
);


ALTER TABLE public.pups OWNER TO c4q;

--
-- Name: pups_id_seq; Type: SEQUENCE; Schema: public; Owner: c4q
--

CREATE SEQUENCE public.pups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pups_id_seq OWNER TO c4q;

--
-- Name: pups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: c4q
--

ALTER SEQUENCE public.pups_id_seq OWNED BY public.pups.id;


--
-- Name: pups id; Type: DEFAULT; Schema: public; Owner: c4q
--

ALTER TABLE ONLY public.pups ALTER COLUMN id SET DEFAULT nextval('public.pups_id_seq'::regclass);


--
-- Data for Name: pups; Type: TABLE DATA; Schema: public; Owner: c4q
--

COPY public.pups (id, name, breed, age, sex) FROM stdin;
1	Tyler	Retrieved	3	M
\.


--
-- Name: pups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: c4q
--

SELECT pg_catalog.setval('public.pups_id_seq', 1, true);


--
-- Name: pups pups_pkey; Type: CONSTRAINT; Schema: public; Owner: c4q
--

ALTER TABLE ONLY public.pups
    ADD CONSTRAINT pups_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\connect template1

SET default_transaction_read_only = off;

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

--
-- Name: DATABASE template1; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE template1 IS 'default template for new databases';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- PostgreSQL database dump complete
--

\connect thrifty

SET default_transaction_read_only = off;

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

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: event_pref; Type: TABLE; Schema: public; Owner: c4q
--

CREATE TABLE public.event_pref (
    id integer NOT NULL,
    user_id integer,
    user_gender character varying,
    user_gender_pref character varying,
    event_id character varying
);


ALTER TABLE public.event_pref OWNER TO c4q;

--
-- Name: event_pref_id_seq; Type: SEQUENCE; Schema: public; Owner: c4q
--

CREATE SEQUENCE public.event_pref_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.event_pref_id_seq OWNER TO c4q;

--
-- Name: event_pref_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: c4q
--

ALTER SEQUENCE public.event_pref_id_seq OWNED BY public.event_pref.id;


--
-- Name: likes; Type: TABLE; Schema: public; Owner: c4q
--

CREATE TABLE public.likes (
    id integer NOT NULL,
    match_id integer,
    user_id integer
);


ALTER TABLE public.likes OWNER TO c4q;

--
-- Name: likes_id_seq; Type: SEQUENCE; Schema: public; Owner: c4q
--

CREATE SEQUENCE public.likes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.likes_id_seq OWNER TO c4q;

--
-- Name: likes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: c4q
--

ALTER SEQUENCE public.likes_id_seq OWNED BY public.likes.id;


--
-- Name: matches; Type: TABLE; Schema: public; Owner: c4q
--

CREATE TABLE public.matches (
    id integer NOT NULL,
    user1 integer,
    user2 integer,
    approved boolean NOT NULL
);


ALTER TABLE public.matches OWNER TO c4q;

--
-- Name: matches_id_seq; Type: SEQUENCE; Schema: public; Owner: c4q
--

CREATE SEQUENCE public.matches_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.matches_id_seq OWNER TO c4q;

--
-- Name: matches_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: c4q
--

ALTER SEQUENCE public.matches_id_seq OWNED BY public.matches.id;


--
-- Name: message_log; Type: TABLE; Schema: public; Owner: c4q
--

CREATE TABLE public.message_log (
    id integer NOT NULL,
    to_user_id integer,
    from_user_id integer,
    message character varying
);


ALTER TABLE public.message_log OWNER TO c4q;

--
-- Name: message_log_id_seq; Type: SEQUENCE; Schema: public; Owner: c4q
--

CREATE SEQUENCE public.message_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.message_log_id_seq OWNER TO c4q;

--
-- Name: message_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: c4q
--

ALTER SEQUENCE public.message_log_id_seq OWNED BY public.message_log.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: c4q
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


ALTER TABLE public.users OWNER TO c4q;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: c4q
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO c4q;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: c4q
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: event_pref id; Type: DEFAULT; Schema: public; Owner: c4q
--

ALTER TABLE ONLY public.event_pref ALTER COLUMN id SET DEFAULT nextval('public.event_pref_id_seq'::regclass);


--
-- Name: likes id; Type: DEFAULT; Schema: public; Owner: c4q
--

ALTER TABLE ONLY public.likes ALTER COLUMN id SET DEFAULT nextval('public.likes_id_seq'::regclass);


--
-- Name: matches id; Type: DEFAULT; Schema: public; Owner: c4q
--

ALTER TABLE ONLY public.matches ALTER COLUMN id SET DEFAULT nextval('public.matches_id_seq'::regclass);


--
-- Name: message_log id; Type: DEFAULT; Schema: public; Owner: c4q
--

ALTER TABLE ONLY public.message_log ALTER COLUMN id SET DEFAULT nextval('public.message_log_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: c4q
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: event_pref; Type: TABLE DATA; Schema: public; Owner: c4q
--

COPY public.event_pref (id, user_id, user_gender, user_gender_pref, event_id) FROM stdin;
\.


--
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: c4q
--

COPY public.likes (id, match_id, user_id) FROM stdin;
\.


--
-- Data for Name: matches; Type: TABLE DATA; Schema: public; Owner: c4q
--

COPY public.matches (id, user1, user2, approved) FROM stdin;
\.


--
-- Data for Name: message_log; Type: TABLE DATA; Schema: public; Owner: c4q
--

COPY public.message_log (id, to_user_id, from_user_id, message) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: c4q
--

COPY public.users (id, username, password_digest, first_name, last_name, dob, bio, gender, gender_pref, profile_pic_url, budget_tier) FROM stdin;
1	test	$2a$10$3WZIagWMiicl4qGebEQPVe4XYNEjvzIDQNITowZ.cfowl4QF48BN2	John	Doe	1993-01-08	This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test 	M	F	https://images.unsplash.com/photo-1522609946836-c85cba8eb943?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=917cb3c845bb6aaffa27be9efa07e147&auto=format&fit=crop&w=334&q=80	Free
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
-- Name: event_pref_id_seq; Type: SEQUENCE SET; Schema: public; Owner: c4q
--

SELECT pg_catalog.setval('public.event_pref_id_seq', 1, false);


--
-- Name: likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: c4q
--

SELECT pg_catalog.setval('public.likes_id_seq', 1, false);


--
-- Name: matches_id_seq; Type: SEQUENCE SET; Schema: public; Owner: c4q
--

SELECT pg_catalog.setval('public.matches_id_seq', 1, false);


--
-- Name: message_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: c4q
--

SELECT pg_catalog.setval('public.message_log_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: c4q
--

SELECT pg_catalog.setval('public.users_id_seq', 25, true);


--
-- Name: event_pref event_pref_pkey; Type: CONSTRAINT; Schema: public; Owner: c4q
--

ALTER TABLE ONLY public.event_pref
    ADD CONSTRAINT event_pref_pkey PRIMARY KEY (id);


--
-- Name: likes likes_pkey; Type: CONSTRAINT; Schema: public; Owner: c4q
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (id);


--
-- Name: matches matches_pkey; Type: CONSTRAINT; Schema: public; Owner: c4q
--

ALTER TABLE ONLY public.matches
    ADD CONSTRAINT matches_pkey PRIMARY KEY (id);


--
-- Name: message_log message_log_pkey; Type: CONSTRAINT; Schema: public; Owner: c4q
--

ALTER TABLE ONLY public.message_log
    ADD CONSTRAINT message_log_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: c4q
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: c4q
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- PostgreSQL database dump complete
--

\connect userlist

SET default_transaction_read_only = off;

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

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: users; Type: TABLE; Schema: public; Owner: c4q
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying,
    password_digest character varying
);


ALTER TABLE public.users OWNER TO c4q;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: c4q
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO c4q;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: c4q
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: c4q
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: c4q
--

COPY public.users (id, username, password_digest) FROM stdin;
1	hello	$2a$10$gbgMtHXDW68ki1D5zCHP0eplXNmo8LHoByIgdKekwP8VSQ2KJf.vy
3	hello2	$2a$10$DhwXAnlkVw1U5DqbUDpaneK2XM0yOKM7FHrK4Q.zd1gHNbSc5y5ty
4	asiya	$2a$10$9dH0oof1djPmj3UfyuuvR.43jOyjUKu0DzcQOxPXKgKU2/P1BWNhW
8	hello3	$2a$10$SHbZMlhqpMyKVGYnrgOaSuesVQWN1oBbCW9EdVhm0WgpWEal1ZHa6
9	yo3	$2a$10$aU022r/N6vN1mJ6SDZ2yietQXw8TaEunhQKZdX0T2g./lWbiIHheq
10	workingonit	$2a$10$KzF.nb8iWbU4K7r5VQUzJ.XyE.QLWTBW6SaBLV9IkGMbhHVF6KxfW
13	hello4	$2a$10$z0CubIrYoxFDufEbQrv4judcnyf93QK8X77KYEETcPb5sswJazB3.
15	1234567	$2a$10$95dYxLcS1ha30ZXmLJH4E.KdyOs.nqVd9.bdzF9WKNTvtucXnfJ6.
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: c4q
--

SELECT pg_catalog.setval('public.users_id_seq', 15, true);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: c4q
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: c4q
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

