import sqlite3
from flask import Flask, g
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

DATABASE = './CA_COVID_data.sqlite'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.route('/')
def index():
    cur = get_db().cursor()

    cur.execute('SELECT * FROM vaccine_by_county;')
    data = cur.fetchall()

    return data

# @app.teardown_appcontext
# def close_connection(exception):
#     db = getattr(g, '_database', None)
#     if db is not None:
#         db.close()