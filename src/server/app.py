from flask import Flask, request
import psycopg2
import jsonify
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


conn = psycopg2.connect(
    host="localhost",
    database="SQLSchool",
    user="postgres",
    password="zaq1@WSX",

)

@app.route('/users', methods=['POST'])
@cross_origin()
def add_user():
    email = request.json['email']
    pwd = request.json['pwd']
    try:
        cur = conn.cursor()
        cur.execute("INSERT INTO users ( email, pwd) VALUES (%s, %s)", ( email, pwd))
        conn.commit()
        cur.close()
        return jsonify({'message': 'User added successfully!'})
    except Exception as e:
        return jsonify({'error': str(e)})
    
if __name__ == '__main__':
    app.run(debug=True)