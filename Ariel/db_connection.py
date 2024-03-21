import psycopg2
import config


try: 
    conn = psycopg2.connect(
        dbname = config.DATABASE,
        user = config.USERNAME,
        password = config.PASSWORD,
        host = config.HOSTNAME,
        port = config.PORT,
    )

    cursor = conn.cursor()

    query = '''INSERT INTO new_actors(first_name, last_name, age, number_oscars)
    VALUES ('Hugh','Laurie', '1959/06/11', 3)'''

    cursor.execute(query)
    conn.commit()
    # cursor.execute(SELECT * FROM new_actors)

    cursor.execute('SELECT * FROM actors')


    #fetchall() gives all data

    #fetchone() shows connection commonly

    print(cursor.fetchall())

    #optomize visual presentation
    all_rows = cursor.fetchall
    for row in all_rows:
        print(row)

except psycopg2.rror as e:
    print("error connecting", e)

finally:
    if conn:
        cursor.close()
        conn.close()

cursor.execute("CREATE TABLE movies")
#exercise
        
    #select all the movies table all the Steven Spielberg movies
    #insert new actors into actors2
    #create a table named movie_reviews insert 3 reviews
    
    cursor.execute("SELECT * FROM movies WHERE director= 'Steven Spielberg'")

    new_actors = [
        ('Daniel Radcliffe', 28, 'Male')
        ('Jeremy Kyle', 42, 'male')
        ('Bill Nye', 60, 'male')
    ]
    for actor in new_actors:
        cursor.execute('INSERT INTO  actors2 (user_name, age, gender) VALUES('jeff dunham', 20, 'male')')
        config.commit()
        cursor.execute('INSERT INTO actors2 (user_name, age, gender) VALUES('Danny devito', 88, 'male')')
        config.comit()


    movie_reviews = [
        ('Austin Powers', 'this is the funniest movie ever!')
    ]
cursor.execute("CREATE TABLE movie_reviews")
cursor.execute("INSERT INTO movie_reviews (movie_title, review) VALUES('Sorcerers Ston', 'This is so magical!') VALUES('Inception', 'scary but great!') VALUES ('Get Out', 'Amazing') VALUES('like mike', 'great kid baller movie')")
            
    