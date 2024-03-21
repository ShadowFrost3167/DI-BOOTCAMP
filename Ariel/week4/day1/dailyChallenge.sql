-- In this exercise we will be using the actors table from todays lesson.
-- 1. Count how many actors are in the table.

-- SELECT COUNT(*) FROM actors;


-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?

-- SELECT * FROM actors;
-- INSERT INTO actors (first_name, last_name)
-- VALUES('Joe','Schmoe');
--i think when i execute i'll get an error since there are values that are expected in the table since i wrote notnull as a pre-requisite


--below is the error i recieved
--ERROR:  Failing row contains (11, Joe, Schmoe, null, null).null value in column "birthdate" of relation "actors" violates not-null constraint 

-- ERROR:  null value in column "birthdate" of relation "actors" violates not-null constraint
-- SQL state: 23502
-- Detail: Failing row contains (11, Joe, Schmoe, null, null).

