CREATE TABLE users_pl(
id SERIAL PRIMARY KEY,
username varchar(30) UNIQUE,
hash text NOT NULL,
profile_pic text,
email text NOT NULL UNIQUE
)

CREATE TABLE plants_pl(
id SERIAL PRIMARY KEY,
plant varchar(70) NOT NULL,
plant_category_id int NOT NULL REFERENCES category_pl(category_id),
user_id INT REFERENCES users_pl(id),
plant_image text,
plant_comment varchar(1000)
)

CREATE TABLE category_pl(
category_id SERIAL PRIMARY KEY,
category varchar(80) NOT NULL,
user_id int REFERENCES users_pl(id),
category_image text
)


CREATE TABLE category_second_pl(
category_id SERIAL PRIMARY KEY,
category varchar(80) NOT NULL,
user_id int REFERENCES users_pl(id),
category_one_id int REFERENCES category_pl(category_id),
category_image text
)