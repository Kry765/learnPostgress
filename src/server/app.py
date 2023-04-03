# from flask import Flask

# app = Flask(__name__)

# @app.route("/")
# def hello_world():
#     return "Hello, World!"

from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
 
app = Flask(__name__)
                                                            #password:admin
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:zaq1@WSX@localhost/Training'
 
db=SQLAlchemy(app)
 
class Student(db.Model):
  __tablename__='users'
  id=db.Column(db.Integer,primary_key=True)
  email=db.Column(db.String(40))
  password=db.Column(db.String(40))
 
  def __init__(self,email,password):
    self.email=email
    self.password=password
 
# @app.route('/')
 
@app.route('/submit', methods=['POST'])
def submit():
  email= request.form['email']
  password=request.form['password']
 
  user=user(email,password)
  db.session.add(user)
  db.session.commit()
 
  studentResult=db.session.query(user).filter(user.id==1)
  for result in studentResult:
    print(result.email)
 
 
if __name__ == "__main__":
    app.run(debug=True, use_reloader=False, host="192.168.33.185")