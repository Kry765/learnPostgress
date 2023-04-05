from flask import Flask, request, jsonify
import psycopg2
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
conn = psycopg2.connect(
    host="localhost",
    database="SQLSchool",
    user="postgres",
    password="zaq1@WSX",
    port='5432'
)

cur = conn.cursor()

@app.route('/users', methods=['POST'])
# @cross_origin()

def add_user():
    
    data = request.get_json()

    query = "INSERT INTO users (email, pwd) VALUES (%s, %s);"

    cur = conn.cursor()
    cur.execute(query, (data['email'], data['pwd']))
    conn.commit()
    cur.close()
    return jsonify({'status': 'success'})

if __name__ == '__main__':
    app.run()


    #SELECT * FROM users;

    #DELETE FROM users;