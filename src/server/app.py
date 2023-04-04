from flask import Flask, request
import psycopg2

app = Flask(__name__)

conn = psycopg2.connect(
    host="localhost",
    database="SQLSchool",
    user="postgres",
    password="zaq1@WSX",
    port='5432'
)

cur = conn.cursor()

@app.route('/users', methods=['POST'])
def add_user():
    cur.execute("INSERT INTO users (email, pwd) VALUES ('%s', %s)")
    conn.commit()
    return 'Done.'

#DOWNLOAD DATA @app.get('/')
# def get_user():
#     cur.execute("SELECT * FROM users")
#     rows = cur.fetchall()
#     return str(rows)

if __name__ == '__main__':
    app.run()
