-- CREATE TABLE FirstTab (
-- 	id integer,
-- 	name VARCHAR(10)
-- )


-- INSERT INTO FirstTab VALUES
-- (5, 'Pawan'),
-- (6, 'Sharlee'),
-- (7, 'Krish'),
-- (NULL, 'Avtaar');

-- SELECT * FROM FirstTab

-- CREATE TABLE SecondTab(
-- 	id integer
-- )

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL);

-- SELECT * FROM SecondTab

-- Questions
-- Q1. What will be the OUTPUT of the following statement?
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
-- I think it will count the rows from FirstTab's table that are not in SecondTab.
--returns 0 because it's reading from null?

-- Q2. What will be the OUTPUT of the following statement?

-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
-- I think it will count all rows from FirstTabs table that aren't =5 in the SecondTab
--gives a return of 2? 
-- Q3. What will be the OUTPUT of the following statement?

    -- SELECT COUNT(*) 
    -- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
-- count rows from FirstTab table that are not also in SecondTab.
--returns nothing but 0. maybe because of NOT IN?
-- Q4. What will be the OUTPUT of the following statement?

    -- SELECT COUNT(*) 
    -- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

-- count rows from FirstTab table that are all with valid ID's in SecondTab's corresponding id column. 
--returns 2, the only other value in SecondTab other than NULL is 5, the 5 corresponds to Pawans ID. 