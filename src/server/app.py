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
def add_user():
    data = request.get_json()
    query = "INSERT INTO users (email, pwd) VALUES (%s, %s);"
    cur.execute(query, (data['email'], data['pwd']))
    conn.commit()
    cur.close()
    return jsonify({'status': 'success'})




@app.route('/login', methods=["POST"])
def login_user():
    data = request.get_json()
    query = "SELECT * FROM users WHERE email = %s AND pwd = %s;"
    cur.execute(query, (data['email'], data['pwd']))
    users = cur.fetchone()
    conn.commit()
    

    if users is not None:
        # Jeśli użytkownik istnieje, zwróć status 200
        return jsonify({'status': 200})
    else:
        # Jeśli użytkownik nie istnieje, zwróć status 401
        return jsonify({'status': 401})


if __name__ == '__main__':
    app.run(debug=True)


    #SELECT * FROM users;

    #DELETE FROM users;