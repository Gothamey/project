DROP DATABASE IF EXISTS movies_casts;
CREATE DATABASE  movies_casts;
\c movies_casts


CREATE TABLE movies(
    id serial primary key,
    img_url varchar,
    name varchar,
    story varchar
);

CREATE TABLE casts (
    id serial primary key,
    image varchar,
    name varchar,
    story varchar,
    movie_id int not null,
    FOREIGN key(movie_id) REFERENCES movies
);

INSERT INTO movies
(img_url, name, story)
VALUES
('https://static.tvtropes.org/pmwiki/pub/images/the_avengers_7.jpg', 'The Avengers (2012)', 'short stroy here'),
('http://img.over-blog-kiwi.com/1/36/64/60/20150323/ob_23a5c4_illuminatiwatcherdotcom-interstellar-m.jpg', 'Interstellar (2014)', 'short stroy here'),
('https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg', 'Blade Runner 2049', 'short stroy here');

INSERT INTO  casts 
(image, name, story, movie_id)
VALUES
('https://www.kstarcountry.com/website/wp-content/uploads/2017/02/Scarlett-Johansson.jpg','Scarlett Johansson','short stroy here', 1),
('https://timedotcom.files.wordpress.com/2016/12/matthew-mcconaughey.jpg','Matthew McConaughey','short story here', 2),
('https://tce-live2.s3.amazonaws.com/media/media/f2635e78-87a3-4635-bc6b-2fa67f2b5521.jpg','Ryan Gosling','short story here', 3);



