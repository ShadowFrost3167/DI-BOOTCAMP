

-- 🌟 Exercise 1: DVD Rental
-- Instructions
-- Get a list of all the languages, from the language table.
-- SELECT * FROM public.language
-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.

-- SELECT 
-- 	film.title AS title,
-- 	film.description AS description,
-- 	language.name AS language_name
-- FROM film

-- -- JOIN
-- -- 	language ON film.language_id = language.language_id;



-- Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.

-- SELECT 
-- 	film.title AS title,
-- 	film.description AS description,
-- 	language.name AS language_name
-- FROM language
-- LEFT JOIN film ON language.language_id = film.language_id;



-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.

--  CREATE TABLE new_film (
-- 	 id  SERIAL PRIMARY KEY,
-- 	 name VARCHAR NOT NULL
	 
--  );
-- INSERT INTO new_film (name) VALUES ('Harry Potter and the Prisoner of Azkaban')

-- INSERT INTO new_film (name) VALUES 
-- 	('Duck Soup'),
-- 	('Dr. Strangelove or How I Learned to Be Ok with the Bomb')



-- Create a new table called customer_review, which will contain film reviews that customers will make.

-- CREATE TABLE customer_review (
-- 	reviews VARCHAR(250),
-- 	film_id INT NOT NULL
-- );



-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.

-- ALTER TABLE customer_review 
-- ADD CONSTRAINT link_film_id
-- FOREIGN KEY (film_id) REFERENCES film(film_id)
-- ON DELETE CASCADE



-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.

-- ALTER TABLE customer_review
-- 	ADD COLUMN review_id SERIAL,
-- 	ADD COLUMN language_id int,
-- 	ADD CONSTRAINT link_language_id FOREIGN KEY (language_id ) REFERENCES  language(language_id),
-- 	ADD COLUMN title VARCHAR,
-- 	ADD COLUMN score INT,
-- 	ADD COLUMN review_text TEXT,
-- 	ADD COLUMN last_update TIMESTAMP DEFAULT current_timestamp;
	
			

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

--  INSERT INTO customer_review( title, score, review_text) 
-- 	VALUES 
-- 	('Grave of the Fireflies', 5, 'Truly a heartbreaking but touching film, very well thought out!', (SELECT actor_id FROM actor WHERE first_name = Penelope )),
-- 	('Spirited Away', 5, 'Great cozy watch on a Saturday night! definitely dont watch if youre hungry tho!!');


--checking to see if customer reviews film id is being inputed as SERIAL 

-- SELECT column_name, data_type
-- FROM information_schema.columns
-- WHERE table_name = 'customer_review' AND column_name = 'film_id';

--verify if sequence associated with film_id column w/in ustomer_reviews
-- SELECT sequence_name
-- FROM information_schema.sequences
-- WHERE sequence_name = 'customer_review_film_id_seq';


--delete the og film_id column was taking inputs as integers instead of SERIALS
-- CREATE SEQUENCE IF NOT EXISTS customer_review_film_id_seq;
-- ALTER TABLE customer_review DROP COLUMN IF EXISTS film_id;
-- ALTER TABLE customer_review ADD COLUMN film_id SERIAL PRIMARY KEY;

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?

-- DELETE FROM new_film WHERE (name = 'Duck Soup')
-- SELECT * FROM new_film
--it deleted that row, but the id's stayed the same
-- 🌟 Exercise 2 : DVD Rental
-- Instructions

-- Use UPDATE to change the language of some films. Make sure that you use valid languages.

-- UPDATE film 
-- SET language_id = 2
-- WHERE language_id = 1;



-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- customer_id, store_id, last_update, address_id, store_id, it makes it more efficient to input data rather than constantly inserting new information. it links it up so there's little redundancy and it also keeps things constant so you don't have 2 inputs by accident for the same cell




-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?

-- DROP TABLE IF EXISTS customer_review; i didn't need to do extra checking. 




-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
-- ALTER TABLE rental ADD COLUMN status VARCHAR;

-- UPDATE rental SET status = 
-- 						CASE
-- 							WHEN return_date IS NULL THEN 'Has not been returned'
-- ELSE 'Already Returned'
-- END;
-- SELECT COUNT(inventory_id) AS row_count FROM rental WHERE status = 'Has not been returned'
--there are 183 films not returned




-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)

-- SELECT film.title, film.replacement_cost FROM film JOIN inventory ON film.film_id = inventory.film_id LEFT JOIN rental ON inventory.inventory_id = rental.inventory_id
-- WHERE rental.rental_id IS NOT NULL AND rental.return_date IS NULL
-- 	ORDER BY film.replacement_cost DESC
-- LIMIT 30;



-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies,
--but he can’t remember their names. Can you help him find which movies he wants to rent?


-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

-- SELECT * FROM film WHERE description LIKE '%sumo%' couldn't find anything for that idk why. but my brain is melting on this. 
-- SELECT film.*
-- FROM film
-- JOIN film_actor ON film.film_id = film_actor.film_id
-- WHERE film.description LIKE '%sumo%';


-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental,
--and he returned it between the 28th of July and the 1st of August, 2005.
-- SELECT *
-- FROM film
-- WHERE rental_rate > 4 AND rental_duration = 4;
