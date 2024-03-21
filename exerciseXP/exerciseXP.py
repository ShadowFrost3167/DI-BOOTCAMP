import json
import os
import psycopg2
import config

# Create a database called public.
# Add two tables:
# items
# customers.

conn = psycopg2.connect(
    dbname = "public",
    user="name",
    password= "123456",
    host= "localhost",
    port = "5432",
)

cursor = conn.cursor()



create_table= '''
CREATE TABLE item (
index PRIMARY KEY,
item VARCHAR(30),
price INTEGER
 )
'''
cursor.execute(create_table)

# create_table_customer = '''
# CREATE TABLE customers (
# index PRIMARY KEY,
# firstName TEXT,
# lastName TEXT
# )'''

# Add 5 new customers to the customers table:
# 1 - Greg - Jones
# 2 - Sandra - Jones
# 3 - Scott - Scott
# 4 - Trevor - Green
# 5 - Melanie - Johnson
cursor.execute(create_table_customer)


customers = [
    (1, 'Greg', 'Jones'),
    (2, 'Sandra', 'Jones'),
    (3, 'Scott', 'Scott'),
    (4, 'Trevor', 'Green'),
    (5, 'Melanie', 'Johnson')
]

cursor.executemany('INSERT INTO customers(index, firstName, lastName) VALUES(%s, %s, %s, %s, %s)', customers)


# Add the following items to the items table:
# 1 - Small Desk – 100 (ie. price)
# 2 - Large desk – 300
# 3 - Fan – 80
cursor.execute('''INSERT INTO item (index, item, price) VALUES(1, 'Small Desk', 100)''')
cursor.execute('''INSERT INTO item (index, item, price) VALUES(2, 'Large Desk', 300)''')
cursor.execute('''INSERT INTO item (index, item, price) VALUES(3, 'Fan', 80)''')



cursor.execute(query)
conn.commit()


# Use SQL to fetch the following data from the database:
# All the items.
cursor.execute('SELECT * FROM items')
# All the items with a price above 80 (80 not included).
cursor.execute('SELECT * FROM items WHERE price >80')
# All the items with a price below 300. (300 included)
cursor.execute('SELECT * FROM items <300')
# All customers whose last name is ‘Smith’ (What will be your outcome?).
cursor.execute('''SELECT * FROM customers WHERE lastName IS 'smith''')
# All customers whose last name is ‘Jones’.
cursor.execute('''SELECT * FROM cutomers WHERE lastName IS 'Jones''')
# All customers whose firstname is not ‘Scott’.
cursor.execute('''SELECT * FROM customers WHERE firstName IS NOT 'Scott''')