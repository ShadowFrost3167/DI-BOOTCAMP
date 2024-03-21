--For this exercise, you will have to find some requests on your own!
-- Create a database called bootcamp.
-- CREATE DATABASE bootcamp;

-- Create a table called students.
-- Add the following columns:
-- id
-- last_name
-- first_name
-- birth_date
-- The id must be auto_incremented.
-- Make sure to choose the correct data type for each column.
-- To help, here is the data that you will have to insert. (How do we insert a date to a table?)
-- CREATE TABLE students(
-- 	id SERIAL PRIMARY KEY,
-- 	last_name VARCHAR,
-- 	first_name VARCHAR,
-- 	birth_date DATE);

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES
-- 	('Mark', 'Benichou', '02/11/1998'),
-- 	('Yoan','Cohen','03/12/2010'),
-- 	('Lea','Benichou', '07/27/2010'),
-- 	('Amelia','Dux','07/04/1996'),
-- 	('David','Grez','06/14/2003'),
-- 	('Omer','Simpson','03/10/1980');

-- Here is the data:

-- id	first_name	last_name	birth_date
-- 1	Marc	Benichou	02/11/1998
-- 2	Yoan	Cohen	03/12/2010
-- 3	Lea	Benichou	27/07/1987
-- 4	Amelia	Dux	07/04/1996
-- 5	David	Grez	14/06/2003
-- 6	Omer	Simpson	03/10/1980


-- Insert
-- Insert the data seen above to the students table. Find the most efficient way to insert the data.
-- Insert your last_name, first_name and birth_date to the students table (Take a look at the id given).
-- INSERT INTO students(last_name, first_name, birth_date)
-- VALUES('Cane', 'Ariel', '09/29/1994')


-- Select
-- Fetch all of the data from the table.
-- SELECT * FROM students;

-- Fetch all of the students first_names and last_names.
-- SELECT first_name, last_name FROM students;

-- For the following questions, only fetch the first_names and last_names of the students.
-- Fetch the student which id is equal to 2.
-- SELECT * FROM students WHERE id = 2;

-- Fetch the student whose last_name is Benichou AND first_name is Marc.
-- SELECT * FROM students WHERE last_name = 'Benichou' AND first_name = 'Mark';

-- Fetch the students whose last_names are Benichou OR first_names are Marc.
-- SELECT * FROM students WHERE last_name = 'Benichou' OR first_name = 'Mark';

-- Fetch the students whose first_names contain the letter a.
-- SELECT * FROM students WHERE first_name LIKE '%a%';

-- Fetch the students whose first_names start with the letter a.
-- SELECT * FROM students WHERE first_name LIKE 'A%';

-- Fetch the students whose first_names end with the letter a.
-- SELECT * FROM students WHERE first_name LIKE '%a';

-- Fetch the students whose second to last letter of their first_names are a (Example: Leah).
-- SELECT * FROM students WHERE first_name LIKE '%a_';

-- Fetch the students whose id’s are equal to 1 AND 3 .
-- SELECT * FROM students WHERE id = 1;
-- SELECT * FROM students WHERE id = 3;

-- Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).

-- SELECT * FROM students WHERE birth_date > CAST('01/01/2000' AS TIMESTAMP);